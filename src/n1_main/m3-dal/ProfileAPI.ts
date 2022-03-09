import axios, {AxiosResponse} from "axios";
import {BASE_IMG_URL} from "../m1-ui/common/Profile";
import {UserDataType} from "../m2-bll/r2-actions/ActionLoginForm";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const profileAPI = {
    async changeUserName(newName: string) {
        return await instance.put<ProfileRespType,
            AxiosResponse<ProfileRespType>>(`/auth/me`, {
            name: newName,
            avatar: BASE_IMG_URL // url or base64
        })
    }
}

export type ProfileRespType = {
    updatedUser: UserDataType
    token: string
    tokenDeathTime: number
}