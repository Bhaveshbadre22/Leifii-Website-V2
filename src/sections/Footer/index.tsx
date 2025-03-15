import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { Container } from "../../components/Container/index.tsx";
import { TransitionLink } from "../../components/Links/TransitionLink/index.tsx";
import { Button } from "..//../components/MagneticButton/Button.tsx";
import { CursorContext } from "../../lib/context/cursorContext.tsx";
import { gsap } from "gsap";
import ScrollMagic from "scrollmagic";
import "./footer.scss";
import { AnimatedPinDemo } from "../../components/ui/AnimatedPinDemo.tsx";

export const Footer = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { cursor } = useContext(CursorContext);
  const footerRef = useRef(null),
    footerContentRef = useRef(null);
  const [triggerPoints, setTriggerPoints] = useState("top top");
  const links = [
    "Linkedin",
    "Behance",
    "Dribble",
    "Instagram",
    "Youtube",
    "Twitter",
  ];

  useLayoutEffect(() => {
    const controller = new ScrollMagic.Controller();
    updateEndTrigger();

    const tl = gsap.timeline();
    tl.fromTo(
      footerContentRef.current,
      { yPercent: -70, lazy: false },
      {
        yPercent: 0,
        duration: 1.3,
        ease: "Power0.in",
        lazy: false,
      }
    );
    tl.pause();

    new ScrollMagic.Scene({
      triggerElement: footerRef.current,
      triggerHook: 0.9,
      duration: "100%",
      reverse: true,
    })
      .addTo(controller)
      .on("enter", function (e) {
        tl.play();
      })
      .on("leave", function (e) {
        tl.reverse();
      });

    window.addEventListener("resize", function () {
      updateEndTrigger();
    });

    return () => {
      tl?.scrollTrigger?.kill();
    };
  }, []);

  function updateEndTrigger() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setTriggerPoints("top top");
    } else {
      setTriggerPoints("top 30%");
    }
  }

  function handleCursorInvert(isInverted) {
    if (isInverted) {
      cursor.current.addState("-inverse");
    } else {
      cursor.current.removeState("-inverse");
    }
  }

  function handleCursorScale(isScaled) {
    if (isScaled) {
      cursor.current.addState("-mf-cursor-md -exclusion");
    } else {
      cursor.current.removeState("-mf-cursor-md -exclusion");
    }
  }

  return (
    <footer
      className="footer"
      onMouseEnter={() => handleCursorInvert(true)}
      onMouseLeave={() => handleCursorInvert(false)}
      ref={footerRef}
    >
      <div className="ml-[1rem] md:ml-[2rem] lg:ml-[5rem] pt-[2rem] mt-0 md:mt-[2rem] bg-black w-[95%] md:w-[100%] lg:w-[90%] flex flex-col">
        <div className="h-auto md:h-[20%] flex flex-row justify-between pb-0 md:pb-[3rem] px-[1rem] md:px-[1rem] lg:px-[5rem] text-[0.75rem] md:text-[1rem]">
          <div className="flex justify-center items-center">
            &copy; 2025 LEIFII MEDIA LLP
          </div>
          <div className="mt-0 pr-0 md:pr-14 lg:pr-0">
            <a
              href="#"
              className="flex items-center justify-center text-[0.75rem] md:text-[1rem]"
            >
              <span className="mr-2">BACK TO TOP</span>
              <div className="w-8 h-8 flex items-center justify-between bg-black rounded-full text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="h-auto md:h-[60%] flex flex-col md:flex-row pl-[1rem] md:pl-[1rem] lg:pl-[5rem] mt-4 md:mt-0">
          <div className="w-full md:w-1/2 lg:w-2/3 text-left pt-[2rem] md:pt-[5rem]">
            <div className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] text-white font-medium">
              HAVE A PROJECT IN MIND?
            </div>
            <div className="text-white/[0.60] text-[4rem] md:text-[6rem] lg:text-[9rem] mt-2 md:mt-0 font-medium hover:text-white hover:text-opacity-100">
              LET'S TALK
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3  md:pr-[3rem] mt-8 md:mt-0">
            <AnimatedPinDemo />
          </div>
        </div>

        <div className="h-auto md:h-[20%] flex flex-col md:flex-row justify-between md:justify-evenly lg:justify-between  px-[1rem] md:px-[0rem] lg:px-[5rem] mt-[5rem] md:mt-[5rem]">
          <div className=" div-2 flex flex-row justify-center items-center gap-[1rem] text-[1rem] lg:text-[1.35rem] font-medium text-white/[0.60] text-center mt-6 md:mt-0 pt-0 order-1 md:order-2">
          <a href="/about" className="hover:text-white mb-3 block">About</a>
  <a href="/services" className="hover:text-white mb-3 block">Services</a>
  <a href="/careers" className="hover:text-white mb-3 block">Careers</a>
  <a href="/contact" className="hover:text-white mb-3 block">Contact</a>
          </div>
          <div className="div-1 flex flex-row gap-[0.75rem] md:gap-[1.5rem] lg:gap-[3rem] text-[0.5rem] md:text-[0.75rem] lg:text-[1rem] font-medium order-2 md:order-1 mt-[1.5rem] md:mt-0">
            <div className="h-[2rem] md:h-[3rem] lg:h-[4rem] p-[1rem] px-2 md:px-4 lg:px-8 w-full flex justify-center items-center text-white border-[1.5px] border-white rounded-full hover:text-black hover:bg-white hover:border-black">
              BEHANCE
            </div>
            <div className="h-[2rem] md:h-[3rem] lg:h-[4rem] p-[1rem] px-2 md:px-4 lg:px-8 w-full flex justify-center items-center text-white border-[1.5px] border-white rounded-full hover:text-black hover:bg-white hover:border-black">
              INSTAGRAM
            </div>
            <div className="h-[2rem] md:h-[3rem] lg:h-[4rem] p-[1rem] px-2 md:px-4 lg:px-8 w-full flex justify-center items-center text-white border-[1.5px] border-white rounded-full hover:text-black hover:bg-white hover:border-black">
              FACEBOOK
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

{
  /* <Container direction="column" fullwidth>
        <div className="footer-content" ref={footerContentRef}>
          <div className="footer-content__top">
            <div className="footer-content__cta m-20">
              <h2>Have an idea?</h2>
              <Button text="Tell us more" type="link" darkmode />
            </div>
            <div>
              <AnimatedPinDemo />
            </div>
          </div>

          <div className="footer-content__bottom">
            <div className="footer-content__bottom-left">
              <Button
                text="leifidesignconsultancy@gmail.com"
                type="link"
                darkmode
              />
              <address>
                Shop no. 5, Mangalmurti Apartment, Pune - Satara Rd,
                <br /> Chhatrapati Sambhaji Nagar, Dhankawadi, Pune, Maharashtra
                411043
              </address>
              <TransitionLink link="Privacy policy" size="sm" />
            </div>
            <div className="footer-content__bottom-right">
              <div
                className="footer-content__bottom-links"
                onMouseEnter={() => handleCursorScale(true)}
                onMouseLeave={() => handleCursorScale(false)}
              >
                {links.map((link) => (
                  <TransitionLink link={link} size="md" darkmode />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container> */
}
