import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fridayReducerType} from "../../m2-bll/store";
import {RequestStatusType} from "../../m2-bll/r1-reducers/app-reducer";
import Preloader from "../common/Preloader";
import {loadToken} from "../../m2-bll/fridayLocalStorage";
import {setIsLoggedInAC} from "../../m2-bll/r1-reducers/LoginFormReducer";
import Main from "../../Main";
import RoutesX from "../routes/routes";
import {meTC} from "../../m2-bll/r3-thunks/ThunkMe";

function AppSerge() {
    const status=useSelector<fridayReducerType,RequestStatusType>(state => state.app.status)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        const token = loadToken()
        if (token) {
            dispatch(setIsLoggedInAC(true))
        }
    }, [])
    useEffect(() => {
        dispatch(meTC())
    }, [])


    return (
        <div className="App">
            <HashRouter>
                <>
                    <Preloader status={status}/>
                    <Main/>
                    <RoutesX/>
                </>
            </HashRouter>
        </div>
    );
}

export default AppSerge;
