import React from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Register from "../common/Register";
import NewPassword from "../common/NewPassword";
import Packs from "../common/Packs";
import Login from "../common/Login";
import PasswordRecovery from "../common/PasswordRecovery";
import Logout from "../common/Logout";
import Profile from "../common/Profile/Profile";
import Cards from "../common/Cards";
import {useFridaySelector} from "../../m2-bll/store";
import LearnedCardContainer from '../../../n2_features/f2-packs&cards_YM/b2-cards/LearnedCardContainer';
import AuthRedirectPage from "../../../n2_features/f1-auth/AuthRedirect/AuthRedirect";

export enum RoutesXPaths {
    PROFILE = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    RECOVERY = '/passwordRecovery',
    PACKS = '/packs',
    CARDS = '/cards',
    CARDS_WITH_ID = '/cards/:packId',
    SET_PASS = '/set-new-password/:token',
    NOT_FOUND = '/404',
    LOGOUT = '/logout',
    LEARNED_CARD = '/card',
    LEARNED_CARD_WITH_ID = '/card/:packId/:cardId',
}

const RoutesX = () => {

    return (
        <div style={{height: '100vh'}}>
            {/*<Redirect/>*/}

            <Routes>
                <Route path={RoutesXPaths.PROFILE} element={
                    <AuthRedirectPage>
                        <Profile/>
                    </AuthRedirectPage>
                }/>
                <Route path={RoutesXPaths.REGISTER} element={<Register/>}/>
                <Route path={RoutesXPaths.LOGIN} element={
                    <Login/>
                }/>
                <Route path={RoutesXPaths.RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={RoutesXPaths.SET_PASS} element={<NewPassword/>}/>
                <Route path={RoutesXPaths.PACKS} element={
                    <AuthRedirectPage>
                        <Packs/>
                    </AuthRedirectPage>
                }/>
                <Route path={RoutesXPaths.CARDS} element={
                    <AuthRedirectPage>
                        <Cards/>
                    </AuthRedirectPage>
                }/>
                <Route path={RoutesXPaths.CARDS_WITH_ID} element={
                    <AuthRedirectPage>
                        <Cards/>
                    </AuthRedirectPage>
                }/>
                <Route path={RoutesXPaths.LEARNED_CARD} element={
                    <AuthRedirectPage>
                        <LearnedCardContainer/>
                    </AuthRedirectPage>
                }/>
                <Route path={RoutesXPaths.LEARNED_CARD_WITH_ID} element={
                    <AuthRedirectPage>
                        <LearnedCardContainer/>
                    </AuthRedirectPage>
                }/>
                <Route path={RoutesXPaths.LOGOUT} element={<Logout/>}/>
                <Route path={RoutesXPaths.NOT_FOUND}
                       element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={RoutesXPaths.NOT_FOUND}/>}/>

            </Routes>
        </div>
    )
}

export default RoutesX

export const Redirect = () => {

    const {pathname} = useLocation()

    const inLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)


    if (!inLoggedIn && pathname !== RoutesXPaths.LOGIN) {
        debugger
        if (pathname === RoutesXPaths.SET_PASS) {
            debugger
        } else if (pathname === RoutesXPaths.REGISTER) {
            debugger
        } else if (pathname === RoutesXPaths.RECOVERY) {
            debugger
        } else if (!inLoggedIn) {
            debugger
            return <Navigate to={RoutesXPaths.LOGIN}/>
        }
        // else {
        //     debugger
        //     return <Navigate to={RoutesXPaths.LOGIN}/>
        // }
    }


    return (
        <>
        </>
    )
}