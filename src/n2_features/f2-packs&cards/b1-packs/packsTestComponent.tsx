import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {packsActions} from "./ActionsPacks";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {packsTC} from "./ThunkPacks";
import {InitialCardPacksType} from "./packsReducer";


const PacksTestComponent = () => {
    const dispatch = useDispatch()
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const packsState = useFridaySelector<InitialCardPacksType>(state => state.packs)

    const allMy = (value: string) => {
        dispatch(packsActions.allMyAC(value))
    }
    const onChangeMin = (min: number) => {
        dispatch(packsActions.minAC(min))
    }
    const onChangeMax = (max: number) => {
        dispatch(packsActions.maxAC(max))
    }
    const search = (value: string) => {
        dispatch(packsActions.searchAC(value))
    }
    const go = () => {
        dispatch(packsTC())
    }
    const setPage = (page: number) => {
        dispatch(packsActions.pageAC(page))
    }
    const setCardsPage = (cardsPage: number) => {
        dispatch(packsActions.cardsPageAC(cardsPage))
    }

    console.log(packsState)

    const [newPackName,setNewPackName]=useState<string>('')
    const [newPackPrivate,setNewPackPrivate]=useState<boolean>(false)

    const newPack = {
        name: newPackName,
        deckCover: '',
        private: newPackPrivate
    }
    const addNewPack=()=>{

    }

return (
    <div>
        <div>
            <button onClick={() => allMy('')}>All</button>
            <button onClick={() => allMy(myId)}>My</button>
        </div>
        <div>
            min:
            <input type="number" onChange={(e) => onChangeMin(+e.currentTarget.value)}/>
            max:
            <input type="number" onChange={(e) => onChangeMax(+e.currentTarget.value)}/>
        </div>
        <div>
            search:
            <input type="text" onChange={(e) => search(e.currentTarget.value)}/>
            <button onClick={go}>go!</button>
        </div>
        <div>
            page:
            <input type="number" onChange={(e) => setPage(+e.currentTarget.value)}/>
        </div>
        <div>
            cards per page:
            <input type="number" onChange={(e) => setCardsPage(+e.currentTarget.value)}/>
        </div>

        <h1>New PACKS</h1>
        <div>
            new pack name:
            <input type="text" onChange={(e)=>setNewPackName(e.currentTarget.value)}/>
            private:
            <input type="checkbox" onChange={(e)=>setNewPackPrivate(e.currentTarget.checked)}/>
            <button>add pack</button>
        </div>
    </div>
);
}
;

export default PacksTestComponent;