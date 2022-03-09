import {
    newPasswordStateType,
    passwordRecoveryStateType,
    registerStateType
} from "../r1-reducers/RegisterAndRecoveryPassReducer";

export enum RegisterAndRecoveryPassReducer {
    REGISTER_USER = 'REGISTER_USER',
    SET_ERROR_REGISTER = 'SET_ERROR_REGISTER',
    SET_INFO_RECOVERY_PASS = 'SET_INFO_RECOVERY_PASS',
    SET_INFO_NEW_PASS = 'SET_INFO_NEW_PASS',
}


export type RegisterAndRecoveryPassReducerActionsTypes<T> = T extends { [key: string]: infer A } ? A : never

export const registerAndRecoveryPassActions = {
    registerUserAC: (data: registerStateType) => {
        return {
            type: RegisterAndRecoveryPassReducer.REGISTER_USER,
            payload: data
        } as const
    },
    setErrorRegisterAC: (e: string) => {
        return {
            type: RegisterAndRecoveryPassReducer.SET_ERROR_REGISTER,
            payload: {e}
        } as const
    },
    setInfoRecoveryAC: (data: passwordRecoveryStateType) => {
        return {
            type: RegisterAndRecoveryPassReducer.SET_INFO_RECOVERY_PASS,
            payload: {data}
        } as const
    },
    setInfoNewPassAC: (data: newPasswordStateType) => {
        return {
            type: RegisterAndRecoveryPassReducer.SET_INFO_NEW_PASS,
            payload: {data}
        } as const
    }
}
// export type registerUserACType = ReturnType<typeof registerUserAC>
// export const registerUserAC = (data: registerStateType) => {
//     return {
//         type: REGISTER_USER,
//         payload: data
//     } as const
// }

// export type setErrorRegisterACType = ReturnType<typeof setErrorRegisterAC>
// export const setErrorRegisterAC = (e: string) => {
//     return {
//         type: SET_ERROR_REGISTER,
//         payload: {e}
//     } as const
// }
// export type setInfoRecoveryACType = ReturnType<typeof setInfoRecoveryAC>
// export const setInfoRecoveryAC = (data: passwordRecoveryStateType) => {
//     return {
//         type: SET_INFO_RECOVERY_PASS,
//         payload: {data}
//     } as const
// }
// export type setInfoNewPassACType = ReturnType<typeof setInfoNewPassAC>
// export const setInfoNewPassAC = (data: newPasswordStateType) => {
//     return {
//         type: SET_INFO_NEW_PASS,
//         payload: {data}
//     } as const
// }