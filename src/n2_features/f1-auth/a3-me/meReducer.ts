import {Dispatch} from "redux";
import {meAPI} from "./meAPI";
import {setProfileAC} from "../a6-profile/ProfileReducer";
import {saveToken} from "../../../n1_main/m2-bll/fridayLocalStorage";
import Login from "../../../n1_main/m1-ui/common/Login";

/*export type MeType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}*/
export type meReducerStateType = {
    /*me: MeType,*/
    isInitialized: boolean,
    error: string
}
const meReducerState: meReducerStateType = {
    /*me: {} as MeType,*/
    isInitialized: false,
    error: ''
}

export const meReducer = (state = meReducerState, action: meReducerActionType): meReducerStateType => {
    switch (action.type) {
        case INITIALIZE_ME: {
            return {...state, isInitialized: action.payload.initialization}
        }
        /*case SET_ME: {
            return {...state, me: {...action.payload.me}}
        }*/
        case SET_ERROR: {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}
type meReducerActionType = initializeMeACType | setErrorACType

const INITIALIZE_ME = 'INITIALIZE_ME'
export type initializeMeACType = ReturnType<typeof initializeMeAC>
export const initializeMeAC = (initialization: boolean) => {
    return {
        type: INITIALIZE_ME,
        payload: {initialization}
    } as const
}
/*const SET_ME = 'SET_ME'
export type setMeACType = ReturnType<typeof setMeAC>
export const setMeAC = (me: MeType) => {
    return {
        type: SET_ME,
        payload: {me}
    } as const
}*/
const SET_ERROR = 'SET_ERROR'
export type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: string) => {
    return {
        type: SET_ERROR,
        payload: {error}
    } as const
}
export const meTC = () => async (dispatch: Dispatch) => {
    try {
        let res = await meAPI.me()
        dispatch(initializeMeAC(true))
        dispatch(setProfileAC(res.data))
        saveToken(res.data.token)
    } catch (e: any) {
        dispatch(setErrorAC(e.response.data.error))
        saveToken(null)
    } finally {
        dispatch(initializeMeAC(true))
    }
}