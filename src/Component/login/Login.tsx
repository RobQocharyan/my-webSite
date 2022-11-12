import { FC } from "react";
import { Navigate } from "react-router";
import { InjectedFormProps, reduxForm } from "redux-form";
import {login } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { required } from "../../utils/validators/validators";
import { CreateField, Input } from "../Common/FormsControls/FormControls";
import classes from "./../Common/FormsControls/FormControls.module.css";
import { useSelector } from 'react-redux';
import { useAppDispatch } from './../../Redux/redux-store';

type LoginFormOwnPropsType = {
  captchaUrl:string | null
}

const LoginForm:FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.field}>
        {CreateField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}     
      </div>
      <div className={classes.field}>
        {CreateField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {
         type: "password",
         })}
      </div>
      <div className={classes.check}>
        {CreateField<LoginFormValuesTypeKeys>(
          undefined,
          "rememberMe",
          [],
          Input,
          { type: "Checkbox" },
          "remember me"
       )}
      </div>

      

     

      {captchaUrl && <img src={captchaUrl} alt="" />}
      {captchaUrl &&
        CreateField<LoginFormValuesTypeKeys>("Symbols from images", "captcha", [required], Input)}

      {error && <div className={classes.formSummaryError}>{error}</div>}

      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType,LoginFormOwnPropsType>({
  form: "login",
})(LoginForm);



export type LoginFormValuesType = {
  email:string 
  password:string
  rememberMe:boolean
  captcha:string
}



export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType,string>
 

  
export const Login:FC = (props) => {
  const captchaUrl = useSelector((state:AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state:AppStateType)=> state.auth.isAuth)

  const dispatch = useAppDispatch()
  const onSubmit = (formData:LoginFormValuesType) => {
    dispatch(login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    ));
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className={classes.loginDiv}>
      <div className={classes.center}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
      </div>
    </div>

  );
};


