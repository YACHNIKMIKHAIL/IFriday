import {Dispatch} from "redux";
import {createNewPasswordAPI, newPassBodyType} from "./newPasswordAPI";

export type newPasswordStateType = {
    info: string
    error: string;
}
const newPasswordState: newPasswordStateType = {
    info: '',
    error: ''
}

export const newPasswordReducer = (state = newPasswordState, action: meReducerActionType): newPasswordStateType => {
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
export const setInfoAC = (data: newPasswordStateType) => {
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

export const newPasswordTC = (body: newPassBodyType) => async (dispatch: Dispatch) => {
    try {
        let res = await createNewPasswordAPI.createNewPass(body)
        dispatch(setInfoAC(res.data))
    } catch (e: any) {
        dispatch(setErrorAC(e.response.data.error))
    } finally {

    }
}