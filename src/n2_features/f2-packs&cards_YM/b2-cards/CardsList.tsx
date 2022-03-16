import React, {useEffect} from "react";
import style from "./CardsList.module.css"
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType, InitialCardsType} from "./cardsReducer";
import TableCardsHeader from "../../../n1_main/m1-ui/common/table/TableHeaderCards";
import CardComponent from "./CardComponent";
import TablesCardsPagination from "./TablesCardsPagination";
import {useDebounce} from "use-debounce";
import {useDispatch} from "react-redux";
import {cardsTC} from "./ThunkCards";
import {useParams} from "react-router-dom";

type CardsListType = {
    name: string
}
const CardsList = ({name}: CardsListType) => {
    const dispatch = useDispatch()
    const {packId} = useParams<'packId'>();

    const cards = useFridaySelector<CardType[]>(state => state.cards.cards)
    const cardsState = useFridaySelector<InitialCardsType>(state => state.cards)
    console.log(cards)
    const debouncedCardsOnPage = useDebounce<number>(cardsState.pageCount, 1000)
    const debouncedPageCardsChanged = useDebounce<number>(cardsState.page, 1000)
    useEffect(() => {
        if(packId) {
            dispatch(cardsTC(packId))
        }
    }, [debouncedCardsOnPage[0], debouncedPageCardsChanged[0]])

    return (
        <div className={style.cardsListBlock}>
            <div className={style.cardsList}>
                <h2 className={style.title} style={{color: '&#129040'}}> Pack Name: {name}</h2>
                <input placeholder={"Search..."}/>
                <div className={style.cardsBlock}>
                    <TableCardsHeader/>
                    {cards?.map((m, i) => {
                        // return <TableCards key={i} cards={m}/>
                        return <CardComponent key={i} c={m}/>
                    })}
                    <TablesCardsPagination/>
                </div>
            </div>


        </div>
    )
}
export default CardsList;