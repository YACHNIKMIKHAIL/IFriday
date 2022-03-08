import React from 'react';
import {logoutUserTC} from "../../../n2_features/f1-auth/a1-login/LoginFormReducer";
import {useSelector} from "react-redux";
import {fridayReducerType} from "../../m2-bll/store";
import {Navigate} from "react-router-dom";
import {RoutesXPaths} from "../routes/routes";

const Logout = () => {

    const isLoggedIn = useSelector<fridayReducerType, boolean>(state => state.login.isLoggedIn)

    const logoutHandler = () => {
        logoutUserTC()
    }

    if (!isLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }

    return (
        <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', padding: '10px', backgroundColor: 'orange'}}>
            <button onClick={logoutHandler}>Click me for logout</button>
        </div>
    );
};

export default Logout;