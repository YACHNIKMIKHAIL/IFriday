import React from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import style from "./LoginForm.module.css"
import {Navigate, NavLink} from "react-router-dom";
import {loginUserTC} from "../../../n1_main/m2-bll/r1-reducers/LoginFormReducer";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import PasswordView from "../../../n1_main/m1-ui/view-password/PasswordView";



type FormikErrorType = {
    email?: string
    password?: string
}

const LoginForm = () => {
    const isVisible = useFridaySelector<boolean>(state => state.app.isVisible)
    const error = useFridaySelector<string | undefined>(state => state.login.error)
    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Invalid password,pass will be longer them 8 symbols';
            }
            return errors;
        },
        onSubmit: value => {
            formik.resetForm()
            dispatch(loginUserTC({email: value.email, password: value.password, rememberMe: value.rememberMe}))
        }
    })

    if (isLoggedIn) {
        return <Navigate to={RoutesXPaths.PROFILE}/>
    }

    return (
        <div className={style.main}>
            <div className={style.title}>
                <h1>Login</h1>
                {!!error && <div style={{color: 'red'}}>{error}</div>}
            </div>
            <hr/>

            <div className={style.login}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.second}>
                        eMail:
                        <input
                            type={"email"}
                            placeholder={"Enter your email"}
                            {...formik.getFieldProps('email')}
                        />
                    </div>

                    {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red', fontSize: '12px'}}>{formik.errors.email}</div>}

                    <div className={style.second}>
                        Password:
                        <input
                            type={isVisible ? "text" : "password"}
                            placeholder={"Enter your password"}
                            {...formik.getFieldProps('password')}
                        />
                        <PasswordView isVisible={isVisible}/>

                    </div>

                    {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red', fontSize: '12px'}}>{formik.errors.password}</div>}

                    <div>
                        Remember me:
                        <input
                            type="checkbox"
                            {...formik.getFieldProps('rememberMe')}
                        />
                    </div>
                    <div className={style.buttons}>
                        <button type="submit">Login</button>
                    </div>
                </form>

                <div className={style.footer}>
                    <div>
                        Not registered? <NavLink to={RoutesXPaths.REGISTER}>Create an Account</NavLink>
                    </div>
                    <div>
                        Forgot password? <NavLink to={RoutesXPaths.RECOVERY}>Click here to recover</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;