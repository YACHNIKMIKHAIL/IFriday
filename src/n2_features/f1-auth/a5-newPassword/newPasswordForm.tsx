import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {newPasswordTC} from "./newPasswordReducer";
import {useParams} from "react-router-dom";
import regS from "../a2-register/RegisterForm.module.css";


const NewPasswordForm = () => {
    const [newPass, setNewPass] = useState<string>('')
    const dispatch = useDispatch()
    const {token} = useParams<'token'>()

    const create = () => {
        dispatch(newPasswordTC({
            password: newPass,
            resetPasswordToken: token
        }))
    }
    return (
        <div className={regS.main}>
            <div className={regS.title}>
                <h1>Cards</h1>
                <h4> Write new pass!</h4>
            </div>
            <form>
                <div className={regS.second}>
                    <input type="text"
                           value={newPass}
                           onChange={(e) => setNewPass(e.currentTarget.value)}/>
                    <div className={regS.buttonsDiv}>
                        <button onClick={create}>Create</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewPasswordForm;