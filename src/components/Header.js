"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      gsap.to(button, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    button.addEventListener("mousemove", onMouseMove);
    button.addEventListener("mouseleave", onMouseLeave);

    return () => {
      button.removeEventListener("mousemove", onMouseMove);
      button.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="text-2xl font-black tracking-tighter text-white">ROBERT</div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-lime-400 border-b-2 border-lime-400 pb-1 font-serif tracking-tight" href="#">Work</a>
          <a className="text-zinc-400 font-medium font-serif tracking-tight hover:text-lime-400 transition-all duration-300" href="#">Services</a>
          <a className="text-zinc-400 font-medium font-serif tracking-tight hover:text-lime-400 transition-all duration-300" href="#">About</a>
          <a className="text-zinc-400 font-medium font-serif tracking-tight hover:text-lime-400 transition-all duration-300" href="#">Contact</a>
        </div>
        <button 
          ref={buttonRef}
          className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-label-caps text-label-caps active:scale-95 transition-transform duration-200 glow-primary"
        >
          Hire Me
        </button>
      </nav>
    </header>
  );
}
