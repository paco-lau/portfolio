"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// col1: landscape, portrait | col2: portrait, landscape | col3: landscape, portrait
const columns = [
  [
    { id: 1, aspect: "landscape", gradient: "linear-gradient(180deg, #0d1f2d 0%, #1a3a4a 50%, #2d6080 100%)" },
    { id: 4, aspect: "portrait",  gradient: "linear-gradient(160deg, #2a1f1a 0%, #5a3a2a 60%, #8a6050 100%)" },
  ],
  [
    { id: 2, aspect: "portrait",  gradient: "linear-gradient(160deg, #1a1a14 0%, #3a3a28 60%, #5a5a3a 100%)" },
    { id: 5, aspect: "landscape", gradient: "linear-gradient(200deg, #1a1208 0%, #3a2a10 50%, #6a4a20 100%)" },
  ],
  [
    { id: 3, aspect: "landscape", gradient: "linear-gradient(160deg, #0a1a0a 0%, #1a3a1a 50%, #2a5a2a 100%)" },
    { id: 6, aspect: "portrait",  gradient: "linear-gradient(160deg, #1a0a1a 0%, #3a1a3a 50%, #6a306a 100%)" },
  ],
];

export default function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 md:py-20 px-4 sm:px-8 md:px-12" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="max-w-2xl md:max-w-4xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-8 md:mb-12">
          <motion.p
            className="text-[#181a18]/40 text-xs tracking-widest uppercase font-[family-name:var(--font-dm-sans)] mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            Selected Works
          </motion.p>
          <motion.h2
            className="font-[family-name:var(--font-cormorant)] font-medium text-[#181a18]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1 }}
          >
            A few favourites.
          </motion.h2>
          <motion.div
            className="mt-4 h-px bg-[#181a18]/20"
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.25 }}
          />
        </div>

        {/* Mobile: 2 columns, md+: 3 columns */}
        <div className="flex gap-3">
          {columns.map((col, ci) => (
            <div key={ci} className={`flex flex-col gap-3 flex-1${ci === 2 ? " hidden md:flex" : ""}`}>
              {col.map((photo, pi) => (
                <motion.div
                  key={photo.id}
                  style={{ aspectRatio: photo.aspect === "portrait" ? "3/4" : "4/3", overflow: "hidden" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.0, delay: 0.1 + (ci * 2 + pi) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-full h-full" style={{ background: photo.gradient }} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
