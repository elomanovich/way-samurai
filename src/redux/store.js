// type StoreType = {
//     _state: RootStateType
//     _subscribe: (observer: () => void) => void
//     _callSubscriber: () => void
//     getState: () => RootStateType
//     dispatch: (action: ActionType) => void
// }
//
//
//  const store: StoreType = {
//     _state: {
//         profilePage: {
//             post: [
//                 {id: 1, message: 'How are you', likeCurrent: 15},
//                 {id: 2, message: 'It is my first post', likeCurrent: 20},
//                 {id: 3, message: 'It is my second post', likeCurrent: 21},
//                 {id: 4, message: 'It is my third post', likeCurrent: 32},
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Zhenya'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Dima'},
//                 {id: 4, name: 'Sasha'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'Hello'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'How are you?'},
//             ],
//             newMessageText: ''
//         }
//     },
//     _subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber()
//     }
// }
//
//
