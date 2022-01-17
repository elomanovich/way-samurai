import React from 'react'
import {NavLink} from 'react-router-dom'
import s from '../Dialogs.module.css'
import {DialogType} from "../../../redux/dialogs-reducer";



export const DialogItem = (props: DialogType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}