// import React from "react";
// import { Form } from "react-final-form";
// import { connect } from "react-redux";
// import { Navigate } from "react-router";
// import { logout } from "../../Redux/auth-reducer";
// import { required } from "../../utils/validators/validators";
// import { CreateField, Input } from "../Common/FormsControls/FormControls";
// import classes from "./../Common/FormsControls/FormControls.module.css";

// const LoginForm = ({ hendleSubmit, error }) => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={hendleSubmit}>
//         {CreateField("Email", "email", Input, [required])}

//         {CreateField("Password", "password", Input, [required], {
//           type: "password",
//         })}
//         {CreateField(
//           null,
//           "rememberMe",
//           Input,
//           [],
//           { type: "Checkbox" },
//           "remember me"
//         )}

//         {error && <div className={classes.formSummaryError}>{error}</div>}
//         <div>
//           <button>Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const LoginReduxForm = Form({
//   form: "login",
// })(LoginForm);

// const Login = (props) => {
//   const onSubmit = (formData) => {
//     props.login(formData.email, formData.password, formData.rememberMe);
//   };

//   if (props.isAuth) {
//     return <Navigate to={"/profile"} />;
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <LoginReduxForm onSubmit={onSubmit} />
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     isAuth: state.auth.isAuth,
//   };
// };
// export default connect(mapStateToProps, { Login, logout })(Login);
