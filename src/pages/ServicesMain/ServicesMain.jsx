import React, { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Lottie from "lottie-react";
import arroww from "./arrowblue.json";
import emailjs from "emailjs-com";
import CountUp from "react-countup";
import { HeroCardPreview } from "../../components/HeroCardPreview/HeroCardPreview";
import Approach from "../../assets/Approach.png";
import { useNavStore } from "../../store/navStore";
import {
  brandingServiceImg,
  webdevServiceImg,
  marketingServiceImg,
  photographyServiceImg,
  spaceServiceImg,
} from "../../assets/services/index";
import ImageScrollAnimation from "../../components/ImageScrollHori/ImageScrollAnimation.jsx";
import { AnimatePresence } from "framer-motion";
import PageLoader from "../../components/PageLoader/pageLoader.jsx";

const bannerData = [
  { image: photographyServiceImg, link: "/services/photography" },
  { image: brandingServiceImg, link: "/services/branding" },
  { image: marketingServiceImg, link: "/services/marketing" },
  { image: webdevServiceImg, link: "/services/web" },
  { image: spaceServiceImg, link: "/services/space" },
];

const ServicesMain = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  useEffect(() => {
    setIsNavbarBlack(false);

    return () => {
      setIsNavbarBlack(true); // optional reset
    };
  }, [setIsNavbarBlack]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_yk2q59i",
        "template_oi5j2bj",
        formRef.current,
        "AFpSGmthR-AR8zsUF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bodyy overflow-hidden">
      <AnimatePresence mode="wait">
        <PageLoader />
      </AnimatePresence>
      <>
        <div className="App bg-white" data-scroll-container ref={containerRef}>
          <div className="h-[7rem] md:h-[10.5rem] "></div>
          <div className="text-[2rem] sm:text-[2rem] md:text-[3.5rem] p-[10px] sm:p-[15px] md:p-[20px] bg-white text-black text-left font-[questrial] ml-4 sm:ml-6 md:ml-10 pb-0">
            Our Services
          </div>
          <div className="min-h-screen bg-white flex flex-col pt-0 pl-0">
            <div className="flex flex-wrap font-[questrial] justify-between mx-[0.5rem] mb-[2rem] md:mx-[1.5rem]">
              <div className="w-[50%] md:w-[25%] p-5 sm:p-8 md:p-10 mt-8 sm:mt-12 md:mt-16 ">
                <span className="text-[30px] sm:text-[40px] md:text-[60px]">
                  <CountUp end={123} duration={4} />+
                </span>
                <div className="text-[16px] sm:text-[18px] md:text-[20px]">
                  Content Created
                </div>
              </div>
              <div className="w-[50%] md:w-[25%] p-5 sm:p-8 md:p-10 mt-8 sm:mt-12 md:mt-16">
                <span className="text-[30px] sm:text-[40px] md:text-[60px]">
                  <CountUp end={45} duration={4} />+
                </span>
                <div className="text-[16px] sm:text-[18px] md:text-[20px]">
                  Brands Build
                </div>
              </div>
              <div className="w-[50%] md:w-[25%] p-5 sm:p-8 md:p-10 mt-8 sm:mt-12 md:mt-16">
                <span className="text-[30px] sm:text-[40px] md:text-[60px]">
                  <CountUp end={21} duration={4} />
                  K+
                </span>
                <div className="text-[16px] sm:text-[18px] md:text-[20px]">
                  Marketing Brands
                </div>
              </div>
              <div className="w-[50%] md:w-[25%] p-5 sm:p-8 md:p-10 mt-8 sm:mt-12 md:mt-16">
                <span className="text-[30px] sm:text-[40px] md:text-[60px]">
                  <CountUp end={50} duration={4} />+
                </span>
                <div className="text-[16px] sm:text-[18px] md:text-[20px]">
                  Websites Developed
                </div>
              </div>
            </div>
            <div className="">
              {" "}
              <HeroCardPreview />
            </div>

            <div className="flex flex-col lg:flex-row mb-10 mt-0 md:mt-10">
              <div className="w-full lg:w-[50%] flex flex-col justify-start">
                <div className="text-[40px] sm:text-[50px] md:text-[60px] font-[questrial] text-justify pl-10 sm:pl-16 md:pl-20 pt-[3rem]">
                  Approach
                </div>
                <div className="text-[16px] sm:text-[18px] md:text-[20px] text-justify p-10 sm:p-16 md:p-20 font-[questrial]">
                  Explore Leifii Co's winning formula: Strategize. Design.
                  Marketing. Crafting digital success through analysis and
                  precision.
                </div>
              </div>
              <div className="relative w-[90%] m-5 lg:w-[40%] bg-blue-600 rounded-3xl text-white text-xl sm:m-8 md:m-10 mt-0 pt-5 pl-6 sm:pl-8 md:pl-10">
                <div className="mb-3 text-justify text-slate-200">
                  Our Thinking
                </div>
                <div className="mb-3 text-[0.9rem] sm:text-[1rem] pr-10 sm:pr-16 md:pr-20 text-left">
                  Each project is a testament to our ‘Brandsynthesis*©*’
                  process, where design, marketing, and branding come together
                  to produce results that resonate with consumers and grow your
                  brand.
                </div>
                <div className="flex items-center text-[0.9rem] sm:text-[1rem] text-justify mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      src={Approach}
                      alt="Photo"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                    />
                  </div>
                  <div>
                    <div>TEAM LEIFII</div>
                    <div className="text-slate-200">#Leifit2us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Banner /> */}
          <div className="w-full min-h-[100vh] bg-black rounded-t-3xl py-32">
            <h1 className="text-white text-center mx-auto text-5xl font-[questrial]">
              Services
            </h1>
            <div className="w-28 mt-2 h-[1px] bg-white mx-auto"></div>
            {/* {bannerData.map((service, _) => (
              <Link to={service.link}>
                <div className="scrollImg w-fit my-10">
                  <img
                    src={service.image}
                    alt="Photography"
                    className="h-72 pointer-events-auto"
                  />
                </div>
              </Link>
            ))} */}
            <ImageScrollAnimation bannerData={bannerData} />
          </div>

          <div className="relative h-auto min-h-[300px] w-full bg-white font-[Questrial] p-6  md:p-10 pt-0 flex items-center flex-col md:flex-row">
            <div className="flex-1 flex items-center justify-center md:justify-start mt-8 ">
              <div className="text-2xl md:text-[3rem] text-center md:text-left font-bold leading-snug md:leading-[4rem]">
                Want Leifii updates sent straight to your mailbox?
              </div>
            </div>
            <div className=" flex items-center w-[90%] md:w-[15%] justify-center pointer-events-none rotate-90 md:rotate-0 mt-12 mb-5 md:m-0">
              <Lottie animationData={arroww} className="w-full h-full" />
            </div>

            <div className="flex-1 w-[80%] md:w-auto flex items-center md:items-end justify-center  mt-10 md:mt-0">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col md:flex-row w-full"
              >
                <input
                  type="email"
                  name="user_email"
                  placeholder="We saved a spot for your email"
                  className="text-base md:text-xl p-2 w-full md:w-[250px] lg:w-[350px] border-b-2 border-black outline-none mb-4 md:mb-0 md:mr-2"
                  required
                />
                <button
                  type="submit"
                  className={`text-base md:text-xl px-4 py-2 rounded-md md:rounded-r-md transition-colors duration-300 ${
                    isSubmitting
                      ? "bg-green-500 text-white"
                      : "bg-black text-white"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sent" : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ServicesMain;
