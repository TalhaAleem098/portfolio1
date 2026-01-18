"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About({ id }) {
  const containerRef = useRef();

  useGSAP(() => {
    // 1. Target all elements we want to animate independently
    const targets = gsap.utils.toArray(".animate-on-scroll");

    targets.forEach((target) => {
      gsap.fromTo(
        target,
        { 
          y: 50, 
          opacity: 0, 
          scale: 0.95,
          filter: "blur(10px)" // Added a slight blur for a premium feel
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: target,
            start: "top 70%", // Triggers when the individual element hits 85% of viewport
            end: "top 14%",   // Ends when it reaches the top
            toggleActions: "play reverse play reverse", // Full control: plays on scroll down, reverses on scroll up
        
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id={id}
      className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-transparent to-zinc-950/50"
    >
      <div className="max-w-4xl text-center">
        {/* Added 'animate-on-scroll' class to each element */}
        <h2 className="animate-on-scroll text-4xl md:text-7xl font-bold text-white mb-12 tracking-tight">
          About Me
        </h2>

        <div className="space-y-10 text-zinc-300 text-lg md:text-xl leading-relaxed">
          <p className="animate-on-scroll">
            Hi, I&apos;m{" "}
            <span className="text-emerald-400 font-semibold">Aleem Talha</span>{" "}
            (also known as Talha Aleem), a passionate full-stack developer
            with a love for creating innovative digital solutions.
          </p>

          <p className="animate-on-scroll">
            I specialize in building high-performance web applications using
            modern technologies. My journey in development has led me to master
            various front-end frameworks and tools, creating seamless user
            experiences.
          </p>

          <p className="animate-on-scroll">
            Currently, I&#39;m expanding my expertise by learning{" "}
            <span className="text-blue-400">.NET Core</span>{" "}
            for robust back-end development, while continuously exploring new
            technologies in the ever-evolving tech landscape.
          </p>

          <p className="animate-on-scroll font-medium italic text-white/80 border-t border-white/10 pt-6">
            Let&lsquo;s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}