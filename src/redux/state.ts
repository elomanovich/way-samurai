import {rerenderEntireThree} from "../render";

export let state = {
    profilePage: {
        post: [
            {id: 1, message: 'How are you', likeCurrent: 15},
            {id: 2, message: 'It is my first post', likeCurrent: 20},
            {id: 3, message: 'It is my second post', likeCurrent: 21},
            {id: 4, message: 'It is my third post', likeCurrent: 32},
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Zhenya'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Sasha'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'How are you?'},
        ]
    }
}

export const addPost = () => {
    debugger
    const newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likeCurrent: 0
    }
    state.profilePage.post.push(newPost)
    rerenderEntireThree(state)
}

export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText
    rerenderEntireThree(state)
}

