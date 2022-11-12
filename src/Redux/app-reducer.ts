
import { getAuthUsersData } from "./auth-reducer";
import { BaseThunkType, InferActionsType } from "./redux-store";




let initialState = {
  initialized: false,
};


const appReducer = (state = initialState, action:ActionType):initialStateType => {
  switch (action.type) {
    case "INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};


export const actions = {
  initializedSuccess : () => ({ type:'INITIALIZED_SUCCESS'  } as const )
}


// type DispatchType = Dispatch<ActionType>

export const initializeApp = ():ThunkType => (dispatch) => {
  let promise = dispatch(getAuthUsersData());
    Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};



export default appReducer;




type ActionType = InferActionsType<typeof actions>
export type initialStateType= typeof initialState
type ThunkType = BaseThunkType<ActionType,void>
