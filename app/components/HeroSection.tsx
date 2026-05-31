"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import titleImg from "../../assets/title-img.png";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const FULL_TEXT = "PACO LAU";
const CHARS_ARRAY = FULL_TEXT.split("");
function randomChar() { return CHARS[Math.floor(Math.random() * CHARS.length)]; }

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {

  /* ── Scramble ── */
  const [displayChars, setDisplayChars] = useState(() =>
    CHARS_ARRAY.map(c => (c === " " ? " " : randomChar()))
  );

  useEffect(() => {
    let rafId: number;
    let start: number | null = null;
    const duration = 2200;
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
      className="h-screen relative flex flex-col justify-end px-12 overflow-hidden"
      style={{
        paddingBottom: "13vh",
        backgroundColor: "#F5F0E8",
        backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.20) 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
        zIndex: 20,
      }}
    >
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 620, height: 620, right: "1rem", top: "15%", zIndex: 1,
          background: "radial-gradient(circle, rgba(196,98,45,0.38) 0%, rgba(196,98,45,0.12) 45%, transparent 70%)" }}
        animate={{ x: [0, 36, -24, 0], y: [0, -48, 28, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 380, height: 380, right: "18rem", top: "50%", zIndex: 1,
          background: "radial-gradient(circle, rgba(201,168,76,0.32) 0%, rgba(201,168,76,0.08) 50%, transparent 70%)" }}
        animate={{ x: [0, -28, 18, 0], y: [0, 34, -20, 0], scale: [1, 0.90, 1.10, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Image — slides in from right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ right: "4rem", top: "50%", zIndex: 2 }}
        initial={{ opacity: 0, x: 60, y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ duration: 1.1, delay: 0.5, ease }}
      >
        <Image src={titleImg} alt="Paco Lau" height={600} style={{ width: "auto" }} />
      </motion.div>

      {/* Text group */}
      <div className="relative z-10 text-[#181a18] font-sans" style={{ paddingLeft: "1.5rem" }}>

        {/* Subtitle — fades up first */}
        <motion.div
          style={{ fontSize: "40px", lineHeight: 1.3, marginBottom: "0.05em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <p>Brand &amp; Web Design</p>
          <p>Portrait Photography</p>
        </motion.div>

        {/* Title — fades up after subtitle */}
        <motion.h1
          className="font-bold uppercase leading-none select-none"
          style={{ fontSize: "142px", marginTop: "0.1em", letterSpacing: "-0.04em" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
        >
          {displayChars.map((char, i) =>
            char === " "
              ? <span key={i} style={{ display: "inline-block", width: "0.2em" }} />
              : <span key={i} style={{ display: "inline-block" }}>{char}</span>
          )}
        </motion.h1>
      </div>
    </section>
  );
}
