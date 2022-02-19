import {applyMiddleware, combineReducers, createStore} from "redux";
import {XxxReducer} from "./xxxReducer";
import thunk from "redux-thunk";

const fridayReducer = combineReducers({
    xxx: XxxReducer
})

export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer,applyMiddleware(thunk))