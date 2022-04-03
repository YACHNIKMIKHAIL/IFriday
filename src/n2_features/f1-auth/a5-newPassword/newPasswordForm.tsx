import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import regS from "../a2-register/RegisterForm.module.css";
import {newPasswordTC} from "../../../n1_main/m2-bll/r3-thunks/ThunksActionsRegisterAndRecoveryPassReducer";

const NewPasswordForm = () => {

    const dispatch = useDispatch()

    const [newPass, setNewPass] = useState<string>('')

    const {token} = useParams<'token'>()

    const create = () => {
        dispatch(newPasswordTC({
            password: newPass,
            resetPasswordToken: token
        })
        )
    }

    // if (newPassInfo) {
    //     debugger
    //     return <Navigate to={RoutesXPaths.LOGIN}/>
    // }
    //
    // if (isLoggedIn) {
    //     debugger
    //     return <Navigate to={RoutesXPaths.PROFILE}/>
    // }

    return (
        <div className={regS.registerPage}>
            <div className={regS.title}>
                <h1>Cards</h1>
                <h4> Write new pass!</h4>
            </div>
            <>
                <div className={regS.second}>
                    <input type="text"
                           value={newPass}
                           onChange={(e) => setNewPass(e.currentTarget.value)}/>
                    <div className={regS.buttonsDiv}>
                        <button onClick={create}>Create</button>
                    </div>
                </div>
            </>
        </div>
    )
}

export default NewPasswordForm