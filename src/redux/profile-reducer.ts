import {ActionType} from "./redux-store";
import {ProfileType} from "../type/types";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type PostType = {
    id: number
    message: string
    likeCurrent: number
}
export type PostDataType = {
    post: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

let initialState: PostDataType = {
    post: [
        {id: 1, message: 'How are you', likeCurrent: 15},
        {id: 2, message: 'It is my first post', likeCurrent: 20},
        {id: 3, message: 'It is my second post', likeCurrent: 21},
        {id: 4, message: 'It is my third post', likeCurrent: 32},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: PostDataType = initialState, action: ActionType): PostDataType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                post: [...state.post, {id: 5, message: state.newPostText, likeCurrent: 0}]
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }}
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUsersProfile = (profile:any ) => ({type: SET_USER_PROFILE, profile} as const)