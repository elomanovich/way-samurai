import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireThree, state, subscribe} from "./redux/state";
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


rerenderEntireThree()

subscribe(rerenderEntireThree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
