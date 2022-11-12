  import React from "react";

  import { Navigate } from "react-router";
import { IniinitialStateType } from "../../Redux/dialog-reducer";
  import AddMessageForm from "./AddMessageForm/AddMessageForm";
  import classes from "./Dialogs.module.css";
  import DialogsItem from "./DialogsItem/DialogsItem";
  import MessagesItem from "./MessagesItem/MessagesItem";


  export type NewMessageFormType = {
    newMessages:string
  }
  


  type PropsType = {
    isAuth: boolean;
    dialogPage:IniinitialStateType
    sendMessage:(newMessages:string)=>void
  }


  const Dialogs:React.FC<PropsType> = (props) => {
    let state = props.dialogPage;
    let dialogElements = state.dialogsData.map((dialog:any) => {
      return <DialogsItem name={dialog.name} id={dialog.id} />;
    });

    let messagesElement = state.messagesData.map((messag) => {
      return <MessagesItem key={messag.messages} message={messag.messages} id={0} />;
    });


    let addNewMessage = (values:{newMessages:string}) => {
      props.sendMessage(values.newMessages);
      values.newMessages="";
    };
    if (props.isAuth) {
      return <Navigate to="/dialog" />;
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
