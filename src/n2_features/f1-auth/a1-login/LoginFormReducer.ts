import {Dispatch} from "redux";
import {loginFormAPI, loginType} from "./LoginFormAPI";
import {saveIsLoggedIn} from "../../../n1_main/m2-bll/fridayLocalStorage";

type ActionLoginFormType = setIsLoggedInType | setUserDataType | setErrorACType

export type UserDataType = {
    avatar: string,
    created: number,
    email: string,
    isAdmin: boolean,
    name: string,
    publicCardPacksCount: number,
    rememberMe: boolean,
    token: string,
    updated: number,
    _id: string,
}

const initialState = {
    isLoggedIn: false,
    user: {
        avatar: '',
        created: 5,
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        updated: 5,
        _id: '',
    },
    error: "",
}

type LoginInitialStateType = typeof initialState


export const loginFormReducer = (state: LoginInitialStateType = initialState, action: ActionLoginFormType): LoginInitialStateType => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        case SET_USER_DATA:
            return {...state, user: action.payload.userData}
        case SET_ERROR: {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}

const LOGIN_USER = 'CARDS/LOGIN/SET_IS_AUTH'
export type setIsLoggedInType = ReturnType<typeof setIsLoggedInAC>
export const setIsLoggedInAC = (isLoggedIn: boolean) => ({
    type: LOGIN_USER,
    payload: {isLoggedIn},
}) as const

const SET_USER_DATA = 'CARDS/LOGIN/SET_USER_DATA'
export type setUserDataType = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (userData: UserDataType) => ({
    type: SET_USER_DATA,
    payload: {userData},
}) as const

const SET_ERROR = 'CARDS/LOGIN/SET_ERROR'
export type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: string) => {
    return {
        type: SET_ERROR,
        payload: {error},
    } as const
}

export const loginUserTC = (body: loginType) => async (dispatch: Dispatch) => {
    try {
        const res = await loginFormAPI.loginMe(body)
        dispatch(setUserDataAC(res.data))
        dispatch(setIsLoggedInAC(true))
        saveIsLoggedIn(true)
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setErrorAC(error))
    }
}

export const logoutUserTC = () => async (dispatch: Dispatch) => {
    try {
        await loginFormAPI.logoutMe()
        dispatch(setIsLoggedInAC(false))
        saveIsLoggedIn(false)
    } catch (e) {
        /*     const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
             dispatch(setErrorAC(error))*/
    }
}