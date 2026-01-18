"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Text = "Aleem Talha";
const subText = "Full-Stack Architect & Logic Designer";

export default function Loading({ onComplete }) {
  const container = useRef();
  const mainTextRef = useRef();
  const subTextRef = useRef();
  const dividerRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(container.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: () => onComplete(),
          });
        },
      });

      const splitText = Text.split("");
      let clutter = "";
      splitText.forEach((char, index) => {
        const isSpace = char === " ";
        clutter += `<span class="inline-block ${isSpace ? "px-2" : "char-anim"}">${isSpace ? "&nbsp;" : char}</span>`;
      });
      if (mainTextRef.current) mainTextRef.current.innerHTML = clutter;

      const splitSub = subText.split("");
      let subClutter = "";
      splitSub.forEach((char) => {
        subClutter += `<span class="inline-block sub-char-anim">${char === " " ? "&nbsp;" : char}</span>`;
      });
      if (subTextRef.current) subTextRef.current.innerHTML = subClutter;

      tl.set(container.current, { opacity: 1 });

      tl.from(".portfolio-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.from(
        ".char-anim",
        {
          y: 120,
          opacity: 0,
          rotateX: -90,
          stagger: 0.04,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.4",
      );

      tl.to(".divider", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.from(
        ".sub-char-anim",
        {
          opacity: 0,
          y: 10,
          stagger: 0.02,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6",
      );

      tl.to(".loading-fill", {
        opacity: 1,
        duration: 0.5,
      });

      tl.fromTo(
        ".loading-fill",
        { width: "0%" },
        { width: "100%", duration: 2, ease: "expo.inOut" },
      );

      tl.to(".char-anim", {
        textShadow: "0 0 15px rgba(255,255,255,0.3)",
        repeat: 1,
        yoyo: true,
        duration: 0.8,
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-9 bg-[#0a0a0a] text-white flex flex-col justify-between items-center py-16 px-10"
    >
      {/* Top Section */}
      <div className="portfolio-text flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
        Portfolio {new Date().getFullYear()}
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div
          ref={mainTextRef}
          className="Text text-5xl md:text-8xl font-black tracking-tighter uppercase overflow-hidden leading-none"
        >
          {/* GSAP injects text here */}
        </div>

        <div
          ref={dividerRef}
          className="divider w-full h-px bg-white opacity-0 shadow-[0_0_30px_rgba(255,255,255,0.8), 0_-20px_40px_rgba(255,255,255,0.4)] max-w-xs"
        ></div>

        <div
          ref={subTextRef}
          className="subText text-xs md:text-sm text-zinc-400 font-medium tracking-[0.2em] uppercase overflow-hidden text-center"
        >
          {/* GSAP injects text here */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-sm flex flex-col items-center gap-4">
        <div className="flex justify-between w-full font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
          <span>Loading Assets</span>
          <span>System Active</span>
        </div>
        <div className="w-full h-0.5 loading bg-zinc-900 overflow-hidden">
          <div className="loading-fill h-full opacity-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
        </div>
        <div className="text-[10px] text-zinc-500 font-mono mt-2 animate-bounce">
          SCROLL TO DISCOVER
        </div>
      </div>
    </div>
  );
}
