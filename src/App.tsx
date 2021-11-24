import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';

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
export type PostDataType = {
    postData: Array<PostType>
}
export type DialogsDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type StateType = {
    state: {
        profilePage: PostDataType,
        dialogsPage: DialogsDataType
    }
}

const App: React.FC<StateType> = (props) => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
            </div>
        </div>
    );
}

export default App;
