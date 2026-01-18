"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 w-full bg-gradient-to-b from-[#0a0a15] to-[#050508] border-t border-slate-700/30">
      {/* Main Footer Content */}
      <div className="px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black text-white mb-2">Aleem Talha</h3>
            <p className="text-slate-400 text-sm mb-4">
              Full-Stack Developer • Problem Solver • Tech Enthusiast
            </p>
            <p className="text-slate-500 text-xs">
              Crafting high-performance digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-300 transition-colors text-sm">
                  Full-Stack Development
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-300 transition-colors text-sm">
                  ERP Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-300 transition-colors text-sm">
                  E-commerce Platforms
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-300 transition-colors text-sm">
                  Database Design
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
              Tech Stack
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">React & Next.js</li>
              <li className="text-slate-400 text-sm">Node.js & .NET Core</li>
              <li className="text-slate-400 text-sm">PostgreSQL & MongoDB</li>
              <li className="text-slate-400 text-sm">Cloud & DevOps</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:aleem.talha@rategmail.com"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-300 transition-colors text-sm"
                >
                  <FaEnvelope className="text-emerald-400" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-300 transition-colors text-sm"
                >
                  <FaWhatsapp className="text-emerald-400" />
                  WhatsApp
                </a>
              </li>
              <li className="text-slate-400 text-sm">
                📍 Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/30 py-8 mb-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-emerald-300 hover:border-emerald-400/50 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-emerald-300 hover:border-emerald-400/50 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-emerald-300 hover:border-emerald-400/50 transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lg" />
            </a>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} Aleem Talha. All rights reserved. | Built with React & Next.js
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition-all group"
            >
              Back to Top
              <MdArrowUpward className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
    </footer>
  );
}
