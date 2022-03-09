import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import regS from "../a2-register/RegisterForm.module.css";
import {fridayReducerType} from "../../../n1_main/m2-bll/store";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import {Navigate} from 'react-router-dom'
import {passwordRecoveryTC} from "../../../n1_main/m2-bll/r1-reducers/RegisterAndRecoveryPassReducer";


const PasswordRecoveryForm = () => {
    const [email, setEmail] = useState<string>('')
    const dispatch = useDispatch()
    const success = useSelector<fridayReducerType, boolean>(state => state.regForNewPass.passwordRecovery.success)
    const isLoggedIn = useSelector<fridayReducerType, boolean>(state => state.login.isLoggedIn)
    const send = () => {
        dispatch(passwordRecoveryTC(email))
    }
    if (isLoggedIn) {
        return <Navigate to={RoutesXPaths.PROFILE}/>
    }
    return (
        <div className={regS.main}>
            <div className={regS.title}>
                <h1>Cards</h1>
                <h4>Forgot your password?</h4>
                {success && <div>Visit your email</div>}
            </div>
            <form>
                <div className={regS.second}>
                    <input type="text"
                           value={email}
                           onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <div className={regS.buttonsDiv}>
                        <button onClick={send}>send</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PasswordRecoveryForm;