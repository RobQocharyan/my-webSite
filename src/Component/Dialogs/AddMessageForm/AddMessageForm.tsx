import { reduxForm,InjectedFormProps } from 'redux-form';
import { MaxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormControls";
import { NewMessageFormType } from '../Dialogs';
import { CreateField } from './../../Common/FormsControls/FormControls';



// type PropsType = {
//   handleSubmit:(value:string)=>void
// }

const maxLength50 = MaxLengthCreator(50)
export type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormType,string>
type PropsType = {}

const AddMessageForm:React.FC<InjectedFormProps<NewMessageFormType,PropsType> & PropsType> = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>

      {CreateField<NewMessageFormValuesKeysType>("Write your message!!", "newMessages", [required,maxLength50], Textarea)}
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    );
  };
  
  export default reduxForm<NewMessageFormType>({ form: "dialog-add-message-form" })(
    AddMessageForm
  );