import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import classes from "./Movie.module.css";
import Navbar from "../Navbar/Navbar";
import Information from "./Information/Information";
import ReactPlayer from "react-player";
import download from ".//..//..//assets/Download.svg";
import danger from ".//..//..//assets/Danger.svg";
import sub from ".//.//..//..//assets/Sub.svg"
import axios from "axios";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const currentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser"));
  };
  const thisuser = currentUser();
  const [Data, setData] = useState({
    name: "",
    image: "",
    year: 0,
    length: 0,
    cast: [],
    link: "",
    summary: "",
    genre: 0,
  });
  let slug = useParams();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movie/" + String(slug.id))
      .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className={classes.dual}>
        <Information inf={Data} />
        <div className={classes.player}>
          <ReactPlayer
            controls={true}
            url={Data.link}
            className="react-player"
            autoPlay={false}
            width="100%"
            height="50%"
          />
          {thisuser === null ? (
            <Link className={classes.btn} to="/auth">
                <img className={classes.imgbtn} src={danger} alt="download" />
                <p className={classes.text}>{"Login to download this movie"}</p>
            </Link>
          ) : (
            <a href={Data.link} className={classes.btn}>
              <img className={classes.imgbtn} src={download} alt="download" />
              <p className={classes.text}>
                {"Download    '" + Data.name + "'"}
              </p>
            </a>
          )}
          <a href={"https://subf2m.co/subtitles/searchbytitle?query="+Data.name} className={classes.btn}>
              <img className={classes.imgbtn} src={sub} alt="download" />
              <p className={classes.text}>
                {"Subtitle"}
              </p>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
