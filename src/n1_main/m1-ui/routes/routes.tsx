import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Profile from "../common/Profile";
import Register from "../common/Register";
import NewPassword from "../common/NewPassword";
import Test from "../common/Test";
import Login from "../common/Login";
import PasswordRecovery from "../common/PasswordRecovery";
import Logout from "../common/Logout";

export enum RoutesXPaths {
    PROFILE = '/IFriday',
    LOGIN = '/login',
    FORGOT = '/forgot',
    REGISTER = '/register',
    RECOVERY = '/passwordrecovery',
    TEST = '/test',
    SET_PASS = '/set-new-password/:token',
    PACKS = '/packs/:id',
    CARDS = '/cards',
    NOT_FOUND = '/404',
    LOGOUT = '/logout'
}

const RoutesX = () => {
    // const isInitialize = useSelector<fridayReducerType, boolean>(state => state.me.isInitialized)
    // const userEmail = useSelector<fridayReducerType, string>(state => state.profile.profile.email)
    // if (!isInitialize) {
    //     return <Me/>
    // }
    // if (userEmail !== '') {
    //     console.log(userEmail)
    //     return <Navigate to={RoutesXPaths.PROFILE}/>
    // }

    return (
        <>
            <Routes>

                <Route path={RoutesXPaths.PROFILE} element={<Profile/>}/>
                <Route path={RoutesXPaths.REGISTER} element={<Register/>}/>
                <Route path={RoutesXPaths.LOGIN} element={
                    <Login/>
                }/>
                <Route path={RoutesXPaths.RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={RoutesXPaths.SET_PASS} element={<NewPassword/>}/>
                <Route path={RoutesXPaths.TEST} element={<Test/>}/>
                <Route path={RoutesXPaths.LOGOUT} element={<Logout/>}/>
                <Route path={RoutesXPaths.NOT_FOUND}
                       element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={RoutesXPaths.NOT_FOUND}/>}/>

            </Routes>
        </>
    );
};

export default RoutesX;