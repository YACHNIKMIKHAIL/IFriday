import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Main from "../Main";
import {fridayReducerType} from "../m2-bll/store";
import RoutesX from "./routes/routes";
import {meTC} from "../../n2_features/f1-auth/a3-me/meReducer";
import Me from "../../n2_features/f1-auth/a3-me/me";

function App() {
    const dispatch = useDispatch()
    const isInitialized = useSelector<fridayReducerType, boolean>(state => state.me.isInitialized)
    const meReducerStateError = useSelector<fridayReducerType, string | undefined>(state => state.me.error)

    useEffect(() => {
        dispatch(meTC())
    }, [dispatch])

    if (!isInitialized) {
        return <Me/>
    } else if (!!meReducerStateError) {
        <Navigate to={'/login'}/>
    }
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
