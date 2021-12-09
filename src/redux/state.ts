import {RootStateType} from "../index";

export type StoreType = {
    _state: RootStateType
    getState:() => RootStateType
    _callSubscriber: () => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer:()=>void) => void
}

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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addMessage() {
        const newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber()

    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber()
    },
    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCurrent: 0
        }
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
}


// @ts-ignore
window.store = store