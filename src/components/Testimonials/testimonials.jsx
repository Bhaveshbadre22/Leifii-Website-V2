import React, { useState, useEffect, useCallback } from "react";
import "./testimonials.css"; // Stylesheet for Testimonials component

const Testimonials = () => {
  const [testimonies, setTestimonies] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const colors = [
    "rgb(174, 224, 188)",
    "rgb(172, 222, 83)",
    "white",
    "rgb(255, 193, 206)",
    "rgb(85, 79, 249)",
    "rgb(252, 215, 209)",
    "rgb(174, 196, 237)",
  ]; // List of colors

  const testimonials = [
    {
      quote: "Increased Online Presence",
      name: "One of the best graphic designing and digital market company in pune. One stop solution for all your graphic designing work and all social media management. Very much dedicated team and great work.",
      title: "Rahil Solanki, CEO Navkar Chemtech",
    },
    {
      quote: "A Creative and Innovative Partner",
      name: "Team Leifii have made a great contribution to the success of our business. I appreciate your commitment & enthusiasm in your work as a team. Thanks to you & your team for the continuous support & hardwork💫",
      title: "Lakshita Sethiya, Founder Lehare",
    },
    {
      quote: "Leifii Co is the best Digital Marketing Partner ",
      name: "Working with the Leifii team was an incredible experience! I wanted a logo that captured the essence of luxury, elegance, and grace, while incorporating the Saraswati symbol. They truly exceeded my expectations. Their work speaks for itself! Highly recommend Leifii for anyone looking for creativity and excellence.",
      title: "Rythm Wagholikar, Author",
    },
    {
      quote: "Effortless Expansion of Digital Footprint ",
      name: "Leifii delivered exceptional graphics for my pop-up café! I had a vision in mind, and their team brought it to life with creativity and precision. The designs truly captured the vibe of my café and have received fantastic feedback from customers. It was a seamless experience working with Leifii, and I highly recommend them for any branding and graphic needs!",
      title: "Devendra Mitkar, Founder Daily Greens, Salads & Juice Bar",
    },
    {
      quote: "Innovative Solutions with Leifii Co",
      name: "Partnering with Leifii Co has been a game-changer for us. Their innovative approach and out-of-the-box ideas have added a fresh perspective to our digital marketing efforts. ",
      title: "Karan Patel, Founder of Pulse Innovations",
    },
  ]; // List of testimonials

  // Throttle function to limit the frequency of cursor position updates
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function (...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const moveCursor = useCallback(
    throttle((e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }, 50),
    []
  );

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [moveCursor]);

  const handleTestimonyClick = () => {
    const container = document.querySelector(".testimonials-container");
    const containerRect = container.getBoundingClientRect();

    const randomTestimonial =
      testimonials[Math.floor(Math.random() * testimonials.length)];
    const randomAngle = Math.random() * 20 - 10; // Random angle in range [-10, 10] degrees

    let posX = cursorPosition.x - 100;
    let posY = cursorPosition.y - 100;

    const testimonyWidth = 300; // Approximate width of the testimony div
    const testimonyHeight = 200; // Approximate height of the testimony div

    // Ensure the testimonial stays within the container
    if (posX + testimonyWidth > containerRect.width) {
      posX = containerRect.width - testimonyWidth - 20;
    }
    if (posY + testimonyHeight > containerRect.height) {
      posY = containerRect.height - testimonyHeight - 20;
    }
    if (posX < 0) {
      posX = 20;
    }
    if (posY < 0) {
      posY = 20;
    }

    const newTestimony = {
      text: randomTestimonial.quote,
      position: {
        x: posX,
        y: posY,
      },
      color: colors[Math.floor(Math.random() * colors.length)], // Randomly choose a color
      rotation: randomAngle, // Random rotation angle
      name: randomTestimonial.name,
      title: randomTestimonial.title,
    };
    setTestimonies([...testimonies, newTestimony]);
  };

  const handleMouseEnter = () => {
    setIsCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCursorVisible(false);
  };

  return (
    <div
      className="testimonials-container"
      onClick={handleTestimonyClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-black flex justify-center text-[1.2rem] md:text-[2.6rem] pt-[2.2rem]">
        See What Our Clients Have To Say!
      </div>
      <div className="text-[#3f3f3f] flex justify-center text-[1.2rem] md:text-[1.8rem] pt-[1.6rem]">
        Click to reveal
      </div>
      {testimonies.map((testimony, index) => (
        <div
          key={index}
          className="testimony"
          style={{
            top: `${testimony.position.y}px`,
            left: `${testimony.position.x}px`,
            backgroundColor: testimony.color, // Set background color
            transform: `rotate(${testimony.rotation}deg)`, // Apply rotation
            position: "absolute",
            transition: "top 0.3s ease, left 0.3s ease", // Smooth transition for position
          }}
        >
          <p className="text-3xl">{testimony.text}</p>
          <br />
          <br />
          <p>
            - {testimony.name}, <br />
            <br />
            {testimony.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
