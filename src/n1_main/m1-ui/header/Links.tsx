import React from 'react';
import {NavLink} from 'react-router-dom';
import {RoutesXPaths} from "../routes/routes";
import style from "./Links.module.css"
import {useFridaySelector} from "../../m2-bll/store";

const Links = () => {
    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)

    if (!isLoggedIn) {
        return <div className={style.main}><></></div>
    }

    return (
        <div className={style.links}>
            <NavLink to={RoutesXPaths.PROFILE}
                     className={(navData) => navData.isActive ? style.active : "" }
                     style={{textDecoration: 'none'}}>Profile</NavLink>
            <NavLink to={RoutesXPaths.REGISTER}
                     className={(navData) => navData.isActive ? style.active : "" }
                     style={{textDecoration: 'none'}}>Register</NavLink>
            <NavLink to={RoutesXPaths.LOGIN}
                     className={(navData) => navData.isActive ? style.active : "" }
                     style={{textDecoration: 'none'}}>Login</NavLink>
            <NavLink to={RoutesXPaths.RECOVERY}
                     className={(navData) => navData.isActive ? style.active : "" }
                     style={{textDecoration: 'none'}}>PasswordRecovery</NavLink>
            <NavLink to={RoutesXPaths.SET_PASS}
                     className={(navData) => navData.isActive ? style.active : "" }
                     style={{textDecoration: 'none'}}>NewPassword</NavLink>
            <NavLink to={RoutesXPaths.TEST}
                     className={(navData) => navData.isActive ? style.active : "" }
                     style={{textDecoration: 'none'}}>Test</NavLink>
            <NavLink to={RoutesXPaths.LOGOUT}
                     className={(navData) => navData.isActive ? style.active : "" }
                     style={{textDecoration: 'none'}}>Logout</NavLink>
        </div>
    );
};

export default Links;