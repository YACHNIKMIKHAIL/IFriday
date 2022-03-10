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

const initialProfileState = {
    profile: {} as meRespType,
    error: ''
}

export type SetProfileACType = ReturnType<typeof ProfileActions.setProfileAC>
export type setErrorActionType = ReturnType<typeof ProfileActions.setErrorAC>
export type profileReducerActionType = SetProfileACType | setErrorActionType


export const profileReducer = (state: ProfileInitialStateType = initialProfileState, action: profileReducerActionType): ProfileInitialStateType => {
    switch (action.type) {
        case PROFILE.SET_PROFILE: {
            let {profile} = action.payload as { profile: meRespType };
            return {...state, profile}
        }
        case PROFILE.SET_ERROR: {
            let {error} = action.payload as { error: string }
            return {...state, error}
        }
        default:
            return state
    }
}

// ACTIONS
export const ProfileActions = {
    setProfileAC: (profile: meRespType) => ({
        type: PROFILE.SET_PROFILE,
        payload: {profile},
    } as const),
    setErrorAC: (error: string) => ({
        type: PROFILE.SET_ERROR,
        payload: {error},
    } as const)
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

