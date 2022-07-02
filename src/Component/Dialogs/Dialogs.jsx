  import React from "react";

  import { Navigate } from "react-router";
  import AddMessageForm from "./AddMessageForm/AddMessageForm";
  import classes from "./Dialogs.module.css";
  import DialogsItem from "./DialogsItem/DialogsItem";
  import MessagesItem from "./MessagesItem/MessagesItem";




  const Dialogs = (props) => {
    let state = props.dialogPage;
    let dialogElements = state.dialogsData.map((dialog) => {
      return <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} />;
    });

    let messagesElement = state.messagesData.map((messag) => {
      return <MessagesItem key={messag.messages} message={messag.messages} />;
    });


    let addNewMessage = (values) => {
      props.onDialogicFunction(values.newMessages);
    };
    if (props.isAuth) {
      return <Navigate to="/login" />;
    }
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>{dialogElements}</div>
        <div className={classes.messages}>
          {messagesElement}
          <AddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    );
  };


  export default Dialogs;
