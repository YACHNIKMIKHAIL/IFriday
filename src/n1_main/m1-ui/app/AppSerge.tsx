import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import {HashRouter, Navigate, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../m2-bll/store";
import {RequestStatusType} from "../../m2-bll/r1-reducers/app-reducer";
import Preloader from "../common/preloader/Preloader";
import Main from "../../Main";
import RoutesX, {RoutesXPaths} from "../routes/routes";
import {meTC} from "../../m2-bll/r3-thunks/ThunkMe";


function AppSerge() {
    const status = useFridaySelector<RequestStatusType>(state => state.app.status)
    const dispatch = useDispatch()
    const initialized = useFridaySelector<boolean>(state => state.me.isInitialized)
    const inLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)


    // const loc = useLocation()
    // console.log(loc.pathname)
    // console.log(status)

    useEffect(() => {
        dispatch(meTC())
    }, [])

    if (!initialized) {
        return <Preloader status={status}/>
    }

    if (!inLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }


    return (
        <div className="App">
            <Main/>
            <RoutesX/>
        </div>
    );
}

export default AppSerge;
