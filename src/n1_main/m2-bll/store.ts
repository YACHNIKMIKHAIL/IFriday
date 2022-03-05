import {applyMiddleware, combineReducers, createStore} from "redux";
import {XxxReducer} from "./xxxReducer";
import thunk from "redux-thunk";
import {registerFormReducer} from "../../n2_features/f1-auth/a2-register/RegisterFormReducer";

const fridayReducer = combineReducers({
    registration: registerFormReducer
})

export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer,applyMiddleware(thunk))