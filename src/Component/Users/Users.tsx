import { useSelector } from "react-redux";
import { FilterType, requestUsers, unfollow,follow } from "../../Redux/users-reducer";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import { getCurrentPage, getFollowingInProgess, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from './../../Redux/users-selectors';
import { useEffect } from 'react';
import { useAppDispatch } from './../../Redux/redux-store';

type PropsType = {
  key: number;
};


export const Users: React.FC<PropsType> = (props) => {


  const dispatch =  useAppDispatch()

  useEffect(()=>{
    dispatch(requestUsers(currentPage,pageSize,filter));
  })


  const totalItemCount = useSelector(getTotalUsersCount)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const filter = useSelector(getUsersFilter)
  const users = useSelector(getUsers)
  const followingInProgress = useSelector(getFollowingInProgess)

  const followw=(userId: number) => {
    dispatch(follow(userId))
  };
  const unfolloww=(userId: number) => {
    dispatch(unfollow(userId))

  };
 




  const onPageChanged = (pageNumber: number)=>{
    dispatch(requestUsers(pageNumber,pageSize,filter));
  }

  const onFilterChangede = (filter:FilterType)=>{
    dispatch(requestUsers(1,pageSize,filter));
  }


  return (
    <div>
      <UsersSearchForm onFilterChangede={onFilterChangede} />
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
            unfollow={unfolloww}
            follow={followw}
            key={u.id}
            onPageChanged={onPageChanged}
          />
        ))}
      </div>
    </div>
  );
};




export default Users;
