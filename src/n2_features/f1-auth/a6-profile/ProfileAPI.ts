import axios from "axios";
import {BASE_IMG_URL} from "../../../n1_main/m1-ui/common/Profile";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const profileAPI = {
    async changeUserName(newName: string) {
        return await instance.put(`/auth/me`, {
            name: newName,
            avatar: BASE_IMG_URL // url or base64
        })
    }
}