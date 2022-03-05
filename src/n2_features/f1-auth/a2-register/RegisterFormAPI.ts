import axios, {AxiosResponse} from "axios";
import {registerStateType} from "./RegisterFormReducer";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const registerFormAPI = {
    async registerMe(body: { email: string, password: string }) {
        debugger
        return await instance.post<registerStateType,
            AxiosResponse<registerStateType>, { email: string, password: string }>(`/auth/register`, body)
    }
}
