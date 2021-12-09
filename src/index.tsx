import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {DialogsDataType, PostDataType} from './App';
import {BrowserRouter} from "react-router-dom";


export type RootStateType = {
    profilePage: PostDataType,
    dialogsPage: DialogsDataType
}

export const rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireThree)
rerenderEntireThree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
