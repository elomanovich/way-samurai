import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsType} from "./MyPostsContainer";
import {ErrorMessage, Field, Form, Formik} from "formik";




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
const validate = (value: ValueFormikType) => {
    const errors: any = {}
    if (!value.message) {
        errors.message = 'Field is required'
    } else if(value.message.length > 10) {
        errors.message = 'Max length is 10 symbols'
    }
    return errors
}

export const AddMyPostsForm = (props: PropsType) => {
    const submit = (values: ValueFormikType) => {
        props.onAddPost(values.message)
    }
    return (
        <Formik
            initialValues={{message: ''}}
            validate={validate}
            onSubmit={submit}
        >
            {({errors}) => (
                <Form>
                    <div><Field className={errors.message? s.errorField: ''} type="textarea" name="message" placeholder='Enter your post'/></div>
                    <ErrorMessage className={s.error} name={'message'} component={'div'}/>
                    <button type="submit">
                        Post
                    </button>
                </Form>
            )}
        </Formik>
    )
}