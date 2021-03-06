import React, {useEffect} from 'react';
import PacksList from "../../../n2_features/f2-packs&cards_YM/b1-packs/PacksList";
import {cardsActions} from "../../m2-bll/r2-actions/ActionsCards";
import {useDispatch} from "react-redux";
import {setGlobalErrorAC} from "../../m2-bll/r1-reducers/app-reducer";

const Packs = () => {
    const dispatch=useDispatch()
    //that useEffect fix one danger bug
    useEffect(()=>{
        dispatch(cardsActions.cardModeAC(null))
        dispatch(setGlobalErrorAC(''))
    },[])
    return (
        <div>
            <PacksList/>
        </div>
    )
}

export default Packs