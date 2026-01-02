"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Briefcase } from "lucide-react";
import { personal, socials } from "@/config/site";
import { fadeInUp } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="section-padding min-h-[85vh] flex flex-col justify-center relative overflow-hidden"> 
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-xs">
            {personal.role}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {personal.name}
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-xl leading-relaxed mb-10">
            Building production-ready web applications with <span className="text-foreground">7+ years</span> of experience. 
            Specialized in <span className="text-primary">React</span>, <span className="text-primary">Next.js</span>, and exceptional UI solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#experience"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
            >
              Review Experience
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-all duration-300 hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-all duration-300 hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href={socials.upwork} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-all duration-300 hover:-translate-y-1">
              <Briefcase size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 w-full max-w-md mx-auto [mask-image:radial-gradient(ellipse_at_top,black_50%,transparent_80%)]">
            <div className="[mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
              <img 
                src="/profile.png" 
                alt={personal.name} 
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] brightness-80"
              />
            </div>
          </div> 
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
