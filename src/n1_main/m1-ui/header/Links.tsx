import React from 'react';
import {NavLink} from 'react-router-dom';
import {RoutesXPaths} from "../routes/routes";
import s from './Links.module.css'

const Links = () => {

    return (
        <div className={s.main}>
            <>
                <NavLink to={RoutesXPaths.PROFILE}
                         className={({isActive}) => (isActive ? s.active : s.ordinaryLink)}
                         style={{textDecoration: 'none'}}
                >Profile</NavLink>
            </>

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

            <>
                <NavLink to={RoutesXPaths.PACKS}
                         className={({isActive}) => (isActive ? s.active : s.ordinaryLink)}
                         style={{textDecoration: 'none'}}
                >Packs</NavLink>
            </>
            <>
                <NavLink to={RoutesXPaths.CARDS}
                         className={({isActive}) => (isActive ? s.active : s.ordinaryLink)}
                         style={{textDecoration: 'none'}}
                >Cards</NavLink>
            </>
            {/*<>*/}
            {/*    <NavLink to={RoutesXPaths.LEARNED_CARD}*/}
            {/*             className={({isActive}) => (isActive ? s.active : s.ordinaryLink)}*/}
            {/*             style={{textDecoration: 'none'}}*/}
            {/*    >LC</NavLink>*/}
            {/*</>*/}
            <>
                <NavLink to={RoutesXPaths.LOGOUT}
                         className={({isActive}) => (isActive ? s.active : s.ordinaryLink)}
                         style={{textDecoration: 'none'}}
                >Logout</NavLink>
            </>
        </div>
    );
};

export default Links;