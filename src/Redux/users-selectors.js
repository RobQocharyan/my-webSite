import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
};


export const getUsers = createSelector(
  getUsersSelector,
  (users,isFetching) => {
    return users.filter((u) => {
      return true;
    });
  }
);

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgess = (state) => {
  return state.usersPage.followingInProgress;
};

export const countSomethingDifficult = (state) => {
  let count = 23;

  return count;
};
