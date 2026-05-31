"use client";

import { motion } from "framer-motion";

const subtitleLines = [
  ["Brand", "&", "Web", "Design"],
  ["Portrait", "Photography"],
];

const titleWords = ["Paco", "Lau"];

const wordVariant = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HeroText() {
  let idx = 0;

  return (
    <div className="relative z-10 text-left text-[#181a18] font-sans">
      {/* Subtitle — sits directly above the title */}
      <div style={{ fontSize: "40px" }}>
        {subtitleLines.map((line, li) => (
          <p key={li} className="leading-snug">
            {line.map((word) => {
              const i = idx++;
              return (
                <motion.span
                  key={word + i}
                  custom={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="show"
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              );
            })}
          </p>
        ))}
      </div>

      {/* Title */}
      <h1
        className="font-bold leading-none tracking-tight uppercase"
        style={{ fontSize: "150px", marginTop: "0.1em" }}
      >
        {titleWords.map((word) => {
          const i = idx++;
          return (
            <motion.span
              key={word}
              custom={i}
              variants={wordVariant}
              initial="hidden"
              animate="show"
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          );
        })}
      </h1>
    </div>
  );
}
