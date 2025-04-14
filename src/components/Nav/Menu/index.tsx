import React, { useEffect, useState } from "react";
import { TransitionLink } from "../../Links/TransitionLink/index";
import "./Menu.css";

interface Props {
  isMenuOpened: boolean;
  handleMenuOpen: () => void;
}

export const Menu = ({ isMenuOpened, handleMenuOpen }: Props) => {
  const links2 = ["About", "Services", "Careers", "Contact", "Influencer"];
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    checkTouchScreen();
    window.addEventListener("resize", checkTouchScreen);
  }, [isTouchScreen]);

  function checkTouchScreen() {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchScreen(true);
    } else {
      setIsTouchScreen(false);
    }
  }

  return (
    <div
      className={`${"navbar-menu"} ${isMenuOpened ? "menu-open" : ""} ${
        isTouchScreen ? "full-width" : ""
      }`}
    >
      <div className={"navbar-menu__overlay"} onClick={handleMenuOpen}></div>
      <div className={"navbar-menu__content"}>
        <div className={"navbar-menu__content-wrapper"}>
          <div className={"navbar-menu__links"}>
            <div className={"navbar-menu__links-right"}>
              <div className={"navbar-menu__links-list pt-5"}>
                {links2.map((link) => (
                  <TransitionLink
                    link={link}
                    size="lg"
                    key={link}
                    onClick={handleMenuOpen} // Close the menu on link click
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={"navbar-menu__contact"}>
          <p className={"navbar-menu__title"}>Get in touch</p>
          <a href="/">team@leifii.com</a>
        </div>
      </div>
    </div>
  );
};
