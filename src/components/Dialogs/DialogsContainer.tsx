import {addMessageActionCreator, DialogsDataType} from "../../redux/dialogs-reducer";
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
    addMessage: (values: string) => void
}

export type DialogsType = MapStatePropsType & MapDispatchPropsType


let mapStateToProps = (state: AppStateType): any => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (values) => {
            dispatch(addMessageActionCreator(values))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)