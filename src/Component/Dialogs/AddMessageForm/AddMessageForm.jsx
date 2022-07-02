// import { Form, Field } from 'react-final-form'
// import { MaxLengthCreator, required } from "../../../utils/validators/validators";
// import { Textarea } from "../../Common/FormsControls/FormControls";

// const maxLength50 = MaxLengthCreator(50)


// const AddMessageForm = (props) => {
//     return (
//       <form onSubmit={props.handleSubmit}>
//         <div>
//           <Field
//             component={Textarea}
//             validate={[required,maxLength50]}
//             name="newMessages"
//             placeholder="Write your message!!"
//           />
//         </div>
//         <div>
//           <button>Add post</button>
//         </div>
//       </form>
//     );
//   };
  
//   export default Form({ form: "dialog-add-message-form" })(
//     AddMessageForm
//   );