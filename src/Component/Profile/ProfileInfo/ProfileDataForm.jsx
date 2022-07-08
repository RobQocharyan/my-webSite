
import { reduxForm } from "redux-form";
import classes from "./ProfileInfo.module.css";
import style from "../../Common/FormsControls/FormControls.module.css";
import { CreateField, Input, Textarea } from "../../Common/FormsControls/FormControls";
const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <b>Full name</b>: {CreateField("Full name", "fullName", [] ,Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {CreateField("", "lookingForAJob", [],Input , { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:
        {CreateField(
          "My professional skills",
          "lookingForAJobDescription",
          Textarea, 
          []
        )}
      </div>
      <div>
        <b>About me</b>:{CreateField("About me", "aboutMe", [],Textarea )}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={classes.contact}>
              <b>
                {key}:{CreateField(key, "contacts." + key,[] ,Input )}
              </b>
            </div>
          );
        })}
      </div>
    </form>

  //   <form>
  //     <div><button>Save</button></div>
  //     <div><b>Full Name</b>:{CreateField("Full name", "fullName",  [])}</div>
  //   </form>
  );
};
const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
