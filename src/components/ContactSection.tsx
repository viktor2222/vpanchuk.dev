"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Briefcase, Copy, Check } from "lucide-react";
import { personal, socials } from "@/config/site";
import { fadeInUp } from "@/lib/animations";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = personal.email;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-20" />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass p-8 sm:p-10 md:p-16 rounded-[2.5rem] border border-white/5 space-y-10"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let&apos;s build something <span className="text-primary">extraordinary</span> together.
          </h2>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
            Ready to bring your next big idea to life with cutting-edge frontend technologies.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-10">
          <div className="space-y-4">
            <p className="text-foreground/30 text-[10px] uppercase tracking-[0.3em] font-bold">Direct Communication</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href={`mailto:${email}`}
                className="text-xl md:text-3xl font-bold hover:text-primary transition-all duration-500 underline underline-offset-[8px] decoration-white/10 hover:decoration-primary/50"
              >
                {email}
              </a>
              <button
                onClick={copyToClipboard}
                className="p-3 glass rounded-xl group hover:bg-white/10 transition-all relative border border-white/5 active:scale-95"
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
                      <Check size={18} className="text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Copy size={18} className="text-foreground/30 group-hover:text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <SocialLink href={socials.github} icon={<Github size={20} />} label="GitHub" />
            <SocialLink href={socials.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href={socials.upwork} icon={<Briefcase size={20} />} label="Upwork" />
          </div>
        </div>
        
        <div className="pt-6 opacity-40">
           <span className="text-xs uppercase tracking-widest font-medium">Based in {personal.location}</span>
        </div>
      </motion.div>
      
      <footer className="mt-24 pb-12 text-foreground/20 text-[10px] uppercase tracking-[0.2em] font-bold flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        <p>© {new Date().getFullYear()} {personal.name}</p>
        <p>Built with Next.js & Tailwind</p>
      </footer>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 glass rounded-full border border-white/5 hover:bg-white/10 hover:-translate-y-1 hover:text-primary transition-all duration-300 group"
    >
      <div className="text-foreground/40 group-hover:text-primary transition-colors">
        {icon}
      </div>
      <span className="font-bold text-xs uppercase tracking-widest">{label}</span>
    </a>
  );
}
