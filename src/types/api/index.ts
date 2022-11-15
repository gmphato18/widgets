// 49.4k, gzipped 17.6k
import axios, { AxiosRequestConfig } from 'axios'

export type Method =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'

// API Result e.g 401  = Unauthorized, uses payload.response.status
export enum ApiResultState {
    Success = 0,
    Error = 1,
    Forbidden = 2,
    Unauthorised = 3,
    NotFound = 4,
    ValidationFailed = 5,
    Conflict = 6,
    Internal = 7,
}

export interface IApiState<T> {
    isLoading: boolean
    result?: ApiResultState | undefined
    data: T
}

// API Action
export enum ApiActionType {
    FetchError,
    FetchStarted,
    FetchSuccess,
}

export interface IApiAction<T> {
    type: ApiActionType
    payload: T
}

// API Request
export interface IApiRequest<S, T> {
    url: string
    method?: Method
    data?: T
    config?: AxiosRequestConfig
    callback?: (result: unknown) => S
}

export type FetchRequest<S, T> = IApiRequest<S, T> | undefined | string
