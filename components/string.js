"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function String() {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  // The 'finalPath' is a straight line
  const finalPath = "M 0 100 Q 500 100 1000 100";

  useGSAP(() => {
    const handleMouseMove = (e) => {
      if (!svgRef.current) return;

      // Get SVG coordinates and dimensions
      const rect = svgRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the SVG (mapped to 0-1000 viewBox)
      const relativeX = ((e.clientX - rect.left) / rect.width) * 1000;
      const relativeY = e.clientY - rect.top;

      // Update the path: M (start) Q (mouse position) (end)
      const newPath = `M 0 100 Q ${relativeX} ${relativeY} 1000 100`;

      // Smoothly follow the mouse while inside
      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      // The "Pluck" effect - wobbles back to straight line
      gsap.to(pathRef.current, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)", // (intensity, frequency)
      });
    };

    const svgElement = svgRef.current;
    svgElement.addEventListener("mousemove", handleMouseMove);
    svgElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svgElement.removeEventListener("mousemove", handleMouseMove);
      svgElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: svgRef });

  return (
    <div className="string-container w-full py-12 cursor-none overflow-hidden px-5 md:px-20 lg:px-15 xl:px-20">
      <svg
        ref={svgRef}
        width="100%"
        height="200"
        viewBox="-10 0 1020 200"
        preserveAspectRatio="none"
        className="block touch-none"
      >
        {/* Left attachment circle */}
        <circle
          cx="0"
          cy="100"
          r="8"
          fill="white"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />
        
        <path
          ref={pathRef}
          d={finalPath}
          stroke="white"
          strokeWidth="2"
          fill="transparent"
        />

        {/* Right attachment circle */}
        <circle
          cx="1000"
          cy="100"
          r="8"
          fill="white"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}