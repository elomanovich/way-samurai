import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {PostDataType} from "./redux/profile-reducer";
import {DialogsDataType} from "./redux/dialogs-reducer";


export type RootStateType = {
    profilePage: PostDataType,
    dialogsPage: DialogsDataType
}

export const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
})
rerenderEntireThree(store.getState())


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
