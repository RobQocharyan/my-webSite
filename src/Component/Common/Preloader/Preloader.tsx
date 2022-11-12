import preloader from "../../../assets/img/preloader.gif";
import React from "react";

const Preloader:React.FC = (props) => {
  return (
    <div style={{backgroundColor:'white'}} ><img src={preloader}  alt="" /> </div>
  )
};



export default Preloader;