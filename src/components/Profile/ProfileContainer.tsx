import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileType} from "../../type/types";
import {compose} from "redux";

// type PathParamsType = {
//     userId: string
// }

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string | null
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
            userId = '9079'
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer)