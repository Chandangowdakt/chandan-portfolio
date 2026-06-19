"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";
import { collaborations } from "@/lib/data";

export default function Collaborations() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading eyebrow="05. Research" title="Collaborations" />
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mb-10 max-w-3xl text-base leading-relaxed text-[#94a3b8] sm:text-lg"
        >
          During my Real-Time Pupil Tracking & Eye Gaze Estimation project, I
          collaborated with leading research organizations in neuroscience and
          human-computer interaction.
        </motion.p>

        <div className="relative">
          <Globe
            size={140}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#2dd4bf] opacity-[0.05]"
            aria-hidden="true"
          />
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full text-[#2dd4bf] opacity-[0.08] md:block"
            aria-hidden="true"
          >
            <line x1="50" y1="50" x2="25" y2="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="75" y2="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="25" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="75" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>

          <div className="relative grid gap-4 md:grid-cols-2">
            {collaborations.map((item, index) => (
              <motion.article
                key={item.org}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                className="group flex gap-4 will-change-transform rounded-lg border border-[#1e293b] bg-[#111827] p-4"
              >
                <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2dd4bf]" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-[#e2e8f0]">{item.org}</h3>
                    <ExternalLink
                      size={14}
                      className="mt-0.5 shrink-0 text-[#2dd4bf] opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-1 text-sm text-[#94a3b8]">{item.context}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
