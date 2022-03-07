import {Dispatch} from "redux";
import {profileAPI} from "./ProfileAPI";
import {meAPI} from "../a3-me/meAPI";

const CHANGE_USER_NAME = 'CHANGE_USER_NAME'
const SET_PROFILE = 'SET_PROFILE'

const initialProfileState = {
    profile: {
        _id: '',
        email: '',
        name: '',
        publicCardPacksCount: 0, // количество колод

        created: null,
        updated: null,
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false
    }
}

export const profileReducer = (state: InitialStateType = initialProfileState, action: profileReducerActionType) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {...state, profile: action.payload.profile}
        }
        case CHANGE_USER_NAME:
            return {...state, name: action.newName}
        default:
            return state
    }
}

// ACTIONS

export const setProfileAC = (profile: ProfileType) => {
    return {
        type: SET_PROFILE,
        payload: {profile}
    } as const
}
const changeUserName = (newName: string) => {
    return {type: CHANGE_USER_NAME, newName} as const
}

// THUNKS

export const updateUserNameTC = (newUserName: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.changeUserName(newUserName)
    const newName = res.data.updatedUser.name
    dispatch(changeUserName(newName))
}
export const setProfileTC = () => async (dispatch: Dispatch) => {
    let res = await meAPI.me()
    dispatch(setProfileAC(res.data))
}


// TYPES
export type ProfileType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date | null;
    updated: Date | null;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}
export type InitialStateType = {
    profile: ProfileType
}

export type SetProfileACType = ReturnType<typeof setProfileAC>
export type ChangeUserNameActionType = ReturnType<typeof changeUserName>
export type profileReducerActionType = ChangeUserNameActionType | SetProfileACType