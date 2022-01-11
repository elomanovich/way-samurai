import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {PostDataType} from "./redux/profile-reducer";
import {DialogsDataType} from "./redux/dialogs-reducer";
import {Provider} from './StoreContext';


export type RootStateType = {
    profilePage: PostDataType,
    dialogsPage: DialogsDataType
}

export const rerenderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider  store={store}>
                <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireThree()
store.subscribe(() => {
    rerenderEntireThree()
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
