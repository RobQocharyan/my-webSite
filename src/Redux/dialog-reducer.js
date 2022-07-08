const DIALOGIC = "DIALOGIC";

let initialState = {
  dialogsData: [
    { id: "1", name: "Robert" },
    { id: "2", name: "Armen" },
    { id: "3", name: "Hakob" },
    { id: "4", name: "Gexam" },
    { id: "5", name: "Armine" },
  ],
  messagesData: [
    { id: 1, messages: "Hi" },
    { id: 2, messages: "How are you" },
    { id: 3, messages: "Good" },
  ],
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIALOGIC:
      const newMessag = action.newMessages;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 8, messages: newMessag }],
      };

    default:
      return state;  
  }
};

export const dialogicActionCretor = (newMessages) => ({ type: DIALOGIC, newMessages });

export default dialogReducer;
