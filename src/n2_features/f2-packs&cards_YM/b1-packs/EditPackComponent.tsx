import React, {useState} from 'react';
import {changePacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import {useDispatch} from "react-redux";
import s from "./AddPackComponent.module.css"
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
        dispatch(packsActions.packModeAC('edit',false))
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
                <button onClick={()=>dispatch(packsActions.packModeAC('edit',false))}>Cancel</button>
                <button onClick={changePackName}>Save changes</button>
            </div>

        </div>
    )
}

export default EditPackComponent
