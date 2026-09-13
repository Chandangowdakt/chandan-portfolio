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
          <SectionHeading eyebrow="04. Experience" title="Where I've Worked" />
        </motion.div>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-r-xl border border-[#1e293b] border-l-2 bg-[#111827] p-5 sm:p-6 md:p-7 ${
                item.current ? "border-l-[#2dd4bf]" : "border-l-[#334155]"
              }`}
            >
              <span className="absolute -left-[7px] top-7 flex h-3 w-3">
                {item.current ? (
                  <>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2dd4bf] opacity-75 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#2dd4bf]" />
                  </>
                ) : (
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#64748b]" />
                )}
              </span>

              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg font-semibold text-[#e2e8f0] sm:text-xl">
                  {item.company}
                </h3>
                {item.current ? (
                  <span className="rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#2dd4bf]">
                    Current
                  </span>
                ) : (
                  <span className="rounded-full border border-[#334155] bg-[#0a0f1c] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#94a3b8]">
                    Completed
                  </span>
                )}
              </div>

              <p className="mt-1.5 text-[#2dd4bf]">{item.role}</p>

              <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-[#94a3b8]">
                {item.current ? (
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2dd4bf] opacity-75 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2dd4bf]" />
                  </span>
                ) : (
                  <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-[#64748b]" />
                )}
                <span>
                  {item.period} · {item.location}
                </span>
              </p>

              {item.highlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-md border border-[#2dd4bf]/20 bg-[#0a0f1c] px-2.5 py-1 font-mono text-xs text-[#2dd4bf]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-5 space-y-2.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 48)}
                    className="flex gap-3 text-sm leading-relaxed text-[#94a3b8]"
                  >
                    <span
                      className={`mt-2 h-px w-3 shrink-0 ${
                        item.current ? "bg-[#2dd4bf]" : "bg-[#64748b]"
                      }`}
                    />
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
            <BookOpen size={20} className="mt-0.5 shrink-0 text-[#2dd4bf]" />
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
