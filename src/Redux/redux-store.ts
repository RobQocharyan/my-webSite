import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friend-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import { useDispatch } from "react-redux";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  friendPage: friendReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer ,
});


type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>


export type InferActionsType<T> = T extends {[key:string]:(...args:any[])=> infer U}? U:never

export type BaseThunkType<A extends Action,R=Promise<void>> = ThunkAction<R,AppStateType,unknown, A>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

//useDispatch hook in typescript
export type AppDispatch = typeof store.dispatch 
export const useAppDispatch = () => useDispatch<AppDispatch>()

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

export default store;
