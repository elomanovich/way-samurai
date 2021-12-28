import {RootStateType} from "../index";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>

export type ActionType =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType

export type StoreType = {
    _state: RootStateType
    _subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText
} as const)
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'How are you', likeCurrent: 15},
                {id: 2, message: 'It is my first post', likeCurrent: 20},
                {id: 3, message: 'It is my second post', likeCurrent: 21},
                {id: 4, message: 'It is my third post', likeCurrent: 32},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Zhenya'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'How are you?'},
            ],
            newMessageText: 'hello'
        }
    },
    _subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCurrent: 0
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    },
    // addMessage() {
    //     const newMessage = {
    //         id: 5,
    //         message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageText = ''
    //     this._callSubscriber()
    //
    // },
    // updateNewMessageText(newText: string) {
    //     this._state.dialogsPage.newMessageText = newText
    //     this._callSubscriber()
    // },
    // addPost() {
    //     const newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likeCurrent: 0
    //     }
    //     this._state.profilePage.post.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber()
    // },
}


// @ts-ignore
window.store = store