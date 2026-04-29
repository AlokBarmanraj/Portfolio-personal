"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      text: "Robert's eye for detail and technical execution transformed our brand from a startup to a market leader. His work is simply unparalleled in the industry.",
      author: "Alex Thompson",
      role: "CEO, TechFlow Systems",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAswb1DmQhG6PDGL9ab_u_gtwmHHHA5d516OicFu96AnqThtbpExcOtFVNCdFQNyAWofQsDn2Lj-sm1S2yfEhVHoDXp2fJX1Bz90eixdAwCXixcI7rXOoSm1Xhp910Y11vStBUabRsBqfvw2pHgtqWEwB0Rd_1Vm3Pe4Fwf2ZXkss_yGG8bW_5aOJmwpsbtERePavYXf39yjY2bARVcQIdzzcI8ExF7wfDVoFRFRTCM7s53BzayEXhfNmK2QGdRroACtx55mhyNeqp"
    },
    {
      text: "Exceptional design sense and professional communication. He delivered a high-performance app that exceeded our expectations in every way.",
      author: "Sarah Jenkins",
      role: "Founder, Luxe Fashion",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAswb1DmQhG6PDGL9ab_u_gtwmHHHA5d516OicFu96AnqThtbpExcOtFVNCdFQNyAWofQsDn2Lj-sm1S2yfEhVHoDXp2fJX1Bz90eixdAwCXixcI7rXOoSm1Xhp910Y11vStBUabRsBqfvw2pHgtqWEwB0Rd_1Vm3Pe4Fwf2ZXkss_yGG8bW_5aOJmwpsbtERePavYXf39yjY2bARVcQIdzzcI8ExF7wfDVoFRFRTCM7s53BzayEXhfNmK2QGdRroACtx55mhyNeqp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const logos = ["APPLE", "GOOGLE", "ADOBE", "SPOTIFY"];

  return (
    <section className="py-section-padding bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary-container font-label-caps text-label-caps">Kind Words</span>
          <h2 className="font-headline-lg text-headline-lg text-white mt-4 uppercase">
            CLIENT FEEDBACK
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-surface-container-high p-16 rounded relative border border-white/5"
            >
              <span className="material-symbols-outlined text-primary-container text-6xl absolute top-10 left-10 opacity-20">
                format_quote
              </span>
              <p className="font-headline-md text-headline-md text-white italic relative z-10 text-center mb-10">
                "{testimonials[index].text}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  alt="Client"
                  className="w-20 h-20 rounded-full object-cover grayscale mb-4 border-2 border-primary-container"
                  src={testimonials[index].img}
                />
                <h4 className="font-label-caps text-label-caps text-white">{testimonials[index].author}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap justify-center gap-16 mt-20 opacity-40 grayscale">
          {logos.map((logo) => (
            <div key={logo} className="font-black text-2xl tracking-tighter text-white">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
