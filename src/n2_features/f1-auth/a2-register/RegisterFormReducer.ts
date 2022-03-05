type userType = {
    email: string
    password: string
}
type initialRegisterStateType = {
    addedUser: userType
    error?: string;
}
const initialRegisterState: initialRegisterStateType = {
    addedUser: {
        email: "nya-admin@nya.nya",
        password: "1qazxcvBG"
    },
    error: ''
}

export const registerFormReducer = (state = initialRegisterState, action: registerFormReducerActionType): initialRegisterStateType => {
    switch (action.type) {
        case REGISTER_USER: {
            return {...state,...action.payload}
        }
        default:
            return state
    }
}
type registerFormReducerActionType = registerUserACACType

const REGISTER_USER = 'REGISTER_USER'
export type registerUserACACType = ReturnType<typeof registerUserAC>
export const registerUserAC = (data: initialRegisterStateType) => {
    return {
        type: REGISTER_USER,
        payload: data
    } as const
}