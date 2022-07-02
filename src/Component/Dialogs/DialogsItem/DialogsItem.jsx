import { NavLink } from "react-router-dom";
import classes from ".././Dialogs.module.css";
import React from 'react';  

const DialogsItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink
        to={props.id}
        className={(a) => (a.isActive ? classes.active : "")}
      >
        {props.name}
      </NavLink>
    </div>
  );
};



export default DialogsItem;
