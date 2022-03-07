import React from 'react';
import PasswordRecoveryForm from "../../../n2_features/f1-auth/a4-passwordRecovery/passwordRecoveryForm";

const passwordRecoveryStyles = {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}
const PasswordRecovery = () => {
    return (
        <div style={passwordRecoveryStyles}>
            <PasswordRecoveryForm/>
        </div>
    );
};

export default PasswordRecovery;