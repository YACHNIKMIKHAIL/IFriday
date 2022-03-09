import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {meReducer} from "./r1-reducers/meReducer";
import {profileReducer} from "./r1-reducers/ProfileReducer";
import {loginFormReducer} from "./r1-reducers/LoginFormReducer";
import {registerAndRecoveryPassReducer} from "./r1-reducers/RegisterAndRecoveryPassReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {appReducer} from "./r1-reducers/app-reducer";

const fridayReducer = combineReducers({
    me: meReducer,
    profile: profileReducer,
    login: loginFormReducer,
    app:appReducer,
    regForNewPass:registerAndRecoveryPassReducer
})

export const useFridaySelector: TypedUseSelectorHook<fridayReducerType> = useSelector
export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store