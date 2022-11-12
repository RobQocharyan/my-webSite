import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
  getIsFetching,
} from "../../Redux/users-selectors";
import { useSelector } from "react-redux";


type UsersPagePropsType = {
  pageTitle:string

}

export const UsersPage:React.FC<UsersPagePropsType> = (props)=>{
    const isFetching = useSelector(getIsFetching)
  return   <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader /> : null}
        <Users key={0} />
  </>

}


