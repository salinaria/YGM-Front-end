import React from "react"
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import classes from "./Movie.module.css";
import Navbar from "../Navbar/Navbar";
import Information from "./Information/Information";
import ReactPlayer from "react-player";
import axios from "axios";



const Movie = (props) => {
  const [Data, setData] = useState({
    name: "",
    image: "",
    year: 0,
    length: 0,
    cast: [],
    link: "",
    summary:"",
    genre :0,
  });
  let slug = useParams();
  console.log(slug.id);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/movie/"+String(slug.id)).then((response) => setData(response.data));
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
            autoplay="false"
            width="100%"
            height="70%"
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
