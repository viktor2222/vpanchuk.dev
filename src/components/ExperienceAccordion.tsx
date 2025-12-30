"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Osum (AI powered)",
    duration: "Jan 2023 – May 2025",
    description: [
      "Built frontend of an AI-powered business intelligence platform using Next.js, Tailwind, and shadcn/ui.",
      "Integrated Stripe, Clerk, OpenAI, and Cloudinary APIs.",
      "Improved performance and SEO by optimizing rendering, data fetching, and asset loading.",
      "Delivered responsive dashboards with PDF export functionality."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Crypto Projects (Armor, Mochi, Sentry)",
    duration: "2020 – 2023",
    description: [
      "Developed decentralized apps, dutch auctions, and token launch platforms.",
      "Connected smart contracts with frontend for reliable on-chain interaction.",
      "Integrated wallet providers and optimized performance for 5k+ concurrent users.",
      "Contributed to successful token launches."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    duration: "2017 – 2020",
    description: [
      "Delivered websites and web apps using React, Gatsby, jQuery.",
      "Focused on responsive UI, bug fixing, and cross-browser compatibility."
    ]
  }
];

export function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Journey</h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
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
