import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addNewCardTC, cardsTC, deleteCardTC, updateCardTC} from "./ThunkCards";
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


        const [updateQuestion, setUpdateQuestion] = useState<string>('')
        const [updateComent, setUpdateComent] = useState<string>('')

        const updateCard = (id: string) => {
            const updatedModel = {
                _id: id,
                question: updateQuestion,
                comments: updateComent,
            }
            dispatch(updateCardTC(updatedModel))
        }
        useEffect(() => {
            dispatch(cardsTC(packId))
        }, [])
        return (
            <div>
                <h3>Card list:</h3>

                {cards.map((m, i) => {
                    return <div key={i}>{m.question}
                        <button onClick={() => dispatch(deleteCardTC(m._id))}>X</button>
                        <h3>Uddate card</h3>
                        question:
                        <input type="text" value={updateQuestion}
                               onChange={(e) => setUpdateQuestion(e.currentTarget.value)}/>
                        comment:
                        <input type="text" value={updateComent}
                               onChange={(e) => setUpdateComent(e.currentTarget.value)}/>

                        <button onClick={() => updateCard(m._id)}>update</button>
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