import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import classes from "./Search.module.css";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import MovieBox from ".//..//MovieBox/MovieBox";

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
      <p className={classes.title}>Search results for '{slug.text}' :</p>
      {Data.map((detail, index) => (
        <MovieBox inf={detail} />
      ))}
    </div>
  );
};

export default Search;
