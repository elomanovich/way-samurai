import {combineReducers, createStore} from "redux";
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>

export type ActionType =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType

export type StoreType = {
    store: typeof store
}
const reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
})

export type AppStateType = ReturnType<typeof reducers>

export let store  = createStore(reducers)