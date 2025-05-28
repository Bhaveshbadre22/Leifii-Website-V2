import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavStore } from "../../store/navStore";
import { TransitionLink } from "../Links/TransitionLink";
import { Link } from "react-router-dom";
import { CircularButton } from "../MagneticButton/CircularButton";
import {
  brandingServiceImg,
  marketingServiceImg,
  photographyServiceImg,
  spaceServiceImg,
  webdevServiceImg,
} from "../../assets/services";

interface MenuItem {
  id: number;
  label: string;
  image: string;
  link: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    label: "About",
    image: spaceServiceImg,
    link: "/about",
  },
  {
    id: 2,
    label: "Services",
    image: webdevServiceImg,
    link: "/services",
  },
  {
    id: 3,
    label: "Careers",
    image: photographyServiceImg,
    link: "/careers",
  },
  {
    id: 4,
    label: "Contact",
    image: marketingServiceImg,
    link: "/contact",
  },
  {
    id: 5,
    label: "Influencer",
    image: brandingServiceImg,
    link: "/influencer",
  },
];

export const DesktopSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(window.scrollY <= 10);
  const isNavbarBlack = useNavStore((state) => state.isNavbarBlack);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    if (!isMenuOpened) {
      setIsHovered(false);
    }
  };

  const handleMenuOpen = () => {
    setIsMenuOpened(!isMenuOpened);
    if (isMenuOpened) {
      setIsHovered(false);
    }
  };

  // Scroll direction detection with debounce
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top of page
      if (currentScrollY <= 0) {
        setIsVisible(true);
        lastScrollY.current = 0;
        return;
      }

      // console.log(currentScrollY < lastScrollY.current);
      // Show when scrolling up, hide when scrolling down
      setIsVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ESC key functionality
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpened) {
        setIsMenuOpened(false);
        setIsHovered(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isMenuOpened]);

  // Sync hover state with menu open state
  useEffect(() => {
    if (isMenuOpened) {
      setIsHovered(true);
    }
  }, [isMenuOpened]);

  return (
    <div className="hidden lg:block relative h-full z-50">
      {/* Desktop-only Hamburger Button */}
      <motion.div
        className="fixed right-8 top-8 z-[1000]"
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <CircularButton
          isNavBlack={isNavbarBlack}
          isMenuOpened={isMenuOpened}
          handleMenuOpen={handleMenuOpen}
        />
      </motion.div>

      {/* Peeping Menu Items */}
      <AnimatePresence>
        {isHovered && !isMenuOpened && (
          <motion.div
            className="fixed right-0 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-32 h-20">
              {menuItems.map((item, index) => {
                const middleIndex = Math.floor(menuItems.length / 2);
                const distanceFromCenter = index - middleIndex;
                const rotation = distanceFromCenter * -15;
                const yOffset = distanceFromCenter * 40;
                const xOffset = Math.abs(distanceFromCenter) * 30;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute w-full h-full rounded-xl overflow-hidden cursor-pointer origin-right"
                    style={{
                      zIndex: menuItems.length - Math.abs(distanceFromCenter),
                      transform: `translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotation}deg)`,
                    }}
                    initial={{
                      rotate: rotation,
                      x: 100 + xOffset,
                      y: yOffset,
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      rotate: rotation,
                      x: xOffset,
                      y: yOffset,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotate: isMenuOpened ? 0 : rotation,
                      x: isMenuOpened ? -1000 : 100 + xOffset,
                      y: isMenuOpened ? 0 : yOffset,
                      opacity: 0,
                      scale: isMenuOpened ? 1.2 : 0.8,
                      transition: {
                        duration: 0.5,
                        ease: isMenuOpened ? [0.4, 0, 0.2, 1] : "easeInOut",
                      },
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={handleMenuOpen}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Sidebar */}
      <AnimatePresence>
        {isMenuOpened && (
          <motion.div
            className="fixed inset-0 bg-white z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              x: "100%",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full w-full flex items-center justify-center p-4 sm:p-8 md:p-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                x: "100%",
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
                {menuItems.map((item, index) => {
                  return (
                    <motion.div
                      key={item.id}
                      className="w-[150px] sm:w-[180px] md:w-[200px] aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                      initial={{
                        x: 1000,
                        opacity: 0,
                        scale: 1.2,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        x: "100%",
                        opacity: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                          delay: index * 0.05, // Stagger the exit animations
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        mass: 1,
                        delay: index * 0.1,
                      }}
                    >
                      <Link
                        to={item.link}
                        reloadDocument
                        onClick={handleMenuOpen}
                      >
                        <div
                          className="w-full h-full bg-cover bg-center relative group"
                          style={{ backgroundImage: `url(${item.image})` }}
                        >
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-colors duration-300">
                            <TransitionLink
                              link={item.label}
                              size="lg"
                              darkmode
                              onClick={handleMenuOpen}
                            />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
