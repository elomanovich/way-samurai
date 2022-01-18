import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {DialogsType} from "./DialogsContainer";


export const Dialogs: React.FC<DialogsType> = (props) => {

    const updateNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessageText(text)
    }
    const addMessage = () => {
        props.addMessage()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsPage.dialogs.map((d: DialogType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map((m: MessageType) => <Message key={m.id} message={m.message} id={m.id}/>)}
                <textarea placeholder={'Added new message'}
                          onChange={updateNewText}
                          value={props.dialogsPage.newMessageText}/>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}