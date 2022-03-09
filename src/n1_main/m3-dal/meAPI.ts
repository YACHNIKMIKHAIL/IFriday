import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const meAPI = {
    async me() {
        return await instance.post<meRespType,
            AxiosResponse<meRespType>, {}>(`auth/me`, {})
    }
}
export type meRespType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
    token:string
}

