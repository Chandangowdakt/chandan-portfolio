"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { heroFadeUp } from "@/lib/animations";

const name = "CHANDAN K T";
const letters = name.split("");

const badges = [
  { text: "ESP32", top: "20%", left: "8%", duration: 4 },
  { text: "Next.js", top: "60%", left: "85%", duration: 6 },
  { text: "TensorFlow", top: "75%", left: "10%", duration: 5 },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText =
    "I build at the intersection of biomedical hardware and software — from real-time ECG systems to production web platforms.";

  const handleProjectsClick = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const startDelay = setTimeout(() => {
      interval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.slice(0, i + 1));
          i++;
        } else {
          if (interval) clearInterval(interval);
          setTimeout(() => setShowCursor(false), 3000);
        }
      }, 28);
    }, 1200);

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 pt-16 md:py-32">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(45,212,191,0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden="true"
      />

      {badges.map((badge) => (
        <motion.span
          key={badge.text}
          style={{ position: "absolute", top: badge.top, left: badge.left }}
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: badge.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none hidden select-none font-mono text-xs text-[#2dd4bf] opacity-[0.07] lg:block"
          aria-hidden="true"
        >
          {badge.text}
        </motion.span>
      ))}

      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-5 md:flex lg:left-10">
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

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#2dd4bf] sm:text-sm"
        >
          Medical Electronics · Embedded Systems · Full Stack
        </motion.p>

        <h1 className="mb-4 flex flex-wrap items-end justify-center gap-0 leading-none">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.2 + i * 0.05,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                char === " "
                  ? "block w-4 md:w-6 lg:w-8"
                  : "inline-block select-none bg-gradient-to-br from-white via-[#e2e8f0] to-[#2dd4bf] bg-clip-text text-6xl font-black tracking-tighter text-transparent md:text-7xl lg:text-8xl"
              }
              style={{ transformOrigin: "bottom center" }}
            >
              {char === " " ? null : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
          className="mx-auto mb-6 mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#2dd4bf] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="mx-auto min-h-[3.5rem] max-w-2xl text-lg leading-relaxed text-[#94a3b8] md:text-xl"
        >
          {displayText}
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="ml-0.5 inline-block h-5 w-0.5 align-middle bg-[#2dd4bf]"
            />
          )}
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

        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-12 text-sm text-[#94a3b8] sm:text-base"
        >
          B.E. Medical Electronics | BMSCE Bengaluru | Intern @
          Growteq Agri Tech
        </motion.div>
      </div>
    </section>
  );
}
