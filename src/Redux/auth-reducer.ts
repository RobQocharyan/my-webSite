import { ResultCodeEnum } from "../api/Api";
import {  BaseThunkType, InferActionsType } from "./redux-store";
import { FormAction, stopSubmit } from 'redux-form';
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";


let initialState = {
  userId: null as null |number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false,
  captchaUrl: null as string | null, //if nall,then captcha  is not required
};



const authReducer = (state = initialState, action:ActionType):InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
    case 'GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};




export const actions = {
  setAuthUsersData : (userId:number | null, email:string | null, login:string | null, isAuth:boolean) => ({
    type: 'SET_USER_DATA',
    payload: { userId, email, login, isAuth },
  } as const),
   setCaptchaUrlSuccess : (captchaUrl:string) => ({
    type: 'GET_CAPTCHA_URL_SUCCESS',
    payload: { captchaUrl },
  } as const)
}




export const getAuthUsersData = ():ThunkType => async (dispatch) => {
  let meData = await authAPI.me();
  if (meData.resultCode === ResultCodeEnum.Success) {
    let { id, email, login } = meData.data;
    dispatch(actions.setAuthUsersData(id, email, login, true));
  }
};

// export const login = (email, password, rememberMe) => async (dispatch) => {
//   let response = await authAPI.login(email, password, rememberMe);
//     if (response.data.resultCode === 0) {
//       dispatch(getAuthUsersData());
//     } else {
//       let message =
//         response.data.messages.length > 0
//           ? response.data.messages[0]
//           : "Some error";
//       dispatch(stopSubmit("login", { _error:message }));
//     }
// };
export const login = (email:string, password:string, rememberMe:boolean,captcha:string):ThunkType => async (dispatch) => {
  let meData = await authAPI.login(email, password, rememberMe,captcha);
  if (meData.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthUsersData());
  } else {
    if (meData.resultCode === ResultCodeEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message =
    meData.messages.length > 0
        ? meData.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
  let data = await securityAPI.getCaptchaUrl();
  let captchaUrl = data.url;

  dispatch(actions.setCaptchaUrlSuccess(captchaUrl));
};

export const logout = ():ThunkType => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setAuthUsersData(null, null, null, false));
  }
};
export default authReducer;


export type InitialStateType = typeof initialState;
type ActionType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionType | FormAction>