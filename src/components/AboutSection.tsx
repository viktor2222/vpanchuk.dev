"use client";

import { motion } from "framer-motion";
import { personal } from "@/config/site";
import { fadeInUp } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            {personal.about.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="space-y-6 md:space-y-8 relative z-10">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">Location</h3>
              <p className="text-xl font-semibold">{personal.location}</p>
            </div>
            <div className="w-full h-px bg-white/5" />
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">Education</h3>
              <p className="text-xl font-semibold">{personal.education}</p>
            </div>
            <div className="w-full h-px bg-white/5" />
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">Languages</h3>
              <p className="text-xl font-semibold">{personal.languages}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
