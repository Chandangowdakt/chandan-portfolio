"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading eyebrow="03. Experience" title="Where I've Worked" />
        </motion.div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-r-xl border border-[#1e293b] border-l-2 border-l-[#2dd4bf] bg-[#111827] p-6"
            >
              <span className="absolute -left-[7px] top-6 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2dd4bf] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#2dd4bf]" />
              </span>
              <h3 className="text-lg font-semibold text-[#e2e8f0]">
                {item.company}
              </h3>
              <p className="mt-1 text-[#2dd4bf]">{item.role}</p>
              <span className="mt-2 flex items-center gap-2 text-sm text-[#94a3b8]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2dd4bf] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2dd4bf]" />
                </span>
                {item.period} · {item.location}
              </span>
              <ul className="mt-5 space-y-3">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 48)}
                    className="flex gap-3 text-sm leading-relaxed text-[#94a3b8] sm:text-base"
                  >
                    <span className="mt-2 h-px w-3 shrink-0 bg-[#2dd4bf]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="flex gap-4 rounded-r-xl border border-[#1e293b] border-l-2 border-l-[#2dd4bf] bg-[#111827] p-5"
          >
            <BookOpen
              size={20}
              className="mt-0.5 shrink-0 text-[#2dd4bf]"
            />
            <div>
              <p className="font-medium text-[#e2e8f0]">
                B.E. Medical Electronics Engineering — BMSCE Bengaluru,
                2023–2027
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
