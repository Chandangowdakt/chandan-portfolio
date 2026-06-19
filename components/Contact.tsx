"use client";

import { motion } from "framer-motion";
import { Phone, Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45, 212, 191, 0.06) 0%, transparent 70%)",
      }}
    >
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-[600px] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading eyebrow="06. Get In Touch" title="Contact" />
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mb-10 text-base leading-relaxed text-[#94a3b8] sm:text-lg"
        >
          I&apos;m currently open to internship opportunities, collaborations,
          and full-time roles starting 2027. Feel free to reach out.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-10 flex flex-col items-center justify-center"
        >
          <div className="relative inline-block">
            <span
              className="pulse-ring pointer-events-none absolute inset-0 rounded-lg bg-[rgba(45,212,191,0.2)]"
              aria-hidden="true"
            />
            <a
              href="mailto:chandankt.ml23@bmsce.ac.in"
              className="relative inline-block rounded-lg border-2 border-[#2dd4bf] px-10 py-4 text-lg font-medium text-[#2dd4bf] transition-colors hover:bg-[#2dd4bf] hover:text-[#0a0f1c]"
            >
              Send an Email
            </a>
          </div>
          <p className="mt-4 text-sm text-[#475569]">
            Or call:{" "}
            <a
              href="tel:+916361239446"
              className="text-[#94a3b8] transition-colors hover:text-[#2dd4bf]"
            >
              +91 6361239446
            </a>
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <div className="mt-8 flex items-center justify-center gap-8">
            <motion.a
              href="tel:+916361239446"
              whileHover={{ scale: 1.2, color: "#2dd4bf" }}
              className="group flex flex-col items-center gap-1 text-[#94a3b8] transition-colors duration-200 hover:text-[#2dd4bf]"
            >
              <Phone size={22} />
              <span className="text-xs text-[#475569] transition-colors group-hover:text-[#2dd4bf]">
                +91 6361239446
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/Chandangowdakt"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#2dd4bf" }}
              className="group flex flex-col items-center gap-1 text-[#94a3b8] transition-colors duration-200 hover:text-[#2dd4bf]"
            >
              <Github size={22} />
              <span className="text-xs text-[#475569] transition-colors group-hover:text-[#2dd4bf]">
                GitHub
              </span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/chandan-k-t-b2443a353"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#2dd4bf" }}
              className="group flex flex-col items-center gap-1 text-[#94a3b8] transition-colors duration-200 hover:text-[#2dd4bf]"
            >
              <Linkedin size={22} />
              <span className="text-xs text-[#475569] transition-colors group-hover:text-[#2dd4bf]">
                LinkedIn
              </span>
            </motion.a>

            <motion.a
              href="mailto:chandankt.ml23@bmsce.ac.in"
              whileHover={{ scale: 1.2, color: "#2dd4bf" }}
              className="group flex flex-col items-center gap-1 text-[#94a3b8] transition-colors duration-200 hover:text-[#2dd4bf]"
            >
              <Mail size={22} />
              <span className="text-xs text-[#475569] transition-colors group-hover:text-[#2dd4bf]">
                Email
              </span>
            </motion.a>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
