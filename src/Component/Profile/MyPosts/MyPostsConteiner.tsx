import { connect } from "react-redux";
import MyPosts, { DispatchPostsPropsType, MyPostsPropsType } from "./MyPosts";
import { AppStateType } from "../../../Redux/redux-store";
import { actions } from "../../../Redux/profile-reducer";

let mapStateToProps = (state:AppStateType) => {
  return {
    post: state.profilePage.postData,
  };
};
 

const MyPostsConteiner = connect<MyPostsPropsType,DispatchPostsPropsType,{},AppStateType>(mapStateToProps, {onAddPost:actions.addPostActionCreator})(MyPosts);

export default MyPostsConteiner;
