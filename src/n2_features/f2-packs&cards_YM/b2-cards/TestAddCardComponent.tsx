import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import s from "./../b1-packs/AddPackComponent.module.css"
import {addNewCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";

type TestAddCardComponentType = {
    setNewCard: (c: boolean) => void
    packId:string|undefined
}
const TestAddCardComponent = ({setNewCard,packId}: TestAddCardComponentType) => {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const addNewCard = () => {
        if(packId) {
            dispatch(addNewCardTC(question, answer, packId))
            setNewCard(false)
        }
    }
    const turnBach = () => {
        setNewCard(false)
    }

    return (
        <div className={s.addItemContainer}>
            <div>
                <h2>
                    Add new card:
                </h2>
                <div className={s.addPackInput}>
                    <span>
                    Question:
                    </span>
                    <input type="text" value={question} onChange={(e) => setQuestion(e.currentTarget.value)}/>
                </div>
            </div>
            <div className={s.makePrivate}>
                <span>
                Answer:
                    </span>
                <input type="text" value={answer} onChange={(e) => setAnswer(e.currentTarget.value)}/>
            </div>
            <button onClick={addNewCard}>Add</button>
            <button onClick={turnBach}>Cancel</button>
        </div>
    );
};

export default TestAddCardComponent;