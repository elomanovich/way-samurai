import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderType, any> {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

type MapStateToPropsType = {
    isAuth: boolean | null
    login: string | null
}
type MapDispatchToProps = {
}

type HeaderType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth['isAuth'],
        login: state.auth['login']
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)