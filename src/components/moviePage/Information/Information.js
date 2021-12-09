import React from "react";
import { useState } from "react";
import classes from "./Information.module.css";
import Year from "..//..//..//assets/Year.svg";
import Genre from "..//..//..//assets/Genre.svg";
import Cast from "..//..//..//assets/Cast.svg";
import Time from "..//..//..//assets/Time.svg";
import Summary from "..//..//..//assets/Summary.svg";
import Bookmarkorange from "..//..//..//assets/Bookmarkorange.svg";
import Bookmarkedorange from "..//..//..//assets/Bookmarked.svg";
const Information = (props) => {
  const [iswished, setWish] = useState(false);
  const wished = () => {
    if (iswished === false) {
      setWish(true);
    } else {
      setWish(false);
    }
  };

  return (
    <div className={classes.info}>
      <p className={classes.title}>{props.inf.name}</p>
      <img src={props.inf.image} className={classes.image} alt="icon" />

      <button
        className={iswished ? classes.wishlisted : classes.wishlist}
        onClick={wished}
      >
        {iswished ? (
          <div className={classes.wishi}>
            <img
              src={Bookmarkedorange}
              className={classes.wishicon}
              alt="icon"
            />
            <p className={classes.wishtxt}>Remove from Wishlist</p>
          </div>
        ) : (
          <div className={classes.wishi}>
            <img
              src={Bookmarkorange}
              className={classes.wishicon}
              alt="icon"
            />
            <p className={classes.wishtxt}>Add To Wishlist</p>
          </div>
        )}
      </button>

      <div className={classes.infall}>
        <img src={Year} className={classes.icons} alt="icon" />
        <p className={classes.inftxt}>Year : {props.inf.year}</p>
      </div>
      <div className={classes.infall}>
        <img src={Genre} className={classes.icons} alt="icon" />
        <p className={classes.inftxt}>Gnere : {props.inf.genre}</p>
      </div>
      <div className={classes.infall}>
        <img src={Time} className={classes.icons} alt="icon" />
        <p className={classes.inftxt}>Time : {props.inf.time}</p>
      </div>
      <div className={classes.infall}>
        <img src={Cast} className={classes.icons} alt="icon" />
        <p className={classes.inftxt}>Cast : {props.inf.cast}</p>
      </div>
      <div className={classes.infall}>
        <img src={Summary} className={classes.icons} alt="icon" />
        <p className={classes.inftxt}>Summary : {props.inf.summary}</p>
      </div>
    </div>
  );
};

export default Information;
