import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Form, Field } from "react-final-form";
import {
  MaxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormControls";

const maxLength10 = MaxLengthCreator(10);

const MyPosts = React.memo((props) => {
  let postElements = [...props.post].reverse().map((post) => {
    return <Post message={post.message} key={post.count} count={post.count} />;
  });

  let onAddPost = (values) => {
    props.addPostActionCreator(values.newDialog);
  };

  return (
    <div className={classes.myPost}>
      <h2>my post</h2>
      <MyPostsReduxForm onSubmit={onAddPost} />
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
});
const MyPostsRedux = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Write your post!!"
          component={Textarea}
          name="newDialog"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsReduxForm = Form({ form: "dialogAddPost" })(MyPostsRedux);
export default MyPosts;
