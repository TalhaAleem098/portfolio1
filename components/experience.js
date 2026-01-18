"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaLaptopCode, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiDotnet, SiPostgresql, SiMongodb } from "react-icons/si";
import { MdWorkspacePremium } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".exp-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      });

      const timeline = containerRef.current.querySelector(".timeline-line");
      if (timeline) {
        gsap.fromTo(
          timeline,
          { height: 0 },
          {
            height: "100%",
            duration: 1.5,
            scrollTrigger: {
              trigger: timeline,
              start: "top center",
              end: "bottom center",
              scrub: 0.5,
            },
          }
        );
      }
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] py-32 px-4 md:px-8"
    >
      {/* Section Header */}
      <div className="mb-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaBriefcase className="text-emerald-400 text-4xl" />
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Professional Experience
          </h2>
        </div>
        <p className="text-zinc-500 text-sm tracking-widest uppercase">
          1+ Years in Full-Stack Development & Project Management
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Experience Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-transparent"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {/* EVS Lahore */}
              <div className="exp-card relative pl-20">
                <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-emerald-400/30 to-emerald-500/30 backdrop-blur-sm border-2 border-emerald-400/60 rounded-full flex items-center justify-center z-10">
                  <FaBriefcase className="text-emerald-300 text-lg" />
                </div>

                <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-emerald-400/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        EVS Lahore
                      </h3>
                      <p className="text-emerald-300/90 text-sm font-semibold">
                        Multiple Roles • 1+ Year
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-400/40 rounded-full text-emerald-200 text-xs font-bold">
                      ACTIVE
                    </span>
                  </div>

                  {/* Roles */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaLaptopCode className="text-emerald-300 text-xs" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Junior Developer</p>
                        <p className="text-slate-400 text-sm">Developed and maintained full-stack applications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaUsers className="text-emerald-300 text-xs" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Assistant & Project Manager</p>
                        <p className="text-slate-400 text-sm">Coordinated project deliverables and team communication</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Learnings */}
                  <div className="mb-6">
                    <p className="text-emerald-300/80 text-xs font-bold uppercase tracking-widest mb-3">
                      Key Learnings
                    </p>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-400/70 rounded-full"></span>
                        Full-stack development workflow
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-400/70 rounded-full"></span>
                        Project management & team coordination
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-400/70 rounded-full"></span>
                        Real-world application development
                      </li>
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    <TechBadge icon={<SiReact />} label="React" />
                    <TechBadge icon={<SiNodedotjs />} label="Node.js" />
                    <TechBadge icon={<SiDotnet />} label=".NET" />
                    <TechBadge icon={<SiPostgresql />} label="PostgreSQL" />
                  </div>
                </div>
              </div>

              {/* JS International */}
              <div className="exp-card relative pl-20">
                <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-emerald-400/30 to-emerald-500/30 backdrop-blur-sm border-2 border-emerald-400/60 rounded-full flex items-center justify-center z-10">
                  <FaProjectDiagram className="text-emerald-300 text-lg" />
                </div>

                <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-emerald-400/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        JS International
                      </h3>
                      <p className="text-emerald-300/90 text-sm font-semibold">
                        Full-Stack Developer • 6-12 Months
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-slate-700/40 border border-slate-600/40 rounded-full text-slate-200 text-xs font-bold">
                      COMPLETED
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaLaptopCode className="text-emerald-300 text-xs" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Accounting Software Development</p>
                        <p className="text-slate-400 text-sm">Built robust accounting solutions with integrated ERP system</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaProjectDiagram className="text-emerald-300 text-xs" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">E-commerce Platform Development</p>
                        <p className="text-slate-400 text-sm">Developed and maintained e-commerce platforms with payment integration</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <p className="text-emerald-300/80 text-xs font-bold uppercase tracking-widest mb-3">
                      Key Achievements
                    </p>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-400/70 rounded-full"></span>
                        Integrated accounting systems with ERP solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-400/70 rounded-full"></span>
                        Developed multi-vendor e-commerce platforms
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-400/70 rounded-full"></span>
                        Implemented payment gateway integrations
                      </li>
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    <TechBadge icon={<SiNodedotjs />} label="Node.js" />
                    <TechBadge icon={<SiDotnet />} label=".NET Core" />
                    <TechBadge icon={<SiMongodb />} label="MongoDB" />
                    <TechBadge icon={<SiPostgresql />} label="SQL" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Stats Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Current Status */}
          <div className="bg-gradient-to-br from-emerald-500/15 to-emerald-600/15 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MdWorkspacePremium className="text-emerald-300 text-2xl" />
              <h4 className="text-lg font-bold text-white">Current Status</h4>
            </div>
            <p className="text-emerald-200/90 text-sm font-semibold mb-2">
              Actively Seeking Opportunities
            </p>
            <p className="text-slate-400 text-sm">
              Available for full-time & contract work in full-stack development
            </p>
          </div>

          {/* Experience Stats */}
          <div className="space-y-4">
            <h4 className="text-emerald-300/80 text-sm font-bold uppercase tracking-widest">
              Experience Overview
            </h4>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-lg p-4">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                Total Experience
              </p>
              <p className="text-white text-2xl font-black">1+ Years</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-lg p-4">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                Companies
              </p>
              <p className="text-white text-2xl font-black">2</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-lg p-4">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                Projects Delivered
              </p>
              <p className="text-white text-2xl font-black">5+</p>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-emerald-300/80 text-sm font-bold uppercase tracking-widest mb-4">
              Core Competencies
            </h4>
            <div className="space-y-2">
              <CompetencyTag text="Full-Stack Development" />
              <CompetencyTag text="ERP Integration" />
              <CompetencyTag text="E-commerce Solutions" />
              <CompetencyTag text="Project Coordination" />
              <CompetencyTag text="Accounting Software" />
              <CompetencyTag text="Database Design" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tech Badge Component
function TechBadge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-slate-700/30 backdrop-blur-sm border border-slate-600/40 rounded-lg text-slate-200 text-sm hover:border-emerald-400/50 transition-colors">
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}

// Competency Tag Component
function CompetencyTag({ text }) {
  return (
    <div className="px-4 py-2 bg-emerald-500/15 backdrop-blur-sm border border-emerald-400/30 rounded-lg text-emerald-200 text-sm font-medium hover:border-emerald-400/60 transition-colors">
      {text}
    </div>
  );
}
