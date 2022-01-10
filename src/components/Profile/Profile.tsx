import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/redux-store";
import {PostDataType} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfileDataType = {
    profilePage: PostDataType
    dispatch: (action: ActionType) => void

}


export const Profile: React.FC<ProfileDataType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer postData={props.profilePage.post}
                              dispatch={props.dispatch}
                              newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}