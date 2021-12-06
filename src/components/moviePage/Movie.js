import React from "react";
import classes from "./Movie.module.css";
import Navbar from "../Navbar/Navbar";
import Information from "./Information/Information";

const spiderman = {
  name: "Spider-Man: Far from Home",
  image:
    "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/Spider-Man-FarFromHome-rating.jpg?itok=CGe-MMMn",
  genre: "Action/Adventure",
  year: "2019",
  time: "2h 10m",
  cast: "Cast : Tom Halland , Zendaya, Jake Gyllenhaal",
  summary:
    "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. ",
};

const Movie = (props) => {
  return (
    <div>
      <Navbar />
      <Information inf = {spiderman}/>
    </div>
  );
};

export default Movie;
