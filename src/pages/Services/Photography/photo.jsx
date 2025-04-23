import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./photo.css";
import { useGSAP } from "@gsap/react";
import BackButton from "../../../components/Button/BackButton";

const Photo = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const applyAnimation = (element) => {
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom center-=5%",
          scrub: true,
        },
      });

      const gridWrap = element.querySelector(".grid-wrap");
      const gridItems = element.querySelectorAll(".grid__item");
      const gridItemsInner = [...gridItems].map((item) =>
        item.querySelector(".grid__item-inner")
      );

      element.style.setProperty("--grid-width", "105%");
      element.style.setProperty("--grid-columns", "8");
      element.style.setProperty("--perspective", "1500px");
      element.style.setProperty("--grid-inner-scale", "0.5");

      timeline
        .set(gridItems, {
          transformOrigin: "50% 0%",
          z: () => gsap.utils.random(-5000, -2000),
          rotationX: () => gsap.utils.random(-65, -25),
          filter: "brightness(0%)",
        })
        .to(
          gridItems,
          {
            xPercent: () => gsap.utils.random(-150, 150),
            yPercent: () => gsap.utils.random(-300, 300),
            rotationX: 0,
            filter: "brightness(200%)",
          },
          0
        )
        .to(
          gridWrap,
          {
            z: 6500,
          },
          0
        )
        .fromTo(
          gridItemsInner,
          {
            scale: 2,
          },
          {
            scale: 0.5,
          },
          0
        );
    };

    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => applyAnimation(grid));
  });

  return (
    <div className="bodyyy overflow-hidden">
      <div className="pt-[2rem] pl-[2rem] md:pt-[4rem] md:pl-[4rem] bg-black">
        {/* <BackButton /> */}
      </div>
      <div className="intro">
        <h1 className="intro__title">
          <span className="intro__title-pre">On-Scroll</span>
          <span className="intro__title-sub">Photography Animations</span>
        </h1>
        <span className="intro__info">
          Scroll moderately to fully experience the animations
        </span>
      </div>

      <section className="content content--spacing">
        <div className="grid grid--3">
          <div className="grid-wrap">
            {[
              "1.jpg",
              "10.jpg",
              "11.jpg",
              "13.jpg",
              "16.jpg",
              "18.jpg",
              "17.jpg",
              "14.jpg",
              "1.jpg",
              "15.jpg",
              "12.jpg",
              "19.jpg",
              "25.jpg",
              "22.jpg",
              "22.jpg",
              "22.jpg",
              "22.jpg",
              "22.jpg",
              "22.jpg",
              "22.jpg",
            ].map((image, index) => (
              <div key={index} className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{
                    backgroundImage: `url(https://ik.imagekit.io/6lj9fhksv/img/${image}?updatedAt=1714919590801)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <h3 className="content__title content__title--left content__title--bottom">
          Explore <br />
          Categories.
        </h3>
      </section>
    </div>
  );
};

export default Photo;

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
// import "./photo.css";
// import { useGSAP } from "@gsap/react";
// import { getGrid } from "./utils.js";

// // Register ScrollTrigger with GSAP

// const Photo = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   useGSAP(() => {
//     // Function to apply animations to each grid
//     const applyAnimation = (grid, animationType) => {
//       const gridWrap = grid.querySelector(".grid-wrap");
//       const gridItems = grid.querySelectorAll(".grid__item");
//       const gridItemsInner = [...gridItems].map((item) =>
//         item.querySelector(".grid__item-inner")
//       );
//       const timeline = gsap.timeline({
//         defaults: { ease: "none" },
//         scrollTrigger: {
//           trigger: gridWrap,
//           start: "top bottom+=5%",
//           end: "bottom top-=5%",
//           scrub: true,
//         },
//       });

//       switch (animationType) {
//         case "type1":
//           // Set some CSS related style values
//           grid.style.setProperty("--perspective", "1000px");
//           grid.style.setProperty("--grid-inner-scale", "0.5");

//           timeline
//             .set(gridWrap, {
//               rotationY: 25,
//             })
//             .set(gridItems, {
//               z: () => gsap.utils.random(-1600, 200),
//             })
//             .fromTo(
//               gridItems,
//               {
//                 xPercent: () => gsap.utils.random(-1000, -500),
//               },
//               {
//                 xPercent: () => gsap.utils.random(500, 1000),
//               },
//               0
//             )
//             .fromTo(
//               gridItemsInner,
//               {
//                 scale: 2,
//               },
//               {
//                 scale: 0.5,
//               },
//               0
//             );

//           break;

//         case "type2":
//           // Set some CSS related style values
//           grid.style.setProperty("--grid-width", "160%");
//           grid.style.setProperty("--perspective", "2000px");
//           grid.style.setProperty("--grid-inner-scale", "0.5");
//           grid.style.setProperty("--grid-item-ratio", "0.8");
//           grid.style.setProperty("--grid-columns", "6");
//           grid.style.setProperty("--grid-gap", "14vw");

//           timeline
//             .set(gridWrap, {
//               rotationX: 20,
//             })
//             .set(gridItems, {
//               z: () => gsap.utils.random(-3000, -1000),
//             })
//             .fromTo(
//               gridItems,
//               {
//                 yPercent: () => gsap.utils.random(100, 1000),
//                 rotationY: -45,
//                 filter: "brightness(200%)",
//               },
//               {
//                 ease: "power2",
//                 yPercent: () => gsap.utils.random(-1000, -100),
//                 rotationY: 45,
//                 filter: "brightness(0%)",
//               },
//               0
//             )
//             .fromTo(
//               gridWrap,
//               {
//                 rotationZ: -5,
//               },
//               {
//                 rotationX: -20,
//                 rotationZ: 10,
//                 scale: 1.2,
//               },
//               0
//             )
//             .fromTo(
//               gridItemsInner,
//               {
//                 scale: 2,
//               },
//               {
//                 scale: 0.5,
//               },
//               0
//             );

//           break;

//         case "type3":
//           // Set some CSS related style values
//           grid.style.setProperty("--grid-width", "105%");
//           grid.style.setProperty("--grid-columns", "8");
//           grid.style.setProperty("--perspective", "1500px");
//           grid.style.setProperty("--grid-inner-scale", "0.5");

//           timeline
//             .set(gridItems, {
//               transformOrigin: "50% 0%",
//               z: () => gsap.utils.random(-5000, -2000),
//               rotationX: () => gsap.utils.random(-65, -25),
//               filter: "brightness(0%)",
//             })
//             .to(
//               gridItems,
//               {
//                 xPercent: () => gsap.utils.random(-150, 150),
//                 yPercent: () => gsap.utils.random(-300, 300),
//                 rotationX: 0,
//                 filter: "brightness(200%)",
//               },
//               0
//             )
//             .to(
//               gridWrap,
//               {
//                 z: 6500,
//               },
//               0
//             )
//             .fromTo(
//               gridItemsInner,
//               {
//                 scale: 2,
//               },
//               {
//                 scale: 0.5,
//               },
//               0
//             );

//           break;

//         case "type4":
//           // Set some CSS related style values
//           grid.style.setProperty("--grid-width", "50%");
//           grid.style.setProperty("--perspective", "3000px");
//           grid.style.setProperty("--grid-item-ratio", "0.8");
//           grid.style.setProperty("--grid-columns", "3");
//           grid.style.setProperty("--grid-gap", "1vw");

//           timeline
//             .set(gridWrap, {
//               transformOrigin: "0% 50%",
//               rotationY: 30,
//               xPercent: -75,
//             })
//             .set(gridItems, {
//               transformOrigin: "50% 0%",
//             })
//             .to(
//               gridItems,
//               {
//                 duration: 0.5,
//                 ease: "power2",
//                 z: 500,
//                 stagger: 0.04,
//               },
//               0
//             )
//             .to(
//               gridItems,
//               {
//                 duration: 0.5,
//                 ease: "power2.in",
//                 z: 0,
//                 stagger: 0.04,
//               },
//               0.5
//             )
//             .fromTo(
//               gridItems,
//               {
//                 rotationX: -70,
//                 filter: "brightness(120%)",
//               },
//               {
//                 duration: 1,
//                 rotationX: 70,
//                 filter: "brightness(0%)",
//                 stagger: 0.04,
//               },
//               0
//             );

//           break;

//         case "type5":
//           // Set some CSS related style values
//           grid.style.setProperty("--grid-width", "120%");
//           grid.style.setProperty("--grid-columns", "8");
//           grid.style.setProperty("--grid-gap", "0");

//           const gridObj = getGrid(gridItems);

//           timeline
//             .set(gridWrap, {
//               rotationX: 50,
//             })
//             .to(gridWrap, {
//               rotationX: 30,
//             })
//             .fromTo(
//               gridItems,
//               {
//                 filter: "brightness(0%)",
//               },
//               {
//                 filter: "brightness(100%)",
//               },
//               0
//             )
//             .to(
//               gridObj.rows("even"),
//               {
//                 xPercent: -100,
//                 ease: "power1",
//               },
//               0
//             )
//             .to(
//               gridObj.rows("odd"),
//               {
//                 xPercent: 100,
//                 ease: "power1",
//               },
//               0
//             )
//             .addLabel("rowsEnd", ">-=0.15")
//             .to(
//               gridItems,
//               {
//                 ease: "power1",
//                 yPercent: () => gsap.utils.random(-100, 200),
//               },
//               "rowsEnd"
//             );
//           break;

//         case "type6":
//           // Set some CSS related style values
//           grid.style.setProperty("--perspective", "2500px");
//           grid.style.setProperty("--grid-width", "100%");
//           grid.style.setProperty("--grid-gap", "6");
//           grid.style.setProperty("--grid-columns", "3");
//           grid.style.setProperty("--grid-item-ratio", "1");

//           timeline.fromTo(
//             gridItems,
//             {
//               transformOrigin: "50% 200%",
//               rotationX: 0,
//               yPercent: 400,
//             },
//             {
//               yPercent: 0,
//               rotationY: 360,
//               opacity: 0.2,
//               scale: 0.8,
//               stagger: 0.03,
//             }
//           );

//           break;

//         default:
//           console.error("Unknown animation type.");
//           break;
//       }
//     };

//     // Apply animations to each grid
//     const grids = document.querySelectorAll(".grid");
//     grids.forEach((grid, i) => {
//       // Determine animation type
//       let animationType;
//       switch (i % 6) {
//         case 0:
//           animationType = "type1";
//           break;
//         case 1:
//           animationType = "type2";
//           break;
//         case 2:
//           animationType = "type3";
//           break;
//         case 3:
//           animationType = "type4";
//           break;
//         case 4:
//           animationType = "type5";
//           break;
//         case 5:
//           animationType = "type6";
//           break;
//       }
//       applyAnimation(grid, animationType);
//     });
//   });

//   return (
//     <div className="bodyyy">
//       <div className="intro">
//         <h1 className="intro__title">
//           <span className="intro__title-pre">On-Scroll</span>
//           <span className="intro__title-sub">Photography Animations</span>
//         </h1>
//         <span className="intro__info">
//           Scroll moderately to fully experience the animations
//         </span>
//       </div>
//       <section className="content">
//         <div className="grid grid--1">
//           <div className="grid-wrap">
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/1.jpg?updatedAt=1714918929784)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/10.jpg?updatedAt=1714919587647)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/11.jpg?updatedAt=1714919587656)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/13.jpg?updatedAt=1714919587544)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/16.jpg?updatedAt=1714919587742)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/18.jpg?updatedAt=1714919587753)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/17.jpg?updatedAt=1714919587653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/14.jpg?updatedAt=1714919587758)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/1.jpg?updatedAt=1714919587762)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/15.jpg?updatedAt=1714919587676)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/12.jpg?updatedAt=1714919587672)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/19.jpg?updatedAt=1714919590601)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/25.jpg?updatedAt=1714919590653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//         <h3 className="content__title content__title--right content__title--top">
//           Experience Photography, <br />
//         </h3>
//       </section>

//       <section className="content">
//         <div className="grid grid--2">
//           <div className="grid-wrap">
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/1.jpg?updatedAt=1714918929784)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/10.jpg?updatedAt=1714919587647)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/11.jpg?updatedAt=1714919587656)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/13.jpg?updatedAt=1714919587544)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/16.jpg?updatedAt=1714919587742)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/18.jpg?updatedAt=1714919587753)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/17.jpg?updatedAt=1714919587653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/14.jpg?updatedAt=1714919587758)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/1.jpg?updatedAt=1714919587762)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/15.jpg?updatedAt=1714919587676)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/12.jpg?updatedAt=1714919587672)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/19.jpg?updatedAt=1714919590601)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/25.jpg?updatedAt=1714919590653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//         <h3 class="content__title">
//           Professional <br />
//           Photoshoots.
//         </h3>
//       </section>

//       <section className="content content--spacing">
//         <div className="grid grid--3">
//           <div className="grid-wrap">
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/1.jpg?updatedAt=1714918929784)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/10.jpg?updatedAt=1714919587647)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/11.jpg?updatedAt=1714919587656)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/13.jpg?updatedAt=1714919587544)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/16.jpg?updatedAt=1714919587742)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/18.jpg?updatedAt=1714919587753)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/17.jpg?updatedAt=1714919587653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/14.jpg?updatedAt=1714919587758)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/1.jpg?updatedAt=1714919587762)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/15.jpg?updatedAt=1714919587676)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/12.jpg?updatedAt=1714919587672)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/19.jpg?updatedAt=1714919590601)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/25.jpg?updatedAt=1714919590653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//         <h3 class="content__title content__title--left content__title--bottom">
//           Product <br />
//           Placements.
//         </h3>
//       </section>

//       <section className="content content--spacing">
//         <div className="grid grid--4">
//           <div className="grid-wrap">
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/1.jpg?updatedAt=1714918929784)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/10.jpg?updatedAt=1714919587647)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/11.jpg?updatedAt=1714919587656)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/13.jpg?updatedAt=1714919587544)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/16.jpg?updatedAt=1714919587742)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/18.jpg?updatedAt=1714919587753)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/17.jpg?updatedAt=1714919587653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/14.jpg?updatedAt=1714919587758)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/1.jpg?updatedAt=1714919587762)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/15.jpg?updatedAt=1714919587676)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/12.jpg?updatedAt=1714919587672)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/19.jpg?updatedAt=1714919590601)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/25.jpg?updatedAt=1714919590653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//         <h3 class="content__title content__title--right">
//           Now unfolds <br />
//           eternity's grace
//         </h3>
//       </section>

//       <section className="content content--spacing">
//         <div className="grid grid--5">
//           <div className="grid-wrap">
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/1.jpg?updatedAt=1714918929784)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/10.jpg?updatedAt=1714919587647)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/11.jpg?updatedAt=1714919587656)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/13.jpg?updatedAt=1714919587544)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/16.jpg?updatedAt=1714919587742)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/18.jpg?updatedAt=1714919587753)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/17.jpg?updatedAt=1714919587653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/14.jpg?updatedAt=1714919587758)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/1.jpg?updatedAt=1714919587762)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/15.jpg?updatedAt=1714919587676)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/12.jpg?updatedAt=1714919587672)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/19.jpg?updatedAt=1714919590601)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/25.jpg?updatedAt=1714919590653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//         <h3 class="content__title">
//           An infinite universe
//           <br /> of moments unfolding
//         </h3>
//       </section>

//       <section className="content content--spacing">
//         <div className="grid grid--6">
//           <div className="grid-wrap">
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/1.jpg?updatedAt=1714918929784)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/10.jpg?updatedAt=1714919587647)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/11.jpg?updatedAt=1714919587656)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/13.jpg?updatedAt=1714919587544)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/16.jpg?updatedAt=1714919587742)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/18.jpg?updatedAt=1714919587753)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/17.jpg?updatedAt=1714919587653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/14.jpg?updatedAt=1714919587758)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/1.jpg?updatedAt=1714919587762)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/15.jpg?updatedAt=1714919587676)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/12.jpg?updatedAt=1714919587672)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/19.jpg?updatedAt=1714919590601)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/25.jpg?updatedAt=1714919590653)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//             <div className="grid__item">
//               <div
//                 className="grid__item-inner"
//                 style={{
//                   backgroundImage:
//                     "url(https://ik.imagekit.io/6lj9fhksv/img/22.jpg?updatedAt=1714919590801)",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//         <h3 class="content__title">
//           Seasons shift, <br />
//           moments flow
//           <br /> Leifii Co
//         </h3>
//       </section>
//     </div>
//   );
// };

// export default Photo;
