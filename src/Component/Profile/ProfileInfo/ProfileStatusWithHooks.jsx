import React, { useEffect, useState } from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

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

  const onStatusChange = (event) => {
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
