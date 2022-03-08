import React from 'react';
import {NavLink} from 'react-router-dom';
import {RoutesXPaths} from "../routes/routes";

const Links = () => {
    return (
        <div>
            <button><NavLink to={RoutesXPaths.PROFILE}
                             style={{textDecoration: 'none'}}>Profile</NavLink></button>
            <button><NavLink to={RoutesXPaths.REGISTER}
                             style={{textDecoration: 'none'}}>Register</NavLink></button>
            <button><NavLink to={RoutesXPaths.LOGIN}
                             style={{textDecoration: 'none'}}>Login</NavLink></button>
            <button><NavLink to={RoutesXPaths.RECOVERY}
                             style={{textDecoration: 'none'}}>PasswordRecovery</NavLink></button>
            <button><NavLink to={RoutesXPaths.SET_PASS}
                             style={{textDecoration: 'none'}}>NewPassword</NavLink></button>
            <button><NavLink to={RoutesXPaths.TEST}
                             style={{textDecoration: 'none'}}>Test</NavLink></button>
            <button><NavLink to={RoutesXPaths.LOGOUT}
                             style={{textDecoration: 'none'}}>Logout</NavLink></button>
        </div>
    );
};

export default Links;