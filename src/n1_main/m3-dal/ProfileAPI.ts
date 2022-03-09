import axios from "axios";
import {BASE_IMG_URL} from "../m1-ui/common/Profile";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
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