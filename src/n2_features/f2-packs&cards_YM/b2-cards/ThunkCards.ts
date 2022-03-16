import {setAppStatusAC, setGlobalErrorAC} from "../../../n1_main/m2-bll/r1-reducers/app-reducer";
import {fridayReducerType, FridayThunkType} from "../../../n1_main/m2-bll/store";
import {Dispatch} from "redux";
import {cardsAPI} from "./cardsAPI";
import {cardsActions} from "./ActionsCards";

export const cardsTC = (id: string) => {
    return async (dispatch: Dispatch, getState: () => fridayReducerType) => {
        const {cardAnswer, cardQuestion, minGrade, maxGrade, sortCards, page, pageCount} = getState().cards

        dispatch(setAppStatusAC("loading"))
        try {
            let res = await cardsAPI.setCards(cardAnswer, cardQuestion, id, minGrade, maxGrade, sortCards, page, pageCount)
            dispatch(cardsActions.setCardsAC(res.data))
            dispatch(setAppStatusAC("succeeded"))
        } catch (e: any) {
            dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
            dispatch(setAppStatusAC("failed"))
        } finally {
            dispatch(setAppStatusAC("idle"))
        }
    };
}

export const addNewCardTC = (question: string, answer: string, packId: string): FridayThunkType => async (dispatch) => {
    const newCard = {
        cardsPack_id: packId,
        question: question,
        answer: answer,
        grade: 0,
        shots: 0,
        answerImg: '',
        questionImg: '',
        questionVideo: '',
        answerVideo: '',
    }

    dispatch(setAppStatusAC("loading"))
    try {
        debugger
        await cardsAPI.addCard(newCard)
        dispatch(cardsTC(packId))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const deleteCardTC = (cardId: string): FridayThunkType => async (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        debugger
        let res = await cardsAPI.deleteCard(cardId)
        dispatch(cardsTC(res.data.deletedCard.cardsPack_id))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}


export type UpdatedCardType = {
    _id: string
    question: string
    comments: string
}
export const updateCardTC = (updatedCard: UpdatedCardType): FridayThunkType => async (dispatch) => {
   debugger
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await cardsAPI.updateCard(updatedCard)
        dispatch(cardsTC(res.data.updatedCard.cardsPack_id))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        dispatch(setGlobalErrorAC(e.response ? e.response.data.error : 'some error'))
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}