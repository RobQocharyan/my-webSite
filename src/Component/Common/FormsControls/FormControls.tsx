import React from "react";
import { FieldValidatorType } from "../../../utils/validators/validators";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import classes from "./FormControls.module.css"




type FormControlPropsType = {
  meta:WrappedFieldMetaProps
  children:React.ReactNode
}



const FormControl:React.FC<FormControlPropsType>= ({meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea:React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  // const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl >
  );
};

export const Input:React.FC<WrappedFieldProps> = (props) => {
  // const { input, meta, child, element, ...restProps } = props;
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};




export function CreateField<FormKeysType extends string>(
  placeholder:string | undefined,
  name:FormKeysType,
  validate:Array<FieldValidatorType>,
  component:React.FC<WrappedFieldProps>,
  props = {},
  text = ""
){
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validate}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
};


export type GetStringKeys<T> = Extract<keyof T,string>
