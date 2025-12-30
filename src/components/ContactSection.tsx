"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

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
        
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <a
            href="mailto:vpanchukdev@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-transform active:scale-95"
          >
            <Mail size={20} />
            vpanchukdev@gmail.com
          </a>
        </div>
        
        <div className="flex justify-center gap-8 pt-6">
           {/* Add social links placeholders if needed, but email is primary from resume */}
           <span className="text-foreground/40 text-sm italic">Based in Ukraine · Available Worldwide</span>
        </div>
      </motion.div>
      
      <footer className="mt-20 pt-8 border-t border-white/5 text-foreground/30 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Viktor Panchuk. All rights reserved.</p>
        <p>Built with Next.js, React & Tailwind CSS</p>
      </footer>
    </section>
  );
}
