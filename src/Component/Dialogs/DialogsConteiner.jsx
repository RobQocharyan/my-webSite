import { connect } from "react-redux";
import { dialogicActionCretor } from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";
import { withAuthNavigate } from "../Hoc/withAuthNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onDialogicFunction: (newMessages) => {
      dispatch(dialogicActionCretor(newMessages));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs);
