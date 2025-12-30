"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Briefcase } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass p-12 md:p-20 rounded-[3rem] space-y-8"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Let&apos;s build something <span className="text-primary">extraordinary</span> together.</h2>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
          Currently open to new opportunities and interesting projects. 
          Feel free to reach out via email or connect on social media.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <a
            href="mailto:vpanchukdev@gmail.com"
            className="flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform active:scale-95"
          >
            <Mail size={22} />
            vpanchukdev@gmail.com
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/viktor2222"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/5 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/viktor-panchuk-43295215b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/5 transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~011a8c66e1b4df0b03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/5 transition-colors"
            >
              <Briefcase size={18} />
              Upwork
            </a>
          </div>
        </div>
        
        <div className="flex justify-center gap-8 pt-6">
           <span className="text-foreground/40 text-sm italic">Based in Rivne, Ukraine · Available Worldwide</span>
        </div>
      </motion.div>
      
      <footer className="mt-20 pt-8 border-t border-white/5 text-foreground/30 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Viktor Panchuk. All rights reserved.</p>
        <p>Built with Next.js, React & Tailwind CSS</p>
      </footer>
    </section>
  );
}
