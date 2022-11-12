import React from "react";
import { connect } from "react-redux";
import {
  getStatus,
  getUsersProfile,
  savePhoto,
  saveProfile,
  updateStatus,
} from "../../Redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { compose } from "redux";
import { AppStateType } from "../../Redux/redux-store";
import { ProfileType } from "../../type/type";


function withRouter(Component:any) {
  function ComponentWithRouterProp(props:any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}




type  MapDispatchPropsType ={
  getUsersProfile:(userId:number)=>void 
  getStatus:(userId:number)=>void
  updateStatus:(text:string)=>void
  savePhoto:(file:File)=>void
  saveProfile:(Profile:ProfileType)=>void

}


type  PathParamsType = {
  router:any
  
}






type PropsType = MapStatePropsType & MapDispatchPropsType & PathParamsType;

class ProfileContainer extends React.Component<PropsType>{

  refreshProfile() {

    let userId:number  | null= this.props.router.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        // todo may be replace push withredirect
        // this.props.history.push("/login"); 
      }
    }

    if(!userId){
      console.error("Id should existid in URL params or  on the state ('authorizedUserId')")
    }else{
      this.props.getUsersProfile(userId);
      this.props.getStatus(userId);
    }
 
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps:PropsType, prevState:PropsType) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }

  componentWillUnmount():void{
    
  }



  render() {
    return (
      <Profile
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} savePhoto={function (file: File): void {
          throw new Error("Function not implemented.");
        } } saveProfile={function (profile: ProfileType): Promise<void> {
          throw new Error("Function not implemented.");
        } }         />
    );
  }
}

type  MapStatePropsType =ReturnType<typeof mapStatePropsType>
let mapStatePropsType = (state:AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStatePropsType, { getUsersProfile, getStatus, updateStatus,savePhoto,saveProfile }),
  withRouter
)(ProfileContainer);
