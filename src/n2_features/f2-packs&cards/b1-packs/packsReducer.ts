import {
    registerAndRecoveryPassActions,
    RegisterAndRecoveryPassReducerActionsTypes
} from "../../../n1_main/m2-bll/r2-actions/ActionsRegisterAndRecoveryPassReducer";
import {packsActions, packsActionsEnum, packsActionsTypes} from "./ActionsPacks";
import {UpdatedType} from "./packsAPI";

type PacksType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}
export type InitialCardPacksType = {
    pasks: PacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    packName: string
    updated: UpdatedType
    user_id: string
}
const initialCardPacks: InitialCardPacksType = {
    pasks: [
        {
            _id: "",
            user_id: "",
            name: "",
            cardsCount: 0,
            created: "",
            updated: "",
        }
    ],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0,
    packName: '',
    updated: '0updated',
    user_id: ''
}

type packsReducerActionType = ReturnType<packsActionsTypes<typeof packsActions>>
export const packsReducer = (state = initialCardPacks, action: packsReducerActionType): InitialCardPacksType => {
    switch (action.type) {
        case packsActionsEnum.SET_PACKS: {
            return {...state, pasks: action.payload.state.pasks}
        }
        default:
            return state
    }
}