import React from 'react';
import {logoutUserTC} from "../../m2-bll/r1-reducers/LoginFormReducer";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../m2-bll/store";
import {Navigate} from "react-router-dom";
import {RoutesXPaths} from "../routes/routes";
import style from './Logout.module.css'

const Logout = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)

    const logoutHandler = () => {
        dispatch(logoutUserTC())
    }

    if (!isLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }

    return (
        <div className={style.logOutBlock}>
            <div className={style.title}>
                Are you sure you want to exit?
            </div>
            <div className={style.text}>
                If you are sure click the button below
            </div>
            <div
                className={style.logoutBtn}
                onClick={logoutHandler}>
                Click me for logout
            </div>
        </div>
    )
};

export default Logout;