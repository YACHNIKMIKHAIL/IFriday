import axios, {AxiosResponse} from "axios";
import {meRespType} from "../../../n1_main/m3-dal/meAPI";
import {InitialCardPacksType} from "./packsReducer";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const pasksAPI = {
    async setPacks(packName: string, min: number, max: number, updated: UpdatedType, pageCount: number, user_id: string) {
        return await instance.get<InitialCardPacksType,
            AxiosResponse<InitialCardPacksType>>
        (`/cards/pack?packName=${packName}&min=${min}&max=${max}&sortPacks=${updated}&page=&{page}&pageCount=${pageCount}&user_id=${user_id}`)
    }
}
export type UpdatedType = '0updated' | '1updated'
