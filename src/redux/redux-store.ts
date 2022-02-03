import {combineReducers, createStore} from "redux";
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./users-reducer";

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

export type ActionType =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType
    | followACType
    | unfollowACType
    | setUsersACType

export type StoreType = {
    store: typeof store
}
const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

// @ts-ignore
window.store = store