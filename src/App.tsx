import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likeCurrent: number
}
export type DataType = {
    postData: Array<PostType>
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const App: React.FC<DataType> = (props) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'}
                           render={() => <Profile postData={props.postData}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
