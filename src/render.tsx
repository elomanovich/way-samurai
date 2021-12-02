import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogsDataType, PostDataType} from './App';
import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export type RootStateType = {
    profilePage: PostDataType,
    dialogsPage: DialogsDataType
}

export const rerenderEntireThree = (state:RootStateType) => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
