import { Link } from "react-router-dom";
import "./TransitionLink.css";
import React from "react";

interface Props {
  link: string;
  size?: "sm" | "md" | "lg";
  darkmode?: boolean;
  onClick?: () => void; // Added onClick prop to dismiss the menu
}

export const TransitionLink = ({
  link,
  size = "md",
  darkmode = false,
  onClick,
}: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Close the side menu when the link is clicked
    }
  };

  return (
    <Link
      to={`/${link.toLowerCase()}`}
      reloadDocument
      className={`${"t-link__item"} ${size} ${
        darkmode ? "t-link__item--dark" : ""
      }`}
      onClick={handleClick} // Trigger onClick when link is clicked
    >
      <em>
        <span data-text={link}>{link}</span>
      </em>
    </Link>
  );
};
