import React from 'react'
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsType, MessageType} from "../../App";

export type MessagePostType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export const Dialogs: React.FC<MessagePostType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map((m) => <Message message={m.message} id={m.id}/>)}
            </div>
        </div>
    )
}