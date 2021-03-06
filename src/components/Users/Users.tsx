import styles from "./users.module.css";
import userPhoto from "../../img/user.png";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followed: any
    unfollowed: any
    followingInProgress: Array<number>
}


export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => <span key={p}
                                  className={props.currentPage === p ? styles.selectedPage : undefined}
                                  onClick={() => props.onPageChanged(p)}>{p}</span>)}
        </div>
        {props.users.map((u) => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                     alt={'avatar'}/>
                     </NavLink>
            </div>

            <div>{u.followed ?
                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.followed(u.id)
                }}>
                    Unfollow
                </button> : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.unfollowed(u.id)
                }}>Follow</button>}</div>
        </span>

            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
        </div>)}
    </div>
}