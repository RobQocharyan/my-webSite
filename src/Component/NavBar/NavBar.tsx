import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import React from "react";
const NavBar:React.FC = () => {
  return (
    <>
    <div className={classes.content}>
    <label>
            <input type="checkbox" />
              <div className={classes.burger}>
                <span className={classes.burgerOne}></span>
                <span className={classes.burgerTwo}></span>
                <span className={classes.burgerThree}></span>
            </div>
            <div className={classes.burgerContent}>
              <nav className={classes.nav}>
                <ul>
                  <li>
                    <NavLink
                    to="/Profile"
                    className={(navData) =>
                      navData.isActive ? classes.active : classes.item
                    }
                  >
                    Profile
                  </NavLink></li>
                  <li>
                    <NavLink
                    to="/users"
                    className={(navData) =>
                      navData.isActive ? classes.active : classes.item
                    }
                  >
                    Users
                  </NavLink></li>
                  <li>
                  <NavLink
                    to="/Dialogs"
                    className={(navData) =>
                      navData.isActive ? classes.active : classes.item
                    }
                  >
                    Messages
                  </NavLink>
                  </li>
                  <li>
                  <NavLink
                    to="News"
                    className={(navData) =>
                      navData.isActive ? classes.active : classes.item
                    }
                  >
                    News
                  </NavLink>
                  </li>
                  <li>
                  <NavLink
                    to="Music"
                    className={(navData) =>
                      navData.isActive ? classes.active : classes.item
                    }
                  >
                    Music
                  </NavLink>
                  </li>
                  <li>
                  <NavLink
                    to="Settings"
                    className={(navData) =>
                      navData.isActive ? classes.active : classes.item
                    }
                  >
                    Settings
                  </NavLink>
                  </li>
                  <li>
                  <NavLink
                    to="Friends"
                    className={(navData) =>
                      navData.isActive ? classes.active : classes.item
                    }
                  >
                    Friends
                  </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
     
      </label>
      <div className={classes.menu}>
     
       <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
            to="/Profile"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Profile
          </NavLink></li>
          <li>
            <NavLink
            to="/users"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Users
          </NavLink></li>
          <li>
          <NavLink
            to="/Dialogs"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Messages
          </NavLink>
          </li>
          <li>
          <NavLink
            to="News"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            News
          </NavLink>
          </li>
          <li>
          <NavLink
            to="Music"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Music
          </NavLink>
          </li>
          <li>
          <NavLink
            to="Settings"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Settings
          </NavLink>
          </li>
          <li>
          <NavLink
            to="Friends"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Friends
          </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </div>
   

    

    
     
      
    </>

    
  );
};

export default NavBar;
