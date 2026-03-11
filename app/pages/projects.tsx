'use client';

import ProjectCard from '../components/custom/projectcard';
import { projects } from "../lib/site-content";

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-24 text-[#f6f1e8] sm:px-6 lg:px-10">
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:92px_92px]" />

      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="mb-14 grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#f6f1e8]/46">
              Selected Work
            </p>
            <h2 className="mt-4 text-[16vw] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#f6f1e8] sm:text-[12vw] lg:text-[7.2vw]">
              Recent
              <span className="block text-[#c2ff6b]">Projects</span>
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl leading-tight text-[#f6f1e8]/86 sm:text-3xl">
              Public work that shows how I approach product thinking, AI-adjacent tooling,
              and interface systems that are built to be used, not just displayed.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              eyebrow={project.eyebrow}
              description={project.description}
              stack={project.stack}
              repoUrl={project.repoUrl}
              imagePosition={project.imagePosition}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-3xl text-sm leading-7 text-[#f6f1e8]/62">
            Other RAG systems, LLM-integrated tools, and client AI builds are intentionally
            not public here. They were shipped under NDA, so this section focuses on the
            work I can show openly.
          </p>
          <div className="rounded-full border border-white/10 px-5 py-3 text-[11px] uppercase tracking-[0.3em] text-[#ff7b54]">
            Additional AI work available on request
          </div>
        </div>
      </div>
    </section>
  );
}
