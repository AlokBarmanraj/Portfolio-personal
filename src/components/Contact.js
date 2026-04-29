"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-section-padding max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-stack-lg">
          <span className="text-primary-container font-label-caps text-label-caps uppercase">
            Contact
          </span>
          <h2 className="font-headline-xl text-headline-xl text-white uppercase">
            GET IN TOUCH TODAY
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Have a project in mind? Let's build something extraordinary together. Reach out via form
            or direct channels.
          </p>
          <div className="space-y-6 pt-8">
            {["mail", "call"].map((icon, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center rounded border border-zinc-800 text-primary-container group-hover:border-primary-container transition-colors">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div>
                  <div className="text-on-surface-variant font-label-caps text-[10px] uppercase">{icon === 'mail' ? 'Email Me' : 'Call Me'}</div>
                  <div className="text-white font-body-lg">{icon === 'mail' ? 'hello@robertdesign.com' : '+1 (555) 123-4567'}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-surface-container p-10 border border-white/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", type: "text" },
                { label: "Email Address", type: "email" }
              ].map((field, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="font-label-caps text-[10px] text-on-surface-variant uppercase">
                    {field.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white focus:border-primary-container outline-none transition-all"
                    type={field.type}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-[10px] text-on-surface-variant uppercase">Subject</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white focus:border-primary-container outline-none transition-all"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-[10px] text-on-surface-variant uppercase">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                className="w-full bg-zinc-950 border border-zinc-800 p-4 text-white focus:border-primary-container outline-none transition-all"
                rows="5"
              ></motion.textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-container text-on-primary-container py-5 font-label-caps text-label-caps hover:bg-white hover:text-black transition-all glow-primary"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
