"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { heroFadeUp } from "@/lib/animations";

export default function Hero() {
  const handleProjectsClick = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 pt-16 md:py-32"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(45, 212, 191, 0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-5 md:flex lg:left-10">
        <a
          href="https://github.com/Chandangowdakt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-[#94a3b8] transition-colors hover:text-[#2dd4bf]"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/chandan-k-t-b2443a353"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#94a3b8] transition-colors hover:text-[#2dd4bf]"
        >
          <Linkedin size={22} />
        </a>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#2dd4bf] sm:text-sm"
        >
          Medical Electronics · Embedded Systems · Full Stack
        </motion.p>

        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="text-4xl font-bold text-[#e2e8f0] sm:text-5xl lg:text-6xl"
        >
          Chandan K T
        </motion.h1>

        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="mt-6 max-w-[600px] text-lg text-[#94a3b8] sm:text-xl"
        >
          I build at the intersection of biomedical hardware and software —
          from real-time ECG systems to production web platforms.
        </motion.p>

        <motion.div
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={handleProjectsClick}
            className="rounded-lg bg-[#2dd4bf] px-6 py-3 text-sm font-medium text-[#0a0f1c] transition-opacity hover:opacity-90"
          >
            View Projects
          </button>
          <a
            href="https://github.com/Chandangowdakt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1e293b] px-6 py-3 text-sm font-medium text-[#e2e8f0] transition-colors hover:border-[#2dd4bf] hover:text-[#2dd4bf]"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>

        <motion.p
          custom={0.9}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="mt-12 text-sm text-[#94a3b8] sm:text-base"
        >
          B.E. Medical Electronics | BMSCE Bengaluru | CGPA 8.5 | Intern @
          Growteq Agri Tech
        </motion.p>
      </div>
    </section>
  );
}
