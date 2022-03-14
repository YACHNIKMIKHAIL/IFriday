import {setAppStatusAC} from "../../../n1_main/m2-bll/r1-reducers/app-reducer";
import {newPackType, pasksAPI} from "./packsAPI";
import {fridayReducerType, FridayThunkType} from "../../../n1_main/m2-bll/store";
import {Dispatch} from "redux";
import {packsActions} from "./ActionsPacks";

export const packsTC = () => async (dispatch: Dispatch, getState: () => fridayReducerType) => {
    const {packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id} = getState().packs
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await pasksAPI.setPacks(packName, minCardsCount, maxCardsCount, updated, page, pageCount, user_id)
        dispatch(packsActions.setPacksAC(res.data))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        if (e.response) {
            //alert(e.response ? e.response.data.error : 'some error')
        } else {
            alert('включи сервак')
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
        if (e.response) {
            alert(e.response ? e.response.data.error : 'some error')
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
        if (e.response) {
            alert(e.response ? e.response.data.error : 'some error')
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const changePacksTC = (newName: string, id: string): FridayThunkType => async (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        await pasksAPI.changePack(newName, id)
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