import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import {PackType} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {useDispatch} from "react-redux";
import {cardsTC, gradeCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import s from './LearnedCard.module.css'
import {RequestStatusType} from "../../../n1_main/m2-bll/r1-reducers/app-reducer";
import Preloader from "../../../n1_main/m1-ui/common/preloader/Preloader";

const LearnedCardContainer = () => {
    const {packId} = useParams<'packId'>();
    const appStatus = useFridaySelector<RequestStatusType>(state => state.app.status)

    const dispatch = useDispatch()

    useEffect(() => {
        if (packId) {
            dispatch(cardsTC(packId))
        }
    }, [])

    if (appStatus === 'loading') {
        return <Preloader status={appStatus}/>
    }

    return (
        <div>
            <LearnedCard/>
        </div>
    )
}

export default LearnedCardContainer;

export const LearnedCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cardId} = useParams<'cardId'>();
    const {packId} = useParams<'packId'>();
    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    const learnedCard = useFridaySelector<CardType>(state => state.cards.cards.filter(f => f._id === cardId)[0])
    const actualPack = useFridaySelector<PackType>(state => state.packs.cardPacks.filter(f => f._id === packId)[0])
    const actualPackCards = useFridaySelector<CardType[]>(state => state.cards.cards.filter(f => f.cardsPack_id === packId))
    const [actualCard, setActualCard] = useState<CardType>(learnedCard)


    const [cardRate, setCardRate] = useState<number | undefined>(undefined)

    const getCard = (cards: CardType[]) => {
        const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
        const rand = Math.random() * sum;
        const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
                const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
                return {sum: newSum, id: newSum < rand ? i : acc.id}
            }
            , {sum: 0, id: -1});

        setActualCard(cards[res.id + 1]);
    }

    const nextCard = () => {
        if (cardRate) {
            dispatch(gradeCardTC(cardRate, learnedCard._id))
        }
        getCard(actualPackCards)
        setShowAnswer(false)
    }
    const goBack = () => {
        navigate(RoutesXPaths.CARDS)
    }


    return <div className={s.addItemContainer}
                style={{borderRadius: '10px', backgroundColor: 'white'}}>
        <h2>
            learn:
            {actualPack?.name}
        </h2>
        <div>
            <div>
                question:
                {actualCard?.question}
            </div>
            {
                showAnswer &&
                <div>
                    <div>
                        answer:
                        {actualCard?.answer}
                    </div>
                    <div>
                        rate yourself:
                        <label style={{display: 'flex'}}>
                            <input type="radio" onChange={() => setCardRate(5)} value={cardRate}
                                   name='rate'/>знал
                        </label>
                        <label style={{display: 'flex'}}>
                            <input type="radio" onChange={() => setCardRate(4)} value={cardRate}
                                   name='rate'/>перепутал
                        </label>
                        <label style={{display: 'flex'}}>
                            <input type="radio" onChange={() => setCardRate(3)} value={cardRate}
                                   name='rate'/>долго думал
                        </label>
                        <label style={{display: 'flex'}}>
                            <input type="radio" onChange={() => setCardRate(2)} value={cardRate}
                                   name='rate'/>забыл
                        </label>
                        <label style={{display: 'flex'}}>
                            <input type="radio" onChange={() => setCardRate(1)} value={cardRate}
                                   name='rate'/>не знал
                        </label>
                    </div>
                </div>
            }
        </div>
        <div>
            <button onClick={goBack}>Cancel</button>
            {
                !showAnswer
                    ? <button onClick={() => setShowAnswer(!showAnswer)}>Show answer</button>
                    : <button onClick={nextCard}>Next card</button>
            }
        </div>
    </div>
}