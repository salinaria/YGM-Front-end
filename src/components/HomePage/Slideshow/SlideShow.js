import React from "react";
import classes from "./SlideShow.module.css";
import { Link } from "react-router-dom";

const colors = [
  {
    image:
      "https://images.indianexpress.com/2021/07/canva-photo-editor-13-1.jpg",
    name: "Harry Potter and the deathly hallows",
  },

  {
    image:
      "https://ucsdguardian.org/wp-content/uploads/2021/11/Villeneuve-Dune-courtesy-of-TV-Insider.jpeg",
    name: "Dune",
  },

  {
    image:
      "https://www.indiewire.com/wp-content/uploads/2018/10/Johnny-English-1.jpg",
    name: "Johny English",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Curse_of_the_Black_Pearl_Soundtrack.jpg",
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
  },
  {
    image:
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d30c8e5eab9270008f9bd2a%2FCasa-de-Papel-3%2F960x0.jpg%3Ffit%3Dscale",
    name: "La casa de papel",
  },
];
const delay = 5000;

const SlideShow = (props) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((categor, index) => (
          <div className={classes.slide} key={index}>
            <Link to="/movie">
            <img src={categor.image} className={classes.image} alt="categor"/>
            </Link>
            <p className={classes.text}>{categor.name}</p>
          </div>
        ))}
      </div>

      <div className={classes.slideshowDots}>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={
              index === idx ? classes.slideshowDotactive : classes.slideshowDot
            }
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default SlideShow;
