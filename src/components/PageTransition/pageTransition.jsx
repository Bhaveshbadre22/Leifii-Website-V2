import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";
import { gsap } from "gsap";
import "./pageTransition.css";

// Define paths for different page transitions
const paths = {
  home: {
    unfilled: "M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z",
    inBetween: "M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z",
    filled: "M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z",
  },
  contact: {
    filled: "M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z",
    inBetween: "M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z",
    unfilled: "M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z",
  },
};

const Overlay = ({ path }) => {
  return (
    <svg
      className="overlay"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        className="overlay__path"
        vectorEffect="non-scaling-stroke"
        d={path}
      />
    </svg>
  );
};

const PageTransition = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const history = useHistory();

  const transition = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    gsap
      .timeline({
        onComplete: () => {
          setIsAnimating(false);
          history.push(path);
        },
      })
      .set(".overlay__path", {
        attr: { d: paths.home.unfilled },
      })
      .to(
        ".overlay__path",
        {
          duration: 0.8,
          ease: "power3.in",
          attr: { d: paths.home.inBetween },
        },
        0
      )
      .to(".overlay__path", {
        duration: 0.2,
        ease: "power1",
        attr: { d: paths.home.filled },
      })
      .set(".overlay__path", {
        attr: { d: paths.contact.filled },
      })
      .to(".overlay__path", {
        duration: 0.15,
        ease: "sine.in",
        attr: { d: paths.contact.inBetween },
      })
      .to(".overlay__path", {
        duration: 1,
        ease: "power4",
        attr: { d: paths.contact.unfilled },
      });
  };

  return <Overlay path={path} />;
};

export default PageTransition;
