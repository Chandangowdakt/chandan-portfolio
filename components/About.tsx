"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";

const paragraphs = [
  "I'm a Medical Electronics Engineering student and Full Stack Development Intern at Autoyos, with hands-on experience building production web platforms and biomedical systems.",
  "I build real-time patient monitoring systems using ESP32 and ECG/PPG sensors, design signal processing pipelines in MATLAB, and develop production-grade web platforms using Node.js and MongoDB. Previously completed a Full Stack Web Developer internship at Growteq Agri Tech Pvt Ltd, Bengaluru.",
  "I'm driven by problems that sit at the crossroads of hardware and software — where clinical precision meets scalable engineering.",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

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
            className="relative overflow-hidden rounded-xl border border-[#1e293b] bg-[#111827] p-6 sm:p-8"
          >
            <pre
              className="pointer-events-none absolute bottom-4 right-4 select-none font-mono text-[10px] leading-relaxed text-[#e2e8f0] opacity-[0.04] sm:text-xs"
              aria-hidden="true"
            >
{`const chandan = {
  role: "Engineer",
  domain: "Biomedical + Software",
}`}
            </pre>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="relative z-10 space-y-6"
            >
              <motion.div variants={item}>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2dd4bf]">
                  Education
                </h3>
                <p className="font-medium text-[#e2e8f0]">
                  B.E. Medical Electronics Engineering
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]">
                  BMSCE Bengaluru | 2023–2027
                </p>
              </motion.div>

              <motion.div variants={item} className="border-t border-[#1e293b] pt-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2dd4bf]">
                  Academic
                </h3>
                <p className="text-sm text-[#94a3b8]">
                  PUC: 88.5% | SSLC: 97.44%
                </p>
              </motion.div>

              <motion.div variants={item} className="border-t border-[#1e293b] pt-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2dd4bf]">
                  Certification
                </h3>
                <p className="font-medium text-[#e2e8f0]">
                  MATLAB & Simulink for Computational Engineering
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]">
                  MathWorks | 2024
                </p>
              </motion.div>

              <motion.div variants={item} className="border-t border-[#1e293b] pt-6">
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#2dd4bf]">
                  Current Role
                </h3>
                <p className="font-medium text-[#e2e8f0]">
                  Intern – Full Stack Development
                </p>
                <p className="mt-1 text-sm text-[#94a3b8]">
                  Autoyos Private Limited · Aug 2026–Present
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
