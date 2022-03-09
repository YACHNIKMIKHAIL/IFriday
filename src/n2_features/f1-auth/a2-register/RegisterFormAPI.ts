import axios, {AxiosResponse} from "axios";
import {registerStateType} from "../../../n1_main/m2-bll/r1-reducers/RegisterAndRecoveryPassReducer";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const registerFormAPI = {
    async registerMe(body: { email: string, password: string }) {
        return await instance.post<registerStateType,
            AxiosResponse<registerStateType>, { email: string, password: string }>(`/auth/register`, body)
    }
}
