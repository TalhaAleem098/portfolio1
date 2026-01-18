"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const Navbar = () => {
  const navRef = useRef();
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        navRef.current,
        { y: -100 },
        { y: 0, duration: 1, ease: "expo.out" },
      );
      tl.fromTo(
        ".nav-link",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        "-=0.5",
      );
      tl.fromTo(
        ".burger-btn",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1 },
        "-=0.5",
      );
    },
    { scope: navRef },
  );

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.8, ease: "expo.out" });
      gsap.fromTo(
        ".mobile-link",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.6, ease: "expo.in" });
    }
  }, [isOpen]);

  const navItems = ["Home", "About", "Work", "Contact"];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/10"
    >
      <div className="w-full px-6 md:px-12 py-5 flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-100 hover:text-emerald-400 transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-emerald-400 shadow-[0_0_12px_#34d399] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-end justify-between sm:justify-end w-full gap-6">
          <button className="nav-button block relative px-7 py-2.5 rounded-full border border-zinc-700 text-white text-[10px] font-bold uppercase tracking-widest hover:border-emerald-500 transition-all">
            Let&rsquo;s Talk
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="burger-btn group flex flex-col items-end gap-1.5 p-2 md:hidden"
          >
            <div className="w-8 h-0.5 bg-white group-hover:bg-emerald-400 transition-all"></div>
            <div className="w-5 h-0.5 bg-white group-hover:bg-emerald-400 transition-all"></div>
            <div className="w-8 h-0.5 bg-white group-hover:bg-emerald-400 transition-all"></div>
          </button>

          {/* CUSTOM BURGER MENU (3 Lines, Middle Short) */}
        </div>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-[80%] h-screen bg-[#0a0a0a] border-l border-white/10 z-[110] translate-x-full shadow-2xl flex flex-col p-10"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end p-2 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        <div className="mt-20 flex flex-col gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="mobile-link text-4xl font-black uppercase tracking-tighter text-zinc-100 hover:text-emerald-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="mt-auto pb-10">
          <p className="text-zinc-600 font-mono text-xs tracking-widest">
            ALEEM TALHA — 2026
          </p>
        </div>
      </div>

      {/* BACKDROP BLUR WHEN MENU OPEN */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105]"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
