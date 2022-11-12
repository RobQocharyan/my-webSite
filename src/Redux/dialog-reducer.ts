import { InferActionsType } from "./redux-store";




let initialState = {
  dialogsData: [
    { id: 1, name: "Robert" },
    { id: 2, name: "Armen" },
    { id: 3, name: "Hakob" },
    { id: 4, name: "Gexam" },
    { id: 5, name: "Armine" },
  ] as Array<DialogType>,
  messagesData: [
    { id: 1, messages: "Hi" },
    { id: 2, messages: "How are you" },
    { id: 3, messages: "Good" },
  ] as Array<MessagesDataTaype>,
};



const dialogReducer = (
  state = initialState,
  action: ActionTypes
): IniinitialStateType => {
  switch (action.type) {
    case "DIALOGIC":
      const newMessag = action.newMessages;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 8, messages: newMessag }],
      };

    default:
      return state;
  }
};




export const actions = {
  sendMessage : (newMessages: string) => ({
    type: 'DIALOGIC',
    newMessages,
  })
}



export default dialogReducer;



type DialogType = {
  id: number;
  name: string;
};

type MessagesDataTaype = {
  id: number;
  messages: string;
};

export type IniinitialStateType = typeof initialState;

type ActionTypes = InferActionsType<typeof actions>