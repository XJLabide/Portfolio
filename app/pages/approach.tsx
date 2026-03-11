"use client";

import { motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";

const phases = [
  {
    number: "01",
    title: "Decode the problem",
    label: "Strategy",
    accent: "#c2ff6b",
    summary:
      "I start by understanding what actually needs to happen: the user problem, the system logic, the business constraint, and the gap between them.",
    bullets: [
      "Clarify the product goal and what success should look like",
      "Map the user journey, friction points, and critical decisions",
      "Define where AI, automation, or interface design creates leverage",
    ],
    visual: (
      <CanvasRevealEffect
        animationSpeed={4.2}
        containerClassName="bg-[#111812]"
        colors={[[194, 255, 107], [80, 140, 65]]}
        dotSize={2}
      />
    ),
  },
  {
    number: "02",
    title: "Shape the system",
    label: "Design + Build",
    accent: "#ff7b54",
    summary:
      "Once the strategy is clear, I turn it into a working system: interface hierarchy, workflow logic, product behavior, and technical structure.",
    bullets: [
      "Design the surface so the experience feels legible and confident",
      "Build the product layer with maintainable frontend and backend decisions",
      "Connect intelligence, automation, and UX into one coherent flow",
    ],
    visual: (
      <CanvasRevealEffect
        animationSpeed={3.3}
        containerClassName="bg-[#171111]"
        colors={[[255, 123, 84], [255, 177, 153]]}
        dotSize={2}
      />
    ),
  },
  {
    number: "03",
    title: "Refine and release",
    label: "Delivery",
    accent: "#7dd3fc",
    summary:
      "Shipping is not the end. I refine the product, test the weak points, and make sure what goes live feels intentional, stable, and ready to be used.",
    bullets: [
      "Polish interactions, copy, states, and implementation details",
      "Pressure-test the flow before handoff or launch",
      "Deliver something that is not only impressive, but operational",
    ],
    visual: (
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-[#0f1722]"
        colors={[[125, 211, 252], [210, 240, 255]]}
        dotSize={2}
      />
    ),
  },
];

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-24 text-[#f6f1e8] sm:px-6 lg:px-10">
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.82)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.82)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(194,255,107,0.06),_transparent_25%),radial-gradient(circle_at_80%_25%,_rgba(255,123,84,0.08),_transparent_22%),linear-gradient(180deg,_#050505,_#060914)]" />
      <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/12 lg:block" />
      <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/12 lg:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#f6f1e8]/42">
              Process / Execution
            </p>
            <h2 className="mt-4 text-[16vw] font-black uppercase leading-[0.82] tracking-[-0.09em] text-[#f6f1e8] sm:text-[12vw] lg:text-[7.2vw]">
              Approach
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-2xl leading-tight text-[#f6f1e8]/86 sm:text-3xl">
              My process is built to turn ambiguity into structure, then structure into
              something people can actually use, trust, and scale.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[rgba(255,255,255,0.03)]"
            >
              <div className="relative flex h-full flex-col justify-between">
                <div className="relative h-52 overflow-hidden border-b border-white/10">
                  {phase.visual}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.75))]" />
                  <div className="absolute left-6 top-6 flex items-center gap-3">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.28em]"
                      style={{ color: phase.accent }}
                    >
                      {phase.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.28em] text-[#f6f1e8]/46">
                      {phase.label}
                    </span>
                  </div>
                </div>

                <div className="relative p-6 sm:p-7">
                  <h3 className="max-w-sm text-4xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#f6f1e8]">
                    {phase.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#f6f1e8]/70">
                    {phase.summary}
                  </p>

                  <div className="mt-8 space-y-4 border-t border-white/10 pt-5">
                    {phase.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bullet}
                        className="grid gap-3 sm:grid-cols-[auto_1fr]"
                      >
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/38">
                          0{bulletIndex + 1}
                        </span>
                        <p className="text-sm leading-7 text-[#f6f1e8]/72">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
