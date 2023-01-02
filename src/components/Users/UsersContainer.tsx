import {connect} from "react-redux";
import {
    followed,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowed,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)

    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followed={this.props.followed}
                unfollowed={this.props.unfollowed}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToProps = {
    followed: any
    unfollowed: any
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: any
}
export type UsersContainerType = MapStateToPropsType & MapDispatchToProps

// let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        followed,
        unfollowed,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers
    })
)(UsersContainer)