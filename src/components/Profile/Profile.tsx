import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";

export type ProfileDataType = {
    state: PostDataType
}


export const Profile: React.FC<ProfileDataType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.state.postData}/>
        </div>
    )
}