import {AxiosResponse} from "axios";
import {InitialCardPacksType, PackType} from "../m2-bll/r1-reducers/packsReducer";
import {instance} from "./instance";

export const packsAPI = {
    async setPacks(packName: string, min: number, max: number, updated: UpdatedType, page: number, pageCount: number, user_id: string | null) {
        return await instance.get<InitialCardPacksType,
            AxiosResponse<InitialCardPacksType>, {
            packName: string, min: number, max: number, updated: UpdatedType, page: number, pageCount: number, user_id: string
        }>
        (`/cards/pack`, {params: {packName, min, max, sortPacks:updated, page, pageCount, user_id}})
    },
    async addNewPack(newPack: newPackType) {
        return await instance.post<PackType,
            AxiosResponse<PackType>, { cardsPack: newPackType }>
        (`/cards/pack`, {cardsPack: newPack})
    },
    async deletePack(packId: string) {
        return await instance.delete<PackType,
            AxiosResponse<PackType>>
        (`/cards/pack?id=${packId}`)
    },
    async changePack(newName: string, id: string) {
        const updatedPack: UpdatedPackType = {
            _id: id,
            name: newName,
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
    name: string
    deckCover: string
    private: boolean
}
export type UpdatedPackType = {
    _id: string
    name: string
}