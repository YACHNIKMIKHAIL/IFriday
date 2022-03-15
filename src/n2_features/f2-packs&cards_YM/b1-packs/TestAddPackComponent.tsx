import React, {useState} from 'react';
import {addNewPacksTC} from "./ThunkPacks";
import {useDispatch} from "react-redux";
import s from "./AddPackComponent.module.css"

type TestAddPackComponentType = {
    setAddPack: (v: boolean) => void
}
const TestAddPackComponent = ({setAddPack}: TestAddPackComponentType) => {
    const dispatch = useDispatch()

    const [newPack, seNewPack] = useState<string>('')
    const [newPackPrivate, setNewPackPrivate] = useState<boolean>(false)
    const pack = {
        name: newPack,
        deckCover: '',
        private: newPackPrivate
    }
    const addNewPack = () => {
        dispatch(addNewPacksTC(pack))
        setAddPack(false)
    }

    return (
        <div className={s.addItemContainer}>
            <div>
                <h2>
                    Add new pack:
                </h2>
                <div className={s.addPackInput}>
                    <span>
                    Name pack
                    </span>
                    <input type="text" value={newPack} onChange={(e) => seNewPack(e.currentTarget.value)}/>
                </div>
            </div>
            <div className={s.makePrivate}>
                <span>
                Make private:
                    </span>
                <input type="checkbox" onChange={(e) => setNewPackPrivate(e.currentTarget.checked)}/>
            </div>
            <button onClick={addNewPack}>Add</button>
        </div>
    );
};

export default TestAddPackComponent;