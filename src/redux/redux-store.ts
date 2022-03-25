import {combineReducers, createStore} from "redux";
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow,
    usersReducer
} from "./users-reducer";

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>
type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export type ActionType =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType
    | followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | toggleIsFetchingACType

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