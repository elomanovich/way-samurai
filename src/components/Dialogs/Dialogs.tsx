import React from 'react'
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {DialogsType} from "./DialogsContainer";
import {Field, Form, Formik} from 'formik';


export const Dialogs: React.FC<DialogsType> = (props) => {

    const addNewMessage = (values: string) => {
        props.addMessage(values)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsPage.dialogs.map((d: DialogType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map((m: MessageType) => <Message key={m.id} message={m.message}
                                                                             id={m.id}/>)}
                <AddMessageForm addNewMessage={addNewMessage}/>
            </div>
        </div>
    )
}
type ValueFormikType = {
    message: string
}
type PropsType = {
    addNewMessage: (values: string) => void
}

const AddMessageForm = (props: PropsType) => {
    const submit = (values: ValueFormikType) => {
        props.addNewMessage(values.message)
    }
    return (
        <Formik
            initialValues={{message: ''}}
            onSubmit={submit}
        >
            {() => (
                <Form>
                    <div><Field type="textarea" name="message" placeholder='Enter your message'/></div>
                    <button type="submit">
                        Send
                    </button>
                </Form>
            )}
        </Formik>
    )
}