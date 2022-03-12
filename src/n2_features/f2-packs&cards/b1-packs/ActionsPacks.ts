import {
    newPasswordStateType,
    passwordRecoveryStateType,
    registerStateType
} from "../../../n1_main/m2-bll/r1-reducers/RegisterAndRecoveryPassReducer";
import {RegisterAndRecoveryPassReducer} from "../../../n1_main/m2-bll/r2-actions/ActionsRegisterAndRecoveryPassReducer";
import {InitialCardPacksType} from "./packsReducer";

export enum packsActionsEnum {
    SET_PACKS = 'SET_PACKS',
}

export type packsActionsTypes<T> = T extends { [key: string]: infer A } ? A : never

export const packsActions = {
    setPacksAC: (state: InitialCardPacksType) => {
        return {
            type: packsActionsEnum.SET_PACKS,
            payload: {state}
        } as const
    },

}