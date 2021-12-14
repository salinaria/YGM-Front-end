import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import classes from "./Movie.module.css";
import Navbar from "../Navbar/Navbar";
import Information from "./Information/Information";
import ReactPlayer from "react-player";
import download from ".//..//..//assets/Download.svg";
import danger from ".//..//..//assets/Danger.svg";
import sub from ".//.//..//..//assets/Sub.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const Movie = (props) => {
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

  const [Data, setData] = useState({
    id: 0,
    name: "",
    image: "",
    year: 0,
    length: 0,
    cast: [],
    link: "",
    summary: "",
    genre: 0,
  });
  const [isWish, setWish] = useState("not found");
  const [isSeries, setSeries] = useState(0);
  let slug = useParams();
  let requestOptions;
  useEffect(() => {
    if (thisuser != null) {
      requestOptions = customHeader();
    }
    axios
      .get("http://127.0.0.1:8000/api/movie/" + String(slug.id))
      .then((response) => setData(response.data))
      .then(
        axios
          .get(
            "http://127.0.0.1:8000/api/delwatch/" + String(slug.id) + "/",
            requestOptions
          )
          .then((response) => setWish(response.data.status))
          .catch(console.log(""))
      );
  }, []);
  function handleSeries(index) {
    setSeries(index);
  }
  return (
    <div>
      <Navbar />
      <div className={classes.dual}>
        <Information inf={Data} wish={isWish} />
        <div className={classes.player}>
          <ReactPlayer
            controls={true}
            url={Data.link.split(",")[isSeries]}
            className="react-player"
            autoPlay={false}
            width="100%"
            height="50%"
          />
          <div
            className={
              Data.link.split(",").length > 1 ? classes.laybtn : classes.hide
            }
          >
            {Data.link.split(",").length > 1 ? (
              Data.link.split(",").map((detail, index) => (
                <button
                  className={classes.btnplay}
                  onClick={function () {
                    setSeries(index);
                  }}
                >
                  {index + 1}
                </button>
              ))
            ) : (
              <div></div>
            )}
          </div>
          {thisuser === null ? (
            <Link className={classes.btn} to="/auth">
              <img className={classes.imgbtn} src={danger} alt="download" />
              <p className={classes.text}>{"Login to download this movie"}</p>
            </Link>
          ) : Data.link.split(",").length > 1 ? (
            Data.link.split(",").map((detail, index) => (
              <a href={detail} className={classes.btn}>
                <img className={classes.imgbtn} src={download} alt="download" />
                <p className={classes.text}>
                  {"Download    '" + Data.name + " " + String(index + 1) + "'"}
                </p>
              </a>
            ))
          ) : (
            <a href={Data.link} className={classes.btn}>
              <img className={classes.imgbtn} src={download} alt="download" />
              <p className={classes.text}>
                {"Download    '" + Data.name + "'"}
              </p>
            </a>
          )}
          <a
            href={
              "https://subf2m.co/subtitles/searchbytitle?query=" + Data.name
            }
            target="_blank"
            className={classes.btn}
          >
            <img className={classes.imgbtn} src={sub} alt="download" />
            <p className={classes.text}>{"Subtitle"}</p>
          </a>
        </div>
      </div>
      <div className={classes.yoyo}></div>
    </div>
  );
};

export default Movie;
