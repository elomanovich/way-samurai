import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../Profile";



export const MyPosts: React.FC<PostDataType> = (props) => {

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea/>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postData.map((p) => <Post key={p.id} id={p.id} message={p.message} likeCurrent={p.likeCurrent}/>)}
            </div>
        </div>
    )
}
