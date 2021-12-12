import React from "react";
//import classes from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import SlideShow from "./Slideshow/SlideShow";
import MovieBox from "../MovieBox/MovieBox";
const movie = {
  name: "La casa de papel",
  image:
    "https://cdn.zoomg.ir/2021/8/money-heist-season-five-new-poster.jpg",
  year: 2021,
  genre: "Crime drama",
  length:50,
  summary:
    "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.",
  cast: "Alvaro Morte , Ursula Corbero , Pedro Alonso",
  id:13,
};
const Home = (props) => {
  return (
    <div>
      <Navbar />
      <SlideShow />
      <MovieBox inf={movie} />
      <MovieBox inf={movie} />
    </div>
  );
};
export default Home;
