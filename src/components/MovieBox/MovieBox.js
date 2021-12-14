import React from "react";
import classes from "./MovieBox.module.css";
import { Link } from "react-router-dom";
import Year from "..//..//assets/YearW.svg";
import Genre from "..//..//assets/GenreW.svg";
import Cast from "..//..//assets/CastW.svg";
import Time from "..//..//assets/TimeW.svg";
import Summary from "..//..//assets/SummaryW.svg";
import Bookmarkorange from "..//..//assets/Bookmarkorange.svg";
import Bookmarkedorange from "..//..//assets/Bookmarked.svg";
import axios from "axios";
import { useState } from "react";

const MovieBox = (props) => {
  const [removed,setRemoved] = useState(false)
  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };
  const customHeader = () => ({
    headers: {
      "content-type": "application/json",
      Authorization: "Token " + currentUser().token,
    },
    validateStatus: (status) => status === 200,
  });
  function remWishlist() {
    const requestOptions = customHeader();
    axios.delete(
      "http://127.0.0.1:8000/api/delwatch/" + String(props.inf.id) + "/",
      requestOptions
    );
    setRemoved(true);
  }
  return (
    <div className={removed?classes.hide:classes.body}>
      <div className={classes.circle}></div>
      <div className={classes.rectangle}></div>
      <div className={classes.box}>
        <button
          className={props.show ? classes.wishlisted : classes.hide}
          onClick={remWishlist}
        >
          <div className={classes.wishi}>
            <img
              src={Bookmarkedorange}
              className={classes.wishicon}
              alt="icon"
            />
            <p className={classes.wishtxt}>Remove from Wishlist</p>
          </div>
        </button>
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
              <img src={Time} className={classes.icons} alt="icon" />
              <p className={classes.infor}>Time : {props.inf.length}</p>
            </div>
            <div className={classes.infall}>
              <img src={Cast} className={classes.icons} alt="icon" />
              <p className={classes.infor}>Cast : {props.inf.cast}</p>
            </div>
          </div>
        </div>
        <div className={classes.sumal}>
          <img src={Summary} className={classes.icons} alt="icon" />
          <p className={classes.summary}>Summary : {props.inf.summary}</p>
        </div>
      </div>
      <button className={classes.btn}>
        <Link to={"/movie/" + String(props.inf.id)} className={classes.link}>
          Download
        </Link>
      </button>
    </div>
  );
};

export default MovieBox;
