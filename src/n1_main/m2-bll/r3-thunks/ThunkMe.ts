import {Dispatch} from "redux";
import {setAppStatusAC, setGlobalErrorAC} from "../r1-reducers/app-reducer";
import {meAPI} from "../../m3-dal/meAPI";
import {ProfileActions} from "../r1-reducers/ProfileReducer";
import {initializeMeAC, setErrorMeAC} from "../r2-actions/ActionsMe";
import {LoginFormActions} from "../r2-actions/ActionLoginForm";

export const meTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await meAPI.me()
        dispatch(initializeMeAC(true))
        dispatch(ProfileActions.setProfileAC(res.data))
        // saveToken(res.data.token)
        dispatch(LoginFormActions.setIsLoggedInAC(true))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
        // saveToken(null)
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(initializeMeAC(true))
        dispatch(setAppStatusAC("idle"))
    }
}