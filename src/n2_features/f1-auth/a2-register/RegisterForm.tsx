import React from 'react';

const RegisterForm = () => {
    return (
        <div style={{
            border: '2px black solid',
            height: '60%',
            width: '20%',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            justifyContent:'space-around'
        }}>
            <div style={{border: '2px red solid',textAlign:'center'}}>
                <h1>Cards</h1>
                <h4>Sing in</h4>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                border: '2px red solid',
                height: '50%',
                width:'80%'
            }}>
                eMail
                <input type="text"/>
                Password
                <input type="password"/>
                Confirm password
                <input type="password"/>
            </div>
            <div style={{border: '2px red solid',width:'80%',display:'flex',justifyContent:'space-around'}}>
                <button>Cancel</button>
                <button>Register</button>
            </div>
        </div>
    );
};

export default RegisterForm;