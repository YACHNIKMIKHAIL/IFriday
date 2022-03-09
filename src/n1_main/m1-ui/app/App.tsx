import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Main from "../../Main";
import RoutesX from "../routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {loadToken} from "../../m2-bll/fridayLocalStorage";
import {setIsLoggedInAC} from "../../../n2_features/f1-auth/a1-login/LoginFormReducer";
import {meTC} from "../../../n2_features/f1-auth/a3-me/meReducer";
import Preloader from "../common/Preloader";
import {fridayReducerType} from "../../m2-bll/store";
import {RequestStatusType} from "./app-reducer";

function App() {
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

export default App;
