import {
    ApiActionType,
    ApiResultState,
    FetchRequest,
    IApiAction,
    IApiState,
} from '../types/api'
import {
    useState,
    useRef,
    useReducer,
    Reducer,
    useEffect,
    useCallback,
} from 'react'
import { hitApi } from '../commonFunctions/api'

// state management
function dataFetchReducer<T>(state: IApiState<T>, action: IApiAction<T>) {
    switch (action.type) {
        case ApiActionType.FetchStarted:
            // cancel any previous requests if new request is made
            break
        case ApiActionType.FetchSuccess:
            // set data and result
            return {
                ...state,
                isLoading: false,
                result: ApiResultState.Success,
                data: action.payload,
            }
        case ApiActionType.FetchError:
            // set error and result
            let resultState = ApiResultState.Error
            if (action.payload) {
                const p = action.payload as any
                if (p.response?.status === 401) {
                    resultState = ApiResultState.Unauthorised
                } else if (p.response?.status === 403) {
                    resultState = ApiResultState.Forbidden
                } else if (p.response?.status === 404) {
                    resultState = ApiResultState.NotFound
                } else if (p.response?.status === 409) {
                    resultState = ApiResultState.Conflict
                } else if (p.response?.status === 422) {
                    resultState = ApiResultState.ValidationFailed
                } else if (p.response?.status === 500) {
                    resultState = ApiResultState.Internal
                }
            }
            return {
                ...state,
                isLoading: false,
                result: resultState,
                data: action.payload,
            }
        default:
            return state
    }
}

/*
Typing;
    S = State
    R = Request
*/

export function useApi<S, R = string>(
    initRequest?: FetchRequest<S, R>,
    initData?: S
): [
    // request state
    IApiState<S>,
    // request
    (request: FetchRequest<S, R> | null | string) => void

    // () => void
] {
    // keep track of current request
    const [request, setRequest] = useState<FetchRequest<S, R>>(initRequest)
    // keep track of last request
    const prevRequest = useRef<FetchRequest<S, R>>()

    /*
    It creates a state object that holds the data and the loading state.
    */
    const [state, dispatch] = useReducer<Reducer<IApiState<S>, IApiAction<S>>>(
        dataFetchReducer as Reducer<IApiState<S>, IApiAction<S>>,
        {
            isLoading: false,
            result: undefined,
            data: initData as S,
        } as IApiState<S>
    )

    // used to throttle requests
    const lastCall = useRef<number>(0)

    const fetchData = useCallback(async (request: FetchRequest<S, R>) => {
        lastCall.current = Date.now()
        dispatch({ type: ApiActionType.FetchStarted } as IApiAction<S>)

        hitApi(request)
            .then((data) => {
                if (lastCall.current < Date.now() - 1000) {
                    dispatch({
                        type: ApiActionType.FetchSuccess,
                        payload: data,
                    })
                }
            })
            .catch((error) => {
                dispatch({ type: ApiActionType.FetchError, payload: error })
            })
    }, [])

    useEffect(() => {
        // if (!request && !!prevRequest.current) {
        //     // recall previous if no
        // }

        if (request) {
            // check if request equels previous request
            if (request !== prevRequest.current) {
                // set previous request
                prevRequest.current = request
                // fetch data
                fetchData(request)
            } else {
                // do nothing if request is the same as previous request
                return
            }
        } else {
            // do nothing if request is undefined
        }
    }, [fetchData, request])

    return [
        state,
        setRequest as (request: FetchRequest<S, R> | null | string) => void,
    ]
}
