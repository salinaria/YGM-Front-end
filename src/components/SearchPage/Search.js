import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import classes from "./Search.module.css";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import MovieBox from ".//..//MovieBox/MovieBox";
import Sad from ".//..//..//assets//Sadsvg.svg"
const Search = () => {
  let slug = useParams();
  const [Data, setData] = useState([
    {
      name: "",
      image: "",
      year: 0,
      length: 0,
      cast: [],
      link: "",
      summary: "",
      genre: 0,
    },
  ]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movie/?search=" + String(slug.text))
      .then((response) => setData(Object.values(response.data)));
  }, [slug.text]);

  return (
    <div>
      <Navbar />
      <p className={classes.title}>Search results for '{slug.text}' </p>
      <div className={classes.line}></div>
      {Data.length === 0 ? (
        <div>
          <p className={classes.empty}>Sorry, we couldn't find any results</p>
          <img className={classes.emptyimg} src={Sad} alt="hii"/>
        </div>
      ) : (
        Data.map((detail, index) => <MovieBox inf={detail} />)
      )}
    </div>
  );
};

export default Search;
