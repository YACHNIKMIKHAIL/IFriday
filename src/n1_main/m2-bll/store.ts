import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {meReducer} from "./r1-reducers/meReducer";
import {profileReducer} from "./r1-reducers/ProfileReducer";
import {loginFormReducer} from "./r1-reducers/LoginFormReducer";
import {registerAndRecoveryPassReducer} from "./r1-reducers/RegisterAndRecoveryPassReducer";

const fridayReducer = combineReducers({
    // registration: registerFormReducer,
    me: meReducer,
    // forgot: passwordRecoveryReducer,
    profile: profileReducer,
    // newPass:newPasswordReducer,
    login: loginFormReducer,
    regForNewPass:registerAndRecoveryPassReducer
})

export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store