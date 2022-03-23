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
import {UpdatedType} from "../../../n1_main/m3-dal/packsAPI";
import Modal from "../../../n1_main/m1-ui/common/ModalWindow/ModalWindow";
import {useParams} from "react-router-dom";
import {Undetectable} from "../../../types/Undetectable";

type CardsListType = {
    name: string
    packId: Undetectable<string>
}

const CardsList = ({name}: CardsListType) => {

    const dispatch = useDispatch()

    const [newCard, setNewCard] = useState<boolean>(false)
    const {packId} = useParams<'packId'>()

    const cards = useFridaySelector<CardType[]>(state => state.cards.cards)
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const user_id = useFridaySelector<string>(state => state.cards.cards.filter(f => f.cardsPack_id === packId)[0]?.user_id)
    const cardsState = useFridaySelector<InitialCardsType>(state => state.cards)
    const cardSearchName = useFridaySelector<string>(state => state.cards.cardQuestion)

    const debouncedCardsOnPage = useDebounce<number>(cardsState.pageCount, 1000)
    const debouncedPageCardsChanged = useDebounce<number>(cardsState.page, 1000)
    const debouncedSearchCardQ = useDebounce<string>(cardsState.cardQuestion, 1000)
    const debouncedSearchCardA = useDebounce<string>(cardsState.cardAnswer, 1000)
    const debouncedSearchLastUpdated = useDebounce<UpdatedType>(cardsState.sortCards, 0)

    const searchCard = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(cardsActions.searchCardAC(e.currentTarget.value))
    }

    useEffect(() => {
            if (packId) {
                dispatch(cardsTC(packId))
            }
        }, [debouncedCardsOnPage[0],
            debouncedPageCardsChanged[0],
            debouncedSearchCardQ[0],
            debouncedSearchCardA[0],
            debouncedSearchLastUpdated[0],
        ]
    )

    if (newCard) {
        return (
            <Modal
                backgroundOnClick={() => setNewCard(false)}
                show={true}
                height={0}
                width={0}
                backgroundStyle={{backgroundColor: 'deepskyblue'}}
                enableBackground={true}>
                <TestAddCardComponent
                    packId={packId}
                    setNewCard={setNewCard}
                />
            </Modal>
        )
    }
    return (
        <div className={style.cardsListBlock}>
            <div className={style.cardsList}>
                <div className={style.searchContainer}>
                    <h2> Pack Name: {name}</h2>
                    <input
                        placeholder={"Search..."}
                        value={cardSearchName}
                        onChange={searchCard}
                    />
                    {
                        myId === user_id &&
                        <button
                            onClick={() => setNewCard(true)}>
                            Add New Card
                        </button>
                    }
                </div>
                <div className={style.cardsBlock}>
                    <TableCardsHeader user_id={user_id}/>
                    {
                        cards?.map((tableRow, index) => {
                            return (
                                <CardComponent
                                    key={index}
                                    content={tableRow}
                                />
                            )
                        })
                    }
                    <TablesCardsPagination/>
                </div>
            </div>
        </div>
    )
}

export default CardsList
