"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText =
    "I build at the intersection of medical electronics, embedded systems, and full-stack software — from real-time biomedical systems to production web applications.";

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(fullText);
      setShowCursor(false);
      return;
    }

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
  }, [reduceMotion, fullText]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 pt-20 md:py-32">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(45,212,191,0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden="true"
      />

      {badges.map((badge) => (
        <motion.span
          key={badge.text}
          style={{ position: "absolute" as const, top: badge.top, left: badge.left }}
          animate={reduceMotion ? undefined : { y: [-8, 8, -8] }}
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
          aria-label="GitHub profile"
          className="rounded-sm text-[#94a3b8] transition-colors hover:text-[#2dd4bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/chandan-k-t-b2443a353"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="rounded-sm text-[#94a3b8] transition-colors hover:text-[#2dd4bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
        >
          <Linkedin size={22} />
        </a>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#2dd4bf] sm:mb-4 sm:text-xs md:text-sm"
        >
          Medical Electronics · Embedded Systems · Full Stack
        </motion.p>

        <h1 className="mb-3 flex max-w-full flex-wrap items-end justify-center gap-0 leading-none sm:mb-4">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={reduceMotion ? false : { opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.2 + i * 0.05,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                char === " "
                  ? "block w-2 sm:w-4 md:w-6 lg:w-8"
                  : "inline-block select-none bg-gradient-to-br from-white via-[#e2e8f0] to-[#2dd4bf] bg-clip-text text-[clamp(2.25rem,10vw,6rem)] font-black tracking-tighter text-transparent"
              }
              style={{ transformOrigin: "bottom center" }}
            >
              {char === " " ? null : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
          className="mx-auto mb-5 mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#2dd4bf] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="mx-auto min-h-[3.5rem] max-w-2xl px-1 text-base leading-relaxed text-[#94a3b8] sm:text-lg md:text-xl"
        >
          {displayText}
          {showCursor && (
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="ml-0.5 inline-block h-5 w-0.5 align-middle bg-[#2dd4bf]"
              aria-hidden="true"
            />
          )}
        </motion.p>

        <motion.div
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="mt-6 space-y-1 text-sm text-[#94a3b8]"
        >
          <p className="flex flex-wrap items-center justify-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full bg-[#2dd4bf]"
              aria-hidden="true"
            />
            <span>
              Currently Intern – Full Stack Development @ Autoyos
            </span>
          </p>
          <p className="text-[#64748b]">Bengaluru, India</p>
        </motion.div>

        <motion.div
          custom={0.7}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4"
        >
          <button
            type="button"
            onClick={() => scrollTo("#projects")}
            className="rounded-lg bg-[#2dd4bf] px-6 py-3 text-sm font-medium text-[#0a0f1c] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
          >
            View My Work
          </button>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="rounded-lg border border-[#1e293b] px-6 py-3 text-sm font-medium text-[#e2e8f0] transition-colors hover:border-[#2dd4bf] hover:text-[#2dd4bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.a
          custom={0.85}
          initial="hidden"
          animate="visible"
          variants={heroFadeUp}
          href="/resume"
          className="mt-5 text-sm text-[#64748b] underline-offset-4 transition-colors hover:text-[#2dd4bf] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
