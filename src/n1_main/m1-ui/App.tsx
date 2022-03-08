import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Main from "../Main";
import RoutesX from "./routes/routes";
import {loadIsLoggedIn} from "../m2-bll/fridayLocalStorage";
import {setIsLoggedInAC} from "../../n2_features/f1-auth/a1-login/LoginFormReducer";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setIsLoggedInAC(loadIsLoggedIn()))
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
