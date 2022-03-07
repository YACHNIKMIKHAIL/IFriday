import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {passwordRecoveryTC} from "./passwordRecoveryReducer";
import regS from "../a2-register/RegisterForm.module.css";
import {fridayReducerType} from "../../../n1_main/m2-bll/store";


const PasswordRecoveryForm = () => {
    const [email, setEmail] = useState<string>('')
    const dispatch = useDispatch()
    const success = useSelector<fridayReducerType, boolean>(state => state.forgot.success)

    const send = () => {
        dispatch(passwordRecoveryTC(email))
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