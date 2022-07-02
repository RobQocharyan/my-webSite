import React from "react";
import { connect } from "react-redux";
import {
  getStatus,
  getUsersProfile,
  updateStatus,
} from "../../Redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push("/login")
      }
    }
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});
export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);