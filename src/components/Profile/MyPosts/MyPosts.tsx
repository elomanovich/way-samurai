import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'How are you', likeCurrent: 15},
        {id: 2, message: 'It is my first post', likeCurrent: 20},
        {id: 3, message: 'It is my second post', likeCurrent: 21},
        {id: 4, message: 'It is my third post', likeCurrent: 32},
    ]
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
                {postData.map(p => <Post key={p.id} message={p.message} likeCurrent={p.likeCurrent}/>)}
            </div>
        </div>
    )
}
