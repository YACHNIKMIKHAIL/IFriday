import React from 'react';
import {useDispatch} from "react-redux";
import s from "./../../../../n2_features/f2-packs&cards_YM/b1-packs/AddPackComponent.module.css"
import {useFridaySelector} from "../../../m2-bll/store";
import {setGlobalErrorAC} from "../../../m2-bll/r1-reducers/app-reducer";


const GlobalError = () => {
    const dispatch = useDispatch()
    const errorText=useFridaySelector<string>(state=>state.app.globalError)

    const resetGlobalError = ()=>{
        dispatch(setGlobalErrorAC(''))
    }


    return (
        <div className={s.addItemContainer}>
            <h2>
                Incorrect action:
            </h2>
            <div className={s.centerInputContainer}>
                    <span>
                        {errorText} <span>&nbsp; ✎</span>
                    </span>
            </div>

            <div>
                <button onClick={resetGlobalError}>Ok</button>
            </div>
        </div>
    )
}

export default GlobalError
