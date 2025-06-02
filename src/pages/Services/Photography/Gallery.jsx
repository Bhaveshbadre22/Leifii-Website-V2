import React, { useState, useEffect, useRef } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImageRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const sliderRef = useRef(null);
  const floatingBorderRef = useRef(null);

  // Enhanced images with titles and descriptions
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
      alt: "Fitness workout",
      title: "STRENGTH TRAINING:",
      subtitle: "Building Power",
      description:
        "Transform your body with targeted strength training. This comprehensive workout routine focuses on building lean muscle mass and improving overall physical performance. Experience the difference that dedicated training can make in your fitness journey.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=150&h=150&fit=crop",
      alt: "Gym training",
      title: "GYM MASTERY:",
      subtitle: "Elite Training",
      description:
        "Master the art of fitness with professional gym training techniques. Our expert-designed programs help you maximize your potential and achieve results that seemed impossible. Every rep counts toward your transformation.",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&h=150&fit=crop",
      alt: "Running outdoors",
      title: "CARDIO EXCELLENCE:",
      subtitle: "Endurance Journey",
      description:
        "Discover the freedom of outdoor running and cardiovascular excellence. Build endurance, improve heart health, and experience the mental clarity that comes from consistent cardio training. Your journey to peak fitness starts here.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1549476464-37392f717541?w=150&h=150&fit=crop",
      alt: "Yoga practice",
      title: "MINDFUL MOVEMENT:",
      subtitle: "Yoga Balance",
      description:
        "Find inner peace and physical strength through mindful yoga practice. Connect your body and mind while building flexibility, balance, and core strength. This ancient practice offers modern solutions for stress relief and wellness.",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=150&h=150&fit=crop",
      alt: "Weight training",
      title: "POWERLIFTING:",
      subtitle: "Maximum Strength",
      description:
        "Push your limits with advanced powerlifting techniques. Build incredible strength and power through progressive overload training. This is where champions are made and personal records are broken.",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
      thumb:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&h=150&fit=crop",
      alt: "Cycling workout",
      title: "CYCLING PERFORMANCE:",
      subtitle: "Speed & Endurance",
      description:
        "Experience the thrill of high-performance cycling training. Build lower body power, improve cardiovascular fitness, and enjoy the mental benefits of this dynamic workout. Every pedal stroke brings you closer to your goals.",
    },
  ];

  useEffect(() => {
    thumbnailRefs.current = thumbnailRefs.current.slice(0, images.length);
  }, [images.length]);

  // Animate main image and thumbnails with native animations
  useEffect(() => {
    if (mainImageRef.current) {
      mainImageRef.current.style.opacity = "0";
      mainImageRef.current.style.transform = "scale(1.1)";

      requestAnimationFrame(() => {
        mainImageRef.current.style.transition =
          "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        mainImageRef.current.style.opacity = "1";
        mainImageRef.current.style.transform = "scale(1)";
      });
    }

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

        const scrollTop = scrollContainer.scrollTop || 0;
        const scrollLeft = scrollContainer.scrollLeft || 0;

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
      handleResize();
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

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-20 h-screen xl:h-[85vh]">
          {/* Text Description Section */}
          <div className="xl:w-1/3 flex flex-col justify-center text-white order-1 xl:order-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                  <span className="text-orange-400">
                    {images[currentIndex].title}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light italic text-orange-300 mt-2">
                  {images[currentIndex].subtitle}
                </h2>
              </div>

              <div className="w-12 h-0.5 bg-orange-400"></div>

              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light max-w-lg">
                {images[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Main Image Display */}
          <div className="xl:flex-1 flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden order-2 xl:order-2">
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
          <div className="w-full xl:w-32 2xl:w-40 flex-shrink-0 order-3 xl:order-3">
            <div ref={sliderRef} className="relative h-full max-h-full">
              {/* Floating Border */}
              <div
                ref={floatingBorderRef}
                className="absolute top-0 left-0 pointer-events-none z-10 border-4 border-orange-400 rounded-lg shadow-lg"
                style={{
                  transform: "translate(0px, 0px)",
                  width: "80px",
                  height: "80px",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />

              {/* Thumbnail Container */}
              <div
                className="flex xl:flex-col gap-2 h-full overflow-x-auto xl:overflow-x-hidden xl:overflow-y-auto pb-2 xl:pb-0 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600"
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
                      className="w-20 h-20 xl:w-full xl:h-16 2xl:h-20 object-cover"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots (Mobile) */}
        <div className="flex justify-center mt-6 xl:hidden">
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${
                    index === currentIndex
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-6 text-gray-400 text-sm hidden xl:block">
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
  );
};

export default Gallery;
