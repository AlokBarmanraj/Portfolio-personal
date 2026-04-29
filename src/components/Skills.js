"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Skills() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress bars animation
      gsap.from(".skill-progress", {
        width: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // Image Parallax
      gsap.to(imageRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "FIGMA", level: "95%" },
    { name: "SKETCH", level: "80%" },
    { name: "PHOTOSHOP", level: "90%" },
    { name: "WEBFLOW", level: "85%" },
  ];

  return (
    <section ref={containerRef} className="bg-surface-container-low py-section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center overflow-hidden">
            <img
              ref={imageRef}
              alt="Skill Visual"
              className="w-4/5 h-4/5 object-cover rounded grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2sferh51Fr7XL6NSoWWCSXBGoWDCQ_BKQk2KSo5x-3t-tdURvsa47ZQIwrPxnm0_WoHBDSN89AzCuFAspKZ7Hjndaad0-bqRK1L4GuJxp_8yJS71gCQw2sF2mF0rTkPXrKd6nwOsnOKlunD7SMKCyyvuy6nwJ42EcQu2Ers65OZunpyXR63Hen-8ew4JOjSyahFPni0ERxKAg6el-bcI7jd2m378DGJZ_e8vr8YGTTVXRVrAAUnjGu7Kiy8GFrj5WX7zFe8oTqnOP"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
          </div>
          <div className="absolute top-10 right-10 p-6 bg-primary-container text-on-primary-container rounded-xl shadow-2xl">
            <div className="text-4xl font-black">10+</div>
            <div className="font-label-caps text-label-caps">YEARS EXP</div>
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <span className="text-primary-container font-label-caps text-label-caps uppercase">
              Toolbox
            </span>
            <h2 className="font-headline-lg text-headline-lg text-white mt-4 uppercase">
              LET'S EXPLORE POPULAR SKILLS
            </h2>
          </div>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between font-label-caps text-label-caps text-white">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full">
                  <div
                    className="skill-progress h-full bg-primary-container rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
