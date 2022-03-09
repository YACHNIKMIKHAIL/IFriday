import {Dispatch} from "redux";
import {profileAPI} from "../../m3-dal/ProfileAPI";
import {meRespType} from "../../m3-dal/meAPI";
import {setAppStatusAC} from "./app-reducer";
import {UserDataType} from "../r2-actions/ActionLoginForm";

const PROFILE = {
    CHANGE_USER_NAME: 'CHANGE_USER_NAME',
    SET_PROFILE: 'SET_PROFILE',
    SET_ERROR: 'SET_ERROR'
}

// TYPES

export type ProfileInitialStateType = {
    profile: UserDataType | meRespType
    error: string
}


const initialProfileState: ProfileInitialStateType = {
    profile: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0, // количество колод

        created: 0,
        updated: 0,
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false,

        error: '',
        token: ''
    },
    error: ''
}

export type SetProfileACType = ReturnType<typeof ProfileActions.setProfileAC>
export type ChangeUserNameActionType = ReturnType<typeof ProfileActions.changeUserName>
export type setErrorActionType = ReturnType<typeof ProfileActions.setError>
export type profileReducerActionType = ChangeUserNameActionType | SetProfileACType


export const profileReducer = (state: ProfileInitialStateType = initialProfileState, action: profileReducerActionType) => {
    switch (action.type) {
        case PROFILE.SET_PROFILE:
            //@ts-ignore
            return {...state, profile: action.payload.data}

        case PROFILE.CHANGE_USER_NAME:
            //@ts-ignore
            return {...state, profile: action.payload.userData}
        default:
            return state
    }
}

// ACTIONS
export const ProfileActions = {
    setProfileAC: <T>(data: T) => {
        return {
            type: PROFILE.SET_PROFILE,
            payload: {data},
        } as const
    },
    changeUserName: (userData: UserDataType) => {
        return {
            type: PROFILE.CHANGE_USER_NAME,
            payload: {userData},
        } as const
    },
    setError: (error: string) => { //нужно сделать
        return {
            type: PROFILE.SET_ERROR,
            error
        } as const
    }
}


// THUNKS
export const updateUserNameTC = (newUserName: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        let res = await profileAPI.changeUserName(newUserName)
        dispatch(ProfileActions.changeUserName(res.data.updatedUser))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e) {
        dispatch(setAppStatusAC("failed"))
    }
}

