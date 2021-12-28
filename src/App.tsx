import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {StoreType} from "./redux/state";

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
    post: Array<PostType>
    newPostText: string
}
export type DialogsDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}

type StorePropsType = {
    store: StoreType
}

const App: React.FC<StorePropsType> = (props) => {
    const state = props.store.getState()
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile dispatch={props.store.dispatch.bind(props.store)}
                                              profilePage={state.profilePage}
                       />}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           dispatch={props.store.dispatch.bind(props.store)}
                           state={state}
                       />}/>
            </div>
        </div>
    );
}

export default App;
