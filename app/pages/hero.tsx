"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "../components/ui/spotlight-new";
import Link from "next/link";

export default function Hero() {
  const metrics = [
    { label: "Focus", value: "AI Systems + Product Design" },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050505] px-4 pb-8 pt-28 text-[#f6f1e8] sm:px-6 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(194,255,107,0.18),_transparent_30%),radial-gradient(circle_at_80%_25%,_rgba(255,107,53,0.18),_transparent_22%),linear-gradient(180deg,_rgba(10,10,10,0.4),_rgba(5,5,5,1))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:96px_96px]" />
      <Spotlight />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1600px] flex-col justify-between">
        <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[#f6f1e8]/60"
            >
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[#c2ff6b]">
                AI Builder / Creative Technologist
              </span>
              <span>Portfolio / 2026</span>
              <span className="h-px w-10 bg-white/15" />
              <span>Automation, interfaces, and applied intelligence</span>
            </motion.div>

            <div className="relative">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-5 max-w-xl text-sm leading-7 text-[#f6f1e8]/68 sm:text-base"
              >
                I design and build AI-powered products, retrieval systems, automations,
                and client-facing tools that feel sharp, useful, and production-ready.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="relative"
              >
                <div className="pointer-events-none absolute -left-2 top-3 hidden text-[13vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.05] lg:block">
                  LABIDE
                </div>
                <h1 className="relative text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.09em] text-[#f6f1e8] sm:text-[17vw] md:text-[15vw] lg:text-[9.3vw]">
                  <span className="block">Xander</span>
                  <span className="block text-[#c2ff6b]">Jacob</span>
                  <span className="block">Labide</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 max-w-2xl"
              >
                <p className="text-xl leading-tight text-[#f6f1e8]/88 sm:text-2xl lg:text-3xl">
                  I craft AI automations, RAG systems, LLM-powered tools, and polished product experiences for
                  <span className="mx-2 inline-block rounded-full border border-[#f6f1e8]/15 bg-white/5 px-3 py-1 text-sm align-middle uppercase tracking-[0.3em] text-[#ff7b54] sm:text-base">
                    modern clients
                  </span>
                  who need intelligence that actually ships.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#f6f1e8] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#050505] transition-transform duration-300 hover:-translate-y-1"
                >
                  Selected Work
                  <span className="text-[#ff7b54] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors duration-300 hover:border-[#c2ff6b]/50 hover:text-[#c2ff6b]"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative flex min-h-[560px] items-end justify-center lg:min-h-[720px]"
          >
            <div className="absolute left-4 top-12 hidden -rotate-90 text-[11px] uppercase tracking-[0.45em] text-[#f6f1e8]/45 lg:block">
              Designed to feel cinematic
            </div>

            <div className="relative w-full max-w-[560px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-8 h-28 w-28 rounded-full border border-[#c2ff6b]/30 bg-[#c2ff6b]/10 blur-[2px]"
              />
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-24 h-20 w-20 rounded-3xl border border-[#ff7b54]/30 bg-[#ff7b54]/10"
              />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-[#111111] p-3 shadow-[0_40px_140px_rgba(0,0,0,0.65)]">
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(194,255,107,0.12))]" />
                <div className="relative h-[520px] overflow-hidden rounded-[2rem] sm:h-[620px]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Xander Jacob Labide"
                    priority
                    width={768}
                    height={1024}
                    sizes="(max-width: 1024px) 90vw, 38vw"
                    unoptimized
                    className="h-full w-full object-cover object-center brightness-[1.04] contrast-[1.04] saturate-[1.08]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.08)_48%,rgba(5,5,5,0.38)_100%)]" />
                  <div className="absolute inset-y-0 left-0 w-[10%] bg-[linear-gradient(90deg,rgba(5,5,5,0.25),rgba(5,5,5,0))]" />

                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c2ff6b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b54]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-4 sm:grid-cols-[1.3fr_0.7fr]">
                    <div className="rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/45">
                        Signature
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-[#f6f1e8]">
                        Applied AI. Elegant systems. Client-ready execution.
                      </p>
                    </div>
                    {metrics.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md"
                      >
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/45">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-medium text-[#f6f1e8]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 grid gap-4 border-t border-white/10 pt-5 text-[#f6f1e8]/72 lg:grid-cols-[1fr_auto_1fr] lg:items-center"
        >
          <div className="max-w-md text-sm leading-6">
            Building intelligence-driven products where strong UX, automation logic, and real business utility meet.
          </div>
          <div className="hidden h-px bg-white/10 lg:block" />
          <div className="flex items-center gap-4 justify-self-start lg:justify-self-end">
            <span className="text-xs uppercase tracking-[0.35em] text-[#f6f1e8]/45">
              Scroll
            </span>
            <div className="flex h-14 w-9 items-start justify-center rounded-full border border-white/20 p-2">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="h-2.5 w-1.5 rounded-full bg-[#c2ff6b]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
