"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2021",
    title: "First Camera",
    desc: "Started with a Sony a6000. Shot everything in auto, learned the basics of composition.",
    tag: "Beginner",
    color: "#C8C87E",
  },
  {
    year: "2022",
    title: "Manual Mode",
    desc: "Switched fully to manual. Started understanding exposure triangle — portraits became my focus.",
    tag: "Developing",
    color: "#C8957E",
  },
  {
    year: "2023",
    title: "Street & Urban",
    desc: "Moved to a Fujifilm X-T4. Discovered street photography in SF and began post-processing in Lightroom.",
    tag: "Intermediate",
    color: "#7EC8E3",
  },
  {
    year: "2024",
    title: "Intentional Work",
    desc: "Started shooting with intention — developing a personal style, consistent editing presets, and curated series.",
    tag: "Advanced",
    color: "#7EC8E3",
  },
  {
    year: "2025",
    title: "Now",
    desc: "Balancing landscape, portrait, and street. Working on a long-form documentary project.",
    tag: "Ongoing",
    color: "#181a18",
  },
];

function MilestoneItem({ m, i }: { m: typeof milestones[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = i % 2 === 0;

  return (
    <div ref={ref} className={`flex items-center gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Content */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className={`max-w-xs ${isLeft ? "ml-auto pr-10" : "pl-10"}`}>
          <span
            className="inline-block text-xs font-[family-name:var(--font-dm-sans)] px-2 py-0.5 rounded-full mb-2"
            style={{
              backgroundColor: m.color === "#181a18" ? "#181a18" : `${m.color}22`,
              color: m.color === "#181a18" ? "#F5F0E8" : m.color,
              border: `1px solid ${m.color}44`,
            }}
          >
            {m.tag}
          </span>
          <h3
            className="font-[family-name:var(--font-cormorant)] font-medium text-[#181a18] mb-1"
            style={{ fontSize: "1.4rem" }}
          >
            {m.title}
          </h3>
          <p className="text-[#181a18]/60 text-sm font-[family-name:var(--font-dm-sans)] leading-relaxed">
            {m.desc}
          </p>
        </div>
      </motion.div>

      {/* Node */}
      <div className="relative flex flex-col items-center flex-shrink-0" style={{ width: "80px" }}>
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, ease: "backOut", delay: 0.2 }}
        >
          <div
            className="w-4 h-4 rounded-full border-2"
            style={{ backgroundColor: m.color, borderColor: "#F5F0E8", boxShadow: `0 0 0 4px ${m.color}33` }}
          />
          <span
            className="mt-2 font-[family-name:var(--font-bebas)] text-[#181a18]"
            style={{ fontSize: "1.1rem", letterSpacing: "0.05em" }}
          >
            {m.year}
          </span>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />
    </div>
  );
}

export default function ProgressTimeline() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="py-32 px-6" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-20">
          <motion.p
            className="text-[#181a18]/40 text-xs tracking-widest uppercase font-[family-name:var(--font-dm-sans)] mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            The journey
          </motion.p>
          <motion.h2
            className="font-[family-name:var(--font-cormorant)] font-medium text-[#181a18]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Four years behind the lens.
          </motion.h2>
          <motion.div
            className="mt-4 h-px bg-[#181a18]/20"
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: "#181a18", opacity: 0.12 }}
          />

          <div className="flex flex-col gap-14">
            {milestones.map((m, i) => (
              <MilestoneItem key={m.year} m={m} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
