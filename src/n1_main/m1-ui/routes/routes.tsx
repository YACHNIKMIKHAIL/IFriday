import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Profile from "../common/Profile";
import Register from "../common/Register";
import NewPassword from "../common/NewPassword";
import Test from "../common/Test";
import Login from "../common/Login";
import PasswordRecovery from "../common/PasswordRecovery";
import AuthRedirectPage from "../../../n2_features/f1-auth/AuthRedirect/AuthRedirect";
import {useSelector} from "react-redux";
import {fridayReducerType} from "../../m2-bll/store";
import Me from "../../../n2_features/f1-auth/a3-me/me";

const RoutesX = () => {
    const isInitialize = useSelector<fridayReducerType, boolean>(state => state.me.isInitialized)
    if(!isInitialize){
        return <Me/>
    }
    return (
        <>
            <Routes>
                <Route path={'/IFriday'} element={<AuthRedirectPage>
                    <Profile/>
                </AuthRedirectPage>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'passwordrecovery'} element={<PasswordRecovery/>}/>
                <Route path={'set-new-password/:token'} element={
                    <NewPassword/>
                }/>
                <Route path={'test'} element={<Test/>}/>
                <Route path={'/404'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </>
    );
};

export default RoutesX;