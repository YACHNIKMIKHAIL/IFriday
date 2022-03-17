import {AxiosResponse} from "axios";
import {UserDataType} from "../m2-bll/r2-actions/ActionLoginForm";
import {instance} from "../../n2_features/instance";

export const profileAPI = {
    async changeUserName(updateBody: UpdateUser) {
        return await instance.put<ProfileRespType,
            AxiosResponse<ProfileRespType>>(`/auth/me`, updateBody)
    }
}

export type UpdateUser = {
    name: string,
    avatar: string
}
export type ProfileRespType = {
    updatedUser: UserDataType
    error?: string
}