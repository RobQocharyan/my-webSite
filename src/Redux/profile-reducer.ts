import { FormAction, stopSubmit } from "redux-form";
import {  ResultCodeEnum } from "../api/Api";
import { profileAPI } from "../api/profile-api";
import { PhotosType, PostDataType, ProfileType } from "../type/type";
import {BaseThunkType, InferActionsType } from "./redux-store";





let initialState = {
  postData: [
    { id: 1, message: "hi, how are you", count: 500 },
    { id: 2, message: 'by", i love  you', count: 587 },
    { id: 3, message: "Gooood", count: 457 },
    { id: 4, message: "what is your name", count: 121 },
  ] as Array<PostDataType>,
  profile:null as ProfileType | null,
  status: " ",
};



const profileReducer = (state = initialState, action:ActionTypes):initialStateType => {
  switch (action.type) {
    case 'ADD_POST':
      const newDialog = {
        id:5,
        message: action.newDialog,
        count: 1,
      };
      return {
        ...state,
        postData: [...state.postData, newDialog],
      };

    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'DELETE_POST':
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };
    case 'SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }as ProfileType,
      } ;
    default:
      return state;
  }
};


export const actions = {
  addPostActionCreator : (newDialog:string) => ({
    type: 'ADD_POST',
    newDialog,
  } as const),
  setStatusActionCreator : (status:string) => ({
    type: 'SET_STATUS',
    status,
  } as const) ,
  setUsersProfile : (profile:ProfileType) => ({
    type: 'SET_USER_PROFILE',
    profile,
  } as const),
  deletePosts : (postId:number) => ({
    type: 'DELETE_POST',
    postId,
  } as const) ,
  savePhotoSuccess :(photos:PhotosType) => ({
    type: 'SAVE_PHOTO_SUCCESS',
    photos,
  } as const)
}



export const getUsersProfile = (userId:number):ThunkType => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(actions.setUsersProfile(data));
};

export const getStatus = (userId:number):ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatusActionCreator(data));
};

export const updateStatus = (status:string):ThunkType => async (dispatch) => {
  let meData = await profileAPI.updateStatus(status);
  if (meData.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setStatusActionCreator(status));
  }
};

export const savePhoto = (file:File):ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
};



export const saveProfile = (profile:ProfileType):ThunkType => async (dispatch, getState) => {

  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === ResultCodeEnum.Success) {
    if(userId != null){
      dispatch(getUsersProfile(userId));
    }else{
      throw new Error("userID  can't be null")
    }
  }
   else {
      dispatch(stopSubmit("edit-profile",{_error:data.messages[0]}));
      // "contacts":{"facebooke":response.data.messages[0]}
      return Promise.reject(data.messages[0]);

  }
};
export default profileReducer;

export type initialStateType = typeof initialState;

type ActionTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | FormAction>