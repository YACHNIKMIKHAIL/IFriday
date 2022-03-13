import {setAppStatusAC} from "../../../n1_main/m2-bll/r1-reducers/app-reducer";
import {fridayReducerType} from "../../../n1_main/m2-bll/store";
import {Dispatch} from "redux";
import {cardsAPI} from "./cardsAPI";
import {cardsActions} from "./ActionsCards";

export const cardsTC = (id:string) => async (dispatch:Dispatch, getState: () => fridayReducerType) => {
    const cardAnswer = getState().cards.cardAnswer
    const cardQuestion = getState().cards.cardQuestion
    // const cardsPack_id = getState().cards.packUserId
    const min = getState().cards.minGrade
    const max = getState().cards.maxGrade
    const sortCards = getState().cards.sortCards
    const page = getState().cards.page
    const pageCount = getState().cards.pageCount

    dispatch(setAppStatusAC("loading"))
    try {
        let res = await cardsAPI.setCards(cardAnswer,cardQuestion,id,min,max,sortCards,page,pageCount)
        dispatch(cardsActions.setCardsAC(res.data))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        if (e.response.data) {
        }
        dispatch(setAppStatusAC("failed"))
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}