import React, {useState} from 'react';
import {changePacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import {useDispatch} from "react-redux";
import s from "./AddPackComponent.module.css"

type EditPackComponentType = {
    packId: string
    oldName: string
    setEditPack: (v: boolean) => void
}
const EditPackComponent = ({packId, oldName, setEditPack}: EditPackComponentType) => {

    const dispatch = useDispatch()

    const [newPackName, setNewPackName] = useState<string>(oldName)

    const changePackName = () => {
        dispatch(changePacksTC(newPackName, packId))
        setEditPack(false)
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
                <button onClick={()=>setEditPack(false)}>Cancel</button>
                <button onClick={changePackName}>Save changes</button>
            </div>

        </div>
    )
}

export default EditPackComponent