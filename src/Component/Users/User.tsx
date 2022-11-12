import { NavLink } from "react-router-dom";
import {UserType} from "../../type/type";
import classes from "./Users.module.css"
import userPhoto from  "../../assets/img/user.jpg"



type PropsType={
  onPageChanged:(pageNumber:number)=>void,
  followingInProgress:Array<number>,
  unfollow:(userId:number)=>void,
  follow:(userId:number)=>void,
  user:UserType

}



const User:React.FC<PropsType>  = (props)=> {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/Profile/" + props.user.id}>
            <img
              src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
              alt="HI"
              className={classes.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {props.user.followed ? (
            <button
            className={classes.follow}
              disabled={props.followingInProgress.some((id) => id === props.user.id)}
              onClick={() => {
                props.unfollow(props.user.id);
              }}
            >
              UnFollow
            </button>
          ) : (
            <button className={classes.follow}
              disabled={props.followingInProgress.some((id) => id === props.user.id)}
              onClick={() => {
                props.follow(props.user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div className={classes.name}>{props.user.name}</div>
          <div>{props.user.status}</div>
        </span>
        <span>
          <div className={classes.country}>{"user.location.country"}</div>
          <div className={classes.city}>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};




export default User;
