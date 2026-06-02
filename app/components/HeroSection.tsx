"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import titleImg from "../../assets/title-img.png";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const FULL_TEXT = "Paco Lau";
const CHARS_ARRAY = FULL_TEXT.split("");
function randomChar() { return CHARS[Math.floor(Math.random() * CHARS.length)]; }

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {

  /* ── Scramble ── */
  // Initialise with real text so SSR and client match — scramble starts after hydration
  const [displayChars, setDisplayChars] = useState<string[]>(() => [...CHARS_ARRAY]);

  useEffect(() => {
    // Immediately switch to random chars, then resolve back to real text
    setDisplayChars(CHARS_ARRAY.map(c => (c === " " ? " " : randomChar())));

    let rafId: number;
    let start: number | null = null;
    const duration = 900;
    let lastSwap = 0;
    const nonSpaceCount = CHARS_ARRAY.filter(c => c !== " ").length;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = Math.max(0, ts - start - 50);
      const progress = Math.min(elapsed / duration, 1);
      const resolved = Math.floor(progress * nonSpaceCount);

      if (ts - lastSwap >= 40 || progress >= 1) {
        lastSwap = ts;
        let solidCount = 0;
        setDisplayChars(CHARS_ARRAY.map(c => {
          if (c === " ") return " ";
          return solidCount++ < resolved ? c : randomChar();
        }));
      }

      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      className="h-screen relative flex flex-col justify-end px-4 sm:px-8 md:px-12 overflow-hidden"
      style={{
        paddingBottom: "13vh",
        backgroundColor: "#F5F0E8",
        backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.20) 1.5px, transparent 1.5px)",
        backgroundSize: "36px 36px",
        zIndex: 20,
      }}
    >
      {/* Top-left discipline lines */}
      <motion.div
        className="absolute font-sans pointer-events-none hidden sm:block"
        style={{ left: "4.5rem", top: "10rem", zIndex: 10 }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7, ease }}
      >
        <p style={{ fontSize: "clamp(20px, 2vw, 32px)", fontWeight: 450, letterSpacing: "0.06em", lineHeight: 1.5 }}>Brand &amp; Web Design</p>
        <p style={{ fontSize: "clamp(20px, 2vw, 32px)", fontWeight: 450, letterSpacing: "0.06em", lineHeight: 1.5 }}>Portrait Photography</p>
      </motion.div>

      {/* 4 — Vertical side label */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ left: 0, top: 0, bottom: 0, width: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span
          className="font-sans text-[#181a18]/35 uppercase whitespace-nowrap"
          style={{ fontSize: "10px", letterSpacing: "0.2em", transform: "rotate(-90deg)" }}
        >
          Brand &amp; Photography · Berkeley CA
        </span>
      </motion.div>

      {/* Animated gradient blobs — sky blue */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 700, height: 700, right: "-8rem", top: "-5%", zIndex: 1,
          background: "radial-gradient(circle, rgba(125,211,252,0.45) 0%, rgba(125,211,252,0.15) 45%, transparent 70%)" }}
        animate={{ x: [0, 36, -24, 0], y: [0, -48, 28, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 520, height: 520, right: "20rem", top: "35%", zIndex: 1,
          background: "radial-gradient(circle, rgba(56,189,248,0.30) 0%, rgba(56,189,248,0.08) 50%, transparent 70%)" }}
        animate={{ x: [0, -28, 18, 0], y: [0, 34, -20, 0], scale: [1, 0.92, 1.10, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Mobile-only image — centered, upper half */}
      <motion.div
        className="absolute pointer-events-none block sm:hidden"
        style={{ top: "16%", left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5, ease }}
      >
        <Image src={titleImg} alt="Paco Lau" height={600} style={{ width: "auto", height: "52vh", objectFit: "contain" }} />
      </motion.div>

      {/* Image — absolute on sm+, hidden on mobile */}
      <motion.div
        className="absolute pointer-events-none hidden sm:block"
        style={{ right: "4rem", top: "50%", zIndex: 2 }}
        initial={{ opacity: 0, x: 60, y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ duration: 1.1, delay: 0.5, ease }}
      >
        <Image src={titleImg} alt="Paco Lau" height={600} style={{ width: "auto", height: "clamp(300px, 55vh, 600px)" }} />
      </motion.div>

      {/* Text group */}
      <div className="relative z-10 text-[#181a18] font-sans pl-4 sm:pl-6" style={{ paddingLeft: "1.5rem" }}>



        {/* Title — anchors first, largest weight */}
        <motion.h1
          className="font-bold leading-none select-none"
          style={{ fontSize: "clamp(4rem, 10vw, 10rem)", marginTop: 0, letterSpacing: "-0.06em" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          {displayChars.map((char, i) =>
            char === " "
              ? <span key={i} style={{ display: "inline-block", width: "0.2em" }} />
              : <span key={i} style={{ display: "inline-block" }}>{char}</span>
          )}
        </motion.h1>

        {/* Tagline — third tier, arrives last */}
        <motion.p
          className="font-sans"
          style={{
            fontSize: "clamp(16px, 1.4vw, 22px)",
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "none",
            marginTop: "0.55em",
            color: "#181a18",
            opacity: 0,
          }}
          animate={{ opacity: 0.5, y: 0 }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.7, delay: 0.85, ease }}
        >
          BASED IN BERKELEY, CA
        </motion.p>
      </div>

      {/* Scroll indicator — resolves the hierarchy, guides the eye down */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center" style={{ zIndex: 10 }}>
      <motion.div
        className="flex flex-col items-center gap-1.5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "13px",
            letterSpacing: "0.25em",
            color: "#181a18",
            opacity: 0.6,
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(24,26,24,0.35), transparent)" }}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      </div>
    </section>
  );
}
