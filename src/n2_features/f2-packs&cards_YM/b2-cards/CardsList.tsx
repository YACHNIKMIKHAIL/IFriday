import React from "react";
import style from "./CardsList.module.css"
import TablesPagination from "../../../n1_main/m1-ui/common/pagination/TablePagination";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType} from "./cardsReducer";
import TableCards from "../../../n1_main/m1-ui/common/table/TableCards";
import TableCardsHeader from "../../../n1_main/m1-ui/common/table/TableHeaderCards";

type CardsListType = {
    name: string
}
const CardsList = ({name}: CardsListType) => {
    const cards = useFridaySelector<CardType[]>(state => state.cards.cards)

    return (
        <div className={style.cardsListBlock}>
            <div className={style.cardsList}>
                <h2>&#129040; Pack Name: {name}</h2>
                <input placeholder={"Search..."}/>
                <div className={style.cardsBlock}>
                    <TableCardsHeader/>
                    {cards?.map((m, i) => {
                        return <TableCards key={i} cards={m}/>
                    })}
                </div>
                <TablesPagination/>
            </div>


        </div>
    )
}
export default CardsList;