// StaggerDiv.tsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, ReactNode } from "react";
import { useNavStore } from "../../store/navStore";

interface StaggerDivProps {
  children: ReactNode;
  className?: string;
}

const StaggerDiv = ({ children, className = "" }: StaggerDivProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  const hasPreloaderAnimationEnded = useNavStore(
    (state) => state.hasPreloaderAnimationEnded
  );

  useGSAP(() => {
    // console.log(hasPreloaderAnimationEnded);
    if (!hasPreloaderAnimationEnded) return;
    const elements =
      containerRef.current?.querySelectorAll(".stagger-child") || [];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: "circ.inOut",
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [hasPreloaderAnimationEnded]);

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child) => (
        <div className="stagger-child">{child}</div>
      ))}
    </div>
  );
};

export default StaggerDiv;
