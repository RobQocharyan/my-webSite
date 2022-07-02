import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  totalItemCount,
  pageSize,
  onPageChanged,
  users,
  followingInProgress,
  unfollow,
  follow,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemCount={totalItemCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Users;
