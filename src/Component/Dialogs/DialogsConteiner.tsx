import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthNavigate } from "../Hoc/withAuthNavigate";
import { compose, Dispatch } from "redux";
import { actions } from "../../Redux/dialog-reducer";

type MapStateType = {
  dialogPage:Array<string>
}

type MapDispatchType = {
  sendMessage:(newMessages:string)=>void
}

type PropsType = MapStateType &MapDispatchType;

let mapStateToProps = (state:MapStateType):MapStateType => {
  return {
    dialogPage: state.dialogPage,
  };
};


export default compose<React.ComponentType>(
  connect(mapStateToProps, {
   ...actions
  }),
  withAuthNavigate
)(Dialogs);
