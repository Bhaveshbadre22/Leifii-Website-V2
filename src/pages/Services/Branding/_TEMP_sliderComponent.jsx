import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const SliderComponent = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      imageUrl: "/images/1.jpg",
      title: "Project 1",
      id: 1,
    },
    {
      imageUrl: "/images/2.jpg",
      title: "Project 2",
      id: 2,
    },
    {
      imageUrl: "/images/3.jpg",
      title: "Project 3",
      id: 3,
    },
    {
      imageUrl: "/images/4.jpg",
      title: "Project 4",
      id: 4,
    },
  ];

  const handleCardClick = (id) => {
    if (!isDragging) {
      navigate(`/project/${id}`);
    }
  };

  return (
    <div className=" h-[100vh] md:h-screen text-white bg-[#131417] flex items-center justify-center w-full">
      <div className="w-full max-w-7xl relative px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <div
                className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => handleCardClick(project.id)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-[full] h-80 sm:h-80 md:h-96 object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-xl sm:text-2xl text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
