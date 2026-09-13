"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";
import { whatIBuild } from "@/lib/data";

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading eyebrow="02. Focus" title="What I Build" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {whatIBuild.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl border border-[#1e293b] bg-[#111827] p-5 transition-colors hover:border-[#2dd4bf]/30"
            >
              <h3 className="text-base font-semibold text-[#e2e8f0] sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
