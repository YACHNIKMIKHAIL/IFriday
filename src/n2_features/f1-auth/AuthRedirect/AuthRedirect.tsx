import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {fridayReducerType} from "../../../n1_main/m2-bll/store";
import Me from "../a3-me/me";


type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type AuthRedirectPagePropsType = DivPropsType & {};

const AuthRedirectPage: React.FC<AuthRedirectPagePropsType> = React.memo(({ children, ...restProps }) => {

    const isInitialized = useSelector<fridayReducerType, boolean>(state => state.me.isInitialized)
    const meReducerStateError = useSelector<fridayReducerType, string | undefined>(state => state.me.error)

    if (!isInitialized) {
        return <Me/>
    }
    if (meReducerStateError === "you are not authorized /ᐠ-ꞈ-ᐟ\\") {
        return <Navigate to={'/login'}/>
    }
    return (
        <>
            <div {...restProps}>{children}</div>
        </>
    );
});

export default AuthRedirectPage;