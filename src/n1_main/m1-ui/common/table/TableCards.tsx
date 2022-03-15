import React, {useState} from "react";
import s from "./TableCards.module.css"
import Preloader from "../preloader/Preloader";
import {CardType} from "../../../../n2_features/f2-packs&cards_YM/b2-cards/cardsReducer";
import Rating from "@mui/material/Rating/Rating";



type TableCardsType = {
    cards: CardType
}
const TableCards = ({cards}: TableCardsType) => {

    const arr = [{
        Question: cards.question,
        Answer: cards.answer,
        Updated: cards.updated,
        Grade: cards.grade,

    }]
    return (
        arr
            ? (
                <div className={s.table}>
                    {arr.map((arr, idx) => <TableRow key={idx} arr={arr}/>)}
                </div>
            ) : (
                <div>
                    <Preloader status={"failed"}/>
                </div>)
    )
};
const TableRow = ({arr}: any) => {

    const {
        Question,
        Answer,
        Updated,
        Grade
    } = arr


    return (
        <div className={s.tableRow}>

            <TableCell item={Question}/>
            <TableCell item={Answer}/>
            <TableCell item={Updated}/>
            <TableCell item={<Rating  name={"half-rating-read"}
                                      value={Grade} precision={0.1} readOnly/>}/>

        </div>
    )
};
const TableCell = ({item, status}: any) => {
    const [state, setState] = useState(item);
    return (
        <div className={s.tableCell}>
            {/*<input*/}
            {/*    value={state}*/}
            {/*    onChange={({ target }) => setState(target.value)}*/}
            {/*    type="text" />*/}
            {state}
            {/*{status &&*/}
            {/*// <ButtonGroup/>*/}
            {/*}*/}
        </div>
    )
}
export default TableCards;

export const ButtonGroup = () => {
    return (
        <div className={s.BtnContainer}>
            <button onClick={() => alert("edit")}>edit</button>
            <button onClick={() => alert("delete")}>delete</button>
            <button onClick={() => alert("learn")}>learn</button>
        </div>
    )
}