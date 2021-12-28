import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {RootStateType} from "../../index";
import {ActionType, addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

type DialogsValueType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}



export const Dialogs: React.FC<DialogsValueType> = (props) => {

    const updateNewText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.state.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.dialogsPage.messages.map((m) => <Message message={m.message} id={m.id}/>)}
                <textarea onChange={updateNewText} value={props.state.dialogsPage.newMessageText} />
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}