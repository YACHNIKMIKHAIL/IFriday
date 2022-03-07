import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {newPasswordTC} from "./newPasswordReducer";
import {useParams} from "react-router-dom";


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
        <div style={{display: 'flex', flexDirection: 'column'}}>
            Cards
            Write new pass!
            <input type="text"
                   value={newPass}
                   onChange={(e) => setNewPass(e.currentTarget.value)}/>
            <button onClick={create}>Create</button>
        </div>
    );
};

export default NewPasswordForm;