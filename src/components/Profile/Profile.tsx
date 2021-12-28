import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";
import {ActionType} from "../../redux/state";

export type ProfileDataType = {
    profilePage: PostDataType
    dispatch: (action: ActionType) => void

}


export const Profile: React.FC<ProfileDataType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.post}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}