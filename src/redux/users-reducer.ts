import {ActionType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type LocationType = {
    city: string
    country: string
}

export type PostType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type PostDataType = {
    users: Array<PostType>
}

let initialState: PostDataType = {
    users: [
        {id: 1,photoUrl:'https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg', followed: true, fullName: 'Zhenya', status: 'Hi me dear friend', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2,photoUrl:'https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg',followed: true, fullName: 'Sasha', status: 'I am a boss', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3,photoUrl:'https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg',followed: true, fullName: 'Vanya', status: 'I am a men', location: {city: 'Moscow', country: 'Russia'}},
    ]
}

export const usersReducer = (state: PostDataType = initialState, action: ActionType): PostDataType => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u =>{
                    if (u.id == action.userId){
                        return {...u, followed: true}
                    }
                    return u
                } )
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u =>{
                    if (u.id == action.userId){
                        return {...u, followed: false}
                    }
                    return u
                } )
            }
        case SET_USERS: {
            return {...state, users:[...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = () => ({type: FOLLOW, userId} as const)
export const unfollowAC = () => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users) => ({type: SET_USERS, users} as const)