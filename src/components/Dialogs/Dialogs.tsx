import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'

type propsDialogItemType = {
    name: string
    id: number
}
type propsMessageType = {
    message: string
}

const DialogItem = (props: propsDialogItemType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: propsMessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Zhenya'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sasha'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'How are you?'},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}