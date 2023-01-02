import {Redirect} from "react-router-dom";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean | null
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth['isAuth']
})

export function withAuthRedirect<T>(Component: any) {

    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}