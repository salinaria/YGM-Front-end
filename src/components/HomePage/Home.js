import React from "react";
import classes from "./Home.module.css";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import SlideShow from "./Slideshow/SlideShow";
import MovieBox from "../MovieBox/MovieBox";
import axios from "axios";

const Home = (props) => {
  const [ID, setID] = useState(1);
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
  function load() {
    axios
      .get("http://127.0.0.1:8000/api/page/" + String(ID))
      .then((response) => setData(response.data));
  }
  function prev() {
    scrollToTop();
    setID(ID - 1);
  }
  function next() {
    scrollToTop();
    setID(ID + 1);
  }
  const scrollToTop = () => {
    document.querySelector('body').scrollTo(0,720)
  }
  useEffect(() => {
    load();
  }, [ID]);
  return (
    <div id="hola">
      <Navbar />
      <SlideShow />
      {Data.map((detail, index) => (
        <MovieBox show={false} inf={detail} />
      ))}
      <div className={classes.pages}>
        <button className={classes.btn} onClick={prev}>
          Prev Page
        </button>
        <p className={classes.id}>{ID}</p>
        <button className={classes.btn} onClick={next}>
          Next Page
        </button>
      </div>
    </div>
  );
};
export default Home;
