import React from "react";
import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";
import { Navigate } from "react-router";
import { logout, login } from "../../Redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { CreateField, Input } from "../Common/FormsControls/FormControls";
import classes from "./../Common/FormsControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  console.log("rerender");

  return (
    <form onSubmit={handleSubmit}>
      {CreateField("Email", "email", [required], Input)}
      {CreateField("Password", "password", [required], Input, {
        type: "password",
      })}

      {CreateField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "Checkbox" },
        "remember me"
      )}
      {error && <div className={classes.formSummaryError}>{error}</div>}

        <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login, logout })(Login);
