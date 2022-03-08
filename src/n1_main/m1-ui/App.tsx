import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Main from "../Main";
import RoutesX from "./routes/routes";
import {useDispatch} from "react-redux";
import {loadToken} from "../m2-bll/fridayLocalStorage";
import {setIsLoggedInAC} from "../../n2_features/f1-auth/a1-login/LoginFormReducer";
import {meTC} from "../../n2_features/f1-auth/a3-me/meReducer";

function App() {
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
                    <Main/>
                    <RoutesX/>
                </>
            </HashRouter>
        </div>
    );
}

export default App;
