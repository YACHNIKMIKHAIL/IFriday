export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialAppState = {
    status: 'idle' as RequestStatusType,
    isVisible:false
}

export type InitialAppStateType = typeof initialAppState

export const appReducer = (state: InitialAppStateType = initialAppState, action: AppActionsType): InitialAppStateType => {
    switch (action.type) {
        case 'app/SET-STATUS':
            return {...state, status: action.status}
        case "app/SET-VISIBLE":
            return {...state,isVisible: action.isVisible}
        default:
            return state
    }
}
export const setAppStatusAC = (status: RequestStatusType) => ({type: "app/SET-STATUS", status} as const)
export const setAppVisibleAC = (isVisible: boolean) => ({type: "app/SET-VISIBLE", isVisible} as const)

type AppActionsType = ReturnType<typeof setAppStatusAC>
    | ReturnType <typeof setAppVisibleAC>


