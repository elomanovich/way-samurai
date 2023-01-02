import {applyMiddleware, combineReducers, createStore} from "redux";
import {addMessageActionCreator, dialogsReducer} from "./dialogs-reducer";
import {
    addPostActionCreator,
    profileReducer,
    setStatus,
    setUsersProfile,
} from "./profile-reducer";
import {
    followSuccess,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching, toggleFollowingProgress,
    unfollowSuccess,
    usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {appReducer, initializedSuccess} from "./app-reducer";

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type followACType = ReturnType<typeof followSuccess>
type unfollowACType = ReturnType<typeof unfollowSuccess>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type SetUserProfileType = ReturnType<typeof setUsersProfile>
type SetUserData = ReturnType<typeof setAuthUserData>
type ToggleIsFollowing = ReturnType<typeof toggleFollowingProgress>
type SetStatusProfile = ReturnType<typeof setStatus>
type InitializedSuccess = ReturnType<typeof initializedSuccess>

export type ActionType =
    AddPostActionType
    | AddMessageActionType
    | followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setUsersTotalCountACType
    | toggleIsFetchingACType
    | SetUserProfileType
    | SetUserData
    | ToggleIsFollowing
    | SetStatusProfile
    | InitializedSuccess

export type StoreType = {
    store: typeof store
}
const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store