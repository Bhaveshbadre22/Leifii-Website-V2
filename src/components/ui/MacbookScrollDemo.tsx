import React from "react";
import { MacbookScroll } from "./macbook_scroll.tsx";
import { Link } from "react-router-dom";
import { LampDemo } from "./LampDemo.tsx";
import BackButton from "../BackButton.jsx/backButton.jsx";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-[#0B0B0F] w-full">
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
        src="/images/1.jpg"
        showGradient={false}
      />
    </div>
  );
}

const Badge: React.FC<{ className?: string }> = ({ className }) => {
  return <img className={className} src="/logol.png" alt="Badge" />;
};
