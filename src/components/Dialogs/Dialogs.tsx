import React from 'react'
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsDataType} from "../../App";

type DialogsValueType = {
    state: DialogsDataType
}

export const Dialogs: React.FC<DialogsValueType> = (props) => {
debugger
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messages.map((m) => <Message message={m.message} id={m.id}/>)}
            </div>
        </div>
    )
}