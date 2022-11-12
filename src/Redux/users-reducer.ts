import { Dispatch } from "redux";
import { ApiResponseType, ResultCodeEnum} from "../api/Api";
import { usersAPI } from "../api/user-api";
import { UserType } from "../type/type";
import { updateObjectInArray } from "../utils/object-helper";
import {BaseThunkType, InferActionsType } from "./redux-store";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //array of users id
  filter:{
    term:"",
    friend:null as null | boolean
  }
};


const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'FOLLOWED':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case 'UNFOLLOWED':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case 'SET_USERS':
      return { ...state, users: action.users };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET_TOTAL_USERS_COUNT':
      return { ...state, totalUsersCount: action.count };
    case 'TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'SET_FILTER':
      return {...state,filter:action.payload}
    case 'TOGGLE_IS_FOLLOWING_IN_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};



export const actions = {
  followSuccess: (userId: number) => ({ type: 'FOLLOWED', userId } as const),
  unFollowSuccess: (userId: number) => ({ type: 'UNFOLLOWED', userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage,
  } as const),
  setFilter: (filter:FilterType,) => ({
    type: 'SET_FILTER',
    payload:filter
  } as const),
  setTotalUsersCount: (totalCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalCount,
  } as const),
  setTogleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching: isFetching,
  } as const),
  TogleIsFollowingInProgress: (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS',
    isFetching,
    userId,
  } as const),
};



export const requestUsers = (page: number, pageSize: number,filter:FilterType):ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setTogleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setFilter(filter));

    let data = await usersAPI.getUsers(page, pageSize,filter.term,filter.friend);
    dispatch(actions.setTogleIsFetching(true));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};


const _followUnfollowFlow = async (
  dispatch: Dispatch<ActionTypes>,
  userId: number,
  apiMethod: (userId:number)=>Promise<ApiResponseType>,
  actionCreator: (userId: number) => ActionTypes
) => {
  dispatch(actions.TogleIsFollowingInProgress(true, userId));

  let response = await apiMethod(userId);

  if (response.resultCode === ResultCodeEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.TogleIsFollowingInProgress(false, userId));
};

export const follow = (userId: number):ThunkType => {
  return async (dispatch) => {
   await _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      actions.followSuccess
    );
  };
};

export const unfollow = (userId: number):ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      actions.unFollowSuccess
    );
  };
};

export default usersReducer;


export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter
type ActionTypes = InferActionsType <typeof actions>;
type ThunkType = BaseThunkType<ActionTypes>;