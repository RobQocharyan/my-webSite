import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/Api";

const SET_USER_DATA = "samurai-network/auth/SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET-CAPTCHA-URL-SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, //if nall,then captcha  is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUsersData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const setCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUsersData = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUsersData(id, email, login, true));
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
export const login = (email, password, rememberMe,captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe,captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUsersData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  let captchaUrl = response.data.url;

  dispatch(setCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUsersData(null, null, null, false));
  }
};
export default authReducer;
