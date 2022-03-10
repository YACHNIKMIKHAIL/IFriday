import axios, {AxiosResponse} from "axios";
import {UserDataType} from "../m2-bll/r2-actions/ActionLoginForm";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const profileAPI = {
    async changeUserName(updateBody: UpdateUser) {
        debugger
        return await instance.put<ProfileRespType,
            AxiosResponse<ProfileRespType>>(`/auth/me`,
            // {name: newName,
            // avatar: BASE_IMG_URL*/ // url or base64}
            /*updateBody*/
        )
    }
}

export type UpdateUser={
    name: string,
    avatar: string
}
export type ProfileRespType = {
    updatedUser: UserDataType
    error?: string
    /*token: string
    tokenDeathTime: number*/
}