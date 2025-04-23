// import "./footer.scss";
import { AnimatedPinCard } from "../AnimatedPinCard/AnimatedPinCard";
import CubertoButton from "../Button/CubertoButton";
import StaggerDiv from "../StaggerDiv/StaggerDiv";

const Footer = () => {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 50; // Controls speed (higher value = slower)

    const scroll = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <footer
      className="footer bg-black w-full h-auto pt-10"
      data-cursor="-inverse"
    >
      <div className="bg-black flex flex-col w-[85%] sm:w-[90%] mx-auto py-10">
        <div className="flex flex-row justify-between text-[0.75rem] md:text-[1rem]">
          <div className="flex justify-center items-center text-white">
            &copy; 2025 LEIFII MEDIA LLP
          </div>
          <div className="">
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center justify-center text-[0.75rem] md:text-[1rem] cursor-pointer"
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

        <div className="h-auto w-full md:h-[60%] flex flex-col md:flex-row mt-[2rem] md:mt-[3rem]">
          <div className="w-full md:w-1/2 lg:w-2/3 text-left">
            <StaggerDiv>
              <div className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] text-white font-medium">
                HAVE A PROJECT IN MIND?
              </div>
              <div className="text-white/[0.60] text-[4rem] md:text-[6rem] lg:text-[8rem] 2xl:text-[9rem] font-medium hover:text-white hover:text-opacity-100">
                LET'S TALK
              </div>
            </StaggerDiv>
            <div className="mt-10 text-[0.5rem] md:text-[1rem] lg:text-[1.5rem] text-white/60 font-medium">
              team@leifii.com
            </div>
          </div>
          <div className="flex items-center justify-center my-5 sm:my-0 sm:ml-auto sm:mr-0 ">
            <AnimatedPinCard />
          </div>
        </div>

        <div className="my-5 sm:mt-10 flex flex-col md:flex-row items-center justify-between md:justify-evenly lg:justify-between w-full">
          <div className=" div-2 flex flex-row justify-center items-center gap-[1rem] text-[1rem] lg:text-[1.35rem] font-medium text-white/[0.60] text-center mt-6 md:mt-0 pt-0 order-1 md:order-2">
            <a href="/about" className="hover:text-white mb-3 block">
              About
            </a>
            <a href="/services" className="hover:text-white mb-3 block">
              Services
            </a>
            <a href="/careers" className="hover:text-white mb-3 block">
              Careers
            </a>
            <a href="/contact" className="hover:text-white mb-3 block">
              Contact
            </a>
          </div>
          <div className="div-1 w-full flex flex-row gap-[0.75rem] md:gap-[1.5rem] lg:gap-[3rem] text-[0.5rem] md:text-[0.75rem] lg:text-[1rem] font-medium order-2 md:order-1 mt-[1.5rem] md:mt-0">
            <CubertoButton
              innerPadding="px-10 sm:px-10 sm:py-4"
              className="text-xs sm:text-lg"
              text="BEHANCE"
              variant="light"
            />
            <CubertoButton
              innerPadding="px-10 py-3 sm:px-10 sm:py-4"
              className="text-xs sm:text-lg"
              text="INSTAGRAM"
              variant="light"
            />
            <CubertoButton
              innerPadding="px-10 sm:px-10 sm:py-4"
              className="text-xs sm:text-lg"
              text="FACEBOOK"
              variant="light"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
