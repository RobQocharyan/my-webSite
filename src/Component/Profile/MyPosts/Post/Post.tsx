import classes from "./Post.module.css";
import React from 'react';

type PropsType = {
  message:string
  count:number
}

const Post:React.FC<PropsType> = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbj6F59q51BqwKiBhCrcu9kWmoVXxceKCzsw&usqp=CAU" alt="ads" />
      {props.message}
      <div>
        <span>Like {props.count}</span>
      </div>
    </div>
  );
};

export default Post;
