"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";

const actions = [
  {
    href: "mailto:chandankt.ml23@bmsce.ac.in",
    label: "Email",
    detail: "chandankt.ml23@bmsce.ac.in",
    icon: Mail,
    external: false,
  },
  {
    href: "https://linkedin.com/in/chandan-k-t-b2443a353",
    label: "LinkedIn",
    detail: "Connect on LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://github.com/Chandangowdakt",
    label: "GitHub",
    detail: "View repositories",
    icon: Github,
    external: true,
  },
];

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
        <div className="mx-auto max-w-[640px] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="07. Get In Touch"
              title="Let's build something useful."
            />
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mb-10 text-base leading-relaxed text-[#94a3b8] sm:text-lg"
          >
            Open to collaborations, internships, and full-time roles starting
            2027. Reach out if you&apos;re building at the intersection of
            hardware and software.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="mb-10 flex justify-center"
          >
            <div className="relative inline-block">
              <span
                className="pulse-ring pointer-events-none absolute inset-0 rounded-lg bg-[rgba(45,212,191,0.2)] motion-reduce:hidden"
                aria-hidden="true"
              />
              <a
                href="mailto:chandankt.ml23@bmsce.ac.in"
                className="relative inline-block rounded-lg border-2 border-[#2dd4bf] px-8 py-3.5 text-base font-medium text-[#2dd4bf] transition-colors hover:bg-[#2dd4bf] hover:text-[#0a0f1c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] sm:px-10 sm:py-4 sm:text-lg"
              >
                Send an Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {actions.map(({ href, label, detail, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="group flex flex-col items-center gap-2 rounded-xl border border-[#1e293b] bg-[#111827] px-4 py-5 text-[#94a3b8] transition-colors hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
              >
                <Icon size={22} />
                <span className="text-sm font-medium text-[#e2e8f0] group-hover:text-[#2dd4bf]">
                  {label}
                </span>
                <span className="break-all text-xs text-[#64748b] group-hover:text-[#94a3b8]">
                  {detail}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
