"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Services() {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".service-card", {
  //       y: 80,
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 0.1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "top 80%",
  //       },
  //     });
  //   }, containerRef);
  //   return () => ctx.revert();
  // }, []);



useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".service-card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
            // markers: true, // debug করলে দেখবে trigger হচ্ছে কিনা
          },
        }
      );
    });
  }, containerRef);

  // 🔥 VERY IMPORTANT (Next.js fix)
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);

  return () => ctx.revert();
}, []);



  const services = [
    { icon: "web", title: "App Design", desc: "High-performance mobile application interfaces designed for user engagement." },
    { icon: "code", title: "Front-end", desc: "Semantic, high-speed front-end development with React and Tailwind CSS." },
    { icon: "database", title: "CMS Solutions", desc: "Scalable content management systems built for flexible publishing workflows." },
    { icon: "palette", title: "Branding", desc: "Visual identities that command attention in crowded digital marketplaces." },
    { icon: "analytics", title: "SEO Strategy", desc: "Data-driven optimization to ensure your digital product reaches its audience." },
    { icon: "rocket_launch", title: "Product Strategy", desc: "From concept to launch, guiding your product roadmap to market success." },
  ];

  return (
    <section ref={containerRef} className="py-section-padding max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-20">
        <div>
          <span className="text-primary-container font-label-caps text-label-caps uppercase tracking-widest">
            My Expertise
          </span>
          <h2 className="font-headline-lg text-headline-lg text-white mt-4 uppercase">
            SERVICES I OFFER
          </h2>
        </div>
        <div className="hidden md:block max-w-sm text-on-surface-variant font-body-md text-right">
          Comprehensive digital solutions tailored to elevate your brand presence.
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, y: -5 }}
            className="service-card group bg-surface p-10 border border-white/5 hover:border-primary-container transition-all hover:glow-primary cursor-pointer"
          >
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">
              {service.icon}
            </span>
            <h3 className="font-headline-md text-headline-md text-white mb-4">
              {service.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              {service.desc}
            </p>
            <div className="inline-flex items-center gap-2 text-primary-container font-label-caps text-label-caps group-hover:underline">
              READ MORE <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

