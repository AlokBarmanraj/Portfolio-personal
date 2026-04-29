"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animation
      gsap.from(".stat-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Count Up Animation
      const counters = document.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        const suffix = counter.innerText.replace(/[0-9.]/g, "");
        const obj = { value: 0 };
        
        gsap.to(obj, {
          value: target,
          duration: 2,
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
          },
          onUpdate: () => {
            counter.innerText = Math.floor(obj.value) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "99%", target: "99", label: "HAPPY CLIENTS" },
    { value: "120+", target: "120", label: "PROJECTS DONE" },
    { value: "10+", target: "10", label: "YEARS EXP." },
    { value: "25+", target: "25", label: "DESIGN AWARDS" },
  ];

  return (
    <section ref={sectionRef} className="bg-surface-container-low py-section-padding mt-section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-white mb-stack-md uppercase">
              BEST UI/UX DESIGNER & <br /> DEVELOPER IN USA
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-stack-lg">
              With a decade of experience across fintech, luxury fashion, and tech startups, I deliver interfaces that are as functional as they are beautiful.
            </p>
            <div className="flex items-center gap-4 text-primary-container font-label-caps text-label-caps group cursor-pointer">
              <span className="w-12 h-[1px] bg-primary-container transition-all group-hover:w-20"></span>
              DISCOVER MY STORY
            </div>
          </div>
          <div className="grid grid-cols-2 gap-gutter">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-surface-container p-card-padding rounded border border-white/5 hover:border-primary-container/30 transition-all hover:glow-primary"
              >
                <div 
                  className="stat-number text-headline-md font-headline-md text-primary-container mb-2"
                  data-target={stat.target}
                >
                  {stat.value}
                </div>
                <div className="text-label-caps font-label-caps text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
