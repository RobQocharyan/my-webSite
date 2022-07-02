import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

let mapStateToPropsNavigate = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

export let withAuthNavigate=(Component)=>{
    class NavigateComponent extends React.Component{
        render(){
            if (this.props.isAuth) {
                return <Navigate to="/login" />;
              }
            return <Component {...this.props}/>
        }
    }
   
      let ConectedAuthNavigateComponent=connect(mapStateToPropsNavigate)(NavigateComponent);

      return ConectedAuthNavigateComponent;
  }

