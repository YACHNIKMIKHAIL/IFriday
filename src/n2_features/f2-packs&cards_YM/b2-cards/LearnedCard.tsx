import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import {PackType} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {useDispatch} from "react-redux";
import {gradeCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";


const LearnedCard = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const {cardId} = useParams<'cardId'>();
    const [showAnswer, setShowAnswer] = useState<boolean>(false)
    const [cardRate, setCardRate] = useState<1 | 2 | 3 | 4 | 5 | undefined>(undefined)
    const learnedCard = useFridaySelector<CardType>(state => state.cards.cards.filter(f => f._id === cardId)[0])
    const packName = useFridaySelector<string>(state => state.packs.cardPacks.filter(f => f._id === learnedCard.cardsPack_id)[0].name)

    console.log(learnedCard.grade)
    console.log(cardRate)

    const nextCard = () => {
        if(cardRate) {
            dispatch(gradeCardTC(cardRate, learnedCard._id))
        }
    }
    return (
        <div style={{borderRadius: '10px', backgroundColor: 'white'}}>
            <div>
                learn:
                {packName}
            </div>
            <div>
                question:
                {learnedCard.question}
            </div>
            {showAnswer && <div>
                <div>
                    answer:
                    {learnedCard.answer}
                </div>
                <div>
                    rate yourself:
                    <div>
                        <input type="radio" onChange={() => setCardRate(5)} value={cardRate}
                               name='rate'/>5
                    </div>
                    <div>
                        <input type="radio" onChange={() => setCardRate(4)} value={cardRate}
                               name='rate'/>4
                    </div>
                    <div>
                        <input type="radio" onChange={() => setCardRate(3)} value={cardRate}
                               name='rate'/>3
                    </div>
                    <div>
                        <input type="radio" onChange={() => setCardRate(2)} value={cardRate}
                               name='rate'/>2
                    </div>
                    <div>
                        <input type="radio" onChange={() => setCardRate(1)} value={cardRate}
                               name='rate'/>1
                    </div>
                </div>
            </div>}

            <div>
                <button onClick={() => navigate(RoutesXPaths.CARDS_WITH_ID)}>Cancel</button>
                {!showAnswer
                    ? <button onClick={() => setShowAnswer(!showAnswer)}>Show answer</button>
                    : <button onClick={nextCard}>Next card</button>
                }

            </div>
        </div>
    )
}

export default LearnedCard;