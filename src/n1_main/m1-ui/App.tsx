import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Main from "../Main";
import RoutesX from "./routes/routes";
import {useDispatch} from "react-redux";
import {loadToken} from "../m2-bll/fridayLocalStorage";
import {setIsLoggedInAC} from "../m2-bll/r1-reducers/LoginFormReducer";
import {meTC} from "../m2-bll/r1-reducers/meReducer";

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
