import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
} from "../../assets/photography/index";

const images = [
  {
    path: carousel1,
    link: "/product-photography",
    startScroll: 0,
    endScroll: 25,
    text: "Product Photography",
  },
  {
    path: carousel2,
    link: "/event-photography",
    startScroll: 15,
    endScroll: 40,
    text: "Event Photography",
  },
  {
    path: carousel3,
    link: "/modelling-shoots",
    startScroll: 30,
    endScroll: 55,
    text: "Modelling Shoots",
  },
  {
    path: carousel4,
    link: "/restaurant-shoots",
    startScroll: 45,
    endScroll: 70,
    text: "Restaurant Shoots",
  },
  {
    path: carousel5,
    link: "/wedding-photography",
    startScroll: 60,
    endScroll: 85,
    text: "Wedding Photography",
  },
  {
    path: carousel6,
    link: "/landscape-photography",
    startScroll: 75,
    endScroll: 100,
    text: "Landscape Photography",
  },
];

const Trail = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how much of the container is visible
      const scrollPosition = window.scrollY;
      const containerVisibleStart = containerTop - windowHeight;
      const containerVisibleEnd = containerTop + containerHeight;

      // Calculate scroll progress (0 to 1)
      const progress = Math.min(
        1,
        Math.max(
          0,
          (scrollPosition - containerVisibleStart) /
            (containerVisibleEnd - containerVisibleStart - windowHeight)
        )
      );

      setScrollProgress(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getImageStyle = (image) => {
    const { startScroll, endScroll } = image;

    // Calculate where we are in this image's scroll range (0 to 1)
    const imageProgress = Math.min(
      1,
      Math.max(0, (scrollProgress - startScroll) / (endScroll - startScroll))
    );

    // Only show image if we're in its scroll range
    const isActive =
      scrollProgress >= startScroll && scrollProgress <= endScroll;

    // Animation values
    const scale = isActive ? 0.5 + imageProgress * 0.5 : 0.5; // Scale from 0.5 to 1
    const opacity = isActive ? imageProgress : 0; // Fade in
    const yOffset = isActive ? (1 - imageProgress) * 100 : 100; // Move up from bottom

    return {
      transform: `translateY(${yOffset}px) scale(${scale})`,
      opacity: opacity,
      transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
      willChange: "transform, opacity",
    };
  };

  const handleImageClick = (link) => {
    if (link) navigate(link);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Background gradient that changes as you scroll */}
      <div
        className="fixed inset-0 -z-10 transition-colors duration-500"
        style={{
          backgroundColor: `hsl(${200 - scrollProgress * 1.5}, 30%, 10%)`,
        }}
      />

      {/* Spacer to push content down */}
      <div className="h-[100vh]" />

      {/* Main container for the image sequence */}
      <div className="relative h-[400vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className="fixed top-1/2 left-1/2 w-[80vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2"
            style={getImageStyle(image)}
            onClick={() => handleImageClick(image.link)}
          >
            <div className="relative">
              <img
                src={image.path}
                alt=""
                className="w-full h-auto object-contain rounded-lg shadow-xl"
              />
              {image.text && (
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white text-xl md:text-2xl font-medium bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  {image.text}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Spacer at the bottom */}
      <div className="h-[50vh]" />
    </div>
  );
};

export default Trail;
