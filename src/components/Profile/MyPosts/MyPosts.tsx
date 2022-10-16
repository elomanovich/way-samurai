import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {Field, Form, Formik} from "formik";


export const MyPosts: React.FC<MyPostsType> = (props) => {

    const onAddPost = (values: string) => {
        props.addPost(values)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddMyPostsForm onAddPost={onAddPost}/>
            </div>
            <div className={s.posts}>
                {props.postData.map((p) => <Post key={p.id} id={p.id} message={p.message}
                                                 likeCurrent={p.likeCurrent}/>)}
            </div>
        </div>
    )
}
type ValueFormikType = {
    message: string
}
type PropsType = {
    onAddPost: (values: string) => void
}

export const AddMyPostsForm = (props: PropsType) => {
    const submit = (values: ValueFormikType) => {
        props.onAddPost(values.message)
    }
    return (
        <Formik
            initialValues={{message: ''}}
            onSubmit={submit}
        >
            {() => (
                <Form>
                    <div><Field type="textarea" name="message" placeholder='Enter your post'/></div>
                    <button type="submit">
                        Post
                    </button>
                </Form>
            )}
        </Formik>
    )
}