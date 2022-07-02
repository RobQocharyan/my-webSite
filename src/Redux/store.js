import dialogReducer from "./dialog-reducer";
import friendReducer from "./friend-reducer";
import profileReducer from "./profile-reducer";

const store = {
  _state: {
    dialogPage: {
      dialogsData: [
        { id: "1", name: "Robert" },
        { id: "2", name: "Armen" },
        { id: "3", name: "Hakob" },
        { id: "4", name: "Gexam" },
        { id: "5", name: "Armine" },
      ],
      messagesData: [
        { messages: "Hi" },
        { messages: "How are you" },
        { messages: "Good" },
      ],
      newMessag: "",
    },
    profilePage: {
      postData: [
        { message: "hi, how are you", count: 500 },
        { message: 'by", i love  you', count: 587 },
        { message: "Gooood", count: 457 },
        { message: "what is your name", count: 121 },
      ],
      newPostText: "Write",
    },
    friendPage: {
      friendsobj: [
        {
          name: "Sedrak",
        },
        {
          name: "Vaxinak",
        },
        {
          name: "Pargev",
        },
      ],
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
    this._state.friendPage = friendReducer(this._state.friendPage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
