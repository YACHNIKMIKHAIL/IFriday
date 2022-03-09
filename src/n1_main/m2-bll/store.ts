import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registerFormReducer} from "../../n2_features/f1-auth/a2-register/RegisterFormReducer";
import {meReducer} from "../../n2_features/f1-auth/a3-me/meReducer";
import {passwordRecoveryReducer} from "../../n2_features/f1-auth/a4-passwordRecovery/passwordRecoveryReducer";
import {profileReducer} from "../../n2_features/f1-auth/a6-profile/ProfileReducer";
import {newPasswordReducer} from "../../n2_features/f1-auth/a5-newPassword/newPasswordReducer";
import {loginFormReducer} from "../../n2_features/f1-auth/a1-login/LoginFormReducer";
import {appReducer} from "../m1-ui/app/app-reducer";

const fridayReducer = combineReducers({
    registration: registerFormReducer,
    me: meReducer,
    forgot: passwordRecoveryReducer,
    profile: profileReducer,
    newPass:newPasswordReducer,
    login: loginFormReducer,
    app:appReducer
})

export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store