import {Dispatch} from "redux";
import {passwordRecoveryAPI} from "./passwordRecoveryAPI";

export type passwordRecoveryStateType = {
    info: string,
    success: boolean,
    answer: boolean,
    html: boolean,
}
const passwordRecoveryState: passwordRecoveryStateType = {
    info: '',
    success: false,
    answer: false,
    html: false,
}

export const passwordRecoveryReducer = (state = passwordRecoveryState, action: meReducerActionType): passwordRecoveryStateType => {
    switch (action.type) {
        case SET_INFO: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}
type meReducerActionType = setInfoACType | setErrorACType

const SET_INFO = 'SET_INFO'
export type setInfoACType = ReturnType<typeof setInfoAC>
export const setInfoAC = (data: passwordRecoveryStateType) => {
    return {
        type: SET_INFO,
        payload: {data}
    } as const
}
const SET_ERROR = 'SET_ERROR'
export type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: string) => {
    return {
        type: SET_ERROR,
        payload: {error}
    } as const
}

export const passwordRecoveryTC = (email: string) => async (dispatch: Dispatch) => {
    try {
        let res = await passwordRecoveryAPI.forgot(email)
        dispatch(setInfoAC(res.data))
    } catch (e: any) {
        dispatch(setErrorAC(e.response.data.error))
    } finally {

    }
}