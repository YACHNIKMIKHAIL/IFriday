import React, {useEffect, useState} from "react";
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
import TestAddCardComponent from "./TestAddCardComponent";

type CardsListType = {
    name: string
    user_id:string
}
const CardsList = ({name,user_id}: CardsListType) => {
    const dispatch = useDispatch()
    const {packId} = useParams<'packId'>();
    const [newCard, setNewCard] = useState<boolean>(false)
    const cards = useFridaySelector<CardType[]>(state => state.cards.cards)
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const cardsState = useFridaySelector<InitialCardsType>(state => state.cards)
    const debouncedCardsOnPage = useDebounce<number>(cardsState.pageCount, 1000)
    const debouncedPageCardsChanged = useDebounce<number>(cardsState.page, 1000)
    useEffect(() => {
        if (packId) {
            dispatch(cardsTC(packId))
        }
    }, [debouncedCardsOnPage[0], debouncedPageCardsChanged[0]])

    return (
        <div className={style.cardsListBlock}>
            {!newCard
                ? (<div className={style.cardsList}>
                    <div style={{display: 'flex'}}>
                        <h2 className={style.title} style={{color: '&#129040'}}> Pack Name: {name}</h2>
                        <input placeholder={"Search..."}/>
                        {myId===user_id ?
                            <button
                                className={style.buttonSearch}
                                onClick={() => setNewCard(true)}>
                                Add New Card
                            </button>
                            : <></>}

                    </div>
                    <div className={style.cardsBlock}>
                        <TableCardsHeader user_id={user_id}/>
                        {cards?.map((m, i) => {
                            // return <TableCards key={i} cards={m}/>
                            return <CardComponent key={i} c={m}/>
                        })}
                        <TablesCardsPagination/>
                    </div>
                </div>)
                : (
                    <div>
                        <TestAddCardComponent packId={packId} setNewCard={setNewCard}/>
                    </div>
                )}


        </div>
    )
}
export default CardsList;