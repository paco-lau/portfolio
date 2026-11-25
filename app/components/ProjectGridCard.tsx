"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "../lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectGridCard({ num, title, sub, gradient, banner, categories, pinned, current, i }: Project & { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={`/work/${num}`}
        className="group block rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#e8e3db", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", transition: "box-shadow 0.3s ease" }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)")}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)")}
      >
        <div className="h-72 relative" style={{ background: gradient }}>
          {banner && <Image src={banner} alt={title} fill className="object-cover object-center" />}
          <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))" }} />
          <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
            {pinned && (
              <span className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", backgroundColor: "#F5F0E8", color: "#181a18" }}>
                Featured
              </span>
            )}
            {current && (
              <span className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, padding: "3px 10px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                In Progress
              </span>
            )}
          </div>
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {[...categories].sort().map(cat => (
              <span key={cat} className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, padding: "3px 10px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[#181a18] text-base">{title}</p>
            <p className="text-[#181a18]/40 text-sm mt-1">{sub}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 text-[#181a18]/25 group-hover:text-[#181a18]/70 transition-colors" style={{ width: "20px", height: "20px", transform: "rotate(-45deg)" }}>
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
