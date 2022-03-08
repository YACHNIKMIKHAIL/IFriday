import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Navigate} from "react-router-dom";
import Main from "../Main";
import RoutesX, {RoutesXPaths} from "./routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {loadToken} from "../m2-bll/fridayLocalStorage";
import {setIsLoggedInAC} from "../../n2_features/f1-auth/a1-login/LoginFormReducer";
import {fridayReducerType} from "../m2-bll/store";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = loadToken()
        if (token) {
            dispatch(setIsLoggedInAC(true))
        }
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
