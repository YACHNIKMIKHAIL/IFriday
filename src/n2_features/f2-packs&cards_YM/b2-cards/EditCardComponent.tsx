import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import s from "./../b1-packs/AddPackComponent.module.css"
import {updateCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";

type EditCardComponentType = {
    cardId: string
    oldQ: string
    setEditCard: (v: boolean) => void
}
const EditCardComponent = ({cardId, oldQ, setEditCard}: EditCardComponentType) => {

    const dispatch = useDispatch()

    const [newQ, setNewQ] = useState<string>(oldQ)

    const updatedCard = {
        _id: cardId,
        question: newQ,
        comments: '',
    }
    const saveCard = () => {
        dispatch(updateCardTC(updatedCard))
        setEditCard(false)
    }


    return (
        <div className={s.addItemContainer}>
            <h2>
                Edit card:
            </h2>
            <div className={s.centerInputContainer}>
                    <span>
                        Enter new card question <span>&nbsp; ✎</span>
                    </span>
                <input
                    type="text"
                    value={newQ}
                    onChange={(e) => setNewQ(e.currentTarget.value)}
                />
            </div>

            <div>
                <button onClick={()=>setEditCard(false)}>Cancel</button>
                <button onClick={saveCard}>Save changes</button>
            </div>

        </div>
    )
}

export default EditCardComponent