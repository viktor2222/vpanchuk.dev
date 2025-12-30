"use client";

import { motion } from "framer-motion";

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
            <p>
              I’m a Frontend Developer with over 7 years of experience building
              modern web applications.
            </p>
            <p>
              For the last 5+ years, I’ve been working primarily with React and
              Next.js, developing high-performance, SEO-optimized, and scalable
              interfaces.
            </p>
            <p>
              I have strong experience collaborating with backend teams, integrating
              third-party services (Stripe, Clerk, OpenAI), and turning complex
              requirements into clean, maintainable UI solutions.
            </p>
          </div>
        </div>
        <div className="glass p-8 rounded-3xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Location</h3>
              <p className="text-xl font-medium">Rivne, Ukraine</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Education</h3>
              <p className="text-xl font-medium">Master&apos;s in Computer Science</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Languages</h3>
              <p className="text-xl font-medium">Ukrainian (Native), English (Intermediate)</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
