import React from "react";
import styles from './users.module.css'
import {UsersContainerType} from "./UsersContainer";

export let Users = (props: UsersContainerType) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg',
            followed: true,
            fullName: 'Zhenya',
            status: 'Hi my dear friend',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                photoUrl: 'https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg',
                followed: false,
                fullName: 'Vanya',
                status: 'I am a men',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ])
    }

    return <div>
        {props.users.map((u) => <div key={u.id}>
        <span>
            <div><img src={u.photoUrl} className={styles.userPhoto} alt={'avatar'}/></div>
            <div>{u.followed ?
                <button onClick={() => {
                    props.unfollow(u.id)
                }}>Follow</button> :
                <button onClick={() => props.follow(u.id)}>Unfollow</button>}</div>
        </span>
            <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
        </div>)}
    </div>
}