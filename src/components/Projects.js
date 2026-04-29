"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Nova Fintech App",
      category: "UI/UX Design • Mobile App",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATgXWDmKZP3uOLrSRS3B5dPvPB6YO5kJFfLQN7lHnYBOEfGay8kC74shI32Ez7yhUP2xonLKNwA1mQDN-sxKhqF5zdFombNoBswxmGBoTAhcW_IMjTvQseuU9NKc673HknWDIWxVvm--BkzFOaNteJh3JvulF1voovRqWIyD3Gjw_6-h7JikhVdxY8MNX0oOn_Wlc_W9UJceGzf220bp7ssJkMqy-rCGG550WUjMhfF0J7Hmq-IcUyW_0y9czJ_yR_66mpyoOVmAfx",
    },
    {
      title: "Vogue E-Commerce",
      category: "Web Design • Branding",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIbE5k6ZqJ_LoYkkY0LZfaPXoUjeySfMLW0oEf8YMOq2vA24giWjSopdj6e1X5qZ76DYk_laUtPXIlM0yEuxoQ1HUMhHSZukkfq9n7yHs9oYP7PHCLVS5tJTY60D-YuDshi5nBJZPPd4kw-U02VekpLFrpksGwcCD5K64a2vj6acuIfSmZDY5EKKFNi0RQN4WOz63gQWstnXKkBgmSu6lZP7wiKUcWYzALF_2BUU7IvDX-hCPJ0csOjBUUYPBNeZavg89UkzXp0dNR",
    },
  ];

  return (
    <section className="py-section-padding max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <span className="text-primary-container font-label-caps text-label-caps uppercase">
          Portfolio
        </span>
        <h2 className="font-headline-lg text-headline-lg text-white mt-4 uppercase">
          FEATURED PROJECTS
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="group cursor-pointer"
            whileHover="hover"
          >
            <div className="aspect-video bg-zinc-900 rounded overflow-hidden mb-6 relative">
              <motion.img
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-500"
                src={project.img}
                variants={{
                  hover: { scale: 1.1, filter: "grayscale(0%)" }
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                variants={{
                  hover: { opacity: 1 }
                }}
              >
                <div className="text-center p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="material-symbols-outlined text-white text-5xl">visibility</span>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md text-white">{project.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {project.category}
                </p>
              </div>
              <motion.span 
                className="material-symbols-outlined text-primary-container"
                variants={{
                  hover: { x: 10, y: -10 }
                }}
              >
                north_east
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
