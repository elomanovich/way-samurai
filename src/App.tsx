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
    post: Array<PostType>
    newPostText: string
}
export type DialogsDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
export type StateType = {
    state: {
        profilePage: PostDataType,
        dialogsPage: DialogsDataType
    }
    addPost: () => void
    updateNewPostText: (newText:string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

const App: React.FC<StateType> = (props) => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile updateNewPostText={props.updateNewPostText}
                                              profilePage={props.state.profilePage}
                                              addPost={props.addPost}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           updateNewMessageText={props.updateNewMessageText}
                           state={props.state.dialogsPage}
                           addMessage={props.addMessage}
                       />}/>
            </div>
        </div>
    );
}

export default App;
