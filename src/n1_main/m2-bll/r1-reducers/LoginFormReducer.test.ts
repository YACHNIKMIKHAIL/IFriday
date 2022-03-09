import {loginFormReducer} from "./LoginFormReducer";
import {LoginFormActions, LoginFormInitialState} from "../r2-actions/ActionLoginForm";

let startState: typeof  LoginFormInitialState
beforeEach(() => {
    startState = {
        isLoggedIn: false,
        user: {
            avatar: '',
            created: 5,
            email: '',
            isAdmin: false,
            name: '',
            publicCardPacksCount: 0,
            rememberMe: false,
            token: '',
            updated: 5,
            _id: '',
        },
        error: "",
}})

test('status should be equal "true"', () => {
    const endState = loginFormReducer(startState, LoginFormActions.setIsLoggedInAC(true))
    expect(endState.isLoggedIn).toBe(true)
})
test('status should be equal "false"', () => {
    const endState = loginFormReducer(startState, LoginFormActions.setIsLoggedInAC(false))
    expect(endState.isLoggedIn).toEqual(false)
})
test('bug must exist', () => {
    const endState = loginFormReducer(startState, LoginFormActions.setErrorAC("Error"))
    expect(endState.error).toBe("Error")
})
/*test('keys should be correct', () => {
    const endState = loginFormReducer(startState, LoginFormActions.setUserDataAC({})
    expect(endState.user.email).toBe("olegweremey1994@mail.ru")
    expect(endState.user.rememberMe).toBe(true)

})*/
