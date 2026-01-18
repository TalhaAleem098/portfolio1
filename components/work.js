"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    title: "Chad Mathew – Actor Portfolio",
    description:
      "Personal portfolio website for a Sydney-based actor featuring profile showcases, media sections, and an AI-powered chat assistant for visitor engagement.",
    tech: ["Next.js", "Tailwind", "AI Bot"],
  },
  {
    id: "02",
    title: "Numbers Calculas",
    description:
      "Accounting and calculation software built for accountants and e-commerce businesses, combining finance management and reporting in one system.",
    tech: ["React", "Node.js", "Accounting"],
  },
  {
    id: "03",
    title: "Restaurant Promo Website",
    description:
      "High-quality static restaurant website template designed for branding, online presence, and direct customer contact.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "04",
    title: "CenturyPK E-Commerce",
    description:
      "A scalable e-commerce platform with CMS, admin panel, and order management system.",
    tech: ["Next.js", "Node.js", "CMS"],
  },
  {
    id: "05",
    title: "Multi-Vendor Commerce System",
    description:
      "Advanced multi-vendor application with dynamic homepage sections and flexible content management.",
    tech: ["Next.js", "Tailwind", "Multi-Vendor"],
  },
  {
    id: "06",
    title: "Food Discovery Platform",
    description:
      "A visually rich food website showcasing dishes, categories, and brand storytelling.",
    tech: ["React", "Tailwind"],
  },
  {
    id: "07",
    title: "Real-Time Chat Application",
    description:
      "Real-time messaging app with authentication, live chat, and responsive UI.",
    tech: ["React", "Firebase", "WebSockets"],
  },
];

export default function Work() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const totalScroll =
          trackRef.current.scrollWidth - window.innerWidth;

        gsap.to(trackRef.current, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        const totalScroll =
          trackRef.current.scrollWidth - window.innerWidth + 200;

        gsap.to(trackRef.current, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
            markers: true, // Enable markers for debugging
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#080028] relative overflow-hidden min-h-screen"
    >
      <div
        ref={trackRef}
        className="
          flex gap-[6vw] px-[8vw] py-[15vh]
          md:h-screen md:items-center
          will-change-transform
        "
      >
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="
              w-[75vw] md:w-[42vw] h-auto md:h-[70vh]
              flex-shrink-0
              rounded-3xl
              bg-zinc-900/40 backdrop-blur-md
              border border-white/10
              p-8 md:p-10
              flex flex-col justify-between
              hover:border-emerald-400/40
              transition-colors duration-500
            "
          >
            {/* ID */}
            <span className="text-sm tracking-[0.4em] text-white/40 font-bold">
              {project.id}
            </span>

            {/* Title & Description */}
            <div className="mt-8 space-y-5">
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                {project.title}
              </h3>

              <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-xs uppercase tracking-widest
                      bg-white/5 text-white/70
                      rounded-full
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <button
                className="
                  px-6 py-2 text-xs font-bold uppercase tracking-widest
                  bg-white text-black rounded-full
                  hover:bg-emerald-400
                  transition-colors
                "
              >
                View Case
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
