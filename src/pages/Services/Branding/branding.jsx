import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./branding.css";
import Lottie from "lottie-react";
import dragBlack from "../Marketing/dragBlack.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGSAP } from "@gsap/react";

const Branding = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#firstGal",
        start: "center center",
        end: "+=100% center ",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });

    tl.to(".gallery__item--center", {
      width: "100%",
      height: "100vh",
      borderRadius: 0,
    }).to("#gallery-1 .caption", { top: "50%", opacity: 1 }, "<");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#secondGal",
        start: "center center",
        end: "+=100% center",
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
      },
    });

    tl2
      .to(".gallery__item-cut, gallery__item-inner", {
        width: "100dvw",
        height: "100vh",
        borderRadius: 0,
      })
      .to(
        "#secondGal .caption",
        {
          opacity: 1,
          top: "10%",
        },
        "<"
      );
  }, []);

  return (
    <>
      <main className="bodii">
        <div className="pt-[2rem] pl-[2rem] md:pt-[4rem] md:pl-[4rem]">
          {/* <BackButton />  */}
        </div>
        <div className="frame"></div>

        <section className="project project--intro">
          <h2 className="project__title">
            Branding <span className="project__title-line">Redefined</span>
          </h2>
          <span className="project__label project__label--mission">
            Mission
          </span>
          <div className="project__mission">
            <p>
              The AI-Art Project is a transformative initiative dedicated to
              exploring the immense impact of AI-generated art on the art world
              and artists. We aim to discover and promote exceptional
              AI-generated artworks that push the boundaries of creativity,
              redefine traditional practices, and provoke thought.
            </p>
            <p>
              Through collaborations with artists, workshops, and educational
              programs, we empower artists to leverage AI as a tool for
              exploration, expanding their artistic hNorizons and embracing new
              forms of expression.
            </p>
          </div>
        </section>

        <div id="firstGal" className="gallery-wrap">
          <div className="gallery gallery--row" id="gallery-1">
            <div
              className="gallery__item gallery__item--s"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item gallery__item--m"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item gallery__item--l"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item gallery__item--xl gallery__item--center size-full object-cover"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item gallery__item--l"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item gallery__item--m"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item gallery__item--s"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div className="caption">
              Within this meticulously arranged AI-generated ensemble lies a
              tantalizing facade, captivating our gaze. Yet, as we search for
              the soul of human expression, we question whether algorithms can
              truly embody the essence of authentic art.
            </div>
          </div>
        </div>

        {/* <section className="w-1/2 pt-20 z-10 relative m-20">
          <p
            className="text-2xl"
            style={{ textShadow: " 2px 4px 6px rgba(0,0,0,0.6)" }}
          >
            Within this meticulously arranged AI-generated ensemble lies a
            tantalizing facade, captivating our gaze. Yet, as we search for the
            soul of human expression, we question whether algorithms can truly
            embody the essence of authentic art.
          </p>
        </section> */}
        <section className="project project--details project--left">
          <span className="project__label project__label--default">
            Ethical Considerations
          </span>
          <p>
            The emergence of AI-generated art raises ethical questions and
            concerns. One of the key challenges is navigating the boundaries of
            authorship and ownership. Determining the role of AI algorithms and
            their creators in the artistic process, as well as addressing issues
            of attribution and intellectual property, requires careful
            deliberation. Additionally, ensuring that AI-generated art does not
            perpetuate bias, discrimination, or harmful content is crucial for
            fostering a responsible and inclusive artistic landscape.
          </p>
        </section>

        <div id="secondGal" className="gallery-wrap gallery-wrap--large">
          <div
            className="gallery gallery--grid gallery--breakout"
            id="gallery-2"
          >
            <div className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://ik.imagekit.io/3vlnwuz3yu/1.jpg?updatedAt=1727776756971)",
                }}
              ></div>
            </div>
            <div className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
            <div className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
            <div className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
            <div id="centerGallery" className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
            <div className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
            <div className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
            <div className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
            <div className="gallery__item gallery__item-cut">
              <div
                className="gallery__item-inner"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
              ></div>
            </div>
            <div className="caption relative z-10">
              <p>
                Devoid of inherent knowledge, the language model relies solely
                on probabilities to craft a peculiar vision. As a result, the
                earrings hang in curious defiance of physics, inviting us to
                ponder the implications of relinquishing human understanding in
                the pursuit of artificial creativity.
              </p>
            </div>
          </div>
        </div>

        <section className="project project--details project--right">
          <span className="project__label project__label--default">
            Preserving Artistic Identity
          </span>
          <p>
            While AI offers new avenues for artistic exploration, there is a
            concern that it may overshadow or replace human creativity.
            Balancing the integration of AI tools and techniques with preserving
            the unique perspectives, emotional depth, and artistic identity of
            human artists is a significant challenge. Striking the right balance
            between AI-generated art and the irreplaceable human touch requires
            thoughtful consideration and an ongoing dialogue between artists,
            technologists, and the wider art community.
          </p>
        </section>

        <div className="gallery-wrap">
          <div className="gallery gallery--grid10" id="gallery-3">
            <div
              className="gallery__item pos-2"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-1"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-3"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-4"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-5"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-6"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-7"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-8"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-9"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-10"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-11"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-12"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-13"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-14"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-15"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div
              className="gallery__item pos-16"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
            <div className="caption">The Art of Perfection?</div>
          </div>
        </div>

        {/* <div className="flex text-justify justify-center text-[2rem] md:text-[3rem]">
          Explore the Projects
        </div>

        <div className="h-screen text-white">
          <SliderComponent />{" "}
        </div> */}
      </main>
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
          {/* <SwiperSlide>
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
          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src="/images/6.jpg"
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          {/* Third item */}
          {/* <SwiperSlide>
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

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src="/images/8.jpg"
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-60 h-60 md:w-80 md:h-80  transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src="/images/4.jpg"
                className="absolute inset-0 flex items-center justify-center w-[300px] h-[300px] bg-blue-500 hover:scale-100 transition-transform duration-300 transform origin-center z-10 rounded-2xl"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="group relative w-[200px] h-[200px]  md:w-[300px] md:h-[300px]">
              <img
                src="/images/blob3.png"
                className="w-60 h-60 md:w-80 md:h-80 transform scale-0 transition-transform duration-700 origin-center group-hover:scale-[150%]"
              />
              <img
                src="/images/9.jpg"
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
    </>
  );
};

export default Branding;
