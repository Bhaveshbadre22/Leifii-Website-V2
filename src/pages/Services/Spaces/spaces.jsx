import React from "react";
import "./spaces.css";
import BackButton from "../../../components/Button/BackButton.tsx";
import Lottie from "lottie-react";
import dragBlack from "../Marketing/dragBlack.json";
import { Swiper, SwiperSlide } from "swiper/react";
import blob3 from "../../../assets/blob3.png";
import {
  project4,
  project6,
  project8,
  project9,
} from "../../../assets/projImages/index.ts";

const Spaces = () => {
  return (
    <>
      <div>
        {" "}
        <div className="pt-[4rem] pl-[2rem] md:pt-[6rem] md:pl-[4rem] bg-black">
          {/* <BackButton /> */}
        </div>
        <div className="bg-black text-white text-[2rem] pt-[1rem] md:text-[4rem] text-center">
          {" "}
          EVENT & SPACE DESIGN
        </div>
        <div className="bodyyyy">
          <div className="carousel">
            <div className="carousel-control-button left">
              <input type="radio" name="carousel-control-input" />
            </div>
            <div className="carousel-control-button right">
              <input type="radio" name="carousel-control-input" checked />
            </div>

            <div className="carousel-rotation-direction">
              <ul
                className="carousel-item-wrapper"
                style={{ "--_num-elements": 11 }}
              >
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 1,
                    "--_image-url": "url('https://ibb.co/w40zWyY')",
                  }}
                >
                  <a
                    href="https://ibb.co/w40zWyY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 1
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 2,
                    "--_image-url":
                      "url('https://drive.google.com/file/d/1Z6eAHTRBEPDxZgAT3myMN80Hnb_r-8HR/view?usp=drive_link')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/ein-sehr-hohes-gebaude-mit-vielen-fenstern-3svDIdPOT6M"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 2
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 3,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1702298616106-adbe0f447455?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/ein-sehr-hohes-gebaude-mit-vielen-fenstern-ivYgEOo7MnQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 3
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 4,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1565363887713-783cd82d36d2?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/weiss-graues-gebaudekonzept-8yOPWMS46CQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 4
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 5,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1701025034709-bef78e69d1ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/ein-paar-hohe-gebaude-mit-vielen-fenstern-duj9YsiNKvM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 5
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 6,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1701824580548-4f285fc0b80a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/die-spiegelung-eines-gebaudes-in-den-fenstern-eines-anderen-gebaudes-QT6ltyDT7UA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 6
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 7,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1558472306-75b150ac26eb?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/nahaufnahme-des-weissen-gebaudes-tKnda8e9ejM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 7
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 8,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1713623210045-95d02b35c4a2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/ein-hohes-gebaude-mit-zwei-balkonen-und-einer-uhr-sYg7bcIodC8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 8
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 9,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1700846968547-ace2dacd5e0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/eine-nahaufnahme-der-seite-eines-gebaudes-VvhIUx1lITA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 9
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 10,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1700846978475-5f4dd936c00a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/eine-wand-aus-metallquadraten-und-quadraten-a_XIDnN6C0Y"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 10
                  </a>
                </li>
                <li
                  className="carousel-item"
                  style={{
                    "--_index": 11,
                    "--_image-url":
                      "url('https://images.unsplash.com/photo-1707788620837-cd3efcce3ceb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
                  <a
                    href="https://unsplash.com/de/fotos/eine-nahaufnahme-einer-metallstruktur-mit-einem-himmelshintergrund-9u9t6gP8R-s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Architecture Example 11
                  </a>
                </li>

                <li className="carousel-ground"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[20px] md:mt-[100px]">
          <div className="flex justify-center">
            <div className="flex px-10 pt-4 flex-col">
              <h2 className="text-[2rem] md:text-[3rem] font-medium mt-10 ">
                Recent Work
              </h2>
              <div className="bg-black h-[2px]  w-[200px] md:w-[280px] mt-5"></div>
            </div>
          </div>

          <Swiper
            spaceBetween={120}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              // Adjust these breakpoints as per your design requirements
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* First item */}
            {/* <SwiperSlide data-cursor-text="Drag">
            <div className="group relative w-[400px] h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-80 h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[200%]"
              />
              <img
                src="/images/cover1.jpg"
                className="absolute inset-0 flex items-center justify-center w-[400px] h-[400px] bg-blue-500 hover:scale-100 transition-transform duration-800 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide> */}

            {/* Second item */}
            <SwiperSlide data-cursor-text="Drag">
              <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
                <img
                  src={blob3}
                  className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
                />
                <img
                  src={project6}
                  className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
                />
              </div>
            </SwiperSlide>

            {/* Third item */}
            {/* <SwiperSlide data-cursor-text="Drag">
            <div className="group relative w-[400px] h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-80 h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[180%]"
              />
              <img
                src="/images/cover1.jpg"
                className="absolute inset-0 flex items-center justify-center w-[400px] h-[400px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide> */}

            <SwiperSlide data-cursor-text="Drag">
              <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
                <img
                  src={blob3}
                  className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
                />
                <img
                  src={project8}
                  className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide data-cursor-text="Drag">
              <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
                <img
                  src={blob3}
                  className="w-60 h-60 md:w-80 md:h-80  transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
                />
                <img
                  src={project4}
                  className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide data-cursor-text="Drag">
              <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
                <img
                  src={blob3}
                  className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
                />
                <img
                  src={project9}
                  className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
                />
              </div>
            </SwiperSlide>

            {/* Add more SwiperSlide components as needed */}
          </Swiper>

          <div className="text-black flex justify-end pr-10 align-middle items-center">
            <div className="">
              <Lottie
                animationData={dragBlack}
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            Drag to explore ➡
          </div>
        </div>
      </div>
    </>
  );
};

export default Spaces;
