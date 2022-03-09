import {initializeMeACType, meActions, setErrorMeACType} from "../r2-actions/ActionsMe";


export type meReducerStateType = {
    isInitialized: boolean,
    error: string
}
const meReducerState: meReducerStateType = {
    isInitialized: false,
    error: ''
}

export const meReducer = (state = meReducerState, action: meReducerActionType): meReducerStateType => {
    switch (action.type) {
        case meActions.INITIALIZE_ME: {
            return {...state, isInitialized: action.payload.initialization}
        }
        case meActions.SET_ME_ERROR: {
            return {...state, error: action.payload.error}
        }
        default:
            return state
    }
}
type meReducerActionType = initializeMeACType | setErrorMeACType

