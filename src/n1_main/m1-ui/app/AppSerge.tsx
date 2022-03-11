import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../m2-bll/store";
import {RequestStatusType} from "../../m2-bll/r1-reducers/app-reducer";
import Preloader from "../common/Preloader";
import {loadToken} from "../../m2-bll/fridayLocalStorage";
import Main from "../../Main";
import RoutesX from "../routes/routes";
import {meTC} from "../../m2-bll/r3-thunks/ThunkMe";
import {LoginFormActions} from "../../m2-bll/r2-actions/ActionLoginForm";

function AppSerge() {

    const status = useFridaySelector<RequestStatusType>(state => state.app.status)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        const token = loadToken()
        if (token) {
            dispatch(LoginFormActions.setIsLoggedInAC(true))
        }
    }, [])
    useEffect(() => {
        dispatch(meTC())
    }, [])




    return (
        <div className="App">
            <BrowserRouter>
                <>
                    <Preloader status={status}/>
                    <Main/>
                    <RoutesX/>
                </>
            </BrowserRouter>
        </div>
    );
}

export default AppSerge;
