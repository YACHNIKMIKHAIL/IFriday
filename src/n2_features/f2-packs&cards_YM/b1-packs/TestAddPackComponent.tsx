import React, {useState} from 'react';
import {addNewPacksTC} from "./ThunkPacks";
import {useDispatch} from "react-redux";

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
        <div>
            New pack name:
            <input type="text" value={newPack} onChange={(e) => seNewPack(e.currentTarget.value)}/>
            Make private:
            <input type="checkbox" onChange={(e) => setNewPackPrivate(e.currentTarget.checked)}/>
            <button onClick={addNewPack}>Add</button>
        </div>
    );
};

export default TestAddPackComponent;