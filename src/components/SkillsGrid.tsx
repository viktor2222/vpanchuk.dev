"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"]
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "shadcn/ui", "daisyUI", "Framer Motion"]
  },
  {
    title: "Backend & Tools",
    skills: ["Node.js", "REST APIs", "Git", "CI/CD", "Vercel"]
  },
  {
    title: "Integrations",
    skills: ["Stripe", "Clerk", "OpenAI", "Cloudinary"]
  }
];

export function SkillsGrid() {
  return (
    <section id="skills" className="section-padding">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
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
              {category.skills.map((skill, i) => (
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
