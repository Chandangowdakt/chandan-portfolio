"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";

const paragraphs = [
  "I'm a 4th-year Medical Electronics Engineering student at BMSCE Bengaluru, working at the intersection of biomedical instrumentation, embedded systems, and full-stack software development.",
  "I build real-time patient monitoring systems using ESP32 and ECG/PPG sensors, design signal processing pipelines in MATLAB, and develop production-grade web platforms using Node.js and MongoDB. Currently interning as a Full Stack Web Developer at Growteq Agri Tech Pvt Ltd, Bengaluru.",
  "I'm driven by problems that sit at the crossroads of hardware and software — where clinical precision meets scalable engineering.",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading eyebrow="01. About" title="Who I Am" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-[#94a3b8] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="rounded-xl border border-[#1e293b] bg-[#111827] p-6 sm:p-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2dd4bf]">
                  Education
                </h3>
                <p className="font-medium text-[#e2e8f0]">
                  B.E. Medical Electronics Engineering
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]">
                  BMSCE Bengaluru | 2023–2027
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]">CGPA: 8.5</p>
              </div>

              <div className="border-t border-[#1e293b] pt-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2dd4bf]">
                  Academic
                </h3>
                <p className="text-sm text-[#94a3b8]">
                  PUC: 88.5% | SSLC: 97.44%
                </p>
              </div>

              <div className="border-t border-[#1e293b] pt-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2dd4bf]">
                  Certification
                </h3>
                <p className="font-medium text-[#e2e8f0]">
                  MATLAB & Simulink for Computational Engineering
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]">
                  MathWorks | 2024
                </p>
              </div>

              <div className="border-t border-[#1e293b] pt-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2dd4bf]">
                  Current Role
                </h3>
                <p className="font-medium text-[#e2e8f0]">
                  Full Stack Web Developer Intern
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]">
                  Growteq Agri Tech Pvt Ltd · Jan 2026–Present
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
