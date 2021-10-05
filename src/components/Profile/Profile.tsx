import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={'https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg'}
                     alt={'profile'}/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}