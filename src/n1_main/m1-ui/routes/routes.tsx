import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Profile from "../common/Profile";
import Register from "../common/Register";
import NewPassword from "../common/NewPassword";
import Test from "../common/Test";
import Login from "../common/Login";
import PasswordRecovery from "../common/PasswordRecovery";

const RoutesX = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'passwordrecovery'} element={<PasswordRecovery/>}/>
                <Route path={'newpassword'} element={<NewPassword/>}/>
                <Route path={'test'} element={<Test/>}/>
                <Route path={'/404'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </>
    );
};

export default RoutesX;