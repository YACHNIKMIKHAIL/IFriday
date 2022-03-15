import {setAppStatusAC} from "../../../n1_main/m2-bll/r1-reducers/app-reducer";
import {newPackType, packsAPI} from "./packsAPI";
import {fridayReducerType, FridayThunkType} from "../../../n1_main/m2-bll/store";
import {Dispatch} from "redux";
import {packsActions} from "./ActionsPacks";

export const packsTC = () => async (dispatch: Dispatch, getState: () => fridayReducerType) => {
    const {packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id} = getState().packs
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await packsAPI.setPacks(packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id)
        dispatch(packsActions.setPacksAC(res.data))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        if (e.response) {
            //alert(e.response ? e.response.data.error : 'some error')
        } else {
            // alert('включи сервак')
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const addNewPacksTC = (newPack: newPackType): FridayThunkType => async (dispatch: any) => {
    dispatch(setAppStatusAC("loading"))
    try {
        await packsAPI.addNewPack(newPack)
        dispatch(packsTC())
    } catch (e: any) {
        if (e.response) {
            // alert(e.response ? e.response.data.error : 'some error')
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const deletePacksTC = (id: string): FridayThunkType => async (dispatch: any) => {
    dispatch(setAppStatusAC("loading"))
    try {
        await packsAPI.deletePack(id)
        dispatch(packsTC())
    } catch (e: any) {
        if (e.response) {
            alert(e.response ? e.response.data.error : 'some error')
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const changePacksTC = (newName: string, id: string): FridayThunkType => async (dispatch: any) => {
    dispatch(setAppStatusAC("loading"))
    try {
        await packsAPI.changePack(newName, id)
        dispatch(packsTC())
    } catch (e: any) {
        if (e.response) {
            alert(e.response ? e.response.data.error : 'some error')
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}