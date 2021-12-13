import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Home from "../../assets/Home.svg";
import Search from "../../assets/Search.svg";
import Logo from "../../assets/Logo.svg";
import Library from "../../assets/Bookmark.svg";
import Profile from "../../assets/Profile.svg";

const Movie = (props) => {
  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };
  const thisuser = currentUser();

  return (
    <div className={classes.body}>
      <NavLink
        className={classes.item}
        to={"/"}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <img className={classes.NavItemImage} src={Home} alt="home" />
          <p className={classes.NavItemText}>Home</p>
        </div>
      </NavLink>
      <NavLink
        className={classes.item}
        to={"/"}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <img className={classes.NavItemImage} src={Search} alt="home" />
          <p className={classes.NavItemText}>Search</p>
        </div>
      </NavLink>

      <img className={classes.logo} src={Logo} alt="logo" />

      <NavLink
        className={classes.item}
        to={thisuser!==null?"/watch":"/auth"}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <img className={classes.NavItemImage} src={Library} alt="home" />
          <p className={classes.NavItemText}>Wishlist</p>
        </div>
      </NavLink>

      <NavLink
        className={classes.item}
        to={thisuser!==null?"/profile":"/auth"}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <img className={classes.NavItemImage} src={Profile} alt="home" />
          <p className={classes.NavItemText}>Profile</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Movie;
