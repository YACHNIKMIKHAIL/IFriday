import {CardType} from "../r1-reducers/cardsReducer";

export enum cardsActionsEnum {
    SET_CARDS = 'SET_CARDS',
    PAGE='PAGE',
    pageCount='pageCount'
}

export type cardsActionsTypes<T> = T extends { [key: string]: infer A } ? A : never

export const cardsActions = {
    setCardsAC: (state: CardsType) => {
        return {
            type: cardsActionsEnum.SET_CARDS,
            payload: {state}
        } as const
    },
    cardsPageAC: (page: number) => {
        return {
        type: cardsActionsEnum.PAGE,
        payload: {page}
    } as const
    },
    cardsPageCountAC: (pageCount: number) => {
        return {
        type: cardsActionsEnum.pageCount,
        payload: {pageCount}
    } as const
    },

}

export type CardsType  = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    cardsPack_id: string
}