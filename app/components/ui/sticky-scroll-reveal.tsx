"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "../../lib/utils";

interface Item {
  title: string;
  description: string;
  eyebrow: string;
  accent: string;
  stack: string[];
  content?: React.ReactNode;
}

interface StickyScrollRevealProps {
  content: Item[];
  contentClassName?: string;
}

export const StickyScrollReveal: React.FC<StickyScrollRevealProps> = ({
  content,
  contentClassName,
}) => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const len = content.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const panelBackgrounds = useMemo(
    () => [
      "linear-gradient(180deg, rgba(194,255,107,0.08), rgba(255,255,255,0.02))",
      "linear-gradient(180deg, rgba(255,123,84,0.08), rgba(255,255,255,0.02))",
      "linear-gradient(180deg, rgba(125,211,252,0.08), rgba(255,255,255,0.02))",
      "linear-gradient(180deg, rgba(246,241,232,0.08), rgba(255,255,255,0.02))",
    ],
    []
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / len);
    const idx = breakpoints.reduce((acc, bp, i) =>
      Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc,
      0
    );
    setActive(idx);
  });

  const current = content[active];

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:92px_92px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(194,255,107,0.08),_transparent_28%),radial-gradient(circle_at_85%_30%,_rgba(255,123,84,0.08),_transparent_20%),linear-gradient(180deg,_#050505,_#07122b)]" />
        <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/8 lg:block" />
        <div className="absolute inset-y-0 right-[10%] hidden w-px bg-white/8 lg:block" />

        <motion.div
          className="relative z-10 mx-auto grid h-full w-full max-w-[1600px] gap-12 px-4 py-20 text-[#f6f1e8] sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10"
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-col justify-center">
            <motion.p
              key={`eyebrow-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[11px] uppercase tracking-[0.38em] text-[#f6f1e8]/46"
            >
              {current?.eyebrow}
            </motion.p>

            <motion.div
              key={`left-${active}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-6"
            >
              <div className="mb-4 text-[14vw] font-black uppercase leading-[0.82] tracking-[-0.09em] text-white/[0.05] sm:text-[11vw] lg:text-[7vw]">
                0{active + 1}
              </div>
              <h2 className="max-w-3xl text-[14vw] font-black uppercase leading-[0.8] tracking-[-0.09em] text-[#f6f1e8] sm:text-[10vw] lg:text-[6.2vw]">
                {current?.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f6f1e8]/68 sm:text-xl">
                {current?.description}
              </p>

              <div className="mt-10 space-y-3">
                {content.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-center gap-4 border-t border-white/8 pt-3 transition-opacity duration-300 ${
                      index === active ? "opacity-100" : "opacity-35"
                    }`}
                  >
                    <span
                      className="text-[10px] uppercase tracking-[0.28em]"
                      style={{ color: index === active ? current?.accent : "#9ca3af" }}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-sm uppercase tracking-[0.18em] text-[#f6f1e8]/78">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            key={`panel-${active}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className={cn(
              "relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2.6rem] border border-white/10 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.5)] sm:p-8",
              contentClassName
            )}
            style={{
              backgroundImage: panelBackgrounds[active % panelBackgrounds.length],
              backgroundColor: "rgba(10,10,10,0.72)",
            }}
          >
            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />
            <div
              className="absolute right-8 top-8 h-24 w-24 rounded-full blur-3xl"
              style={{ backgroundColor: current?.accent }}
            />
            <div className="absolute inset-y-0 left-6 w-px bg-white/8" />

            <div className="relative z-10">
              <div className="grid gap-4 border-b border-white/10 pb-6 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#f6f1e8]/42">
                    Stack Snapshot
                  </p>
                  <p className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.05em] text-[#f6f1e8]">
                    Tools, systems, and product logic I reach for when building.
                  </p>
                </div>
                <span
                  className="rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.28em]"
                  style={{
                    borderColor: `${current?.accent}55`,
                    color: current?.accent,
                  }}
                >
                  Active Focus
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {current?.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#f6f1e8]/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 flex-1">{current?.content}</div>

            <div className="relative z-10 mt-10 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.32em] text-[#f6f1e8]/36">
              <span>Scroll to reveal next capability</span>
              <span style={{ color: current?.accent }}>0{active + 1} / 0{len}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
