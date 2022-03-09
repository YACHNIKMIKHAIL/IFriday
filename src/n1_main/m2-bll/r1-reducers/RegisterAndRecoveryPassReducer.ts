import {Dispatch} from "redux";
import {registerFormAPI} from "../../../n2_features/f1-auth/a2-register/RegisterFormAPI";
import {passwordRecoveryAPI} from "../../../n2_features/f1-auth/a4-passwordRecovery/passwordRecoveryAPI";
import {createNewPasswordAPI, newPassBodyType} from "../../../n2_features/f1-auth/a5-newPassword/newPasswordAPI";


export type userType = {
    error: string,
    email: string,
    in: string
}
export type registerStateType = {
    addedUser: userType
    error?: string;
}
export type passwordRecoveryStateType = {
    info: string,
    success: boolean,
    answer: boolean,
    html: boolean,
}
export type newPasswordStateType = {
    info: string
    error: string;
}

export type RegisterAndRecoveryPassReducerType = {
    register: registerStateType
    passwordRecovery: passwordRecoveryStateType
    newPassword: newPasswordStateType
}
const registerAndRecoveryPassReducerState: RegisterAndRecoveryPassReducerType = {
    register: {
        addedUser: {} as userType,
        error: ''
    },
    passwordRecovery: {
        info: '',
        success: false,
        answer: false,
        html: false,
    },
    newPassword: {
        info: '',
        error: ''
    }
}

export const registerAndRecoveryPassReducer = (state = registerAndRecoveryPassReducerState, action: registerAndRecoveryPassReducerActionType): RegisterAndRecoveryPassReducerType => {
    switch (action.type) {
        case REGISTER_USER: {
            return {...state, register: {...state.register, addedUser: action.payload.addedUser}}
        }
        case SET_ERROR_REGISTER: {
            return {
                ...state, register:
                    {
                        ...state.register,
                        error: action.payload.e
                    }
            }
        }
        case SET_INFO_RECOVERY_PASS: {
            return {...state, passwordRecovery: {...state.passwordRecovery, ...action.payload.data}}
        }
        case SET_INFO_NEW_PASS: {
            return {...state, newPassword: {...action.payload.data}}
        }
        default:
            return state
    }
}
type registerAndRecoveryPassReducerActionType =
    registerUserACType
    | setErrorRegisterACType
    | setInfoNewPassACType
    | setInfoRecoveryACType

const REGISTER_USER = 'REGISTER_USER'
export type registerUserACType = ReturnType<typeof registerUserAC>
export const registerUserAC = (data: registerStateType) => {
    return {
        type: REGISTER_USER,
        payload: data
    } as const
}

const SET_ERROR_REGISTER = 'SET_ERROR_REGISTER'
export type setErrorRegisterACType = ReturnType<typeof setErrorRegisterAC>
export const setErrorRegisterAC = (e: string) => {
    return {
        type: SET_ERROR_REGISTER,
        payload: {e}
    } as const
}

export const registerUserTC = (body: { email: string, password: string }) => async (dispatch: Dispatch) => {
    dispatch(registerUserAC({
        addedUser: {
            error: '',
            email: '',
            in: ''
        },
        error: ''
    }))
    try {
        let res = await registerFormAPI.registerMe(body)
        dispatch(registerUserAC(res.data))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setErrorRegisterAC(error))
    } finally {

    }
}

const SET_INFO_RECOVERY_PASS = 'SET_INFO_RECOVERY_PASS'
export type setInfoRecoveryACType = ReturnType<typeof setInfoRecoveryAC>
export const setInfoRecoveryAC = (data: passwordRecoveryStateType) => {
    return {
        type: SET_INFO_RECOVERY_PASS,
        payload: {data}
    } as const
}
// const SET_ERROR_RECOVERY_PASS = 'SET_ERROR_RECOVERY_PASS'
// export type setErrorRecoveryACType = ReturnType<typeof setErrorRecoveryAC>
// export const setErrorRecoveryAC = (error: string) => {
//     return {
//         type: SET_ERROR_RECOVERY_PASS,
//         payload: {error}
//     } as const
// }

export const passwordRecoveryTC = (email: string) => async (dispatch: Dispatch) => {
    try {
        let res = await passwordRecoveryAPI.forgot(email)
        dispatch(setInfoRecoveryAC(res.data))
    } catch (e: any) {
        // dispatch(setErrorRecoveryAC(e.response.data.error))
    } finally {

    }
}

const SET_INFO_NEW_PASS = 'SET_INFO_NEW_PASS'
export type setInfoNewPassACType = ReturnType<typeof setInfoNewPassAC>
export const setInfoNewPassAC = (data: newPasswordStateType) => {
    return {
        type: SET_INFO_NEW_PASS,
        payload: {data}
    } as const
}
// const SET_ERROR = 'SET_ERROR'
// export type setErrorACType = ReturnType<typeof setErrorAC>
// export const setErrorAC = (error: string) => {
//     return {
//         type: SET_ERROR,
//         payload: {error}
//     } as const
// }

export const newPasswordTC = (body: newPassBodyType) => async (dispatch: Dispatch) => {
    console.log(body)
    try {
        let res = await createNewPasswordAPI.createNewPass(body)
        console.log(res.data)
        dispatch(setInfoNewPassAC(res.data))
    } catch (e: any) {
        dispatch(setInfoNewPassAC(e.response.data.error))
    } finally {

    }
}