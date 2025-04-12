import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./Navbar.css";
import { CircularButton } from "../../MagneticButton/CircularButton";
import { Menu } from "../Menu/index";
import leifiiLogo from "../../../assets/LEIFII.png";
import leifiiLogoWhite from "../../../assets/leifiiNameWhite.webp";
import logoL from "../../../assets/logol.png";
import { useNavStore } from "../../../store/navStore";

export const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const nav = useRef<HTMLElement | any>(null);

  useEffect(() => {
    gsap.fromTo(
      nav.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1.5, delay: 0.3, ease: "Power0.in" }
    );
  });

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

  function handleMenuOpen() {
    setIsMenuOpened(!isMenuOpened);
  }

  const isNavbarBlack = useNavStore((state) => state.isNavbarBlack);
  // console.log(isNavbarBlack);

  return (
    <nav
      className={`navbar ${
        isNavbarBlack ? "text-white bg-black" : "text-black bg-white"
      }`}
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
          <div className={"navbar-toggle"}>
            <CircularButton
              isNavBlack={isNavbarBlack}
              isMenuOpened={isMenuOpened}
              handleMenuOpen={handleMenuOpen}
            />
          </div>
        </div>
      </div>
      <Menu isMenuOpened={isMenuOpened} handleMenuOpen={handleMenuOpen} />
    </nav>
  );
};
