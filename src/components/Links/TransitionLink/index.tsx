import { Link } from "react-router-dom";
import "./TransitionLink.css";
import React from "react";

interface Props {
  link: string;
  size?: "sm" | "md" | "lg";
  darkmode?: boolean;
}

export const TransitionLink = ({
  link,
  size = "md",
  darkmode = false,
}: Props) => {
  return (
    <Link
      to={`/${link.toLowerCase()}`}
      reloadDocument={true}
      className={`${"t-link__item"} ${size} ${
        darkmode ? "t-link__item--dark" : ""
      }`}
    >
      <em>
        <span data-text={link}>{link}</span>
      </em>
    </Link>
  );
};
