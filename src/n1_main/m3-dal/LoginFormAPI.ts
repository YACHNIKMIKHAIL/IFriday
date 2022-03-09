import axios, {AxiosResponse} from "axios";
import {UserDataType} from "../m2-bll/r1-reducers/LoginFormReducer";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const loginFormAPI = {
    async loginMe(body: loginType) {
        return await instance.post<UserDataType, AxiosResponse<UserDataType>>(`/auth/login`, body)
    },
    async logoutMe() {
        return await instance.delete(`/auth/me`, {})
    },
}

export type loginType = {
    email: string
    password: string
    rememberMe: boolean
}