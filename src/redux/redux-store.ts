import {combineReducers, createStore} from "redux";
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {usersReducer} from "./users-reducer";

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
const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
    usersPage:usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

// @ts-ignore
window.store=store