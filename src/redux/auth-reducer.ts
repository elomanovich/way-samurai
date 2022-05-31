import {ActionType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'


export type initialType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: initialType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (id: string | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const)

export const getLogin = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }
}
