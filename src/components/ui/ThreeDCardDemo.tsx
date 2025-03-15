import React from "react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "./3dcard.tsx";

export function ThreeDCardDemo({ blog }) {
  return (
    <CardContainer className="inter-var flex flex-col items-center justify-center mb-6 px-4 sm:px-6 lg:px-8">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#262626] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border flex flex-col items-center">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white text-center"
        >
          {blog.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
        >
          Hover over this card to know more about leifii blogs
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={blog.image}
            height="1000"
            width="1000"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10 w-full">
          <CardItem
            translateZ={20}
            as={Link}
            to={`/blog/${blog.id}`}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Read Now →
          </CardItem>
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            5 min read
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
