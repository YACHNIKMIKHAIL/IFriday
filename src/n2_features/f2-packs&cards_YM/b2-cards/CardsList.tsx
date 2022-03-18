import React, {ChangeEvent, useEffect, useState} from "react";
import style from "./CardsList.module.css"
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType, InitialCardsType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import TableCardsHeader from "../../../n1_main/m1-ui/common/table/TableHeaderCards";
import CardComponent from "./CardComponent";
import TablesCardsPagination from "./TablesCardsPagination";
import {useDebounce} from "use-debounce";
import {useDispatch} from "react-redux";
import {cardsTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import TestAddCardComponent from "./TestAddCardComponent";
import {cardsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsCards";
import {UpdatedCardsType} from "../../../n1_main/m3-dal/cardsAPI";

type CardsListType = {
    name: string
    user_id: string
    packId:string|undefined
}
const CardsList = ({name, user_id,packId}: CardsListType) => {
    const dispatch = useDispatch()
    const [newCard, setNewCard] = useState<boolean>(false)

    const cards = useFridaySelector<CardType[]>(state => state.cards.cards)
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const cardsState = useFridaySelector<InitialCardsType>(state => state.cards)
    const cardSearchName = useFridaySelector<string>(state => state.cards.cardQuestion)
    const debouncedCardsOnPage = useDebounce<number>(cardsState.pageCount, 1000)
    const debouncedPageCardsChanged = useDebounce<number>(cardsState.page, 1000)
    const debouncedSearchCardQ = useDebounce<string>(cardsState.cardQuestion, 1000)
    const debouncedSearchCardA = useDebounce<string>(cardsState.cardAnswer, 1000)
    const debouncedSearchlastUpdated = useDebounce<UpdatedCardsType>(cardsState.sortCards, 0)

    const searchCard = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(cardsActions.searchCardAC(e.currentTarget.value))
    }

    useEffect(() => {
        if(packId) {
            dispatch(cardsTC(packId))
        }
    }, [debouncedCardsOnPage[0],
        debouncedPageCardsChanged[0],
        debouncedSearchCardQ[0],
        debouncedSearchCardA[0],
        debouncedSearchlastUpdated[0]
    ])

    return (
        <div className={style.cardsListBlock}>
            {
                !newCard
                    ? (<div className={style.cardsList}>
                        <div className={style.searchContainer}>
                            <h2> Pack Name: {name}</h2>
                            <input
                                placeholder={"Search..."}
                                value={cardSearchName}
                                onChange={searchCard}
                            />
                            {myId === user_id ?
                                <button
                                    onClick={() => setNewCard(true)}>
                                    Add New Card
                                </button>
                                : <></>}

                        </div>
                        <div className={style.cardsBlock}>
                            <TableCardsHeader user_id={user_id}/>
                            {
                                cards?.map((m, i) => {
                                    return <CardComponent key={i} c={m}/>
                                })
                            }
                            <TablesCardsPagination/>
                        </div>
                    </div>)
                    : (
                        <div>
                            <TestAddCardComponent packId={packId} setNewCard={setNewCard}/>
                        </div>
                    )
            }
        </div>
    )
}
export default CardsList;