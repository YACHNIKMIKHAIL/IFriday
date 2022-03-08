import {Dispatch} from "redux";
import {profileAPI} from "./ProfileAPI";
import {meRespType} from "../a3-me/meAPI";

const PROFILE = {
    CHANGE_USER_NAME: 'CHANGE_USER_NAME',
    SET_PROFILE: 'SET_PROFILE',
    SET_ERROR: 'SET_ERROR'
}

// TYPES
export type ProfileType = {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
}
export type InitialStateType = {
    profile: ProfileType
    error: string
}

export type SetProfileACType = ReturnType<typeof setProfileAC>
export type ChangeUserNameActionType = ReturnType<typeof changeUserName>
export type setErrorActionType = ReturnType<typeof setError>
export type profileReducerActionType = ChangeUserNameActionType | SetProfileACType | setErrorActionType

const initialProfileState = {
    profile: {
        avatar: '',
        created: '',
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        tokenDeathTime: 0,
        updated: '',
        verified: false,
        __v: 0,
        _id: ''
    },
    error: ''
}

export const profileReducer = (state: InitialStateType = initialProfileState, action: profileReducerActionType) => {
    switch (action.type) {
        case PROFILE.SET_PROFILE: {
            //@ts-ignore
            return {...state, profile: action.payload.profile}
        }
        case PROFILE.CHANGE_USER_NAME:
            //@ts-ignore
            return {...state, profile: action.payload.profile}
        default:
            return state
    }
}

// ACTIONS

export const setProfileAC = (profile: meRespType) => {
    return {type: PROFILE.SET_PROFILE, payload: {profile}} as const
}
const changeUserName = (profile: ProfileType) => {
    return {type: PROFILE.CHANGE_USER_NAME, payload: {profile}} as const
}
const setError = (error: string | null) => {
    return {type: PROFILE.SET_ERROR, error} as const
}

// THUNKS
export const updateUserNameTC = (newUserName: string) => async (dispatch: Dispatch) => {
    try {
        let res = await profileAPI.changeUserName(newUserName)
        dispatch(changeUserName(res.data.updatedUser))
    } catch (e) {

    }
}

