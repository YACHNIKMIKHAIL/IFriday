import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {registerFormReducer} from "../../n2_features/f1-auth/a2-register/RegisterFormReducer";
import {meReducer} from "../../n2_features/f1-auth/a3-me/meReducer";
import {passwordRecoveryReducer} from "../../n2_features/f1-auth/a4-passwordRecovery/passwordRecoveryReducer";

const fridayReducer = combineReducers({
    registration: registerFormReducer,
    me: meReducer,
    forgot: passwordRecoveryReducer
})

export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store