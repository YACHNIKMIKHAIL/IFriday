import React, {useState} from 'react';
import s from "./../b1-packs/AddPackComponent.module.css"
import {useDispatch} from "react-redux";

import {updateCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import {cardsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsCards";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";

type EditCardComponentType = {
    cardId: string
}

const EditCardComponent = ({cardId}: EditCardComponentType) => {

    const dispatch = useDispatch()
    const isLoad = useFridaySelector<boolean>(state => state.app.isLoad)

    const [newQ, setNewQ] = useState<string>('')

    const updatedCard = {
        _id: cardId,
        question: newQ,
        comments: '',
    }

    const saveCard = () => {
        dispatch(updateCardTC(updatedCard))
        dispatch(cardsActions.cardModeAC(null))
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
                <input disabled={isLoad}
                    type="text"
                    value={newQ}
                    onChange={(e) => setNewQ(e.currentTarget.value)}
                />
            </div>

            <div>
                <button onClick={()=>dispatch(cardsActions.cardModeAC(null))} disabled={isLoad}>Cancel</button>
                <button onClick={saveCard} disabled={isLoad}>Save changes</button>
            </div>
        </div>
    )
}

export default EditCardComponent
