import {applyMiddleware, combineReducers, createStore} from "redux";
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {addPostActionCreator, profileReducer, setUsersProfile, updateNewPostTextActionCreator} from "./profile-reducer";
import {
    followSuccess,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching, toggleFollowingProgress,
    unfollowSuccess,
    usersReducer
} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>
type followACType = ReturnType<typeof followSuccess>
type unfollowACType = ReturnType<typeof unfollowSuccess>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type SetUserProfileType = ReturnType<typeof setUsersProfile>
type SetUserData = ReturnType<typeof setUserData>
type ToggleIsFollowing = ReturnType<typeof toggleFollowingProgress>

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
    | SetUserProfileType
    | SetUserData
    | ToggleIsFollowing

export type StoreType = {
    store: typeof store
}
const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store