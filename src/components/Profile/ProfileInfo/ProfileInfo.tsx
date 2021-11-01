import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <img src={'https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg'}
                 alt={'profile'}/>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}