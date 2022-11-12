
import React from 'react';  


import classes from "./FriendsItem.module.css";

type PropsType = {
  name:string
}
const FriendsItem:React.FC<PropsType> = (props) => {
  return (
    <div>
      <div className={classes.asd}></div>
      <a href="https://www.google.com/" className={classes.ads}> {props.name}</a>
    </div>
  );
};

export default FriendsItem;
