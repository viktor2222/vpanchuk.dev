"use client";

import { motion } from "framer-motion";
import { skills } from "@/config/site";
import type { SkillCategory } from "@/config/site";

export function SkillsGrid() {
  return (
    <section id="skills" className="section-padding">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category: SkillCategory, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-primary font-bold mb-4 uppercase tracking-wider text-sm">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.items.map((skill, i) => (
                <li key={i} className="text-lg font-medium">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
