import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator,} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const updateNewText = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
debugger
                return (<MyPosts updateNewPostText={updateNewText} addPost={addPost} newPostText={state.profilePage.newPostText}
                                 postData={state.profilePage.post}/>)
            }
            }
        </StoreContext.Consumer>
    )
}
