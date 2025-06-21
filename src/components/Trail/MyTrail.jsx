import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
  carousel7,
} from "../../assets/photography";

const MyTrail = () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = [
    {
      image: carousel1,
      text: "Product Photography",
      // link: "/product-photography",
      link: "/gallery",
    },
    {
      image: carousel2,
      text: "Event Photography",
      // link: "/event-photography",
      link: "/gallery",
    },
    {
      image: carousel3,
      text: "Modelling Shoots",
      // link: "/modelling-shoots",
      link: "/gallery",
    },
    {
      image: carousel4,
      text: "Restaurant Shoots",
      // link: "/restaurant-shoots",
      link: "/gallery",
    },
    {
      image: carousel5,
      text: "Wedding Photography",
      // link: "/wedding-photography",
      link: "/gallery",
    },
    {
      image: carousel6,
      text: "Landscape Photography",
      // link: "/landscape-photography",
      link: "/gallery",
    },
    {
      image: carousel7,
      text: "",
      link: "",
    },
  ];

  const containerRef = useRef(null);

  useGSAP(() => {
    const numImages = images.length;
    const step = 1 / numImages;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#bgContainer",
        endTrigger: "#bgContainerParent",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    gsap.set(".bg-slide", { opacity: 0 });
    gsap.set(".pop-wrapper", {
      opacity: 0,
      scale: 0.2,
      x: 0,
      y: 0,
    });

    for (let i = 0; i < numImages; i++) {
      const bg = `#bg${i}`;
      const wrap = `#wrap${i}`;
      const start = i * step;
      const end = start + step;
      const overlapStart = start - step * 0.1;
      const overlapEnd = end - step * 0.15;
      const directionX = i % 2 === 0 ? "-100vw" : "100vw";

      // Background fade in
      tl.to(
        bg,
        {
          opacity: 1,
          duration: step * 0.25,
          ease: "power1.inOut",
        },
        overlapStart
      );

      // Background fade out
      if (i !== numImages - 1) {
        tl.to(
          bg,
          {
            opacity: 0,
            duration: step * 0.25,
            ease: "power1.inOut",
          },
          overlapEnd
        );
      }

      // Wrapper fade in
      tl.to(
        wrap,
        {
          opacity: 1,
          duration: step * 0.3,
          ease: "power2.out",
        },
        start + step * 0.05
      );

      // Wrapper scale and move
      tl.to(
        wrap,
        {
          scale: 3.5,
          x: directionX,
          duration: step + step * 0.5,
          ease: "power1.inOut",
        },
        start + step * 0.05
      );

      // Fade out
      tl.to(
        wrap,
        {
          opacity: 0,
          duration: step * 0.2,
          ease: "power2.inOut",
        },
        end - step * 0.1
      );
    }
  }, []);

  const totalScrollHeight = `${images.length * 200}vh`;

  return (
    <div
      id="bgContainerParent"
      className="w-full"
      style={{ height: totalScrollHeight }}
    >
      <div
        id="bgContainer"
        ref={containerRef}
        className="relative w-full h-screen z-[1] overflow-hidden bg-black"
      >
        {/* Backgrounds */}
        {images.map((item, index) => (
          <div
            key={index}
            id={`bg${index}`}
            className="bg-slide absolute inset-0 bg-cover bg-center opacity-0"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="backdrop-blur-2xl absolute inset-0 bg-black/20" />
          </div>
        ))}

        {/* Pop-out Image + Text Wrapper */}
        {images.map((item, index) => (
          <div
            onClick={() => {
              item.link && (window.location.href = item.link);
            }}
            key={`wrapper-${index}`}
            id={`wrap${index}`}
            className={`${
              item.link && "cursor-pointer"
            } pop-wrapper absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 text-center `}
          >
            {item.text && item.link && (
              <span className="text-white text-xl md:text-3xl font-semibold mb-4 block pointer-events-auto">
                {item.text}
              </span>
            )}
            <img
              src={item.image}
              alt={`pop-${index}`}
              className="w-[300px] h-[300px] object-cover rounded-2xl shadow-2xl pointer-events-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTrail;
