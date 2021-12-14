import React from "react";
import { useState, useEffect } from "react";
import classes from "./Information.module.css";
import Year from "..//..//..//assets/Year.svg";
import Genre from "..//..//..//assets/Genre.svg";
import Cast from "..//..//..//assets/Cast.svg";
import Time from "..//..//..//assets/Time.svg";
import Summary from "..//..//..//assets/Summary.svg";
import Bookmarkorange from "..//..//..//assets/Bookmarkorange.svg";
import Bookmarkedorange from "..//..//..//assets/Bookmarked.svg";
import axios from "axios";

const Information = (props) => {
  const [iswished, setWish] = useState(props.wish);
  console.log(props.wish);
  const wished = () => {
    if (iswished === "not found") {
      setWish("found");
      addWishlist();
    } else {
      setWish("not found");
      remWishlist();
    }
  };
  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };
  const thisuser = currentUser();
  const customHeader = () => ({
    headers: {
      "content-type": "application/json",
      Authorization: "Token " + currentUser().token,
    },
    validateStatus: (status) => status === 200,
  });

  function addWishlist() {
    const requestOptions = customHeader();
    axios.post(
      "http://127.0.0.1:8000/api/watchlist/",
      { movie_saved_to_watch: props.inf.id },
      requestOptions
    );
  }

  function remWishlist() {
    const requestOptions = customHeader();
    axios.delete(
      "http://127.0.0.1:8000/api/delwatch/" + String(props.inf.id) + "/",
      requestOptions
    );
  }
  useEffect(() => {
    setWish(props.wish);
  }, [props.wish]);
  return (
    <div className={classes.info}>
      <p className={classes.title}>{props.inf.name}</p>
      <img src={props.inf.image} className={classes.image} alt="icon" />

      <button
        className={
          thisuser === null
            ? classes.hide
            : iswished === "found"
            ? classes.wishlisted
            : classes.wishlist
        }
        onClick={wished}
      >
        {iswished === "found" ? (
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
            <img src={Bookmarkorange} className={classes.wishicon} alt="icon" />
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
        <p className={classes.inftxt}>Genre : {props.inf.genre}</p>
      </div>
      <div className={classes.infall}>
        <img src={Time} className={classes.icons} alt="icon" />
        <p className={classes.inftxt}>Time : {props.inf.length}</p>
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
