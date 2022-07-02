import React from "react";
import Preloader from "../../Common/Preloader/Preloader";

import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = ({profile,status,updateStatus}) => {

  if(!profile){
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.content}>
        <img src={profile.photos.large} alt="images" />
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
