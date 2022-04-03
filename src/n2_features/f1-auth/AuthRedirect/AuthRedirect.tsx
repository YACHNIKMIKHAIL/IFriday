import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {Navigate} from 'react-router-dom'
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type AuthRedirectPagePropsType = DivPropsType & {}

const AuthRedirectPage: React.FC<AuthRedirectPagePropsType> = React.memo(({children, ...restProps}) => {

    const inLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)

    // if (!isInitialized) {
    //     return <Me/>
    // }
    //
    // if (meReducerStateError === "you are not authorized /ᐠ-ꞈ-ᐟ\\") {
    //     return <Navigate to={RoutesXPaths.LOGIN}/>
    // }
    //
    // if (newPassInfo === "\"setNewPassword success —ฅ/ᐠ.̫ .ᐟฅ—\"") {
    //     return <Navigate to={RoutesXPaths.LOGIN}/>
    // }
    //
    // if (userEmail !== '') {
    //
    //     return <Navigate to={RoutesXPaths.PROFILE}/>
    // }
    if (!inLoggedIn) {
        // debugger
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }
    return (
        <>
            <div {...restProps}>{children}</div>
        </>
    )
})

export default AuthRedirectPage