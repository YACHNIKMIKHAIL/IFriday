import axios, {AxiosResponse} from "axios";
import {UserDataType} from "./LoginFormReducer";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const loginFormAPI = {
    async loginMe(body: loginType) {
        return await instance.post<UserDataType, AxiosResponse<UserDataType>>(`/auth/login`, body)
    },
}

export type loginType = {
    email: string
    password: string
    rememberMe: boolean
}