import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getLogin} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderType> {

    componentDidMount() {
        this.props.getLogin()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchToProps = {
    getLogin: any
}

type HeaderType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth['isAuth'],
        login: state.auth['login']
    }
}

export default connect(mapStateToProps, {getLogin})(HeaderContainer)