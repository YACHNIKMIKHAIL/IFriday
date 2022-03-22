import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import Me from "../a3-me/me";
import {Navigate} from 'react-router-dom'
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import {Undetectable} from "../../../types/Undetectable";

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

type AuthRedirectPagePropsType = DivPropsType & {}

const AuthRedirectPage: React.FC<AuthRedirectPagePropsType> = React.memo(({children, ...restProps}) => {

    const isInitialized = useFridaySelector<boolean>(state => state.me.isInitialized)
    const meReducerStateError = useFridaySelector<Undetectable<string>>(state => state.me.error)
    const newPassInfo = useFridaySelector<Undetectable<string>>(state => state.regForNewPass.newPassword.info)
    const userEmail = useFridaySelector<string>(state => state.login.user.email)

    if (!isInitialized) {
        return <Me/>
    }

    if (meReducerStateError === "you are not authorized /ᐠ-ꞈ-ᐟ\\") {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }

    if (newPassInfo === "\"setNewPassword success —ฅ/ᐠ.̫ .ᐟฅ—\"") {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }

    if (userEmail !== '') {

        return <Navigate to={RoutesXPaths.PROFILE}/>
    }

    return (
        <>
            <div {...restProps}>{children}</div>
        </>
    )
})

export default AuthRedirectPage