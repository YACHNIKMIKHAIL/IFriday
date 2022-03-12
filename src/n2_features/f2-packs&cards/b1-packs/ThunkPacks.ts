import {setAppStatusAC} from "../../../n1_main/m2-bll/r1-reducers/app-reducer";
import {newPackType, pasksAPI} from "./packsAPI";
import {FridayThunkType, store} from "../../../n1_main/m2-bll/store";
import {Dispatch} from "redux";
import {packsActions} from "./ActionsPacks";

export const packsTC = () => async (dispatch: Dispatch) => {
    const packName = store.getState().packs.packName
    const min = store.getState().packs.minCardsCount
    const max = store.getState().packs.maxCardsCount
    const updated = store.getState().packs.updated
    const pageCount = store.getState().packs.pageCount
    const user_id = store.getState().packs.user_id

    dispatch(setAppStatusAC("loading"))
    try {
        let res = await pasksAPI.setPacks(packName, min, max, updated, pageCount, user_id)
        dispatch(packsActions.setPacksAC(res.data))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        if (e.response.data) {
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const addNewPacksTC = (newPack: newPackType): FridayThunkType => async (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        await pasksAPI.addNewPack(newPack)
        dispatch(packsTC())
    } catch (e: any) {
        if (e.response.data) {
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const deletePacksTC = (id: string): FridayThunkType => async (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        await pasksAPI.deletePack(id)
        dispatch(packsTC())
    } catch (e: any) {
        if (e.response.data) {
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}