import React from 'react';
import RegisterForm from "../../../n2_features/f1-auth/a2-register/RegisterForm";

const registerStyles = {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}
const Register = () => {
    return (
        <div style={registerStyles}>
            <RegisterForm/>
        </div>
    );
};

export default Register;