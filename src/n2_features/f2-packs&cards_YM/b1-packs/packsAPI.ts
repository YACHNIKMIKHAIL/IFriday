import axios, {AxiosResponse} from "axios";
import {InitialCardPacksType, PacksType} from "./packsReducer";

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const pasksAPI = {
    async setPacks(packName: string, min: number, max: number, updated: UpdatedType, page: number, pageCount: number, user_id: string | null) {
        return await instance.get<InitialCardPacksType,
            AxiosResponse<InitialCardPacksType>, {
            packName: string, min: number, max: number, updated: UpdatedType, page: number, pageCount: number, user_id: string
        }>
        (`/cards/pack`, {params: {packName, min, max, updated, page, pageCount, user_id}})
    },
    async addNewPack(newPack: newPackType) {
        return await instance.post<PacksType,
            AxiosResponse<PacksType>, { cardsPack: newPackType }>
        (`/cards/pack`, {cardsPack: newPack})
    },
    async deletePack(packId: string) {
        return await instance.delete<PacksType,
            AxiosResponse<PacksType>>
        (`/cards/pack?id=${packId}`)
    },
    async changePack(newName: string, id: string) {
        const updatedPack: UpdatedPackType = {
            _id: id,
            name: newName
        }
        return await instance.put <UpdatedPackType,
            AxiosResponse<UpdatedPackType>, {
            cardsPack: UpdatedPackType
        }>
        (`/cards/pack`, {cardsPack: updatedPack})
    }
}
export type UpdatedType = '0updated' | '1updated'
export type newPackType = {
    name: string,
    deckCover: string,
    private: boolean
}
export type UpdatedPackType = {
    _id: string,
    name: string
}