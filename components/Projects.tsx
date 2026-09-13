"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects, type ProjectFilter } from "@/lib/data";

type Project = (typeof projects)[number];

const filters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "medical", label: "Medical & Biomedical" },
  { id: "fullstack", label: "Full Stack" },
  { id: "embedded-ai", label: "Embedded & AI" },
];

const cardHover = { y: -4, transition: { duration: 0.2 } };

function StackPills({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-[#0a0f1c] px-2.5 py-1 text-xs text-[#2dd4bf]"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-xl border border-[#1e293b] bg-[#111827] ${
        featured ? "p-5 sm:p-6" : "p-4 sm:p-5"
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-4 rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/10 px-2 py-0.5 text-xs font-medium text-[#2dd4bf]">
          Featured
        </span>
      )}
      <span className="mb-3 inline-block w-fit rounded-full border border-[#2dd4bf]/20 bg-[#0a0f1c] px-3 py-1 text-xs text-[#2dd4bf]">
        {project.category}
      </span>
      <h3
        className={`pr-16 font-bold text-[#e2e8f0] ${
          featured ? "text-lg sm:text-xl" : "text-base"
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#94a3b8]">
        {project.description}
      </p>
      <div className="mt-4">
        <StackPills stack={project.stack} />
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repository for ${project.title}`}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#1e293b] px-3 py-1.5 text-xs font-medium text-[#94a3b8] transition-colors hover:border-[#2dd4bf] hover:text-[#2dd4bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
        >
          <Github size={14} />
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo for ${project.title}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-3 py-1.5 text-xs font-medium text-[#2dd4bf] transition-colors hover:bg-[#2dd4bf]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.filters.includes(activeFilter));
  }, [activeFilter]);

  const featured = filtered.filter((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow="05. Projects" title="Things I've Built" />
        </motion.div>

        <div
          role="tablist"
          aria-label="Filter projects"
          className="-mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2"
        >
          {filters.map((filter) => {
            const selected = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveFilter(filter.id)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] sm:text-sm ${
                  selected
                    ? "border-[#2dd4bf]/40 bg-[#2dd4bf]/10 text-[#2dd4bf]"
                    : "border-[#1e293b] text-[#94a3b8] hover:border-[#2dd4bf]/30 hover:text-[#e2e8f0]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {featured.length > 0 && (
              <div className="grid gap-5 md:grid-cols-2">
                {featured.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={cardHover}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                  >
                    <ProjectCard project={project} featured />
                  </motion.div>
                ))}
              </div>
            )}

            {others.length > 0 && (
              <div
                className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
                  featured.length > 0 ? "mt-6" : ""
                }`}
              >
                {others.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={cardHover}
                    transition={{ delay: index * 0.05, duration: 0.35 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-[#94a3b8]">
                No projects in this category yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Chandangowdakt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#1e293b] px-6 py-3 text-sm font-medium text-[#e2e8f0] transition-colors hover:border-[#2dd4bf] hover:text-[#2dd4bf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
