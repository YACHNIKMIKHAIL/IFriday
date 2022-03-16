import axios, {AxiosResponse} from "axios";
import {UpdatedType} from "../b1-packs/packsAPI";
import {CardsType} from "./ActionsCards";
import {UpdatedCardType} from "./ThunkCards";
import {instance} from "../../instance";

export const cardsAPI = {
    async setCards(cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, sortCards: UpdatedType, page: number, pageCount: number) {
        return await instance.get<CardsType,
            AxiosResponse<CardsType>, { cardAnswer: string, cardQuestion: string, cardsPack_id: string, min: number, max: number, sortCards: UpdatedType, page: number, pageCount: number }>
        (`/cards/card`, {params: {cardsPack_id, cardAnswer, cardQuestion, min, max, sortCards, page, pageCount}})
    },
    async addCard(newCard: addCardType) {
        return await instance.post<CardsType,
            AxiosResponse<CardsType>, { card: addCardType }>
        (`/cards/card`, {card: newCard})
    },
    async deleteCard(cardId: string) {
        return await instance.delete(`/cards/card?id=${cardId}`)
    },
    async updateCard(updatedCard: UpdatedCardType) {
        return await instance.put<CardsType,
            AxiosResponse<CardsType>, { card: UpdatedCardType }>
        (`/cards/card`, {card: updatedCard})
    },
}
type addCardType = {
    cardsPack_id: string
    question: string
    answer: string
    grade: number
    shots: number
    answerImg: string
    questionImg: string
    questionVideo: string
    answerVideo: string
}
