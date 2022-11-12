import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {
  MaxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { CreateField, GetStringKeys, Textarea } from "../../Common/FormsControls/FormControls";
import { PostDataType } from "../../../type/type";

const maxLength10 = MaxLengthCreator(10);

export type MyPostsPropsType = {
  post:Array<PostDataType>
}

export type DispatchPostsPropsType = {
  onAddPost:(newDialog:string)=>void
}
const MyPosts:React.FC<MyPostsPropsType & DispatchPostsPropsType> = (props) => {
  let postElements = [...props.post].reverse().map((post) => {
    return <Post key={post.id} message={post.message} count={post.count} />;
  });

  let onAddPostForm = (values:AddPostValuesFormType) => {
    props.onAddPost(values.newDialog);
    values.newDialog="";
  };

  return (
    <div className={classes.myPost}>
      <h2>my post</h2>
      <MyPostsReduxForm onSubmit={onAddPostForm} />
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

type PropsType = {

}


export type AddPostValuesFormType = {
  newDialog:string
}

export type AddPostValuesFormKeysType = GetStringKeys<AddPostValuesFormType>


const MyPostsRedux:React.FC<InjectedFormProps<AddPostValuesFormType, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      {CreateField<AddPostValuesFormKeysType>("Write your post!!", "newDialog", [required,maxLength10], Textarea)}
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm<AddPostValuesFormType,PropsType>({ form: "dialogAddPost" })(MyPostsRedux);
const MyPostMemorized = React.memo(MyPosts)
export default MyPostMemorized;
