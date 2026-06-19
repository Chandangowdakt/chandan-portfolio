"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/lib/data";

const categories = [
  "Biomedical",
  "Embedded & IoT",
  "Backend & Cloud",
  "Frontend",
  "AI & Computer Vision",
  "Tools",
] as const;

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow="02. Skills" title="What I Work With" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="rounded-xl border border-[#1e293b] bg-[#111827] p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-[#e2e8f0]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#2dd4bf]/20 bg-[#0a0f1c] px-3 py-1 text-sm text-[#2dd4bf]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
