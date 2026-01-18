"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // 1. Track Mouse Movement
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Quick movement for the center dot
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Slower, trailing movement for the outer ring
      gsap.to(ringRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    // 2. Interaction Effects (Hovering over links)
    const handleMouseDown = () => gsap.to([dotRef.current, ringRef.current], { scale: 0.7 });
    const handleMouseUp = () => gsap.to([dotRef.current, ringRef.current], { scale: 1 });

    // 3. Hover over pointer elements
    const handleMouseEnter = (e) => {
      if (window.getComputedStyle(e.target).cursor === 'pointer') {
        gsap.to(ringRef.current, { scale: 2, backgroundColor: 'rgba(16, 185, 129, 0.5)', duration: 0.3 });
        gsap.to(dotRef.current, { opacity: 0, duration: 0.3 });
      }
    };

    const handleMouseLeave = (e) => {
      if (window.getComputedStyle(e.target).cursor === 'pointer') {
        gsap.to(ringRef.current, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
        gsap.to(dotRef.current, { opacity: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Outer Ring - The "Floaty" part */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-emerald-500/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 bg-transparent"
      ></div>

      {/* Inner Dot - The "Precise" part */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#10b981]"
      ></div>
    </>
  );
};

export default Cursor;