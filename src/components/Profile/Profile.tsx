import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";

export type ProfileDataType = {
    profilePage: PostDataType
    addPost: () => void
    updateNewPostText: (newText:string) => void

}


export const Profile: React.FC<ProfileDataType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.post}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>
        </div>
    )
}