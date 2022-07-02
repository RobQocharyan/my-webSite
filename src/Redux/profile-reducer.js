import { profileAPI, usersAPI } from "../api/Api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
let initialState = {
  postData: [
    {id:1, message: "hi, how are you", count: 500 },
    {id:2, message: 'by", i love  you', count: 587 },
    {id:3, message: "Gooood", count: 457 },
    {id:4, message: "what is your name", count: 121 },
  ],
  profile: null,
  status: " ",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newDialog = {
        message: action.newDialog,
        count: 1,
      };
      return {
        ...state,
        postData: [...state.postData, newDialog],
        newPostText: "",
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newDialog) => ({
  type: ADD_POST,
  newDialog,
});

export const setStatusActionCreator = (status) => ({
  type: SET_STATUS,
  status,
});
export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const deletePosts = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const getUsersProfile = (userId) => async (dispatch) => {
  let response =  await usersAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
 let response = await profileAPI.getStatus(userId);
    dispatch(setStatusActionCreator(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatusActionCreator(status));
    }
};

export default profileReducer;
