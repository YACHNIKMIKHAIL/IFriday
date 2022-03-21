import React, {useState} from 'react';
import {addNewPacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import {useDispatch} from "react-redux";
import s from "./AddPackComponent.module.css"

type TestAddPackComponentType = {
    setAddPack: (v: boolean) => void
}
const AddPackComponent = ({setAddPack}: TestAddPackComponentType) => {

    const dispatch = useDispatch()

    const [newPack, seNewPack] = useState<string>('')
    const [newPackPrivate, setNewPackPrivate] = useState<boolean>(false)

    const pack = {
        name: newPack,
        deckCover: '',
        private: newPackPrivate,
    }

    const addNewPack = () => {
        dispatch(addNewPacksTC(pack))
        setAddPack(false)
    }

    const turnBach = () => {
        setAddPack(false)
    }

    return (
        <div className={s.addItemContainer}>
            <h2>
                Add new pack:
            </h2>
            <div className={s.centerInputContainer}>
                    <span>
                        Name pack
                    </span>
                <input
                    type="text"
                    value={newPack}
                    onChange={(e) => seNewPack(e.currentTarget.value)}
                />
            </div>

            <div className={s.makePrivateContainer}>
                <span>
                    Make private:
                </span>
                <input
                    type="checkbox"
                    onChange={(e) => setNewPackPrivate(e.currentTarget.checked)}
                />
            </div>
            <div>
                <button onClick={turnBach}>Cancel</button>
                <button onClick={addNewPack}>Add</button>
            </div>

        </div>
    )
}

export default AddPackComponent