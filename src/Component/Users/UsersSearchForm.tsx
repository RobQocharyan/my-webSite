import { Field, Form, Formik } from "formik";
import { FilterType } from "../../Redux/users-reducer";
import  React  from 'react';
import classes from "./UserSearch.module.css"





const usersSearchFormValidate = (values:any) => {
  
    const errors = {};
    return errors;
  }

  type FormType = {
    term:string
    friend:string //"true" | "false" | "null"
  }
  
  type PropsType = {
    onFilterChangede:(filter:FilterType)=>void

  } 
  
  const UsersSearchForm:React.FC<PropsType> = React.memo((props)=>{
  
    const submit = (values:FormType, { setSubmitting}:{setSubmitting:(isSubmitting:boolean)=>void})=> {
      const filter:FilterType = {
        term:values.term,
        friend:values.friend === "null" ? null :values.friend === "true" ? true : false
      }
        props.onFilterChangede(filter)
        setSubmitting(false)
    };
  
  
    return  <div>
      <Formik
         initialValues={{ term: '',friend:"null"}}
         validate={usersSearchFormValidate}
         onSubmit={submit}
       >
         {({ isSubmitting }) => (
           <Form>
             <Field type="text" name="term" className={classes.search} />
             <Field as="select" name="friend">
                <option value="null">All</option>
                <option value="true">Only unfollowed </option>
                <option value="false">Only followed</option>
             </Field>
             <button className={classes.button} type="submit" disabled={isSubmitting}>
               Submit
             </button>
           </Form>
         )}
       </Formik>
    </div>
  })
  


  export default UsersSearchForm