import {Dispatch} from "redux";
import {setAppStatusAC} from "../r1-reducers/app-reducer";
import {meAPI, meRespType} from "../../m3-dal/meAPI";
import {ProfileActions} from "../r1-reducers/ProfileReducer";
import {saveToken} from "../fridayLocalStorage";
import {initializeMeAC, setErrorMeAC} from "../r2-actions/ActionsMe";

export const meTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await meAPI.me()
        dispatch(initializeMeAC(true))
        dispatch(ProfileActions.setProfileAC<meRespType>(res.data))
        saveToken(res.data.token)
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        dispatch(setErrorMeAC(e.response.data.error))
        saveToken(null)
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(initializeMeAC(true))
        dispatch(setAppStatusAC("idle"))
    }
}