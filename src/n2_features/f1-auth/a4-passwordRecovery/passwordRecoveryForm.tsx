import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {passwordRecoveryTC} from "./passwordRecoveryReducer";


const PasswordRecoveryForm = () => {
    const [email, setEmail] = useState<string>('')
    const dispatch = useDispatch()

    const send = () => {
        dispatch(passwordRecoveryTC(email))
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            Cards
            Forgot your password?
            <input type="text"
                   value={email}
                   onChange={(e) => setEmail(e.currentTarget.value)}/>
            <button onClick={send}>send</button>
        </div>
    );
};

export default PasswordRecoveryForm;