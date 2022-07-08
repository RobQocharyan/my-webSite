import classes from ".././Dialogs.module.css";
import React from 'react';  


const MessagesItem = (props,id) => {
  return <div key={id} className={classes.message}>{props.message}</div>;
};

export default MessagesItem;
