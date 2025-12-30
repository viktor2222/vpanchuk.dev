"use client";

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceAccordion } from "@/components/ExperienceAccordion";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ContactSection } from "@/components/ContactSection";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <HeroSection />
      <AboutSection />
      <ExperienceAccordion />
      <SkillsGrid />
      <ContactSection />
    </main>
  );
}
