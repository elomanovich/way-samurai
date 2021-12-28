import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../App";
import {
    ActionType,
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/state";

type MyPostPropsType = {
    postData: Array<PostType>
    dispatch: (action: ActionType) => void
    newPostText: string
}


export const MyPosts: React.FC<MyPostPropsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const updateNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={updateNewText} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postData.map((p) => <Post key={p.id} id={p.id} message={p.message}
                                                 likeCurrent={p.likeCurrent}/>)}
            </div>
        </div>
    )
}
