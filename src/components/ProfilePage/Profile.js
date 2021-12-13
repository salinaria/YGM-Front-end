import React, { useState, useEffect } from "react";
import classes from "./Profile.module.css";
import Navbar from "../Navbar/Navbar";
import signout from "..//..//assets//Signout.svg";
import profile from "..//..//assets//Profile2.svg";
import email from "..//..//assets//Message.svg";
import axios from "axios";

const Profile = (props) => {
  const [Data, setData] = useState({
    username: "",
    email: "",
  });

  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };

  function signoutf() {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  }
  const customHeader = () => ({
    headers: {
      "content-type": "application/json",
      Authorization: "Token " + currentUser().token,
    },
    validateStatus: (status) => status === 200,
  });
  useEffect(() => {
    const requestOptions = customHeader();
    axios
      .get("http://127.0.0.1:8000/api/account",requestOptions)
      .then((response) => setData(response.data[0]));
  }, []);

  return (
    <div>
      <Navbar />
      <div className={classes.bacy}></div>
      <div className={classes.body}>
        <div className={classes.btn}>
          <img src={profile} className={classes.btnimg} alt="prof" />
          <p className={classes.txt}>{Data.username}</p>
        </div>
        <div className={classes.btn}>
          <img src={email} className={classes.btnimg} alt="email" />
          <p className={classes.txt}>{Data.email}</p>
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

export default Profile;
