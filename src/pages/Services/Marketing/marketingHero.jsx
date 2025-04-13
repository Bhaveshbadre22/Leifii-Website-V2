import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { wrap } from "popmotion";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../../../assets/projImages/index";

const cardImages = [project1, project2, project3, project4, project5, project6];

const cardDescriptions = [
  "Description for Card 1.",
  "Description for Card 2.",
  "Description for Card 3.",
  "Description for Card 4.",
  // Add more descriptions as needed
];

const smallDescription = [
  "Product Design",
  "Design Ops",
  "Product Design 2",
  "Design Ops 2",
];

const MarketingHero = () => {
  const [order, setOrder] = useState(
    Array.from(Array(cardImages.length).keys())
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const textAnimationControls = useAnimation();

  const nextCard = () => {
    setCurrentIndex((prevIndex) => wrap(0, cardImages.length, prevIndex + 1));
    animateText();
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => wrap(0, cardImages.length, prevIndex - 1));
    animateText();
  };

  const animateText = async () => {
    await textAnimationControls.start({ opacity: 0 }); // Fade out the text
    await textAnimationControls.start({ opacity: 1 }); // Fade in the text
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x !== 0) {
      const dragDirection = info.offset.x > 0 ? "right" : "left";
      const newIndex =
        dragDirection === "right" ? currentIndex + 1 : currentIndex - 1;
      setOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        const movedCard = newOrder.shift();
        newOrder.push(movedCard);
        return newOrder;
      });
      setCurrentIndex(newIndex);
      animateText();
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-end overflow-hidden px-4 lg:pr-[10rem]">
      {/* Left Side Text */}
      <div className="absolute left-[3rem] bottom-[5rem] md:left-0 md:top-1/2 w-[20rem] transform -translate-y-1/2 px-4">
        <motion.p
          className="text-black sm:text-[3rem] lg:text-[3rem] w-full lg:w-[40rem] p-4 lg:p-10 ml-4 lg:ml-10"
          initial={{ opacity: 1 }} // Set initial opacity to 1
          animate={textAnimationControls}
        >
          {cardDescriptions[order[currentIndex]]}
        </motion.p>

        <motion.p
          className="text-black sm:text-[3rem] lg:text-[1.5rem] w-full lg:w-[40rem] p-4 lg:p-10 ml-4 lg:ml-11 pt-0"
          initial={{ opacity: 1 }} // Set initial opacity to 1
          animate={textAnimationControls}
        >
          {smallDescription[order[currentIndex]]}
        </motion.p>
      </div>
      {/* Card Images */}
      <AnimatePresence>
        {order.map((cardIndex, index) => {
          const isActive = index === 0;
          const rotation = (index - currentIndex) * 5; // Rotate each card slightly

          return (
            <Card
              key={cardIndex}
              image={cardImages[cardIndex]}
              isActive={isActive}
              rotation={rotation}
              currentIndex={currentIndex}
              nextCard={nextCard}
              prevCard={prevCard}
              onDragEnd={handleDragEnd}
              setCurrentIndex={setCurrentIndex}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const Card = ({
  image,
  isActive,
  rotation,
  currentIndex,
  nextCard,
  prevCard,
  onDragEnd,
  setCurrentIndex,
}) => {
  const controls = useAnimation();

  const dragTransition = {
    power: 0.2, // Increase the power for stronger momentum
    timeConstant: 200, // Adjust the time constant for the duration of the momentum effect
  };

  const handleDragStart = () => {
    controls.start({ scale: 1.1 });
  };

  const handleDragEndLocal = (event, info) => {
    if (info.offset.x > 100) {
      prevCard();
    } else if (info.offset.x < -100) {
      nextCard();
    }
    onDragEnd(event, info);
    setCurrentIndex(0);
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 10, right: 10 }}
      dragElastic={0.5}
      dragMomentum={false}
      dragTransition={dragTransition} // Apply the custom drag transition
      onDragStart={handleDragStart}
      onDragEnd={handleDragEndLocal}
      animate={controls}
      exit={{ opacity: 0 }}
      className={`absolute left-[4rem] top-[8rem] md:left-auto md:top-auto w-[16rem] h-[21rem] sm:w-[25rem] sm:h-[30rem] flex items-center justify-center rounded-lg shadow-lg cursor-grab ${
        isActive ? "z-10" : "z-0"
      } transition-transform transform ${isActive ? "scale-100" : "scale-75"}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        rotate: `${rotation}deg`,
        x: isActive ? 0 : rotation / 5,
      }}
    ></motion.div>
  );
};

export default MarketingHero;
