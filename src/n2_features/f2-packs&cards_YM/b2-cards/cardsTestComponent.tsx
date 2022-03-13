import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addNewCardTC, cardsTC, deleteCardTC} from "./ThunkCards";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType} from "./cardsReducer";

type CardsTestComponentType = {
    packId: string
}

const CardsTestComponent = ({packId}: CardsTestComponentType) => {
        const dispatch = useDispatch()
        const cards = useFridaySelector<CardType[]>(state => state.cards.cards)
        const [question, setQuestion] = useState<string>('')
        const [answer, setAnswer] = useState<string>('')
        const cancel = () => {
            setQuestion('')
            setAnswer('')
        }
        const saveCard = () => {
            dispatch(addNewCardTC(question, answer, packId))
        }
        console.log('cards:', cards)
        console.log('packId:', packId)

        useEffect(() => {
            dispatch(cardsTC(packId))
        }, [])
        return (
            <div>
                <h3>Card list:</h3>
                {cards.map((m, i) => {
                    return <div key={i}>{m.question}
                        <button onClick={() => dispatch(deleteCardTC(m._id))}>X</button>
                    </div>
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
        )
    }
;

export default CardsTestComponent;