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
                       render={() => <Profile updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                              profilePage={state.profilePage}
                                              addPost={props.store.addPost.bind(props.store)}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                           state={state}
                           addMessage={props.store.addMessage.bind(props.store)}
                       />}/>
            </div>
        </div>
    );
}

export default App;
