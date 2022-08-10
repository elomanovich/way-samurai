import {addMessageActionCreator, DialogsDataType, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    dialogsPage: DialogsDataType
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: () => void
}

export type DialogsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStateType): any => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)