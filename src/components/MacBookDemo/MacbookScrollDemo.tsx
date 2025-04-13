import React from "react";
import { MacbookScroll } from "./macbook_scroll";
import { Link } from "react-router-dom";
import { LampDemo } from "../Lamp/LampDemo";
import BackButton from "../Button/BackButton";
import { project1 } from "../../assets/projImages";
import logol from "../../assets/logol.png";

export function MacbookScrollDemo() {
  return (
    <div
      className="overflow-hidden bg-[#020617] w-full pt-10"
      data-cursor="-inverse"
    >
      <div className="pt-[2rem] pl-[2rem] md:pt-[4rem] md:pl-[4rem]">
        <BackButton />
      </div>
      <LampDemo />
      <MacbookScroll
        badge={
          <Link to="https://www.instagram.com/leifii.co/">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={project1}
        showGradient={false}
      />
    </div>
  );
}

const Badge: React.FC<{ className?: string }> = ({ className }) => {
  return <img className={className} src={logol} alt="Badge" />;
};
