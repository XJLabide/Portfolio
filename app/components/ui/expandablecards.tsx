"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import { achievementCards } from "../../lib/site-content";

type AchievementCard = (typeof achievementCards)[number];
type ImageCard = AchievementCard & {
  visual: {
    type: "image";
    src: string;
    style: string;
  };
};
type TextCard = AchievementCard & {
  visual: {
    type: "text";
    badge: string;
    accent: string;
    rotation: number;
  };
};

function AchievementVisual({
  card,
  compact = false,
}: {
  card: AchievementCard;
  compact?: boolean;
}) {
  if (card.visual.type === "image") {
    const imageCard = card as ImageCard;

    return (
      <div
        className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111] ${
          compact ? "h-56" : "h-72"
        }`}
      >
        <Image
          src={imageCard.visual.src}
          alt={imageCard.title}
          fill
          sizes={compact ? "(max-width: 768px) 100vw, 33vw" : "80vw"}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05),rgba(5,5,5,0.65))]" />
      </div>
    );
  }

  const textCard = card as TextCard;

  return (
    <div className={`relative flex items-center justify-center ${compact ? "h-56" : "h-72"}`}>
      <div
        className="relative flex h-[78%] w-[82%] items-center justify-center border-2 border-black bg-white shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
        style={{
          backgroundColor: textCard.visual.accent,
          transform: `rotate(${textCard.visual.rotation}deg)`,
        }}
      >
        <span className="text-[clamp(2rem,5vw,4.75rem)] font-black uppercase tracking-[-0.06em] text-black">
          {textCard.visual.badge}
        </span>
        <div className="absolute right-2 top-2 h-6 w-6 border-l-2 border-b-2 border-black bg-[#f6f1e8]" />
      </div>
    </div>
  );
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState<AchievementCard | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-md"
            />
            <div className="fixed inset-0 z-[100] grid place-items-center px-4 py-10">
              <motion.div
                ref={ref}
                layoutId={`achievement-card-${active.title}-${id}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] text-[#f6f1e8] shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
              >
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="border-b border-white/10 bg-[rgba(255,255,255,0.03)] p-4 lg:border-b-0 lg:border-r">
                    <AchievementVisual card={active} />
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.34em] text-[#f6f1e8]/45">
                            {active.eyebrow}
                          </p>
                          <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-[#f6f1e8] sm:text-4xl">
                            {active.title}
                          </h3>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActive(null)}
                          className="rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#f6f1e8]/65 transition-colors hover:border-white/25 hover:text-[#f6f1e8]"
                        >
                          Close
                        </button>
                      </div>

                      <div className="mt-8 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/42">
                            Result
                          </p>
                          <p className="mt-2 text-lg text-[#f6f1e8]">{active.description}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.28em] text-[#f6f1e8]/42">
                            Signal
                          </p>
                          <p className="mt-2 text-lg text-[#f6f1e8]">{active.metric}</p>
                        </div>
                      </div>

                      <p className="mt-8 max-w-2xl text-base leading-8 text-[#f6f1e8]/72 sm:text-lg">
                        {active.content}
                      </p>
                    </div>

                    <p className="mt-10 text-[11px] uppercase tracking-[0.35em] text-[#c2ff6b]">
                      Proof of execution
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="grid gap-5 lg:grid-cols-12">
        {achievementCards.map((card, index) => {
          const spanClass =
            index === 0
              ? "lg:col-span-4"
              : index === 1
                ? "lg:col-span-4"
                : index === 2
                  ? "lg:col-span-2"
                  : "lg:col-span-2";

          return (
            <motion.button
              type="button"
              key={card.title}
              layoutId={`achievement-card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.025)] p-4 text-left transition-colors duration-300 hover:bg-[rgba(255,255,255,0.045)] ${spanClass}`}
            >
              <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#f6f1e8]/40">
                <span>{card.eyebrow}</span>
                <span>{card.description}</span>
              </div>

              <AchievementVisual card={card} compact />

              <div className="mt-5 space-y-3">
                <h4 className="max-w-sm text-2xl font-semibold leading-tight text-[#f6f1e8]">
                  {card.title}
                </h4>
                <p className="text-sm uppercase tracking-[0.18em] text-[#f6f1e8]/55">
                  {card.metric}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.25em] text-[#f6f1e8]/45">
                <span>Open</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </>
  );
}
