import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registerFormReducer} from "../../n2_features/f1-auth/a2-register/RegisterFormReducer";
import {meReducer} from "./r1-reducers/meReducer";
import {passwordRecoveryReducer} from "../../n2_features/f1-auth/a4-passwordRecovery/passwordRecoveryReducer";
import {profileReducer} from "./r1-reducers/ProfileReducer";
import {newPasswordReducer} from "../../n2_features/f1-auth/a5-newPassword/newPasswordReducer";
import {loginFormReducer} from "./r1-reducers/LoginFormReducer";

const fridayReducer = combineReducers({
    registration: registerFormReducer,
    me: meReducer,
    forgot: passwordRecoveryReducer,
    profile: profileReducer,
    newPass:newPasswordReducer,
    login: loginFormReducer,
})

export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store