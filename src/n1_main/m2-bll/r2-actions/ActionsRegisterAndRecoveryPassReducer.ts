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
