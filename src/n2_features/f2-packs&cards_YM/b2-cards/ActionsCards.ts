import {CardType} from "./cardsReducer";

export enum cardsActionsEnum {
    SET_CARDS = 'SET_CARDS',
}

export type cardsActionsTypes<T> = T extends { [key: string]: infer A } ? A : never

export const cardsActions = {
    setCardsAC: (state: CardsType) => {
        return {
            type: cardsActionsEnum.SET_CARDS,
            payload: {state}
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
    packUserId: string
}