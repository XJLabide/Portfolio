"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

const MIN_LOADER_TIME_MS = 1400;
const EXIT_TIME_MS = 1100;

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);
  const [canExit, setCanExit] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let minDelayPassed = false;
    let pageLoaded = false;

    const maybeStartExit = () => {
      if (!isMounted || !minDelayPassed || !pageLoaded) {
        return;
      }

      setCanExit(true);
      setIsExiting(true);

      window.setTimeout(() => {
        if (isMounted) {
          setShowIntro(false);
        }
      }, EXIT_TIME_MS);
    };

    const minTimer = window.setTimeout(() => {
      minDelayPassed = true;
      maybeStartExit();
    }, MIN_LOADER_TIME_MS);

    const handleReady = () => {
      pageLoaded = true;
      maybeStartExit();
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady, { once: true });
    }

    return () => {
      isMounted = false;
      window.clearTimeout(minTimer);
      window.removeEventListener("load", handleReady);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: canExit ? 1 : 0,
          y: canExit ? 0 : 18,
        }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
        <div className="min-h-[calc(100vh-4rem)]">{children}</div>
      </motion.div>

      {showIntro && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[120] overflow-hidden bg-[#040404]"
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          transition={{ duration: 0.35, delay: isExiting ? 0.72 : 0 }}
        >
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:94px_94px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,_rgba(194,255,107,0.16),_transparent_26%),radial-gradient(circle_at_82%_28%,_rgba(255,123,84,0.16),_transparent_26%),linear-gradient(180deg,_rgba(4,4,4,0.98),_rgba(3,7,16,0.98))]" />

          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[#040404]"
            animate={isExiting ? { x: "-102%" } : { x: 0 }}
            transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[#040404]"
            animate={isExiting ? { x: "102%" } : { x: 0 }}
            transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mb-6 text-[11px] uppercase tracking-[0.48em] text-[#f6f1e8]/45"
              >
                AI Engineer / Software Developer
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative overflow-hidden"
              >
                <h1 className="text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-[#f6f1e8] sm:text-[12vw] lg:text-[8vw]">
                  Xander
                </h1>

                <motion.div
                  className="absolute inset-y-[-18%] left-[-35%] w-[30%] rotate-[10deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] blur-xl"
                  animate={{ x: ["0%", "380%"] }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.45 }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.55 }}
                className="mt-5 text-xs uppercase tracking-[0.42em] text-[#c2ff6b]/78"
              >
                Loading the experience
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
