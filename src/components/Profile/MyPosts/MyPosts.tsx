import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type MyPostPropsType = {
    postData: Array<PostType>
    updateNewPostText: (text: string) => void
    newPostText: string
    addPost: () => void
}


export const MyPosts: React.FC<MyPostPropsType> = (props) => {

    const onAddPost = () => {
        props.addPost()
    }

    const updateNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={updateNewText} value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add post
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
