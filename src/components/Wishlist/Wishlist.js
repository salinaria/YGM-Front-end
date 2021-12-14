import React from "react";
import classes from "./Wishlist.module.css";
import MovieBox from ".//..//MovieBox/MovieBox";
import Navbar from ".//../Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import empty from "..//..//assets//emptywish.svg"
const Wishlist = (props) => {
  const [Data, setData] = useState([
    {
      id: 0,
      user_profile: 0,
      movie_saved_to_watch: 0,
      movie_details: [
        {
          id: 0,
          name: "",
          cast: "",
          summary: "",
          genre: "",
          year: 0,
          link: "",
          length: 0,
          image: "",
        },
      ],
    },
  ]);

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
  function load() {
    const requestOptions = customHeader();
    axios
      .get("http://127.0.0.1:8000/api/watchlist/", requestOptions)
      .then((response) => setData(Object.values(response.data)));
  }

  useEffect(() => {
    load();
  }, []);
  return (
    <div>
      <Navbar />
      {Data.length===0?(
        <div className={classes.empty}>
          <p>You haven't add any movies or series to your wishlist</p>
          <img className={classes.icon} src={empty} alt="hi"/>
        </div>
      ):(<div></div>)
      }
      {Data.map((detail, index) => (
        <div>
          <MovieBox show={true} inf={detail.movie_details[0]} />
        </div>
      ))}
    </div>
  );
};
export default Wishlist;
