import React from "react";
import classes from "./Information.module.css";
import Year from "..//..//..//assets/Year.svg";
import Genre from "..//..//..//assets/Genre.svg";
import Cast from "..//..//..//assets/Cast.svg";
import Time from "..//..//..//assets/Time.svg";
import Summary from "..//..//..//assets/Summary.svg";
import Bookmark from "..//..//..//assets/Bookmark.svg";

const Information = (props) => {
  return (
    <div className={classes.info}>
      <p className={classes.title}>{props.inf.name}</p>
      <img src={props.inf.image} className={classes.image} alt="image" />
      <div className={classes.infall}>
        <img src={Year} className={classes.icons} alt="image" />
        <p className={classes.inftxt}>Year : {props.inf.year}</p>
      </div>
      <div className={classes.infall}>
        <img src={Genre} className={classes.icons} alt="image" />
        <p className={classes.inftxt}>Gnere : {props.inf.genre}</p>
      </div>
      <div className={classes.infall}>
        <img src={Time} className={classes.icons} alt="image" />
        <p className={classes.inftxt}>Time : {props.inf.time}</p>
      </div>
      <div className={classes.infall}>
        <img src={Cast} className={classes.icons} alt="image" />
        <p className={classes.inftxt}>Cast : {props.inf.cast}</p>
      </div>
      <div className={classes.infall}>
        <img src={Summary} className={classes.icons} alt="image" />
        <p className={classes.inftxt}>Summary : {props.inf.summary}</p>
      </div>
      <div className={classes.infall}>
        <img src={Bookmark} className={classes.icons} alt="image" />
        <p className={classes.inftxt}>Add To Wishlist</p>
      </div>
    </div>
  );
};

export default Information;
