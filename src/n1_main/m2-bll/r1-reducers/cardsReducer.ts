import {cardsActions, cardsActionsEnum, cardsActionsTypes} from "../r2-actions/ActionsCards";
import {UpdatedType} from "../../m3-dal/packsAPI";

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
    cardAnswer: string
    cardQuestion: string
    sortCards: UpdatedType
}
const initialCards: InitialCardsType = {
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
    page: 1,
    pageCount: 10,
    cardAnswer: '',
    cardQuestion: '',
    sortCards: '0updated'
}

export type cardsReducerActionType = ReturnType<cardsActionsTypes<typeof cardsActions>>
export const cardsReducer = (state = initialCards, action: cardsReducerActionType): InitialCardsType => {
    switch (action.type) {
        case cardsActionsEnum.SET_CARDS: {
            return {...state, ...action.payload.state}
        }
        case cardsActionsEnum.PAGE_COUNT: {
            return {...state, pageCount: action.payload.pageCount}
        }
        case cardsActionsEnum.PAGE: {
            return {...state, page: action.payload.page}
        }
        case cardsActionsEnum.SEARCH_CARDS: {
            return {...state, cardQuestion: action.payload.e}
        }
        default:
            return state
    }
}