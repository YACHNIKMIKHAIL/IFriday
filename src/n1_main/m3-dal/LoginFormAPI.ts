import {AxiosResponse} from "axios";
import {UserDataType} from "../m2-bll/r2-actions/ActionLoginForm";
import {instance} from "./instance";

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