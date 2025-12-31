"use client";

import { motion } from "framer-motion";
import { personal } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-foreground/70 text-lg">
            {personal.about.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="glass p-8 rounded-3xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Location</h3>
              <p className="text-xl font-medium">{personal.location}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Education</h3>
              <p className="text-xl font-medium">{personal.education}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Languages</h3>
              <p className="text-xl font-medium">{personal.languages}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
