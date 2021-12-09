import React from "react";
import classes from "./SlideShow.module.css";
import { Link } from "react-router-dom";

const colors = [
  {
    image:
      "https://images.indianexpress.com/2021/07/canva-photo-editor-13-1.jpg",
    name: "Harry Potter and the Deathly Hallows",
    id: 8,
  },

  {
    image:
      "https://ucsdguardian.org/wp-content/uploads/2021/11/Villeneuve-Dune-courtesy-of-TV-Insider.jpeg",
    name: "Dune",
    id: 16,
  },

  {
    image:
      "https://www.plexreel.com/wp-content/uploads/2021/05/venom-2-trailer-1000x600.jpg",
    name: "Venom let there be carnage",
    id: 11,
  },

  {
    image:
      "https://www.teahub.io/photos/full/173-1738317_pirates-of-the-caribbean-3-at-worlds-end.jpg",
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
    id: 12,
  },
  {
    image:
      "https://gadgetfreeks.com/wp-content/uploads/2020/04/Money-Heist-Season-4.png",
    name: "La casa de papel",
    id: 13,
  },
  {
    image:
      "https://zoomlife.ir/uploads/posts/2021-01/1610878719-no-time-to-die.jpg",
    name: "No time to die",
    id: 14,
  },
  {
    image:
      "https://timesread.com/wp-content/uploads/2021/07/F9-Poster-Landscape.jpg",
    name: "Fast 9:The Fast Saga",
    id: 15,
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
            <Link to={"/movie/" + String(categor.id)}>
              <img
                src={categor.image}
                className={classes.image}
                alt="categor"
              />
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
