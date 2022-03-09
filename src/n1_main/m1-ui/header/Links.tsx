import React from 'react';
import {NavLink} from 'react-router-dom';
import {RoutesXPaths} from "../routes/routes";
import style from "./Links.module.css"

const Links = () => {
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