import React from "react";
import { connect } from "react-redux";
import { logout } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import Header, { DispatchPropsType, MapPropsType} from "./Header";

class HeaderContainer extends React.Component<MapPropsType& DispatchPropsType> {
  
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state:AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
} as MapPropsType);


export default connect<MapPropsType,DispatchPropsType,{},AppStateType>(mapStateToProps, {logout })(HeaderContainer);
