import React from "react";
import { ContainerScroll } from "./container_scroll_animation";
import { project1 } from "../../assets/projImages";

export function ContainerScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-[2rem] md:text-4xl font-semibold text-black dark:text-black">
              Unleash the power of <br />
              <span className="text-[2rem] md:text-[6rem] font-bold mt-1 leading-none">
                Web Development
              </span>
            </h1>
          </>
        }
      >
        <img
          src={project1}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
