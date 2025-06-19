import { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "./Navbar.css";
import { CircularButton } from "../../MagneticButton/CircularButton";
import { Menu } from "../Menu/index";
import { DesktopSidebar } from "../../DesktopSidebar";
import leifiiLogo from "../../../assets/LEIFII.png";
import leifiiLogoWhite from "../../../assets/leifiiNameWhite.webp";
import logoL from "../../../assets/logol.png";
import { useNavStore } from "../../../store/navStore";
import { LenisContext } from "../../../App";

export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const nav = useRef<HTMLElement | any>(null);
  const lenisRef = useContext(LenisContext);

  useEffect(() => {
    gsap.fromTo(
      nav.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1.5, delay: 0.3, ease: "Power0.in" }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    const firstSpan = document.querySelector(".menu-box span:first-of-type");
    const secondSpan = document.querySelector(".menu-box span:last-of-type");

    if (isMenuOpened) {
      tl.to(firstSpan, { x: -10, opacity: 0, duration: 0.3 })
        .to(secondSpan, { x: 10, opacity: 0, duration: 0.3 }, 0)
        .set(firstSpan, { rotate: 45, y: -10 })
        .set(secondSpan, { rotate: -45, y: -10 })
        .to(firstSpan, { y: 1, x: 0, opacity: 1, duration: 0.3 })
        .to(secondSpan, { y: -1, x: -1, opacity: 1, duration: 0.3 }, "-=0.1");
    } else {
      tl.to(firstSpan, { y: 0, x: 0, rotation: 0, opacity: 1, duration: 0.2 })
        .to(
          secondSpan,
          { y: 0, x: 0, rotation: 0, opacity: 1, duration: 0.2 },
          0
        )
        .add("translate")
        .to(firstSpan, { y: -1, duration: 0.2 }, "translate")
        .to(secondSpan, { y: 4, duration: 0.2 }, "translate");
    }
  }, [isMenuOpened]);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Prevent scroll on mobile
      if (lenisRef?.current) lenisRef.current.stop();
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      if (lenisRef?.current) lenisRef.current.start();
    }
  }, [isMenuOpened]);

  function handleMenuOpen() {
    setIsMenuOpened(!isMenuOpened);
  }

  const isNavbarBlack = useNavStore((state) => state.isNavbarBlack);
  // console.log(isNavbarBlack);

  const location = useLocation();

  const isWebPage = location.pathname === "/services/web"; // adjust if using `/web/xyz` etc.
  const navbarClass = isWebPage ? "bg-[#020617] text-white" : "";

  return (
    <>
      <nav
        className={`navbar ${
          isNavbarBlack ? "text-white bg-black" : "text-black bg-white"
        } ${navbarClass}`}
      >
        <div className={"navbar-wrapper"} ref={nav}>
          <div className={"navbar-left"}>
            <Link className="group" to="/">
              <div className="logo-container">
                <img className="logoo" src={logoL} alt="Logo" />
                <img
                  className=" name opacity-0 transform group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  src={isNavbarBlack ? leifiiLogoWhite : leifiiLogo}
                  alt="LEIFII"
                />
              </div>
            </Link>
          </div>

          <div className={"navbar-right"}>
            <div className={"navbar-toggle  lg:hidden"}>
              <CircularButton
                isNavBlack={isNavbarBlack}
                isMenuOpened={isMenuOpened}
                handleMenuOpen={handleMenuOpen}
                classname="hamburger-fixed"
              />
            </div>
          </div>
        </div>
        <Menu isMenuOpened={isMenuOpened} handleMenuOpen={handleMenuOpen} />
      </nav>
      <DesktopSidebar />
    </>
  );
};
