import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, withRouter} from "react-router-dom";

// type PathParamsType = {
//     userId: string
// }

type MapStateToPropsType = {
    profile: any
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getProfile: any
}
export type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

export type PropsType = any

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth['isAuth']
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getProfile
})(WithUrlDataContainerComponent)