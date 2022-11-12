import React from "react";
import { AppStateType } from "../../../Redux/redux-store";
import classes from "./ProfileInfo.module.css";



type PropsType = {
  state:AppStateType
  status:string
  updateStatus:(status:string)=>void
  deactivateEditMode:()=>void
  activateEditMode:()=>void    
}


class ProfileStatus extends React.Component<PropsType>{
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (event:any) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps: { status: string; }) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className={classes.status}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "---------------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              value={this.state.status}
              onBlur={this.deactivateEditMode.bind(this)}
              autoFocus={true}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
