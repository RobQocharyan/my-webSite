
import React from 'react';  

import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto}  isOwner={props.isOwner}  profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile} />
      <MyPostsConteiner  />
    </div>
  );
};

export default Profile;
