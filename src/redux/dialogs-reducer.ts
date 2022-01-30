import {ActionType} from "./redux-store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}


export type DialogsDataType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

let initialState: DialogsDataType = {
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
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsDataType = initialState, action: ActionType): DialogsDataType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let body = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: body}]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText
} as const)