// ProjectLayout.js

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavStore } from "../../store/navStore";
import StaggerDiv from "../../components/StaggerDiv/StaggerDiv";

const revealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const ProjectLayout = ({ project }) => {
  // Animation control for large banners
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  if (inView1) {
    controls1.start({ scale: 1, transition: { duration: 0.5 } });
  }

  if (inView2) {
    controls2.start({ scale: 1, transition: { duration: 0.5 } });
  }

  // Animation controls for text elements
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refDesc, inViewDesc] = useInView({ triggerOnce: true });
  const [refClientDesc, inViewClientDesc] = useInView({ triggerOnce: true });
  const [refSummaryTitle, inViewSummaryTitle] = useInView({
    triggerOnce: true,
  });
  const [refSummaryDesc, inViewSummaryDesc] = useInView({ triggerOnce: true });
  const [refReviewTitle, inViewReviewTitle] = useInView({ triggerOnce: true });
  const [refReviewDesc, inViewReviewDesc] = useInView({ triggerOnce: true });

  const controlsTitle = useAnimation();
  const controlsDesc = useAnimation();
  const controlsClientDesc = useAnimation();
  const controlsSummaryTitle = useAnimation();
  const controlsSummaryDesc = useAnimation();
  const controlsReviewTitle = useAnimation();
  const controlsReviewDesc = useAnimation();

  if (inViewTitle) {
    controlsTitle.start("visible");
  }

  if (inViewDesc) {
    controlsDesc.start("visible");
  }

  if (inViewClientDesc) {
    controlsClientDesc.start("visible");
  }

  if (inViewSummaryTitle) {
    controlsSummaryTitle.start("visible");
  }

  if (inViewSummaryDesc) {
    controlsSummaryDesc.start("visible");
  }

  if (inViewReviewTitle) {
    controlsReviewTitle.start("visible");
  }

  if (inViewReviewDesc) {
    controlsReviewDesc.start("visible");
  }

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);
  const setHasPreloaderAnimationEnded = useNavStore(
    (state) => state.setHasPreloaderAnimationEnded
  );

  useEffect(() => {
    setHasPreloaderAnimationEnded(true);
    setIsNavbarBlack(false);

    return () => {
      setIsNavbarBlack(true); // optional reset
    };
  }, [setIsNavbarBlack]);

  return (
    <>
      <div className="">
        <div className="flex flex-col h-[400px] md:h-[600px] lg:h-[700px] p-4">
          <StaggerDiv className="text-[2rem] md:text-[4rem] lg:text-[6rem] p-[2rem] lg:p-[10rem] pb-5 lg:pb-[2rem] mt-[5rem] md:mt-[7rem] lg:mt-0">
            <div>
              <span className="italic font-normal font-[questrial]">
                {project.title}
              </span>
            </div>
            <div>{project.subtitle}</div>
          </StaggerDiv>

          <div className="flex mx-[2rem] lg:mx-[10rem] space-x-4 my-5">
            {project.categories.map((category, index) => (
              <div
                key={index}
                className="border-[2px] inline-flex items-center rounded-full bg-black hover:bg-white transition-colors duration-300 group min-w-[100px] min-h-[40px] sm:min-w-[150px] sm:min-h-[56px]"
              >
                <div className="py-1 px-2 text-white flex items-center hover:text-black transition-colors duration-300 text-[0.8rem] sm:py-2 sm:px-4 sm:text-[1.2rem]">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 sm:mr-3 transition-colors duration-300 group-hover:bg-black"></span>
                  {category}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <motion.div
            ref={ref1}
            initial={{ scale: 0.6 }}
            animate={controls1}
            className="mb-8 flex justify-center w-[1500px] h-[400px] md:h-[500px] lg:h-[800px] rounded-lg"
          >
            <motion.video
              className="video_section h-full w-[98%] object-cover border rounded-3xl"
              src={project.videoSrc}
              playsInline
              autoPlay
              loop
              muted
            ></motion.video>
          </motion.div>
        </div>

        {/* Project Description */}

        <div className="flex flex-col p-4 mx-[1rem] lg:mx-[5rem] mt-10 ">
          <motion.div
            className="flex flex-col md:flex-row ml-[1rem] md:ml-[2rem] mb-[2rem] md:mb-[5rem]"
            ref={refClientDesc}
            initial="hidden"
            animate={controlsClientDesc}
            variants={revealVariant}
          >
            <div className="w-full md:w-1/2 pr-4 mb-0 md:mb-0">
              <h2 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] mb-4 md:mb-10 font-bold">
                {project.descriptionTitle}
              </h2>
              <p className="text-[0.8rem] md:text-[1rem] lg:text-lg text-gray-700 mb-8 max-w-2xl text-justify mr-2 md:mr-10 pr-0 lg:pr-10">
                {project.descriptionText}
              </p>
            </div>
            <hr className="w-full my-4 md:hidden" />
            <hr className="hidden md:block md:w-[2px] md:h-[300px] lg:h-[250px] bg-[#cacaca] mr-5 mt-10" />
            <div className="w-full md:w-1/2 lg:pl-4 mt-6 md:mt-0">
              <h2 className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] mb-4 md:mb-10 font-bold ml-0 md:ml-10 pl-0 md:pl-10">
                {project.solutionTitle}
              </h2>
              <p className="text-[0.8rem] md:text-[1rem] lg:text-lg text-gray-700 mb-8 max-w-2xl text-justify pl-0 md:pl-10 ml-0 md:ml-10 ">
                {project.solutionText}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-between w-full max-w-7xl mb-8">
            {project.images.slice(0, 2).map((imgSrc, index) => (
              <div
                key={index}
                className="w-[45%] h-[180px] md:[250px] lg:h-[300px] flex justify-center items-center rounded-lg overflow-hidden mx-2"
              >
                <img src={imgSrc} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="w-full max-w-7xl mt-[2rem] md:mt-[5rem]">
            <motion.div
              ref={refSummaryTitle}
              initial="hidden"
              animate={controlsSummaryTitle}
              variants={revealVariant}
              className="flex justify-center mb-4"
            >
              <h2 className=" mb-8 border-[2px] w-auto h-[56px] rounded-full bg-black hover:bg-white transition-colors duration-300 group p-4 px-8 text-white flex items-center hover:text-black text-[0.75rem] md:text-xl">
                Deliverables
              </h2>
            </motion.div>

            <div className="flex justify-between text-[1rem] lg:text-[1.75rem] text-gray-700 mt-[3rem] pb-[5rem]">
              {project.deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  ref={refSummaryDesc}
                  initial="visible"
                  animate={controlsSummaryDesc}
                  variants={revealVariant}
                  className="w-1/3 px-4 text-center"
                >
                  <h3 className="font-semibold mb-2">{deliverable.title}</h3>
                  <p className="text-[0.85rem] lg:text-[1.5rem]">
                    {deliverable.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Additional large banner */}
        <div className="flex justify-center mt-8">
          <motion.img
            src={project.bannerImgSrc}
            ref={ref2}
            initial={{ scale: 0.8 }}
            animate={controls2}
            className="mb-8 flex justify-center w-[90%] lg:w-[1500px] h-[200px] lg:h-[600px] rounded-lg"
          />
        </div>
        {/* Summary of Project */}
        <div className="flex flex-col p-4 mx-[2rem] md:mx-[5rem] my-[2rem] md:my-[3rem] lg:my-[5rem]">
          <motion.div
            className="flex ml-0 lg:ml-[5rem] mb-[2rem] md:mb-[5rem] justify-center"
            ref={refSummaryDesc}
            initial="hidden"
            animate={controlsSummaryDesc}
            variants={revealVariant}
          >
            <p className="text-[1rem] md:text-[1.2rem] text-gray-700 mb-8 max-w-2xl justify-center">
              "{project.summary}"
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center">
          {" "}
          <div className="flex justify-between w-full max-w-7xl mb-8">
            {project.images.slice(2, 4).map((imgSrc, index) => (
              <div
                key={index}
                className="w-[45%] h-[180px] md:[250px] lg:h-[300px] flex justify-center items-center rounded-lg overflow-hidden mx-2"
              >
                <img src={imgSrc} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Client Review Card */}

        <div className="flex flex-col p-4 mx-[1rem] sm:mx-[2rem] lg:mx-[5rem] mt-[2rem] lg:mt-[5rem] pl-[1rem] sm:pl-[2rem] lg:pl-[6rem]">
          <motion.div
            className="flex flex-col lg:flex-row lg:ml-[5rem] mb-[1rem]"
            ref={refReviewTitle}
            initial="hidden"
            animate={controlsReviewTitle}
            variants={revealVariant}
          >
            <h2 className="text-[1.25rem] lg:text-[2rem] mb-4 lg:w-1/3 w-full">
              {project.reviewTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 lg:max-w-2xl w-full lg:w-2/3">
              "{project.reviewText}"
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center lg:items-end px-4 sm:px-8 lg:mx-[5rem] mt-4"
            ref={refReviewDesc}
            initial="hidden"
            animate={controlsReviewDesc}
            variants={revealVariant}
          >
            <div className="w-full lg:w-1/3"></div>
            <div className="w-full lg:w-2/3 flex items-center flex-col lg:flex-row">
              <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
                <img
                  src={project.clientAvatar}
                  alt="Client Avatar"
                  className="rounded-full h-10 w-10"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-4 text-center lg:text-left">
                <div className="text-lg font-semibold">
                  {project.clientName}
                </div>
                <div className="text-gray-500">{project.clientCompany}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
