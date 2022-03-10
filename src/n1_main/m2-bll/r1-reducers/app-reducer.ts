export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialAppState = {
    status: 'idle' as RequestStatusType
}

export type InitialAppStateType = typeof initialAppState

export const appReducer = (state: InitialAppStateType = initialAppState, action: AppActionsType): InitialAppStateType => {
    switch (action.type) {
        case 'app/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}
export const setAppStatusAC = (status: RequestStatusType) => ({type: "app/SET-STATUS", status} as const)

type AppActionsType = ReturnType<typeof setAppStatusAC>


