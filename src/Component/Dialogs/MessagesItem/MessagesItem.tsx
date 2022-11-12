import classes from ".././Dialogs.module.css";
import React from 'react';  


type PropsType= {
    message:string
    id:number
}

const MessagesItem:React.FC<PropsType> = (props,id) => {
  return <div key={id} className={classes.message}>{props.message}</div>;
};

export default MessagesItem;
