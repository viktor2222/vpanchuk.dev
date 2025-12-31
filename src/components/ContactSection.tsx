"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Briefcase, Copy, Check } from "lucide-react";
import { personal, socials } from "@/config/site";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = personal.email;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        
        <div className="flex flex-col items-center gap-10">
          <div className="space-y-4">
            <p className="text-foreground/40 text-sm uppercase tracking-widest font-bold">Email me at</p>
            <div className="flex items-center justify-center gap-4 group">
              <a
                href={`mailto:${email}`}
                className="text-2xl md:text-4xl font-medium hover:text-primary transition-colors duration-300 underline underline-offset-8 decoration-white/10 hover:decoration-primary/50"
              >
                {email}
              </a>
              <button
                onClick={copyToClipboard}
                className="p-3 glass rounded-xl hover:bg-white/10 transition-colors relative"
                title="Copy to clipboard"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Check size={20} className="text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Copy size={20} className="text-foreground/40 group-hover:text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/10 hover:-translate-y-1 hover:text-primary transition-all duration-300"
            >
              <Github size={20} />
              <span className="font-medium text-sm">GitHub</span>
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/10 hover:-translate-y-1 hover:text-primary transition-all duration-300"
            >
              <Linkedin size={20} />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
            <a
              href={socials.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass rounded-full hover:bg-white/10 hover:-translate-y-1 hover:text-primary transition-all duration-300"
            >
              <Briefcase size={20} />
              <span className="font-medium text-sm">Upwork</span>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center gap-8 pt-6">
           <span className="text-foreground/40 text-sm italic">Based in {personal.location} · Available Worldwide</span>
        </div>
      </motion.div>
      
      <footer className="mt-20 pt-8 border-t border-white/5 text-foreground/30 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p>Built with Next.js, React & Tailwind CSS</p>
      </footer>
    </section>
  );
}
