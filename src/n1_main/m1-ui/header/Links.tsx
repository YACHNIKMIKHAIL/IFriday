import React from 'react';
import {NavLink} from 'react-router-dom';
import {RoutesXPaths} from "../routes/routes";
import s from './Links.module.css'
import {useFridaySelector} from "../../m2-bll/store";

const Links = () => {
    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)

    if (!isLoggedIn) {
        return <div className={s.main}><></></div>
    }

    return (
        <div className={s.main}>
            <><NavLink to={RoutesXPaths.PROFILE}
                       className={({isActive}) => (isActive ? s.active : '')}
                       style={{textDecoration: 'none'}}
            >Profile</NavLink></>

            {/*<><NavLink to={RoutesXPaths.REGISTER}*/}
            {/*           className={({isActive}) => (isActive ? s.activeR : '')}*/}
            {/*           style={{textDecoration: 'none'}}*/}
            {/*>Register</NavLink></>*/}

            {/*<><NavLink to={RoutesXPaths.LOGIN}*/}
            {/*           className={({isActive}) => (isActive ? s.active : '')}*/}
            {/*           style={{textDecoration: 'none'}}*/}
            {/*>Login</NavLink></>*/}

            {/*<><NavLink to={RoutesXPaths.RECOVERY}*/}
            {/*           className={({isActive}) => (isActive ? s.activeR : '')}*/}
            {/*           style={{textDecoration: 'none'}}*/}
            {/*>PasswordRecovery</NavLink></>*/}

            {/*<><NavLink to={RoutesXPaths.SET_PASS}*/}
            {/*           className={({isActive}) => (isActive ? s.activeR : '')}*/}
            {/*           style={{textDecoration: 'none'}}*/}
            {/*>NewPassword</NavLink></>*/}

            <><NavLink to={RoutesXPaths.TEST}
                       className={({isActive}) => (isActive ? s.active : '')}
                       style={{textDecoration: 'none'}}
            >Test</NavLink></>
            <><NavLink to={RoutesXPaths.LOGOUT}
                       className={({isActive}) => (isActive ? s.activeR : '')}
                       style={{textDecoration: 'none'}}
            >Logout</NavLink></>
        </div>
    );
};

export default Links;