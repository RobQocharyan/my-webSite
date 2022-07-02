import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import React from "react";
const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          to="/Profile"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Dialogs"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="News"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="Music"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="Settings"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink
          to="Friends"
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          Friends
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
