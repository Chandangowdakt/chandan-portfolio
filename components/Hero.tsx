"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { heroFadeUp } from "@/lib/animations";

const nameLetters = "CHANDAN K T".split("");
const TAGLINE =
  "I build at the intersection of biomedical hardware and software — from real-time ECG systems to production web platforms.";

const floatingBadges = [
  { label: "ESP32", className: "right-[8%] top-[18%]", duration: 4 },
  { label: "Next.js", className: "left-[6%] top-[45%]", duration: 6 },
  { label: "TensorFlow", className: "right-[12%] bottom-[22%]", duration: 5 },
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [blinkCursor, setBlinkCursor] = useState(true);

  const handleProjectsClick = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    const startDelay = setTimeout(() => {
      let index = 0;
      interval = setInterval(() => {
        index += 1;
        setDisplayed(TAGLINE.slice(0, index));
        if (index >= TAGLINE.length) {
          if (interval) clearInterval(interval);
          setTypingDone(true);
        }
      }, 30);
    }, 1000);

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!typingDone) return;

    const blink = setInterval(() => {
      setBlinkCursor((prev) => !prev);
    }, 500);

    const stop = setTimeout(() => {
      clearInterval(blink);
      setShowCursor(false);
    }, 3000);

    return () => {
      clearInterval(blink);
      clearTimeout(stop);
    };
  }, [typingDone]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 pt-16 md:py-32">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(45,212,191,0.12) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden="true"
      />

      {floatingBadges.map((badge) => (
        <motion.span
          key={badge.label}
          className={`pointer-events-none absolute z-0 font-mono text-xs text-[#2dd4bf] opacity-[0.08] will-change-transform ${badge.className}`}
          animate={{ y: [-8, 8] }}
          transition={{
            duration: badge.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          {badge.label}
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

        <div className="flex flex-col items-center">
          <h1 className="font-black text-6xl tracking-tight md:text-7xl lg:text-8xl">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + i * 0.04,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={
                  letter === " "
                    ? "mr-4"
                    : "inline-block will-change-transform bg-gradient-to-r from-white via-[#e2e8f0] to-[#2dd4bf] bg-clip-text text-transparent"
                }
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="mt-4 h-[3px] w-[120px] will-change-transform rounded-full bg-[#2dd4bf]"
          />
        </div>

        <p className="mt-6 min-h-[4.5rem] max-w-[600px] text-left text-lg text-[#94a3b8] sm:min-h-[3.5rem] sm:text-center sm:text-xl">
          {displayed}
          {showCursor && (
            <span
              className={`ml-0.5 inline-block text-[#2dd4bf] ${
                typingDone && !blinkCursor ? "opacity-0" : "opacity-100"
              }`}
            >
              |
            </span>
          )}
        </p>

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
          B.E. Medical Electronics | BMSCE Bengaluru | Intern @
          Growteq Agri Tech
        </motion.p>
      </div>
    </section>
  );
}
