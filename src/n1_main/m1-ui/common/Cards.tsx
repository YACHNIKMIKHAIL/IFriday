import React, {useEffect} from 'react';
import CardsList from "../../../n2_features/f2-packs&cards_YM/b2-cards/CardsList";
import {useFridaySelector} from "../../m2-bll/store";
import {Navigate, useSearchParams} from "react-router-dom";
import {CardType} from "../../../n2_features/f2-packs&cards_YM/b2-cards/cardsReducer";
import {PackType} from "../../../n2_features/f2-packs&cards_YM/b1-packs/packsReducer";
import {cardsTC} from "../../../n2_features/f2-packs&cards_YM/b2-cards/ThunkCards";
import {useDispatch} from "react-redux";
import {RoutesXPaths} from "../routes/routes";

const Cards = () => {
    console.log('Cards')
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const cardsPack_id = searchParams.get('cardsPack_id');
    const cards = useFridaySelector<CardType[]>(state => state.cards.cards)
    const actualPack = useFridaySelector<PackType[]>(state => state.packs.cardPacks.filter(f => f._id === cards[0].cardsPack_id))[0]


    useEffect(() => {
        if(cardsPack_id) {
            dispatch(dispatch(cardsTC(cardsPack_id)))
        }
    }, [cardsPack_id])

    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }
    return (
        <div>
            <CardsList name={actualPack.name}/>
        </div>
    );
};

export default Cards;