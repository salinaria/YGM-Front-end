import React from "react";
//import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import SlideShow from "./Slideshow/SlideShow";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <SlideShow />
    </div>
  );
};
export default Home;
