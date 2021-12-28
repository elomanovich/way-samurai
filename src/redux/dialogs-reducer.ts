import {ActionType} from "./state";
import {DialogsDataType} from "../App";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'


export const dialogsReducer = (state: DialogsDataType, action: ActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText
} as const)