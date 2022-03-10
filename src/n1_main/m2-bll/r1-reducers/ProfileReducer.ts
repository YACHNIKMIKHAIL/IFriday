import {Dispatch} from "redux";
import {profileAPI} from "../../m3-dal/ProfileAPI";
import {meRespType} from "../../m3-dal/meAPI";
import {setAppStatusAC} from "./app-reducer";

const PROFILE = {
    SET_PROFILE: 'SET_PROFILE',
    SET_ERROR: 'SET_ERROR'
}

// TYPES

export type ProfileInitialStateType = {
    profile: meRespType
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
export type setErrorActionType = ReturnType<typeof ProfileActions.setErrorAC>
export type profileReducerActionType = SetProfileACType | setErrorActionType


export const profileReducer = (state = initialProfileState, action: profileReducerActionType): ProfileInitialStateType => {
    switch (action.type) {
        case PROFILE.SET_PROFILE:
            return {...state, profile: action.payload.profile}
        case PROFILE.SET_ERROR:
            return {...state, error: action.payload.error}
        default:
            return state
    }
}

// ACTIONS
export const ProfileActions = {
    setProfileAC: (profile: meRespType) => {
        return {
            type: PROFILE.SET_PROFILE,
            payload: {profile},
        } as const
    },
    setErrorAC: (error: string) => { //нужно сделать
        return {
            type: PROFILE.SET_ERROR,
            payload: {error},
        } as const
    },
}


// THUNKS
export const updateUserNameTC = (newUserName: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    let updateModel = {
        name: newUserName,
        avatar: ''
    }
    try {
        let res = await profileAPI.changeUserName(updateModel)
        const {updatedUser} = res.data
        dispatch(ProfileActions.setProfileAC(updatedUser))
        dispatch(setAppStatusAC("succeeded"))
    } catch (e: any) {
        console.log(e.message)
        dispatch(ProfileActions.setErrorAC(e[0]))
        dispatch(setAppStatusAC("failed"))
    }
}

