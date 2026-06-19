"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

const cardHover = {
  y: -6,
  boxShadow:
    "0 0 0 1px rgba(45,212,191,0.4), 0 8px 32px rgba(45,212,191,0.08)",
  transition: { duration: 0.2 },
};

function StackPills({ stack, compact = false }: { stack: string[]; compact?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className={`rounded-full bg-[#0a0f1c] text-[#2dd4bf] ${
            compact ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs"
          }`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function GitHubLink({ project, size = 20 }: { project: Project; size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="-translate-x-2 text-[#2dd4bf] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        →
      </span>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} on GitHub`}
        className="inline-flex text-[#94a3b8] transition-colors hover:text-[#2dd4bf]"
      >
        <Github size={size} />
      </a>
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={cardHover}
      className="group relative flex h-full will-change-transform flex-col rounded-xl border border-[#1e293b] bg-[#111827] p-6"
    >
      <span className="absolute right-4 top-4 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-2 py-0.5 text-xs text-[#2dd4bf]">
        Featured ✦
      </span>
      <span className="mb-3 inline-block w-fit rounded-full border border-[#2dd4bf]/20 bg-[#0a0f1c] px-3 py-1 text-xs text-[#2dd4bf]">
        {project.category}
      </span>
      <h3 className="text-xl font-bold text-[#e2e8f0]">{project.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#94a3b8]">
        {project.description}
      </p>
      <div className="mt-4">
        <StackPills stack={project.stack} />
      </div>
      <div className="mt-auto pt-6">
        <GitHubLink project={project} />
      </div>
    </motion.article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={cardHover}
      className="group flex h-full will-change-transform flex-col rounded-xl border border-[#1e293b] bg-[#111827] p-4"
    >
      <span className="mb-2 inline-block w-fit rounded-full border border-[#2dd4bf]/20 bg-[#0a0f1c] px-2.5 py-0.5 text-xs text-[#2dd4bf]">
        {project.category}
      </span>
      <h3 className="text-base font-bold text-[#e2e8f0]">{project.title}</h3>
      <div className="mt-3">
        <StackPills stack={project.stack} compact />
      </div>
      <div className="mt-auto pt-4">
        <GitHubLink project={project} size={18} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow="04. Projects" title="Things I've Built" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <FeaturedCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="text-sm font-medium text-[#2dd4bf] transition-opacity hover:opacity-80"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>

          {showAll && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                >
                  <CompactCard project={project} />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Chandangowdakt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1e293b] px-6 py-3 text-sm font-medium text-[#e2e8f0] transition-colors hover:border-[#2dd4bf] hover:text-[#2dd4bf]"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
