"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

import { experience } from "@/config/site";
import type { ExperienceItem } from "@/config/site";

export function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Journey</h2>
      
      <div className="space-y-4">
        {experience.map((exp: ExperienceItem, index: number) => (
          <div 
            key={index}
            className={cn(
              "group rounded-2xl border transition-all duration-300",
              openIndex === index ? "glass border-primary/30" : "border-white/5 hover:border-white/10"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-6 md:p-8 flex items-center justify-between"
            >
              <div className="space-y-1">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-foreground/50 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-foreground/30"
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 pt-0 space-y-4">
                    <div className="h-px bg-white/5 mb-6" />
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex gap-3 text-foreground/70 leading-relaxed">
                        <span className="text-primary">●</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
