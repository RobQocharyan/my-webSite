
import React from 'react';  

import FriendsItem from "./FriendsItem";
import classes from "./Friends.module.css";
const Friends = (props) => {
  let state = props.store.getState().friendPage;
  let friendsData=state.friendsobj.map((el)=>{
    return <FriendsItem name={el.name} />
  })

  return <div>
    <div  className={classes.ads}>{friendsData}</div>
  </div>;
};

export default Friends;
