
type LoginFormInitialStateType = {
    error: string
}

type ActionLoginFormType = any

const LoginFormInitialState = {
    error: ""
}

export const loginFormReducer = (state: LoginFormInitialStateType = LoginFormInitialState, action: ActionLoginFormType): LoginFormInitialStateType => {
    switch (action.type) {
        case "" : {
            return state
        }
        default: return state
    }
}