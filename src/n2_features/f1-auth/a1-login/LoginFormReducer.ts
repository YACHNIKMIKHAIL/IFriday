import {Dispatch} from "redux";
import {loginFormAPI, loginType} from "./LoginFormAPI";

type LoginFormInitialStateType = {
    data: loginType
    error: string
}

type ActionLoginFormType =  loginUserACType

const LoginFormInitialState = {
    data : {} as loginType,
    error: "",
}

export const loginFormReducer = (state: LoginFormInitialStateType = LoginFormInitialState, action: ActionLoginFormType): LoginFormInitialStateType => {
    switch (action.type) {
        case LOGIN_USER : {
            return {...state, data: action.payload.data}
        }
        /*case SET_ERROR_LOGIN: {
            return {...state, error: action.payload.e}
        }*/
        default:
            return state
    }
}

const LOGIN_USER = 'LOGIN_USER'
export type loginUserACType = ReturnType<typeof loginUserAC>
export const loginUserAC = (data: any) => {
    return {
        type: LOGIN_USER,
        payload: {data}
    } as const
}

/*const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN'
export type setErrorLoginACType = ReturnType<typeof setErrorLoginAC>
export const setErrorLoginAC = (e: string) => {
    return {
        type: SET_ERROR_LOGIN,
        payload: {e}
    } as const
}*/

export const loginUserTC = (body: loginType) => async (dispatch: Dispatch) => {
    dispatch(loginUserAC({
        data: {
            email: '',
            password: '',
            rememberMe: '',
        },
        error: '',
    }))
    try {
        let res = await loginFormAPI.loginMe(body)
        dispatch(loginUserAC(res.data))
    } catch (e: any) {

    } finally {

    }
}