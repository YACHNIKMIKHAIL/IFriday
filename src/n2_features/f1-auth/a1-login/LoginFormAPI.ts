import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const loginFormAPI = {
    async loginMe(body: { email: string, password: string, rememberMe: boolean }) {
        return await instance.post<any,
            AxiosResponse<any>, { email: string, password: string,  rememberMe: boolean  }>(`/auth/login`, body)
    }
}
