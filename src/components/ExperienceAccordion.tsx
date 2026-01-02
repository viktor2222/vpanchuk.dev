"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { experience } from "@/config/site";
import type { ExperienceItem } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Experience</h2>
        <p className="text-foreground/60 text-lg max-w-2xl">
          Detailed history of my professional work and technical contributions.
        </p>
      </motion.div>
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {experience.map((exp: ExperienceItem, index: number) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className={cn(
              "glass rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border transition-all duration-300",
              openIndex === index ? "border-white/10 bg-white/[0.02]" : "border-white/5 hover:border-white/10"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-2 text-left group"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className={cn(
                  "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex flex-shrink-0 items-center justify-center transition-colors duration-300",
                  openIndex === index ? "bg-primary text-white" : "bg-white/5 text-foreground/40 group-hover:bg-white/10"
                )}>
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold leading-tight">{exp.title}</h3>
                  <p className="text-foreground/40 text-sm md:text-base font-medium transition-colors group-hover:text-primary">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-end mr-2">
                   <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-foreground/20 uppercase tracking-widest">
                     <Calendar size={12} />
                     {exp.duration}
                   </div>
                </div>
                <div className={cn(
                  "p-2 rounded-full border border-white/5 transition-transform duration-300",
                  openIndex === index ? "rotate-180 bg-white/10" : "group-hover:bg-white/5"
                )}>
                  <ChevronDown size={18} className="text-foreground/40" />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-8 pt-2 ml-14 md:ml-18 lg:ml-20">
                    <div className="flex flex-wrap gap-2 mb-6">
                       {exp.technologies.map(tech => (
                         <span key={tech} className="px-3 py-1 bg-primary/5 border border-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest rounded-full">
                           {tech}
                         </span>
                       ))}
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-foreground/70 text-sm md:text-base leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
