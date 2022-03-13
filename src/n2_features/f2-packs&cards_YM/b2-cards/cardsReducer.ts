import {cardsActions, cardsActionsEnum, cardsActionsTypes} from "./ActionsCards";
import {UpdatedType} from "../b1-packs/packsAPI";

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}

export type InitialCardsType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    // packUserId: string
    cardAnswer: string
    cardQuestion: string
    sortCards: UpdatedType
}
const initialCards: InitialCardsType  = {
    cards: [
        {
            answer: '',
            question: '',
            cardsPack_id: '',
            grade: 0,
            shots: 0,
            user_id: '',
            created: '',
            updated: '',
            _id: '',
        },
    ],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0,
    // packUserId: '',
    cardAnswer: '',
    cardQuestion: '',
    sortCards: '0updated'
}

export type cardsReducerActionType = ReturnType<cardsActionsTypes<typeof cardsActions>>
export const cardsReducer = (state = initialCards, action: cardsReducerActionType): InitialCardsType => {
    switch (action.type) {
        case cardsActionsEnum.SET_CARDS: {
            return {...state,...action.payload.state}
        }
        default:
            return state
    }
}