import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../App";

export type PostDataType = {
    postData: Array<PostType>
}


export const Profile: React.FC<PostDataType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}