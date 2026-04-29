"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Image Entry
      gsap.from(imageRef.current, {
        scale: 1.3,
        rotate: 10,
        opacity: 0,
        duration: 1.8,
        ease: "power3.out",
      });

      // Parallax on Star
      gsap.to(starRef.current, {
        y: -150,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating Animation for Star
      gsap.to(starRef.current, {
        y: "+=20",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[819px]">
      <div className="space-y-stack-lg">
        <span className="reveal-text inline-block text-primary-container font-label-caps text-label-caps uppercase tracking-widest px-3 py-1 border border-primary-container/20 rounded">
          Available for Projects
        </span>
        <h1 ref={titleRef} className="reveal-text font-headline-xl text-headline-xl text-white">
          A UI/UX DESIGNER & <br /> <span className="text-primary-container italic text-glow-primary">DEVELOPER</span>
        </h1>
        <p className="reveal-text font-body-lg text-body-lg text-on-surface-variant max-w-md">
          Crafting immersive digital experiences through technical precision and high-fashion aesthetics.
        </p>
        <div className="reveal-text flex gap-4 pt-6">
          <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded font-label-caps text-label-caps hover:shadow-[0_0_20px_rgba(140,220,0,0.5)] transition-all glow-primary">
            HIRE ME
          </button>
          <button className="border border-white/20 text-white px-8 py-4 rounded font-label-caps text-label-caps hover:bg-white/5 transition-all">
            VIEW WORK
          </button>
        </div>
      </div>
      <div className="relative">
        <div ref={imageRef} className="aspect-[4/5] bg-surface-container-high relative overflow-hidden rounded shadow-2xl">
          <img
            alt="Robert Designer"
            className="w-full h-full object-cover grayscale contrast-125 opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjL1DbZ2B4N_R0SJ7Ptfn5xTN6d4Q_gbb1ZKWs1lT-do7iEAtN20iibBnFocPRA_vbkyeCT6JGm-uZm9KsBYRlgjGGSx4L9hOWWxwfWChCr9YMtzsQ33m5ygLKeZVGQ4eKksQ0USTFwVdxaAq28tsEZmf16gTY_zh4IL-Ok8YUA5cJJqZ0w_T1aRKfYuUo3BwYXK_eaIULSzKaH9KcP5pomFLcn6IGHPzrt2ctUF7ibF9IiDHnnSR6LMhhfLl0dL0IRFdzUKXATc_o"
          />
        </div>
        <div ref={starRef} className="absolute -top-8 -right-8 text-primary-container">
          <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
        </div>
      </div>
    </section>
  );
}
