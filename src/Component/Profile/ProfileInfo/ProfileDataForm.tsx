
import { InjectedFormProps, reduxForm } from "redux-form";
import classes from "./ProfileInfo.module.css";
import style from "../../Common/FormsControls/FormControls.module.css";
import { CreateField, GetStringKeys, Input, Textarea } from "../../Common/FormsControls/FormControls";
import { ProfileType } from "../../../type/type";


type ProfileDataFOrmPropsType = {
  profile:ProfileType 
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm:React.FC<InjectedFormProps<ProfileType,ProfileDataFOrmPropsType> & ProfileDataFOrmPropsType> = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>

      <div className={classes.conteiner}>
        <button>save</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <b>Full name</b>: {CreateField<ProfileTypeKeys>("Full name", "fullName", [] ,Input)}
      </div>
      <div className={classes.inputCheckbox}>
       
        {CreateField<ProfileTypeKeys>("", "lookingForAJob", [],Input , { type: "checkbox" })}
        <b>Looking for a job</b>:
      </div>
      <div>
        <b>My professional skills</b>:
        {CreateField<ProfileTypeKeys>(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea, 
        )}
      </div>
      <div>
        <b>About me</b>:{CreateField<ProfileTypeKeys>("About me", "aboutMe", [],Textarea )}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={classes.contact}>
              <b>
                {/* {todo create some solution for embedded objects} */}
                {key}:{CreateField(key, "contacts." + key,[] ,Input )}
              </b>
            </div>
          );
        })}
      </div>
    </form>

  );
};
const ProfileDataFormReduxForm = reduxForm<ProfileType,ProfileDataFOrmPropsType>({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
