import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {PropsType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={'https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg'}
                 alt={'profile'}/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'avatar'}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}