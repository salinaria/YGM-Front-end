import React from "react";
import classes from "./Profile.module.css";
import Navbar from "../Navbar/Navbar";
import signout from "..//..//assets//Signout.svg";
import profile from "..//..//assets//Profile2.svg";
import email from "..//..//assets//Message.svg";

const Movie = (props) => {
  function signoutf() {
    localStorage.removeItem('currentUser');
    window.location.href="/";
  }
  return (
    <div>
      <Navbar />
      <div className={classes.bacy}></div>
      <div className={classes.body}>
        <div className={classes.btn}>
          <img src={profile} className={classes.btnimg} alt="prof" />
          <p className={classes.txt}>Username</p>
        </div>
        <div className={classes.btn}>
          <img src={email} className={classes.btnimg} alt="email" />
          <p className={classes.txt}>Email</p>
        </div>
        <button className={classes.btn} onClick={signoutf}>
          <img className={classes.btnimg} src={signout} alt="signout" />
          <p className={classes.btntxt}>Sign out</p>
        </button>
      </div>
      <div className={classes.bacx}></div>
    </div>
  );
};

export default Movie;
