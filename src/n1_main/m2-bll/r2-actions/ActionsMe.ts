export enum meActions{
    INITIALIZE_ME = 'CARDS/ME/INITIALIZE_ME',
    SET_ME_ERROR = 'CARDS/ME/SET_ME_ERROR'
}

export type initializeMeACType = ReturnType<typeof initializeMeAC>
export const initializeMeAC = (initialization: boolean) => {
    return {
        type: meActions.INITIALIZE_ME,
        payload: {initialization}
    } as const
}

export type setErrorMeACType = ReturnType<typeof setErrorMeAC>
export const setErrorMeAC = (error: string) => {
    return {
        type: meActions.SET_ME_ERROR,
        payload: {error}
    } as const
}