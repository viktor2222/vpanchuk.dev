"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skills } from "@/config/site";
import type { SkillCategory } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ChevronDown, ChevronUp } from "lucide-react";

export function SkillsGrid() {
  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Expertise</h2>
        <p className="text-foreground/60 text-lg max-w-2xl">
          Technical stack and tools used to build modern digital experiences.
        </p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {skills.map((category: SkillCategory, idx: number) => (
          <SkillCard key={idx} category={category} index={idx} />
        ))}
      </motion.div>
    </section>
  );
}

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const items = category.items;
  const visibleCount = isMobile ? 10 : (index === 0 ? 5 : 6);
  const shouldShowToggle = items.length > visibleCount;
  const collapsedHeight = isMobile ? 220 : 86;

  return (
    <motion.div
      variants={fadeInUp}
      className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors h-fit flex flex-col items-start"
    >
      <div className="flex justify-between items-center mb-6 w-full">
        <h3 className="text-primary font-bold uppercase tracking-widest text-xs">
          {category.title}
        </h3>
        <span className="text-foreground/20 text-xs font-medium">0{index + 1}</span>
      </div>
      
      <motion.div 
        className="w-full overflow-hidden relative"
        initial={false}
        animate={{ 
          height: isExpanded || !shouldShowToggle ? "auto" : collapsedHeight,
          maskImage: isExpanded || !shouldShowToggle 
            ? "linear-gradient(to bottom, black 100%, black 100%)" 
            : "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: isExpanded || !shouldShowToggle 
            ? "linear-gradient(to bottom, black 100%, black 100%)" 
            : "linear-gradient(to bottom, black 50%, transparent 100%)"
        } as any}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="flex flex-wrap gap-2 pb-1">
          {items.map((skill, i) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
      
      {shouldShowToggle && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-3 py-2 mt-4 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
        >
          {isExpanded ? (
            <><ChevronUp size={14} /> Show Less</>
          ) : (
            <><ChevronDown size={14} /> Show More</>
          )}
        </button>
      )}
    </motion.div>
  );
}
