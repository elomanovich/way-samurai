import {ActionType} from "./redux-store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostType = {
    id: number
    message: string
    likeCurrent: number
}
export type PostDataType = {
    post: Array<PostType>
    newPostText: string
}

let initialState: PostDataType = {
    post: [
        {id: 1, message: 'How are you', likeCurrent: 15},
        {id: 2, message: 'It is my first post', likeCurrent: 20},
        {id: 3, message: 'It is my second post', likeCurrent: 21},
        {id: 4, message: 'It is my third post', likeCurrent: 32},
    ],
    newPostText: ''
}

export const profileReducer = (state: PostDataType = initialState, action: ActionType): PostDataType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likeCurrent: 0
            }
            let stateCopy = {...state}
            stateCopy.post = [...state.post]
            stateCopy.post.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)