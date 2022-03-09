import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {meReducer} from "./r1-reducers/meReducer";
import {profileReducer} from "./r1-reducers/ProfileReducer";
import {loginFormReducer} from "./r1-reducers/LoginFormReducer";
import {registerAndRecoveryPassReducer} from "./r1-reducers/RegisterAndRecoveryPassReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const fridayReducer = combineReducers({
    // registration: registerFormReducer,
    me: meReducer,
    // forgot: passwordRecoveryReducer,
    profile: profileReducer,
    // newPass:newPasswordReducer,
    login: loginFormReducer,
    regForNewPass:registerAndRecoveryPassReducer
})

export const useFridaySelector: TypedUseSelectorHook<fridayReducerType> = useSelector
export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store