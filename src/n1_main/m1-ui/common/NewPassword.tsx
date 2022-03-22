import React from 'react';
import NewPasswordForm from "../../../n2_features/f1-auth/a5-newPassword/newPasswordForm";

const newPasswordStyles = {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}

const NewPassword = () => {
    return (
        <div style={newPasswordStyles}>
            <NewPasswordForm/>
        </div>
    )
}

export default NewPassword