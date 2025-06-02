import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavStore } from "../../store/navStore";
import projVid from "../../../assets/projects/project1/1_2.mp4";
import projImg1 from "../../../assets/projects/project1/1_1.png";
import projImg2 from "../../../assets/projects/project1/1_3.png";
import projImg3 from "../../../assets/projects/project1/Blindd-03.jpg";
import StaggerDiv from "../../components/StaggerDiv/StaggerDiv";

const revealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const Project1 = () => {
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
    <div className="">
      <div className="flex flex-col h-[700px] p-4">
        <StaggerDiv className="text-[6rem] p-[10rem] pb-5">
          <div>
            <span className="italic font-normal font-[questrial]">Blind </span>
            Media
          </div>
          <div>Entertainment</div>
        </StaggerDiv>

        <div className="flex mx-[10rem] space-x-4 my-5">
          <div className="border-[2px] w-[150px] h-[56px] rounded-full bg-black hover:bg-white transition-colors duration-300 group">
            <div className="p-3 pl-6 text-white flex items-center hover:text-black transition-colors duration-300 text-[1.3rem]">
              <span className="w-2 h-2 bg-white rounded-full mr-3 transition-colors duration-300 group-hover:bg-black"></span>
              Fashion
            </div>
          </div>
          <div className="border-[2px] w-[180px] h-[56px] rounded-full bg-white hover:bg-black transition-colors duration-300 group">
            <div className="p-3 pl-6 text-black flex items-center hover:text-white transition-colors duration-300 text-[1.3rem]">
              <span className="w-2 h-2 bg-black rounded-full mr-3 transition-colors duration-300 group-hover:bg-white"></span>
              Marketing
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <motion.div
          ref={ref1}
          initial={{ scale: 0.8 }}
          animate={controls1}
          className="mb-8 flex justify-center w-[1500px] h-[600px] rounded-lg"
        >
          <motion.video
            className="video_section h-full w-[98%] object-cover border rounded-3xl"
            src={projVid}
            playsInline
            autoPlay
            loop
            muted
          ></motion.video>
        </motion.div>
      </div>

      <div className="flex flex-col p-4 mx-[5rem] mt-10 ">
        <motion.div
          className="flex flex-col md:flex-row ml-[1rem] mb-[5rem]"
          ref={refClientDesc}
          initial="hidden"
          animate={controlsClientDesc}
          variants={revealVariant}
        >
          <div className=" md:w-1/2 pr-4">
            <h2 className="text-[2rem] mb-10 font-bold">Project Description</h2>
            <p className=" text-lg text-gray-700 mb-8 max-w-2xl text-justify mr-10 pr-10">
              This section provides a detailed description of the client. The
              client's background, mission, and the role they play in the
              project are outlined here. This section provides a detailed
              description of the client. The client's background, mission, and
              the role they play in the project are outlined here. This section
              provides a detailed description of the client. The client's
              background, mission, and the role they play in the project are
              outlined here.
            </p>
          </div>
          <hr className="w-full my-4 md:hidden" />
          <hr className="hidden md:block md:w-[2px] md:h-[210px] md:bg-[#cacaca] mr-5 mt-10" />
          <div className="md:w-1/2 pl-4 ">
            <h2 className="text-[2rem] mb-10 font-bold ml-10 pl-10">
              Our Solution
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl text-justify  pl-10 ml-10 text-right">
              This section provides a detailed description of the solution we
              propose. The strategies, technologies, and methods we use to
              address the client's needs are explained here. This section
              provides a detailed description of the solution we propose. The
              strategies, technologies, and methods we use to address the
              client's needs are explained here. This section provides a
              detailed description of the solution we propose.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-between w-full max-w-7xl mb-8">
          <div className="w-[48%] bg-blue-100 h-[300px] flex justify-center items-center rounded-lg overflow-hidden">
            <img src={projImg1} className="w-full h-full object-cover" />
          </div>
          <div className="w-[48%] bg-green-100 h-[300px] flex justify-center items-center rounded-lg overflow-hidden">
            <img src={projImg2} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="w-full max-w-7xl mt-[5rem]">
          <motion.div
            ref={refSummaryTitle}
            initial="hidden"
            animate={controlsSummaryTitle}
            variants={revealVariant}
            className="flex justify-center mb-4"
          >
            <h2 className=" mb-8 border-[2px] w-auto h-[56px] rounded-full bg-black hover:bg-white transition-colors duration-300 group p-4 px-8 text-white flex items-center hover:text-black text-xl">
              Deliverables
            </h2>
          </motion.div>

          <div className="flex justify-between text-lg text-gray-700 mt-[3rem] pb-[5rem]">
            <motion.div
              ref={refSummaryDesc}
              initial="visible"
              animate={controlsSummaryDesc}
              variants={revealVariant}
              className="w-1/3 px-4 text-center"
            >
              <h3 className="font-semibold mb-2">UI/UX</h3>
              <p>Detailed description of service 1 provided by the project.</p>
            </motion.div>
            <motion.div
              ref={refSummaryDesc}
              initial="visible"
              animate={controlsSummaryDesc}
              variants={revealVariant}
              className="w-1/3 px-4 border-l border-r border-gray-300 text-center"
            >
              <h3 className="font-semibold mb-2">Branding & Marketing</h3>
              <p>Detailed description of service 2 provided by the project.</p>
            </motion.div>
            <motion.div
              ref={refSummaryDesc}
              initial="visible"
              animate={controlsSummaryDesc}
              variants={revealVariant}
              className="w-1/3 px-4 text-center"
            >
              <h3 className="font-semibold mb-2">Client Management</h3>
              <p>Detailed description of service 3 provided by the project.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional large banner */}
      <div className="flex justify-center mt-8">
        <motion.img
          src={projImg3}
          ref={ref2}
          initial={{ scale: 0.8 }}
          animate={controls2}
          className="mb-8 bg-yellow-100 flex justify-center w-[1500px] h-[600px] rounded-lg"
        />
      </div>

      {/* Summary of Project */}
      <div className="flex flex-col p-4 mx-[5rem] my-[5rem]">
        <motion.div
          className="flex ml-[5rem] mb-[5rem] justify-center"
          ref={refSummaryDesc}
          initial="hidden"
          animate={controlsSummaryDesc}
          variants={revealVariant}
        >
          {/* <h2 className="text-[2rem] mb-4 w-1/3">Project Summary</h2> */}
          <p className="text-lg text-gray-700 mb-8 max-w-2xl justify-center">
            "This section provides a detailed summary of the project. The
            overall goals, key achievements, and impact of the project are
            summarized here."
          </p>
        </motion.div>

        <div className="flex justify-between w-full max-w-7xl mb-8">
          <div className="w-[48%] bg-purple-100 h-[300px] flex justify-center  items-center">
            <img
              src={projImg2}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-[48%] bg-orange-100 h-[300px] flex justify-center items-center rounded-lg">
            <img
              src={projImg1}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Client Review Card */}
      <div className="flex flex-col p-4 mx-[5rem] mt-[5rem] pl-[6rem]">
        <motion.div
          className="flex ml-[5rem] mb-[1rem]"
          ref={refReviewTitle}
          initial="hidden"
          animate={controlsReviewTitle}
          variants={revealVariant}
        >
          <h2 className="text-[2rem] mb-4 w-1/3">Client Review</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl w-2/3">
            "This project exceeded our expectations. The team's dedication and
            expertise were evident in every aspect of the project. We are
            thrilled with the results and look forward to future
            collaborations."
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-end ml-[10rem] mb-[5rem] mr-[34rem] "
          ref={refReviewDesc}
          initial="hidden"
          animate={controlsReviewDesc}
          variants={revealVariant}
        >
          <div className="flex items-center ">
            <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center ">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Client Avatar"
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <div className="text-lg font-semibold text-left">Ameya Badge</div>
              <div className="text-gray-500 text-left">Developer, EPEC</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project1;
