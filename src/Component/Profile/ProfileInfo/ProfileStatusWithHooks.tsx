import React, {  ChangeEvent, useEffect, useState } from "react";
import classes from "./ProfileInfo.module.css";


type ProfileStatusType ={
  status:string
  updateStatus:(status:string)=>void
}

const ProfileStatusWithHooks:React.FC<ProfileStatusType> = (props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (event:ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <div className={classes.status}>
      {!editMode && (
        <div>
         <b>Status</b>: <span onDoubleClick={activateEditMode}>
            {props.status || "---------------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            value={status}
            onBlur={deactivateEditMode}
            autoFocus={true}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
