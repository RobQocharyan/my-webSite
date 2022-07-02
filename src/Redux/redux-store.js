import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import friendReducer from "./friend-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

// import { reducer as formReducer } from "redux-form"; 
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  friendPage: friendReducer,
  usersPage: usersReducer,
  auth: authReducer,
  // form: formReducer,
  app:appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
