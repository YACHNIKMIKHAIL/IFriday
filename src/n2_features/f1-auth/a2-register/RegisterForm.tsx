import React, {ChangeEvent, useState} from 'react';
import {registerUserTC, setErrorRegisterAC} from "./RegisterFormReducer";
import {useDispatch, useSelector} from "react-redux";
import {fridayReducerType} from "../../../n1_main/m2-bll/store";
import regS from './RegisterForm.module.css'

const RegisterForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirm, setConfirm] = useState<string>('')
    const [confirmError, setConfirmError] = useState<string>('')

    debugger
    const dispatch = useDispatch()
    const error = useSelector<fridayReducerType, string | undefined>(state => state.registration.error)

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirm(e.currentTarget.value)
    }
    const cancelHandler = () => {
        setEmail('')
        setPassword('')
        setConfirm('')
        setConfirmError('')
        dispatch(setErrorRegisterAC(''))
    }
    const registerHandler = () => {
        if (confirm.length !== password.length) {
            setConfirmError('Invalid password')
        } else {
            dispatch(registerUserTC({
                email: email,
                password: password,
            }))
        }
    }

    return (
        <div className={regS.main}>
            <div className={regS.title}>
                <h1>Cards</h1>
                {!!error && <div>{error}</div>}
                {!!confirmError && <div>{confirmError}</div>}
                <h4>Sing in</h4>
            </div>
            <div className={regS.second}>
                eMail
                <input type="text" value={email} onChange={onChangeEmail}/>
                Password
                <input type="password" value={password} onChange={onChangePassword}/>
                Confirm password
                <input type="password" value={confirm} onChange={onChangeConfirm}/>
            </div>
            <div className={regS.buttonsDiv}>
                <button onClick={cancelHandler}>Cancel</button>
                <button onClick={registerHandler}>Register</button>
            </div>
        </div>
    );
};

export default RegisterForm;