import React, { useState, useEffect, useRef } from "react";
import { useNavStore } from "../../../store/navStore";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImageRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const sliderRef = useRef(null);
  const floatingBorderRef = useRef(null);

  // Sample images - you can replace these with your own
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
      alt: "Fitness workout",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=150&h=150&fit=crop",
      alt: "Gym training",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&h=150&fit=crop",
      alt: "Running outdoors",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1549476464-37392f717541?w=150&h=150&fit=crop",
      alt: "Yoga practice",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=150&h=150&fit=crop",
      alt: "Weight training",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&h=150&fit=crop",
      alt: "Cycling workout",
    },
  ];

  useEffect(() => {
    // Set up refs array
    thumbnailRefs.current = thumbnailRefs.current.slice(0, images.length);
  }, [images.length]);

  // Animate main image and thumbnails with native animations
  useEffect(() => {
    // Animate main image change
    if (mainImageRef.current) {
      // Reset and animate main image
      mainImageRef.current.style.opacity = "0";
      mainImageRef.current.style.transform = "scale(1.1)";

      requestAnimationFrame(() => {
        mainImageRef.current.style.transition =
          "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        mainImageRef.current.style.opacity = "1";
        mainImageRef.current.style.transform = "scale(1)";
      });
    }

    // Update thumbnail scales and floating border
    thumbnailRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.transition =
          "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        if (index === currentIndex) {
          ref.style.transform = "scale(1.05)";
        } else {
          ref.style.transform = "scale(1)";
        }
      }
    });

    // Update floating border position
    const updateFloatingBorder = () => {
      const currentThumbnail = thumbnailRefs.current[currentIndex];
      const floatingBorder = floatingBorderRef.current;
      const scrollContainer = sliderRef.current?.querySelector(".flex");

      if (
        currentThumbnail &&
        floatingBorder &&
        sliderRef.current &&
        scrollContainer
      ) {
        const rect = currentThumbnail.getBoundingClientRect();
        const containerRect = sliderRef.current.getBoundingClientRect();

        // Get scroll offset
        const scrollTop = scrollContainer.scrollTop || 0;
        const scrollLeft = scrollContainer.scrollLeft || 0;

        // Calculate position relative to the slider container including scroll
        const top = rect.top - containerRect.top + scrollTop;
        const left = rect.left - containerRect.left + scrollLeft;

        floatingBorder.style.transform = `translate(${left}px, ${top}px)`;
        floatingBorder.style.width = `${rect.width}px`;
        floatingBorder.style.height = `${rect.height}px`;
      }
    };

    const timer = setTimeout(updateFloatingBorder, 10);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleThumbnailClick = (index) => {
    if (index !== currentIndex) {
      // Fade out current image with smooth animation
      if (mainImageRef.current) {
        mainImageRef.current.style.transition =
          "opacity 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53), transform 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)";
        mainImageRef.current.style.opacity = "0";
        mainImageRef.current.style.transform = "scale(0.95)";

        setTimeout(() => {
          setCurrentIndex(index);
        }, 300);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && currentIndex > 0) {
      handleThumbnailClick(currentIndex - 1);
    } else if (e.key === "ArrowDown" && currentIndex < images.length - 1) {
      handleThumbnailClick(currentIndex + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Update floating border on resize and scroll
  useEffect(() => {
    const handleResize = () => {
      const currentThumbnail = thumbnailRefs.current[currentIndex];
      const floatingBorder = floatingBorderRef.current;
      const scrollContainer = sliderRef.current?.querySelector(".flex");

      if (
        currentThumbnail &&
        floatingBorder &&
        sliderRef.current &&
        scrollContainer
      ) {
        const rect = currentThumbnail.getBoundingClientRect();
        const containerRect = sliderRef.current.getBoundingClientRect();

        // Get scroll offset
        const scrollTop = scrollContainer.scrollTop || 0;
        const scrollLeft = scrollContainer.scrollLeft || 0;

        const top = rect.top - containerRect.top + scrollTop;
        const left = rect.left - containerRect.left + scrollLeft;

        floatingBorder.style.transform = `translate(${left}px, ${top}px)`;
        floatingBorder.style.width = `${rect.width}px`;
        floatingBorder.style.height = `${rect.height}px`;
      }
    };

    const handleScroll = () => {
      handleResize(); // Use same logic for scroll
    };

    const scrollContainer = sliderRef.current?.querySelector(".flex");

    window.addEventListener("resize", handleResize);
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentIndex]);

  //   const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  //   useEffect(() => {
  //     setIsNavbarBlack(false);

  //     return () => {
  //       setIsNavbarBlack(true); // optional reset
  //     };
  //   }, [setIsNavbarBlack]);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 h-screen lg:h-[80vh]">
            {/* Main Image Display */}
            <div className="flex-1 flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <img
                  ref={mainImageRef}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Vertical Thumbnail Slider */}
            <div className="w-full lg:w-32 xl:w-40 flex-shrink-0">
              <div ref={sliderRef} className="relative h-full max-h-full">
                {/* Floating Border */}
                <div
                  ref={floatingBorderRef}
                  className="absolute top-0 left-0 pointer-events-none z-10 border-4 border-white rounded-lg shadow-lg"
                  style={{
                    transform: "translate(0px, 0px)",
                    width: "80px",
                    height: "80px",
                    transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />

                {/* Thumbnail Container */}
                <div
                  className="flex lg:flex-col gap-2 h-full overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto pb-2 lg:pb-0 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600"
                  id="thumbnail-scroller"
                >
                  {images.map((image, index) => (
                    <div
                      key={image.id}
                      ref={(el) => (thumbnailRefs.current[index] = el)}
                      className="relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden"
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <img
                        src={image.thumb}
                        alt={image.alt}
                        className="w-20 h-20 lg:w-full lg:h-16 xl:h-20 object-cover"
                      />
                      <div
                        className={`
                      absolute inset-0 bg-black transition-opacity duration-300
                      ${
                        index === currentIndex
                          ? "opacity-0"
                          : "opacity-30 hover:opacity-10"
                      }
                    `}
                      />
                      {index === currentIndex && (
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots (Mobile) */}
          <div className="flex justify-center mt-6 lg:hidden">
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${
                    index === currentIndex
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }
                `}
                />
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-6 text-gray-400 text-sm hidden lg:block">
            Use arrow keys ↑↓ or click thumbnails to navigate
          </div>
        </div>

        <style jsx>{`
          .scrollbar-thin {
            scrollbar-width: thin;
          }

          .scrollbar-track-gray-800::-webkit-scrollbar-track {
            background-color: #1f2937;
            border-radius: 6px;
          }

          .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
            background-color: #4b5563;
            border-radius: 6px;
          }

          .scrollbar-thin::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Gallery;
