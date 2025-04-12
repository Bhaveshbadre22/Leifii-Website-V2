import React from "react";
import MarketingHero from "./marketingHero";
import CursorProvider from "../../lib/context/cursorContext.tsx";
import { Navbar } from "../../components/Nav/Navbar/index.tsx";
import { Footer } from "../Footer/index.tsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./swiperr.css";
import BackButton from "../../components/BackButton.jsx/backButton.jsx";
import Lottie from "lottie-react";
import dragBlack from "./dragBlack.json";

const Marketing = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const [ref4, inView4] = useInView({ threshold: 0.1 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <CursorProvider>
      {/* <Navbar /> */}
      <div className="pt-[2rem] pl-[2rem] md:pt-[4rem] md:pl-[4rem]">
        <BackButton />
      </div>

      <MarketingHero />
      <div className="flex flex-col bg-[#fafafa] pb-8">
        <div className="flex justify-center py-4">
          <h2 className="text-[2rem] md:text-[3rem] font-medium my-[20px] md:my-[50px]">
            Recent Projects
          </h2>
        </div>

        <div className="flex flex-wrap justify-center px-6">
          <motion.div
            className="w-full h-[40rem] sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <img
              src="/images/1.jpg"
              alt="Your Image"
              className="w-full h-2/3 sm:h-[20rem] md:h-[23rem]"
            />
            <p className="text-black font-medium py-4 mt-2 pb-2">
              Marketing & Design for Karmara Enterprises Solution Co
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              adipisicing elit. adipisicing <br /> elit adipisicing lorem....
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[40rem] sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <img
              src="/images/2.jpg"
              alt="Your Image"
              className="w-full h-2/3 sm:h-[20rem] md:h-[23rem]"
            />
            <p className="text-black font-medium py-4 mt-2 pb-2">
              Product Marketing for Veerali Enterprises Solution
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              adipisicing elit. adipisicing <br /> elit adipisicing lorem....
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[40rem] sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <img
              src="/images/3.jpg"
              alt="Your Image"
              className="w-full h-2/3 sm:h-[20rem] md:h-[23rem]"
            />
            <p className="text-black font-medium py-4 mt-2 pb-2">
              Product Marketing & Design for KHS Enterprises Solution
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              adipisicing elit. adipisicing <br /> elit adipisicing lorem....
            </p>
          </motion.div>

          <motion.div
            className="w-full h-[40rem] sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={fadeInVariants}
          >
            <img
              src="/images/4.jpg"
              alt="Your Image"
              className="w-full h-2/3 sm:h-[20rem] md:h-[23rem]"
            />
            <p className="text-black font-medium py-4 mt-2 pb-2">
              Product Marketing & Design for KHS Solution Enterprises
            </p>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              adipisicing elit. adipisicing <br /> elit adipisicing lorem....
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-[20px] md:mt-[100px]">
        <div className="flex justify-center">
          <div className="flex px-10 pt-4 flex-col">
            <h2 className="text-[2rem] md:text-[3rem] font-medium mt-10 ">
              Recent Work
            </h2>
            <div className="bg-black h-[2px]  w-[200px] md:w-[280px] mt-5"></div>
          </div>
        </div>

        <Swiper
          spaceBetween={120}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            // Adjust these breakpoints as per your design requirements
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* First item */}
          {/* <SwiperSlide>
            <div className="group relative w-[400px] h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-80 h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[200%]"
              />
              <img
                src="/images/cover1.jpg"
                className="absolute inset-0 flex items-center justify-center w-[400px] h-[400px] bg-blue-500 hover:scale-100 transition-transform duration-800 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide> */}

          {/* Second item */}
          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src="/images/6.jpg"
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          {/* Third item */}
          {/* <SwiperSlide>
            <div className="group relative w-[400px] h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-80 h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[180%]"
              />
              <img
                src="/images/cover1.jpg"
                className="absolute inset-0 flex items-center justify-center w-[400px] h-[400px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide> */}

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src="/images/8.jpg"
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-60 h-60 md:w-80 md:h-80  transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src="/images/4.jpg"
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src="/images/9.jpg"
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlide components as needed */}
        </Swiper>

        <div className="text-black flex justify-end pr-10 align-middle items-center">
          <div className="">
            <Lottie
              animationData={dragBlack}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          Drag to explore ➡
        </div>
      </div>

      <Footer />
    </CursorProvider>
  );
};

export default Marketing;

// import React, { useState } from "react";
// import { motion, AnimatePresence, useAnimation } from "framer-motion";
// import { wrap } from "popmotion";
// import CursorProvider from "../../lib/context/cursorContext.tsx";
// import { Navbar } from "../../components/Nav/Navbar/index.tsx";

// const cardImages = [
//   "/images/1.jpg",
//   "/images/2.jpg",
//   "/images/3.jpg",
//   "/images/4.jpg",
//   // Add more image paths as needed
// ];
// const cardDescriptions = [
//   "Description for Card 1. This is of the layout.",
//   "Description for Card 2. This is of the layout.",
//   "Description for Card 3. This is of the layout.",
//   "Description for Card 4. This is of the layout.",
//   // Add more descriptions as needed
// ];

// const smallDescription = [
//   "Product Design",
//   "Design Ops",
//   "Product Design 2",
//   "Design Ops 2",
// ];

// const HeroSection = () => {
//   const [order, setOrder] = useState(
//     Array.from(Array(cardImages.length).keys())
//   );
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const textAnimationControls = useAnimation();

//   const nextCard = () => {
//     setCurrentIndex((prevIndex) => wrap(0, cardImages.length, prevIndex + 1));
//     animateText();
//   };

//   const prevCard = () => {
//     setCurrentIndex((prevIndex) => wrap(0, cardImages.length, prevIndex - 1));
//     animateText();
//   };

//   const animateText = async () => {
//     await textAnimationControls.start({ opacity: 0 }); // Fade out the text
//     await textAnimationControls.start({ opacity: 1 }); // Fade in the text
//   };

//   const handleDragEnd = (event, info) => {
//     if (info.offset.x !== 0) {
//       const dragDirection = info.offset.x > 0 ? "right" : "left";
//       const newIndex =
//         dragDirection === "right" ? currentIndex + 1 : currentIndex - 1;
//       setOrder((prevOrder) => {
//         const newOrder = [...prevOrder];
//         const movedCard = newOrder.shift();
//         newOrder.push(movedCard);
//         return newOrder;
//       });
//       setCurrentIndex(newIndex);
//       animateText();
//     }
//   };

//   return (
//     <CursorProvider>
//       <Navbar />
//       <div className="relative w-full h-screen flex items-center justify-end  overflow-hidden pr-[10rem] mt-10">
//         {/* Left Side Text */}
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4">
//           <motion.p
//             className="text-black text-[3rem] w-[40rem] p-10 ml-10"
//             initial={{ opacity: 1 }} // Set initial opacity to 1
//             animate={textAnimationControls}
//           >
//             {cardDescriptions[order[currentIndex]]}
//           </motion.p>

//           <motion.p
//             className="text-black text-[1.5rem] w-[40rem] p-10 ml-11 pt-0"
//             initial={{ opacity: 1 }} // Set initial opacity to 1
//             animate={textAnimationControls}
//           >
//             {smallDescription[order[currentIndex]]}
//           </motion.p>
//         </div>
//         {/* Card Images */}
//         <AnimatePresence>
//           {order.map((cardIndex, index) => {
//             const isActive = index === 0;
//             const rotation = (index - currentIndex) * 5; // Rotate each card slightly

//             return (
//               <Card
//                 key={cardIndex}
//                 image={cardImages[cardIndex]}
//                 isActive={isActive}
//                 rotation={rotation}
//                 currentIndex={currentIndex}
//                 nextCard={nextCard}
//                 prevCard={prevCard}
//                 onDragEnd={handleDragEnd}
//                 setCurrentIndex={setCurrentIndex}
//               />
//             );
//           })}
//         </AnimatePresence>
//       </div>
//     </CursorProvider>
//   );
// };

// const Card = ({
//   image,
//   isActive,
//   rotation,
//   currentIndex,
//   nextCard,
//   prevCard,
//   onDragEnd,
//   setCurrentIndex,
// }) => {
//   const controls = useAnimation();

//   const dragTransition = {
//     power: 0.2, // Increase the power for stronger momentum
//     timeConstant: 200, // Adjust the time constant for the duration of the momentum effect
//   };

//   const handleDragStart = () => {
//     controls.start({ scale: 1.1 });
//   };

//   const handleDragEndLocal = (event, info) => {
//     if (info.offset.x > 100) {
//       prevCard();
//     } else if (info.offset.x < -100) {
//       nextCard();
//     }
//     onDragEnd(event, info);
//     setCurrentIndex(0);
//   };

//   return (
//     <motion.div
//       drag="x"
//       dragConstraints={{ left: 10, right: 10 }}
//       dragElastic={0.5}
//       dragMomentum={false}
//       dragTransition={dragTransition} // Apply the custom drag transition
//       onDragStart={handleDragStart}
//       onDragEnd={handleDragEndLocal}
//       animate={controls}
//       exit={{ opacity: 0 }}
//       className={`absolute w-[25rem] h-[30rem] flex items-center justify-center rounded-lg shadow-lg cursor-grab  ${
//         isActive ? "z-10" : "z-0"
//       } transition-transform transform ${isActive ? "scale-100" : "scale-75"}`}
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         rotate: `${rotation}deg`,
//         x: isActive ? 0 : rotation / 5,
//       }}
//     ></motion.div>
//   );
// };

// export default HeroSection;

// // import React, { useState } from "react";
// // import { motion, AnimatePresence, useAnimation } from "framer-motion";
// // import { wrap } from "popmotion";

// // const cardImages = [
// //   "/images/1.jpg",
// //   "/images/2.jpg",
// //   "/images/3.jpg",
// //   "/images/4.jpg",
// //   // Add more image paths as needed
// // ];
// // const cardDescriptions = [
// //   "Description for Card 1. This is a longer description to demonstrate the flexibility of the layout.",
// //   "Description for Card 2. This is a longer description to demonstrate the flexibility of the layout.",
// //   "Description for Card 3. This is a longer description to demonstrate the flexibility of the layout.",
// //   "Description for Card 4. This is a longer description to demonstrate the flexibility of the layout.",
// //   // Add more descriptions as needed
// // ];

// // const HeroSection = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const nextCard = () => {
// //     setCurrentIndex((prevIndex) => wrap(0, cardImages.length, prevIndex + 1));
// //   };

// //   const prevCard = () => {
// //     setCurrentIndex((prevIndex) => wrap(0, cardImages.length, prevIndex - 1));
// //   };

// //   return (
// //     <div className="relative w-full h-screen flex items-center justify-end bg-green-100 overflow-hidden pr-[10rem]">
// //       {/* Left Side Text */}
// //       <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4">
// //         <p className=" text-black   text-[4rem] w-[40rem] p-10 ml-10">
// //           {cardDescriptions[currentIndex]}
// //         </p>
// //       </div>
// //       {/* Card Images */}
// //       <AnimatePresence>
// //         {cardImages.map((image, index) => {
// //           const isActive = index === currentIndex;
// //           const rotation = (index - currentIndex) * 5; // Rotate each card slightly

// //           return (
// //             <Card
// //               key={index}
// //               image={image}
// //               isActive={isActive}
// //               rotation={rotation}
// //               currentIndex={currentIndex}
// //               nextCard={nextCard}
// //               prevCard={prevCard}
// //             />
// //           );
// //         })}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // const Card = ({
// //   image,
// //   isActive,
// //   rotation,
// //   currentIndex,
// //   nextCard,
// //   prevCard,
// // }) => {
// //   const controls = useAnimation();

// //   const handleDragEnd = (event, info) => {
// //     if (info.offset.x > 100) {
// //       prevCard();
// //       controls.start({ x: "100%", opacity: 0 });
// //     } else if (info.offset.x < -100) {
// //       nextCard();
// //       controls.start({ x: "-100%", opacity: 0 });
// //     } else {
// //       controls.start({ x: 0 });
// //     }
// //   };

// //   return (
// //     <motion.div
// //       drag="x"
// //       dragConstraints={{ left: 10, right: 10 }}
// //       dragElastic={0.5}
// //       dragMomentum={false}
// //       onDragEnd={handleDragEnd}
// //       animate={controls}
// //       exit={{ opacity: 0 }}
// //       className={`absolute w-[30rem] h-[35rem] flex items-center justify-center rounded-lg shadow-lg cursor-grab  ${
// //         isActive ? "z-10" : "z-0"
// //       } transition-transform transform ${isActive ? "scale-100" : "scale-75"}`}
// //       style={{
// //         backgroundImage: `url(${image})`,
// //         backgroundSize: "cover",
// //         rotate: `${rotation}deg`,
// //         x: isActive ? 0 : rotation / 5,
// //       }}
// //     ></motion.div>
// //   );
// // };

// // export default HeroSection;
