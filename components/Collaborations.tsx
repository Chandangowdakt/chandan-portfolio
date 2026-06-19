"use client";

import { motion } from "framer-motion";
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

        <div className="grid gap-4 md:grid-cols-2">
          {collaborations.map((item, index) => (
            <motion.article
              key={item.org}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 rounded-lg border border-[#1e293b] bg-[#111827] p-4"
            >
              <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2dd4bf]" />
              <div>
                <h3 className="font-semibold text-[#e2e8f0]">{item.org}</h3>
                <p className="mt-1 text-sm text-[#94a3b8]">{item.context}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
