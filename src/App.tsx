import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ActionType, AppStateType} from "./redux/redux-store";
import {Dispatch} from "redux";


type AppPropsType = {
    dispatch: Dispatch<ActionType>
    state: AppStateType
}

const App: React.FC<AppPropsType> = (props) => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile dispatch={props.dispatch}
                                              profilePage={props.state.profilePage}
                       />}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           dispatch={props.dispatch}
                           state={props.state}
                       />}/>
            </div>
        </div>
    );
}

export default App;
