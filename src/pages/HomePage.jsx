import React, { useEffect, useRef } from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";

function HomePage() {
  const animatedComponentsRefs = [
    useRef(null), // Reference for HeroSection
    useRef(null), // Reference for ImproveSkills
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      animatedComponentsRefs.forEach((ref, index) => {
        const element = ref.current;
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top < windowHeight * 0.8) {
            setTimeout(() => {
              element.classList.add("animate-fall");
            }, index * 2000);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="container main">
        <div className="animated-component">
          <div ref={animatedComponentsRefs[0]} className="animated-div">
            <HeroSection />
          </div>
          <div ref={animatedComponentsRefs[1]} className="animated-div">
            <ImproveSkills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
