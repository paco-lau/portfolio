"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import ProjectGridCard from "./ProjectGridCard";
import type { Project } from "../lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

/** Title + category filters + project grid, shared by the Design and Data pages. */
export default function WorkIndex({ title, items, categories, emptyText, pinned }: {
  title: string;
  items: Project[];
  /** num of the project to show first, with the Featured badge, on this page */
  pinned: string;
  categories: string[];
  emptyText: string;
}) {
  const [active, setActive] = useState("All");

  const pagePinned = items.map(p => ({ ...p, pinned: p.num === pinned }));
  const base = active === "All" ? pagePinned : pagePinned.filter(p => p.categories.includes(active));
  const sorted = [...base.filter(p => p.pinned), ...base.filter(p => !p.pinned)];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F0E8] px-4 sm:px-8 md:px-12 lg:px-16 pt-28 pb-6 relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
            maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          }}
        />
        <motion.h1
          className="font-bold text-[#181a18]"
          style={{ fontSize: "clamp(2rem, 10vw, 9rem)", lineHeight: 1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          {title}
        </motion.h1>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-3 mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="font-sans cursor-pointer transition-all duration-200"
              style={{
                fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500,
                padding: "7px 18px", borderRadius: "999px",
                border: active === cat ? "1px solid #7EC8E3" : "1px solid rgba(24,26,24,0.2)",
                backgroundColor: active === cat ? "#7EC8E3" : "transparent",
                color: "#181a18",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects grid */}
      <div className="bg-[#F5F0E8] px-4 sm:px-8 md:px-12 lg:px-16 pt-6 pb-20" style={{ minHeight: "60vh" }}>
        {/* key replays the fade-in each time the filter changes */}
        <motion.div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          {sorted.map((p, i) => (
            // Only show tags that belong to this page.
            <ProjectGridCard key={p.num} {...p} categories={p.categories.filter(c => categories.includes(c))} i={i} />
          ))}
        </motion.div>

        {base.length === 0 && (
          <p className="text-[#181a18]/30 text-sm mt-8">{emptyText}</p>
        )}
      </div>

      <Footer />
    </>
  );
}
