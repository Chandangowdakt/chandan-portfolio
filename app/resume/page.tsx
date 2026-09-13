import type { Metadata } from "next";
import Link from "next/link";
import PrintResumeButton from "@/components/PrintResumeButton";
import {
  education,
  experience,
  personalInfo,
  projects,
  skills,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume | Chandan K T",
  description:
    "Resume of Chandan K T — Medical Electronics Engineering student and Full Stack Development Intern.",
};

export default function ResumePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen bg-[#0a0f1c] px-4 py-10 text-[#e2e8f0] sm:px-6">
      <div className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="text-sm text-[#94a3b8] transition-colors hover:text-[#2dd4bf]"
        >
          ← Back to portfolio
        </Link>
        <PrintResumeButton />
      </div>

      <article className="mx-auto max-w-3xl rounded-xl border border-[#1e293b] bg-[#111827] p-6 sm:p-10 print:border-0 print:bg-white print:p-0 print:text-black">
        <header className="border-b border-[#1e293b] pb-6 print:border-slate-300">
          <h1 className="text-3xl font-bold tracking-tight print:text-black">
            {personalInfo.name}
          </h1>
          <p className="mt-2 text-[#2dd4bf] print:text-teal-700">
            {personalInfo.role}
          </p>
          <p className="mt-3 text-sm text-[#94a3b8] print:text-slate-600">
            {personalInfo.location} · {personalInfo.email} · {personalInfo.phone}
          </p>
          <p className="mt-1 text-sm text-[#94a3b8] print:text-slate-600">
            <a
              href={personalInfo.github}
              className="hover:text-[#2dd4bf] print:text-slate-700"
            >
              GitHub
            </a>
            {" · "}
            <a
              href={personalInfo.linkedin}
              className="hover:text-[#2dd4bf] print:text-slate-700"
            >
              LinkedIn
            </a>
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#2dd4bf] print:text-teal-700">
            Summary
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#94a3b8] print:text-slate-700">
            Medical Electronics Engineering student and Full Stack Development
            Intern at Autoyos, with hands-on experience building production web
            platforms and biomedical systems.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#2dd4bf] print:text-teal-700">
            Experience
          </h2>
          <div className="mt-4 space-y-6">
            {experience.map((job) => (
              <div key={`${job.company}-${job.role}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold print:text-black">{job.company}</h3>
                  <span className="text-xs text-[#94a3b8] print:text-slate-600">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-[#2dd4bf] print:text-teal-700">
                  {job.role}
                </p>
                <p className="text-xs text-[#64748b] print:text-slate-500">
                  {job.location}
                  {job.current ? " · Current" : " · Completed"}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#94a3b8] print:text-slate-700">
                  {job.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#2dd4bf] print:text-teal-700">
            Education
          </h2>
          <div className="mt-3">
            <h3 className="font-semibold print:text-black">{education.degree}</h3>
            <p className="text-sm text-[#94a3b8] print:text-slate-700">
              {education.college}
            </p>
            <p className="text-xs text-[#64748b] print:text-slate-500">
              {education.period}
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#2dd4bf] print:text-teal-700">
            Selected Projects
          </h2>
          <div className="mt-4 space-y-4">
            {featuredProjects.map((project) => (
              <div key={project.id}>
                <h3 className="font-semibold print:text-black">{project.title}</h3>
                <p className="mt-1 text-sm text-[#94a3b8] print:text-slate-700">
                  {project.description}
                </p>
                <p className="mt-1 text-xs text-[#64748b] print:text-slate-500">
                  {project.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#2dd4bf] print:text-teal-700">
            Skills
          </h2>
          <div className="mt-3 space-y-2">
            {Object.entries(skills).map(([group, items]) => (
              <p key={group} className="text-sm text-[#94a3b8] print:text-slate-700">
                <span className="font-medium text-[#e2e8f0] print:text-black">
                  {group}:
                </span>{" "}
                {items.join(", ")}
              </p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
