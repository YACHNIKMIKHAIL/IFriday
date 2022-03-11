import {Dispatch} from "redux";
import {registerAndRecoveryPassActions} from "../r2-actions/ActionsRegisterAndRecoveryPassReducer";
import {newPassBodyType, registerAndRecoveryPassAPI} from "../../m3-dal/RegisterAndRecoveryPassAPI";
import {setAppStatusAC} from "../r1-reducers/app-reducer";

export const registerUserTC = (body: { email: string, password: string }) => async (dispatch: Dispatch) => {
    // dispatch(registerAndRecoveryPassActions.registerUserAC({
    //     addedUser: {
    //         error: '',
    //         email: '',
    //         in: ''
    //     },
    //     error: ''
    // }))
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await registerAndRecoveryPassAPI.registerMe(body)
        dispatch(registerAndRecoveryPassActions.registerUserAC(res.data))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(registerAndRecoveryPassActions.setErrorRegisterAC(error))
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const passwordRecoveryTC = (email: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await registerAndRecoveryPassAPI.forgot(email)
        dispatch(registerAndRecoveryPassActions.setInfoRecoveryAC(res.data))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        if (e.response.data) {
            alert(e.response.data.error)
            dispatch(registerAndRecoveryPassActions.setNewErrorAC(e.response.data.error))
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const newPasswordTC = (body: newPassBodyType) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await registerAndRecoveryPassAPI.createNewPass(body)
        dispatch(registerAndRecoveryPassActions.setInfoNewPassAC(res.data))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        if (e.response.data) {
            dispatch(registerAndRecoveryPassActions.setInfoNewPassAC(e.response.data.error))
        } else {
            registerAndRecoveryPassActions.setInfoNewPassAC({
                info: '',
                error: 'some error'
            })
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}