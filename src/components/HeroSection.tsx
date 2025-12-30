"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Briefcase } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-padding min-h-[80vh] flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full max-w-md mx-auto [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
            <img 
              src="/profile.png" 
              alt="Viktor Panchuk" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
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

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 mt-12"
          >
            <a href="https://github.com/viktor2222" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/viktor-panchuk-43295215b/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.upwork.com/freelancers/~011a8c66e1b4df0b03" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors">
              <Briefcase size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
