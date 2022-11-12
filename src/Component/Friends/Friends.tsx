
import React from 'react';  

import FriendsItem from "./FriendsItem";
import classes from "./Friends.module.css";
import { AppStateType } from '../../Redux/redux-store';

type PropsType = {
  name:string
}

const Friends:React.FC<AppStateType> = (props:any) => {
  let state = props.store.getState().friendPage;
  let friendsData=state.friendsobj.map((el: PropsType)=>{
    return <FriendsItem name={el.name} />
  })

  return <div>
    <div  className={classes.ads}>{friendsData}</div>
  </div>;
};

export default Friends;
