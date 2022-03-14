import React from "react";
import style from "./CardsList.module.css"
import TablesPagination from "../../../n1_main/m1-ui/common/pagination/TablePagination";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType} from "./cardsReducer";

type CardsListType = {
    name: string
}
const CardsList = ({name}: CardsListType) => {
    const cards = useFridaySelector<CardType[]>(state => state.cards.cards)

    //alert(name)
    return (
        <div className={style.cardsListBlock}>
            <div className={style.cardsList}>
                <h2>&#129040; Pack Name: {name}</h2>
                <input placeholder={"Search..."}/>
                <div className={style.cardsBlock}>
                    {cards?.map((m, i) => {
                        return <div key={i}>{m.question}</div>
                    })}
                </div>
                <TablesPagination/>
            </div>


        </div>
    )
}
export default CardsList;