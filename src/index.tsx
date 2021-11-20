import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id: 1, message: 'How are you', likeCurrent: 15},
    {id: 2, message: 'It is my first post', likeCurrent: 20},
    {id: 3, message: 'It is my second post', likeCurrent: 21},
    {id: 4, message: 'It is my third post', likeCurrent: 32},
]
let dialogs = [
    {id: 1, name: 'Zhenya'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Sasha'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'How are you?'},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
