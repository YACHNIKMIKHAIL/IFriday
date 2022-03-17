import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {meReducer, meReducerActionType} from "./r1-reducers/meReducer";
import {profileReducer, profileReducerTypes} from "./r1-reducers/ProfileReducer";
import {ActionLoginFormType, loginFormReducer} from "./r1-reducers/LoginFormReducer";
import {
    registerAndRecoveryPassReducer,
    RegisterAndRecoveryPassReducerActionType
} from "./r1-reducers/RegisterAndRecoveryPassReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppActionsType, appReducer} from "./r1-reducers/app-reducer";
import {packsReducer, packsReducerActionType} from "./r1-reducers/packsReducer";
import {cardsReducer} from "./r1-reducers/cardsReducer";

const fridayReducer = combineReducers({
    me: meReducer,
    profile: profileReducer,
    login: loginFormReducer,
    app: appReducer,
    regForNewPass: registerAndRecoveryPassReducer,
    packs: packsReducer,
    cards:cardsReducer,
})

export const useFridaySelector: TypedUseSelectorHook<fridayReducerType> = useSelector
export type fridayReducerType = ReturnType<typeof fridayReducer>

//@ts-ignore
/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(fridayReducer, composeEnhancers(applyMiddleware(thunk)))
*/

export const store = createStore(fridayReducer, applyMiddleware(thunk))
type AllFridayActionsType =
    packsReducerActionType
    | AppActionsType
    | RegisterAndRecoveryPassReducerActionType
    | profileReducerTypes
    | meReducerActionType
    | ActionLoginFormType

export type FridayThunkType<ReturnType = void> = ThunkAction<ReturnType,
    fridayReducerType,
    unknown,
    AllFridayActionsType>

//@ts-ignore
window.store = store