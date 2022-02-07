import {combineReducers, createStore} from "redux";
import {XxxReducer} from "./xxxReducer";

const fridayReducer = combineReducers({
    xxx: XxxReducer
})

export type fridayReducerType = ReturnType<typeof fridayReducer>

export const store = createStore(fridayReducer)