import React from "react";
import {reduxForm } from "redux-form";

import { connect } from "react-redux";
import { Navigate } from "react-router";
import { logout, login } from "../../Redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { CreateField, Input } from "../Common/FormsControls/FormControls";
import classes from "./../Common/FormsControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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

      {captchaUrl && <img src={captchaUrl} alt="" />}
      {captchaUrl &&
        CreateField("Symbols from images", "captcha", [required], Input)}

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
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login, logout })(Login);
