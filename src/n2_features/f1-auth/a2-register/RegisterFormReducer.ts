import {Dispatch} from "redux";
import {registerFormAPI} from "./RegisterFormAPI";

export type userType = {
    email: string
    password: string
}
export type registerStateType = {
    addedUser: userType
    error?: string;
}
const initialRegisterState: registerStateType = {
    addedUser: {
        email: '',
        password: ''
    },
    error: ''
}

export const registerFormReducer = (state = initialRegisterState, action: registerFormReducerActionType): registerStateType => {
    switch (action.type) {
        case REGISTER_USER: {
            return {...state,...action.payload}
        }
        default:
            return state
    }
}
type registerFormReducerActionType = registerUserACType

const REGISTER_USER = 'REGISTER_USER'
export type registerUserACType = ReturnType<typeof registerUserAC>
export const registerUserAC = (data: registerStateType) => {
    return {
        type: REGISTER_USER,
        payload: data
    } as const
}

export const registerUserTC = (body:userType) => async (dispatch:Dispatch) => {
    try {
        let res = await registerFormAPI.registerMe(body)
        dispatch(registerUserAC(res.data))
    } catch (e) {
        console.log(e)
    } finally {

    }
}