import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogData from "./blogData";
import TracingBeam from "../../components/TracingBeam/tracingBeam";

const BlogDetail = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === id);

  if (!blog) {
    return <div className="text-white">Blog not found</div>;
  }

  return (
    <div className="bg-black px-4 py-20 ">
      <div className="pb-[2rem] pl-[1rem] pt-10">{/* <BackButton /> */}</div>

      <TracingBeam className="px-6 mx-auto">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative text-white pl-[2rem] md:pl-[1rem] lg:pl-[2rem]">
          <h1 className="text-[35px] lg:text-[55px] font-[Questrial]">
            {blog.title}
          </h1>
          <h2 className="bg-black text-white rounded-full text-sm w-fit mt-5  py-1 mb-4">
            {blog.badge}
          </h2>
          <p className="text-sm text-neutral-400">
            {blog.date} at {blog.time}
          </p>
          <h3 className="text-[25px] lg:text-[30px] font-[Questrial] mt-6 mb-6 ">
            {blog.subheading}
          </h3>
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-lg mb-10 object-cover w-full"
          />
          <div
            className="text-sm prose prose-sm dark:prose-invert text-justify"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
      </TracingBeam>
    </div>
  );
};

export default BlogDetail;
