"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="section-padding min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-medium tracking-wider uppercase mb-4 block">
          Frontend Developer
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Viktor Panchuk
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed mb-10">
          Building production-ready web applications with 7+ years of experience. 
          Specialized in <span className="text-foreground">React</span>, <span className="text-foreground">Next.js</span>, and <span className="text-foreground">TypeScript</span>.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="#experience"
            className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Review Experience
          </a>
          <a
            href="mailto:vpanchukdev@gmail.com"
            className="px-8 py-4 glass rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
