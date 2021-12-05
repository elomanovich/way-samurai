import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsDataType} from "../../App";

type DialogsValueType = {
    state: DialogsDataType
    addMessage:() => void
    updateNewMessageText: (newText:string) => void
}

export const Dialogs: React.FC<DialogsValueType> = (props) => {

    const updateNewText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessageText(text)
    }
    const addMessage = () => {
        props.addMessage()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messages.map((m) => <Message message={m.message} id={m.id}/>)}
                <textarea onChange={updateNewText} value={props.state.newMessageText} />
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}