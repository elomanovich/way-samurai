import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogsDataType, PostDataType} from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export type RootStateType = {
    profilePage: PostDataType,
    dialogsPage: DialogsDataType
}

export const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
