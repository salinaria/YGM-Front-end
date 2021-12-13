import React, { useRef, useState } from "react";
import classes from "./Navbar.module.css";
import { useHistory, NavLink } from "react-router-dom";
import Home from "../../assets/Home.svg";
import Search from "../../assets/Search.svg";
import Logo from "../../assets/Logo.svg";
import Library from "../../assets/Bookmark.svg";
import Profile from "../../assets/Profile.svg";
import SearchOrange from "../../assets/SearchOrange.svg";
import Close from "../../assets/Close.svg";

const Navbar = (props) => {
  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };

  const history = useHistory();
  const inputSearch = useRef("");
  const thisuser = currentUser();
  const [isOpen, setOpen] = useState(false);
  function openSearch() {
    if (isOpen === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  function goSearch() {
    history.push("/search/" + inputSearch.current.value);
    setOpen(false);
  }
  return (
    <div>
      <div className={isOpen ? classes.open : classes.close}>
        <input ref={inputSearch} className={classes.input} />
        <button className={classes.searchbtn} onClick={goSearch}>
          <img className={classes.sitem} src={SearchOrange} alt="search" />
        </button>
        <button onClick={openSearch} className={classes.searchbtn}>
          <img className={classes.citem} src={Close} alt="search" />
        </button>
      </div>
      <div className={isOpen ? classes.close : classes.body}>
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
        <button
          className={classes.search}
          style={{ display: "flex", flexDirection: "row" }}
          onClick={openSearch}
        >
          <div>
            <img className={classes.NavItemImage} src={Search} alt="home" />
            <p className={classes.NavItemText}>Search</p>
          </div>
        </button>

        <img className={classes.logo} src={Logo} alt="logo" />

        <NavLink
          className={classes.item}
          to={"/"}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>
            <img className={classes.NavItemImage} src={Library} alt="home" />
            <p className={classes.NavItemText}>Wishlist</p>
          </div>
        </NavLink>

        <NavLink
          className={classes.item}
          to={thisuser !== null ? "/profile" : "/auth"}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>
            <img className={classes.NavItemImage} src={Profile} alt="home" />
            <p className={classes.NavItemText}>Profile</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
