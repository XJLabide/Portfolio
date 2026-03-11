'use client';

import { ExpandableCardDemo } from "../components/ui/expandablecards";

const principles = [
  {
    index: "01",
    title: "Design with intent",
    body: "I care about visual mood, structure, and interaction rhythm. Interfaces should feel memorable before they feel familiar.",
  },
  {
    index: "02",
    title: "Build what matters",
    body: "I work across product surfaces, AI workflows, and automation systems with a bias toward useful outcomes instead of inflated feature sets.",
  },
  {
    index: "03",
    title: "Ship for real clients",
    body: "I am not building concept screens in a vacuum. I think about execution, maintainability, and whether the thing can hold up outside the design file.",
  },
];

const capabilityRows = [
  ["AI Automations", "LLM Integrations", "RAG Systems"],
  ["Product UI", "Frontend Build", "Workflow Design"],
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-24 text-[#f6f1e8] sm:px-6 lg:px-10">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-20">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#f6f1e8]/48">
              About / Positioning
            </p>
            <h2 className="text-[17vw] font-black uppercase leading-[0.82] tracking-[-0.09em] text-[#f6f1e8] sm:text-[13vw] lg:text-[8vw]">
              About
              <span className="block text-[#ff7b54]">Me</span>
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl leading-tight text-[#f6f1e8]/88 sm:text-3xl lg:text-[2.6rem]">
              I work where
              <span className="mx-2 inline-block rounded-full border border-white/12 bg-white/5 px-3 py-1 text-sm uppercase tracking-[0.32em] text-[#c2ff6b] align-middle sm:text-base">
                design
              </span>
              meets systems thinking, turning AI capabilities into products that feel clear, useful, and alive.
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="max-w-3xl space-y-6 text-lg leading-9 text-[#f6f1e8]/74">
              <p>
                I&apos;m Xander Jacob Labide, a creative technologist building product
                experiences that combine clean interface design with applied AI. My work
                sits between visual direction, frontend execution, and intelligent
                automation.
              </p>
              <p>
                I design user-facing tools, AI-assisted systems, and workflow-driven
                products for real use cases. That means thinking beyond static screens:
                retrieval logic, LLM behavior, interaction clarity, system usability, and
                how the whole thing performs once it reaches actual users.
              </p>
              <p>
                I care about making advanced technology feel legible. The goal is never
                just to add AI. The goal is to shape it into an experience that feels
                precise, trustworthy, and worth using.
              </p>
            </div>

            <div className="space-y-4 border-l border-white/10 pl-6">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#f6f1e8]/42">
                Capability Frame
              </p>
              {capabilityRows.map((row) => (
                <div key={row.join("-")} className="flex flex-wrap gap-3">
                  {row.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 px-4 py-2 text-sm uppercase tracking-[0.18em] text-[#f6f1e8]/78"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {principles.map((principle) => (
              <article
                key={principle.index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.05)]"
              >
                <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-medium tracking-[0.28em] text-[#c2ff6b]">
                    {principle.index}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#f6f1e8]">
                      {principle.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[#f6f1e8]/70">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#f6f1e8]/42">
                  Working Style
                </p>
                <p className="mt-4 text-2xl font-medium leading-tight text-[#f6f1e8]">
                  Creative direction with engineering discipline.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#f6f1e8]/42">
                  Current Drive
                </p>
                <p className="mt-4 text-2xl font-medium leading-tight text-[#f6f1e8]">
                  Building sharper AI product systems for ambitious brands and teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#f6f1e8]/42">
                Proof / Highlights
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#f6f1e8] sm:text-4xl">
                Achievements, competition work, and technical momentum.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#f6f1e8]/58">
              Not decoration. These are signals of how I think, execute, and keep pushing
              my range across design, development, and emerging systems.
            </p>
          </div>
          <ExpandableCardDemo />
        </div>
      </div>
    </section>
  );
}
