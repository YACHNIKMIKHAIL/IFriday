import {InitialCardPacksType} from "../r1-reducers/packsReducer";
import {UpdatedType} from "../../m3-dal/packsAPI";

export enum packsActionsEnum {
    SET_PACKS = 'SET_PACKS',
    ALL_MY = 'ALL_MY',
    MIN = 'MIN',
    MAX = 'MAX',
    SEARCH = 'SEARCH',
    PAGE = 'PAGE',
    pageCount = 'pageCount',
    updated = 'updated',
}

export type packsActionsTypes<T> = T extends { [key: string]: infer A } ? A : never

export const packsActions = {
    setPacksAC: (state: InitialCardPacksType) => {
        return {
            type: packsActionsEnum.SET_PACKS,
            payload: {state}
        } as const
    },
    allMyAC: (value: string | null) => {
        return {
            type: packsActionsEnum.ALL_MY,
            payload: {value}
        } as const
    },
    minAC: (min: number) => {
        return {
            type: packsActionsEnum.MIN,
            payload: {min}
        } as const
    },
    maxAC: (max: number) => {
        return {
            type: packsActionsEnum.MAX,
            payload: {max}
        } as const
    },
    searchAC: (packName: string) => {
        return {
            type: packsActionsEnum.SEARCH,
            payload: {packName}
        } as const
    },
    pageAC: (page: number) => {
        return {
            type: packsActionsEnum.PAGE,
            payload: {page}
        } as const
    },
    pageCountAC: (pageCount: number) => {
        return {
            type: packsActionsEnum.pageCount,
            payload: {pageCount}
        } as const
    },
    updateFilterAC: (updated: UpdatedType) => {
        return {
            type: packsActionsEnum.updated,
            payload: {updated}
        } as const
    },
}