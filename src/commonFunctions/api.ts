import { FetchRequest, IApiRequest } from '../types/api'

import axios, { AxiosRequestConfig } from 'axios'

function convertToDataParams(dataPre: unknown): string {
    const data = dataPre as Record<string, unknown>
    const params = new URLSearchParams()
    Object.keys(data).forEach((key) => {
        const value = data[key]
        if (value) {
            params.append(key, value.toString())
        }
    })
    return params.toString()
}

function generateAxiosRequest<S, R>(
    request: IApiRequest<S, R>
): AxiosRequestConfig {
    const { url, method, data } = request
    const body = data ? convertToDataParams(data) : undefined
    let axiosReq: AxiosRequestConfig = {
        url: url,
        method: method || 'GET',
        data: body,
        ...request.config,
    }

    if (request.data) {
        axiosReq.url += `?${convertToDataParams(request.data)}`
    }
    return axiosReq
}

function concreteRequest<S, R>(request: FetchRequest<S, R>): IApiRequest<S, R> {
    if (typeof request === 'string') {
        return {
            url: request,
        }
    }
    return request as IApiRequest<S, R>
}

export function hitApi<S, R = string>(request: FetchRequest<S, R>): Promise<S> {
    let concreteReq = concreteRequest(request)
    return new Promise(async (resolve, reject) => {
        // do stuff
        let axiosRequest = generateAxiosRequest(concreteReq)

        const callback: Function =
            concreteReq.callback || ((result: unknown) => result as S)

        await axios(axiosRequest)
            .then((response) => {
                if (callback) {
                    const callbackRes = callback(response.data)
                    if (callbackRes) {
                        response.data = callbackRes
                    }
                }

                resolve(response.data)
            })
            .catch((err: Error) => {
                reject(err)
            })
    })
}
