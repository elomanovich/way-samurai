import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <div>
            <textarea></textarea>
            <button>Add post</button>
            </div>
            <Post message = 'How are you?' likeCurrent={ 15}/>
            <Post message = 'It is my first post' likeCurrent={ 20}/>
        </div>
    )
}
