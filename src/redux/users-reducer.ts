import {ActionType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

// type LocationType = {
//     city: string
//     country: string
// }

export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
}
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)