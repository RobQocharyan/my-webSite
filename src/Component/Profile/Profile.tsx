
import React from 'react';  
import { ProfileType } from '../../type/type';

import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



type PropsType  = {
  profile:any
  status:string
  updateStatus:(status:string)=>void
  isOwner:boolean
  savePhoto:(file:File)=>void
  saveProfile:(profile:ProfileType)=>Promise<void>
}

const Profile:React.FC<PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto}  isOwner={props.isOwner}  profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile} />
      <MyPostsConteiner  />
    </div>
  );
};

export default Profile;
