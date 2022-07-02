import { Field } from "formik";
import React from "react";
import classes from "./FormControls.module.css";

const FormControl = ({ input, meta:{touched,error},children}) => {
  const hasError = touched && error;
  return (
    <div className={classes.formControl + "" + (hasError ? classes.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, element, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const CreateField = (placeholder, name, component, validate, props={},text="") => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={[validate]}
        {...props}
      />{text}
    </div>
  );
};