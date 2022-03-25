import React, {useState} from 'react';
import s from "./AddPackComponent.module.css"
import {useDispatch} from "react-redux";

import {changePacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import {packsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsPacks";

type EditPackComponentType = {
    packId: string
    oldName: string
}

const EditPackComponent = ({packId, oldName}: EditPackComponentType) => {

    const dispatch = useDispatch()

    const [newPackName, setNewPackName] = useState<string>(oldName)

    const changePackName = () => {
        dispatch(changePacksTC(newPackName, packId))
        dispatch(packsActions.packModeAC(null))
    }

    return (
        <div className={s.addItemContainer}>
            <h2>
                Edit pack:
            </h2>
            <div className={s.centerInputContainer}>
                    <span>
                        Enter new pack name <span>&nbsp; ✎</span>
                    </span>
                <input
                    type="text"
                    value={newPackName}
                    onChange={(e) => setNewPackName(e.currentTarget.value)}
                />
            </div>

            <div>
                <button onClick={()=>dispatch(packsActions.packModeAC(null))}>Cancel</button>
                <button onClick={changePackName}>Save changes</button>
            </div>

        </div>
    )
}

export default EditPackComponent
