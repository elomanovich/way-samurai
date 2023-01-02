import {ActionType} from "./redux-store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


export type initialType = {
    initialized: boolean
}

let initialState: initialType = {
    initialized: false
}

export const appReducer = (state: initialType = initialState, action: ActionType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
} as const)

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

// type AppActionType =
//     ReturnType<typeof initializedSuccess>
//     | ReturnType<typeof setAuthUserData>