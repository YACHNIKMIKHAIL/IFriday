import React from 'react';
import CardsList from "../../../n2_features/f2-packs&cards_YM/b2-cards/CardsList";
import {useFridaySelector} from "../../m2-bll/store";
import {useParams} from "react-router-dom";
import {PackType} from "../../m2-bll/r1-reducers/packsReducer";

const Cards = () => {
    const {packId} = useParams<'packId'>();
    const actualPack = useFridaySelector<PackType[]>(state => state.packs.cardPacks.filter(f => f._id === packId))[0]

    return (
        <div>
            <CardsList name={actualPack?.name} user_id={actualPack?.user_id} packId={packId}/>
        </div>
    );
};

export default Cards;