import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {cardsTC} from "./ThunkCards";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType} from "./cardsReducer";

type CardsTestComponentType={
    packId:string
}

const CardsTestComponent = ({packId}:CardsTestComponentType) => {
        const dispatch = useDispatch()
        const cards = useFridaySelector<CardType[]>(state => state.cards.cards)
        const [question, setQuestion] = useState<string>('')
        const [answer, setAnswer] = useState<string>('')
        const cancel = () => {
            setQuestion('')
            setAnswer('')
        }
        const saveCard = () => {

        }

        useEffect(() => {
            dispatch(cardsTC(packId))
        }, [])
        return (
            <div>
                <h3>CardSSSS</h3>
                {cards.map((m, i) => {
                    return <div key={i}>{m.question}</div>
                })}
                <h3>Card</h3>
                question:
                <input type="text" value={question}
                       onChange={(e) => setQuestion(e.currentTarget.value)}/>
                answer:
                <input type="text" value={answer}
                       onChange={(e) => setAnswer(e.currentTarget.value)}/>

                <button onClick={cancel}>cancel</button>
                <button onClick={saveCard}>save</button>
            </div>
        );

    }
;

export default CardsTestComponent;