import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().dialogsPage

                const updateNewText = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                return (
                    <Dialogs addMessage={addMessage} updateNewMessageText={updateNewText} state={state}/>
                )
            }}
        </StoreContext.Consumer>
    )
}