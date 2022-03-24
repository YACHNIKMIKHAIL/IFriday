import React, {useState} from 'react';
import {addNewPacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import {useDispatch} from "react-redux";
import s from "./AddPackComponent.module.css"
import {packsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsPacks";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";



const AddPackComponent = () => {

    const dispatch = useDispatch()
    const isLoad = useFridaySelector<boolean>(state => state.app.isLoad)
    const [newPack, seNewPack] = useState<string>('')
    const [newPackPrivate, setNewPackPrivate] = useState<boolean>(false)

    const pack = {
        name: newPack,
        deckCover: '',
        private: newPackPrivate,
    }

    const addNewPack = () => {
        dispatch(addNewPacksTC(pack))
        dispatch(packsActions.packModeAC(null))
    }

    const turnBach = () => {
        dispatch(packsActions.packModeAC(null))
    }

    return (
        <div className={s.addItemContainer}>
            <h2>
                Add new pack:
            </h2>
            <div className={s.centerInputContainer}>
                    <span>
                        Name pack <span>&nbsp; ✎</span>
                    </span>
                <input disabled={isLoad}
                    type="text"
                    value={newPack}
                    onChange={(e) => seNewPack(e.currentTarget.value)}
                />
            </div>

            <div className={s.makePrivateContainer}>
                <span>
                    Make private:
                </span>
                <input disabled={isLoad}
                    type="checkbox"
                    onChange={(e) => setNewPackPrivate(e.currentTarget.checked)}
                />
            </div>
            <div>
                <button onClick={turnBach} disabled={isLoad}>Cancel</button>
                <button onClick={addNewPack} disabled={isLoad}>Add</button>
            </div>

        </div>
    )
}

export default AddPackComponent
