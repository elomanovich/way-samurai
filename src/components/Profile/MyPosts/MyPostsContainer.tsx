import React from "react";
import {
    addPostActionCreator, PostType,
    updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import {ActionType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MyPostContainerPropsType = {
    postData: Array<PostType>
    dispatch: (action: ActionType) => void
    newPostText: string
}


export const MyPostsContainer: React.FC<MyPostContainerPropsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const updateNewText = (text: string) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText={updateNewText} addPost={addPost} newPostText={props.newPostText}
                 postData={props.postData}/>
    )
}
