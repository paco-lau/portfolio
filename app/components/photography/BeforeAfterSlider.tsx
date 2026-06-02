"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const edit = {
  label: "Golden Hour Portrait",
  beforeGradient: "linear-gradient(135deg, #6b6b5a 0%, #8a8070 50%, #a09580 100%)",
  afterGradient: "linear-gradient(135deg, #c4783a 0%, #d4944e 40%, #e8b878 80%, #f0d0a0 100%)",
  steps: [
    "Warmth +40",
    "Highlights −30",
    "Shadows +20",
    "HSL orange shift",
    "Clarity +10",
  ],
};

function Slider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const getPos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragging.current) setPos(getPos(e.clientX));
  }, [getPos]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (dragging.current) setPos(getPos(e.touches[0].clientX));
  }, [getPos]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-sm select-none cursor-ew-resize w-full"
      style={{ aspectRatio: "3/2" }}
      onMouseDown={() => { dragging.current = true; }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onMouseMove={onMouseMove}
      onTouchStart={() => { dragging.current = true; }}
      onTouchEnd={() => { dragging.current = false; }}
      onTouchMove={onTouchMove}
    >
      {/* After (base) */}
      <div className="absolute inset-0" style={{ background: edit.afterGradient }} />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <div className="absolute inset-0" style={{ background: edit.beforeGradient }} />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#181a18" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 text-xs font-[family-name:var(--font-dm-sans)] bg-black/40 text-white px-2 py-1 rounded-full backdrop-blur-sm pointer-events-none">
        RAW
      </span>
      <span className="absolute top-4 right-4 text-xs font-[family-name:var(--font-dm-sans)] bg-black/40 text-white px-2 py-1 rounded-full backdrop-blur-sm pointer-events-none">
        Edited
      </span>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 md:py-28" style={{ backgroundColor: "#181a18" }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-12">
        <div ref={ref} className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left — text */}
          <div className="min-w-0 w-full md:w-auto" style={{ flex: "0 0 auto", flexBasis: "clamp(200px, 30%, 320px)" }}>
            <motion.p
              className="text-white/30 text-xs tracking-widest uppercase font-[family-name:var(--font-dm-sans)] mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              Before & After
            </motion.p>
            <motion.h2
              className="font-[family-name:var(--font-cormorant)] font-medium text-[#F5F0E8]"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1.05 }}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.1 }}
            >
              Uncovering the <span style={{ color: "#7EC8E3" }}>Hidden</span> Details.
            </motion.h2>

            <motion.div
              className="mt-4 mb-4 h-px"
              style={{ backgroundColor: "rgba(245,240,232,0.15)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.2 }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <span
                className="inline-block font-[family-name:var(--font-dm-sans)] text-white/60 tracking-widest uppercase"
                style={{
                  fontSize: "0.65rem",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,240,232,0.2)",
                  backgroundColor: "rgba(245,240,232,0.06)",
                  color: "rgba(245,240,232,0.6)",
                }}
              >
                Fluent in Adobe Lightroom
              </span>
            </motion.div>

          </div>

          {/* Right — slider */}
          <motion.div
            className="min-w-0 flex-1 w-full md:w-auto"
            style={{ aspectRatio: "3/2" }}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Slider />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
