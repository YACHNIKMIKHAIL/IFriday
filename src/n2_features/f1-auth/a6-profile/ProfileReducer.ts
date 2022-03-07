import {Dispatch} from "redux";
import {profileAPI} from "./ProfileAPI";

const CHANGE_USER_NAME = 'CHANGE_USER_NAME'

const initialProfileState = {
    userName: null,
    userImg: null
}

export const profileReducer = (state: InitialProfileStateType = initialProfileState, action: profileReducerActionType) => {
    switch (action.type) {
        case CHANGE_USER_NAME:
            return {...state, userName: action.newName}
        default:
            return state
    }
}

// ACTIONS
const changeUserName = (newName:string) => {
    return {type: CHANGE_USER_NAME, newName} as const
}

// THUNKS
export const updateUserNameTC = (newUserName: string) => (dispatch: Dispatch) => {
    profileAPI.changeUserName(newUserName)
        .then((res) => {
            const newName = res.data.updatedUser.name
            dispatch(changeUserName(newName))
        })
}



// TYPES
type InitialProfileStateType = {
    userName: string | null
    userImg: string | null
}
type changeUserNameActionType = ReturnType<typeof changeUserName>
export type profileReducerActionType = changeUserNameActionType