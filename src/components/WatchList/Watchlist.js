import React from "react";
import classes from "./Watchlist.module.css";
import { Link } from "react-router-dom";
import Year from "..//..//assets/YearW.svg";
import Genre from "..//..//assets/GenreW.svg";
import Cast from "..//..//assets/CastW.svg";

const Watchlist = (props) => {
    return (
      <div>
        <div className={classes.body}><h1>Watchlist</h1></div>
        <div className={classes.circle}></div>
        <div className={classes.rectangle}></div>
        <div className={classes.box}>
          <div className={classes.dual}>
            <img className={classes.img} src={props.inf.image} alt="movimg" />
            <div>
              <p className={classes.title}>{props.inf.name}</p>
              <div className={classes.infall}>
                <img src={Year} className={classes.icons} alt="icon" />
                <p className={classes.infor}>Year : {props.inf.year}</p>
              </div>
              <div className={classes.infall}>
                <img src={Genre} className={classes.icons} alt="icon" />
                <p className={classes.infor}>Genre : {props.inf.genre}</p>
              </div>
              <div className={classes.infall}>
                <img src={Cast} className={classes.icons} alt="icon" />
                <p className={classes.infor}>Cast : {props.inf.cast}</p>
              </div>
            </div>
          </div>
          <button className={classes.btn}>
            <Link to={"/movie/" + String(props.inf.id)} className={classes.link}>
              Download
            </Link>
          </button>
        </div>
      </div>
    );
  };
  export default Watchlist;


