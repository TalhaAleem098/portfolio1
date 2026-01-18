"use client";
import Loading from "@/components/preloading";
import Navbar from "@/components/navbar";
import Cursor from "@/components/cursor";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import String from "@/components/string";
import Work from "@/components/work";
import About from "@/components/about";
import EducationSkills from "@/components/education&skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef();

  useGSAP(() => {
    if (loaded) {
      const tl = gsap.timeline({ markers: true }); // Enable markers for debugging

      tl.addLabel("hero-start");

      // 1. Reveal Name with a "rise and shine" effect
      tl.fromTo(
        ".hero-name",
        { y: 150, skewY: 10, opacity: 0 },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          duration: 1.5,
          ease: "expo.out",
          delay: 0.2,
        },
      );

      tl.addLabel("hero-end");

      // 2. Floating animation for background SVGs
      gsap.to(".bg-shape", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // About section animations
    }
  }, [loaded]);

  return (
    <main className="bg-[#050505] min-h-screen w-full relative overflow-hidden">
      <Cursor />

      1. Preloader
      {!loaded && <Loading onComplete={() => setLoaded(true)} />}

      {loaded && (
        <div ref={heroRef} className="relative w-full">
          <Navbar />

          <div className="absolute inset-0 z-0 flex justify-center pointer-events-none ">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-shape w-[120%] h-[120%] opacity-50"
            >
              <defs>
                <radialGradient id="whiteGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                  <stop offset="40%" stopColor="white" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="500" cy="500" r="500" fill="url(#whiteGlow)" />
            </svg>
          </div>

          <section className="relative z-10 w-full flex flex-col items-center justify-center h-[90vh]">
            <div className="overflow-hidden mb-4">
              <span className="block text-emerald-400 text-xs tracking-[0.5em] uppercase opacity-80">
                Full-Stack Architect
              </span>
            </div>

            <div className="overflow-hidden py-2 w-full mx-auto">
              <h1 className="hero-name text-[14vw] w-full text-center mx-auto font-black leading-none text-white tracking-tighter uppercase select-none">
                Aleem Talha
              </h1>
            </div>

            <div className="max-w-2xl text-center mt-8">
              <p className="text-zinc-500 text-sm md:text-base tracking-widest leading-relaxed uppercase">
                Crafting high-performance digital experiences <br />
                with <span className="text-white">Node.js</span>,{" "}
                <span className="text-white">Next.js</span> &{" "}
                <span className="text-white">.NET Core</span>
              </p>
            </div>
          </section>

          <String />
          <About />
          <Work />
          <EducationSkills />
          <Experience />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}
