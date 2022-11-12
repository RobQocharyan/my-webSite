import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router';
import { AppStateType } from "../../Redux/redux-store";

let mapStateToPropsNavigate = (state:AppStateType) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

  type MapStateToPropsType = {
      isAuth:boolean
  }
  
  type MapDispatchPropsType = {
}

export function withAuthNavigate<WCP>(Component:ComponentType<WCP>){
    const NavigateComponent:React.FC<MapDispatchPropsType & MapStateToPropsType> = (props)=>{
      let {isAuth,...restProps} = props
            if (isAuth) {
                return <Navigate to="/login" />
              }
            return <Component {...restProps as unknown as  WCP}/>
    }
   
      let ConectedAuthNavigateComponent=connect<MapStateToPropsType,MapDispatchPropsType,WCP,AppStateType>(mapStateToPropsNavigate)(NavigateComponent);

      return ConectedAuthNavigateComponent;
  }

