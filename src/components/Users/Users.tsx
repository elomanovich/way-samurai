import axios from "axios";
import React from "react";
import styles from './users.module.css'
import {UsersContainerType} from "./UsersContainer";
import userPhoto from '../../img/user.png'

export let Users = (props: UsersContainerType) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return <div>
        {props.users.map((u) => <div key={u.id}>
        <span>
            <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                      alt={'avatar'}/></div>
            <div>{u.followed ?
                <button onClick={() => {
                    props.unfollow(u.id)
                }}>Follow</button> :
                <button onClick={() => props.follow(u.id)}>Unfollow</button>}</div>
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