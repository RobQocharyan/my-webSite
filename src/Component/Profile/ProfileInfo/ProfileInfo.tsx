import React, { ChangeEvent, useState } from "react";
import Preloader from "../../Common/Preloader/Preloader";

import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.jpg";
import ProfileDataForm from "./ProfileDataForm";
import { ContactsType, ProfileType } from "../../../type/type";

type PropsType = {
  profile:ProfileType
  status:string
  updateStatus:(status:string)=>void
  isOwner:boolean
  savePhoto:(file:File)=>void
  saveProfile:(profile:ProfileType)=>Promise<void>
}

const ProfileInfo:React.FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      savePhoto(event.target.files[0]);
    }
  };

  const onSubmit = (formData:ProfileType) => {
    //todo: remove then 
    saveProfile(formData).then(()=>{
      setEditMode(false)
    })
    };

  return (
    <div>
      <div className={classes.content}>
        <img
          src={profile.photos.large || userPhoto}
          alt="images"
          className={classes.mainFoto}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

type ProfileDataPropsType = {
  profile:ProfileType
  isOwner:boolean
  goToEditMode:()=>void 
}

const ProfileData:React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={classes.allDivs}>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key as keyof ContactsType]}
            />
          );
        })}
      </div>
    </div>
  );
};

type ContactPropsType = {
  contactTitle:string 
  contactValue:string
}

const Contact:React.FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
