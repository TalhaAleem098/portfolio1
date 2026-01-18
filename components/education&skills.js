"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Frontend Icons
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
// Backend Icons
import { SiNextdotjs, SiNodedotjs, SiDotnet } from "react-icons/si";
// Database Icons
import { SiPostgresql, SiMongodb } from "react-icons/si";
// General Icons
import { MdSchool } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

export default function EducationSkills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".edu-skill-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
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
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full min-h-screen bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] py-32 px-4 md:px-8"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-20 text-center px-4 md:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MdSchool className="text-emerald-400 text-4xl" />
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Education & Skills
            </h2>
          </div>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            Continuous Learning & Technical Expertise
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-8 bg-emerald-400"></div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                Education
              </h3>
            </div>

            {/* Current Study */}
            <div className="edu-skill-card bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-emerald-400 transition-colors duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-400/10 border border-emerald-400/30">
                    <MdSchool className="text-emerald-400 text-xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-white mb-1">
                    BS Computer Science
                  </h4>
                  <p className="text-emerald-400 text-sm font-semibold mb-2">
                    University of Engineering and Technology, Lahore (UET)
                  </p>
                  <p className="text-zinc-400 text-sm mb-3">
                    Currently pursuing • 5th Semester
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-medium">
                      Full-Stack Focus
                    </span>
                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-xs font-medium">
                      Active Student
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="edu-skill-card bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-emerald-400 transition-colors duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-400/10 border border-blue-400/30">
                    <MdSchool className="text-blue-400 text-xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-white mb-1">
                    Intermediate (F.Sc)
                  </h4>
                  <p className="text-blue-400 text-sm font-semibold mb-2">
                    Punjab College Hafiz Saeed, Hafiz Abad, Pakistan
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Foundation for technical studies
                  </p>
                </div>
              </div>
            </div>

            {/* Matriculation */}
            <div className="edu-skill-card bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 hover:border-emerald-400 transition-colors duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30">
                    <MdSchool className="text-cyan-400 text-xl" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-white mb-1">
                    Matriculation
                  </h4>
                  <p className="text-cyan-400 text-sm font-semibold mb-2">
                    Grammar Model School, Hafiz Abad, Pakistan
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Secondary education foundation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1 h-8 bg-emerald-400"></div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                Technical Skills
              </h3>
            </div>

            {/* Frontend Skills */}
            <div>
              <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">
                Frontend Development
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <SkillCard
                  icon={<FaJsSquare className="text-3xl" />}
                  name="JavaScript"
                  color="from-yellow-500/20 to-yellow-600/20"
                  iconColor="text-yellow-400"
                />
                <SkillCard
                  icon={<FaHtml5 className="text-3xl" />}
                  name="HTML5"
                  color="from-orange-500/20 to-orange-600/20"
                  iconColor="text-orange-400"
                />
                <SkillCard
                  icon={<FaCss3Alt className="text-3xl" />}
                  name="CSS3"
                  color="from-blue-500/20 to-blue-600/20"
                  iconColor="text-blue-400"
                />
                <SkillCard
                  icon={<FaReact className="text-3xl" />}
                  name="React.js"
                  color="from-cyan-500/20 to-cyan-600/20"
                  iconColor="text-cyan-400"
                />
                <SkillCard
                  icon={<SiNextdotjs className="text-3xl" />}
                  name="Next.js"
                  color="from-gray-500/20 to-gray-600/20"
                  iconColor="text-gray-300"
                />
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">
                Backend Development
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <SkillCard
                  icon={<SiNodedotjs className="text-3xl" />}
                  name="Node.js"
                  color="from-green-500/20 to-green-600/20"
                  iconColor="text-green-400"
                />
                <SkillCard
                  icon={<SiDotnet className="text-3xl" />}
                  name=".NET Core"
                  color="from-purple-500/20 to-purple-600/20"
                  iconColor="text-purple-400"
                />
              </div>
            </div>

            {/* Database Skills */}
            <div>
              <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">
                Databases & ORM
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <SkillCard
                  icon={<SiPostgresql className="text-3xl" />}
                  name="PostgreSQL"
                  color="from-blue-500/20 to-blue-600/20"
                  iconColor="text-blue-400"
                />
                <SkillCard
                  icon={<SiMongodb className="text-3xl" />}
                  name="MongoDB"
                  color="from-green-500/20 to-green-600/20"
                  iconColor="text-green-400"
                />
                <SkillCard
                  icon={<span className="text-sm font-bold">SQL</span>}
                  name="SQL"
                  color="from-indigo-500/20 to-indigo-600/20"
                  iconColor="text-indigo-400"
                />
                <SkillCard
                  icon={<span className="text-xs font-bold">EF Core</span>}
                  name="Entity Framework"
                  color="from-pink-500/20 to-pink-600/20"
                  iconColor="text-pink-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-16 pt-12 border-t border-zinc-800">
          <StatItem label="Languages" value="3+" />
          <StatItem label="Frameworks" value="5+" />
          <StatItem label="Databases" value="4" />
          <StatItem label="Semester" value="5/8" />
          <StatItem label="Years Learning" value="2+" />
          <StatItem label="Projects" value="8+" />
        </div>
      </div>
    </section>
  );
}

// Skill Card Component
function SkillCard({ icon, name, color, iconColor }) {
  return (
    <div
      className={`edu-skill-card bg-gradient-to-br ${color} border border-zinc-700 rounded-lg p-4 hover:border-emerald-400 transition-all duration-300 cursor-pointer group hover:scale-105 transform`}
    >
      <div className={`${iconColor} mb-3 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <p className="text-white font-semibold text-sm">{name}</p>
    </div>
  );
}

// Stats Item Component
function StatItem({ label, value }) {
  return (
    <div className="text-center p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-400 transition-colors">
      <p className="text-emerald-400 text-2xl font-black mb-1">{value}</p>
      <p className="text-zinc-500 text-xs uppercase tracking-widest">{label}</p>
    </div>
  );
}
