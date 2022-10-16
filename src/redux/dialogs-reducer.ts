import {ActionType} from "./redux-store";

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
    newMessageText?: string
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

}

export const dialogsReducer = (state: DialogsDataType = initialState, action: ActionType): DialogsDataType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let body = action.values
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }
        }
        default:
            return state
    }
}

export const addMessageActionCreator = (values:string) => ({type: ADD_MESSAGE, values} as const)
