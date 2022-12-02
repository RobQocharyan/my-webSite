import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

export type MapPropsType = {
  isAuth:boolean
  login:string
}
export type DispatchPropsType = {
  logout:()=>void
}

const Header:React.FC<MapPropsType & DispatchPropsType> = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz55fpQb-igzp1PaBiG90_utwaGMp6B3ZwvQ&usqp=CAU"
        alt="ads"
      />

      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div className={classes.yoo}>  <span>  {props.login} - </span>  <button onClick={props.logout}>Log out</button></div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
