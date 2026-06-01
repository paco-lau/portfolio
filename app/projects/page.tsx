"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";

import firefoxBanner from "../../assets/projects/mozilla-firefox/firefox-banner.png";
import globalBanner from "../../assets/projects/global-inheritance/globalinheritance-banner.png";
import millpondBanner from "../../assets/projects/millpond-research/millpond-banner.png";
import haddeeBanner from "../../assets/projects/haddee/haddee-banner.png";
import gotourBanner from "../../assets/projects/gotourglobal/gotourglobal-banner.png";
import tennisBanner from "../../assets/projects/mhs-merch-design/mhs-tennis-banner.png";
import datagoodBanner from "../../assets/projects/datagood-merch-design/datagood-banner.png";

const CATEGORIES = ["All", "Brand", "Coded", "Merchandise", "Mobile", "UI/UX", "Web"];

const projects = [
  {
    num: "01", title: "UC Berkeley HKSA Logo Re-Design", sub: "Summer 2026",
    gradient: "linear-gradient(135deg, #2B4590 0%, #0D1B4B 100%)",
    banner: undefined,
    categories: ["Brand"], pinned: false, current: true,
  },
  {
    num: "02", title: "UC Berkeley DataGood Merchandise & Stickers", sub: "Spring 2026",
    gradient: "linear-gradient(135deg, #C4622D 0%, #6B2D0F 100%)",
    banner: datagoodBanner,
    categories: ["Merchandise"], pinned: false, current: false,
  },
  {
    num: "03", title: "Global Inheritance Brand & Website Re-Design", sub: "Spring 2026",
    gradient: "linear-gradient(135deg, #2A4A3A 0%, #0F1F18 100%)",
    banner: globalBanner,
    categories: ["Brand", "UI/UX", "Web"], pinned: false, current: false,
  },
  {
    num: "04", title: "GoTourGlobal Mobile App", sub: "Spring 2026",
    gradient: "linear-gradient(135deg, #5C3D6E 0%, #2A1A3A 100%)",
    banner: gotourBanner,
    categories: ["Coded", "Mobile", "UI/UX"], pinned: false, current: false,
  },
  {
    num: "05", title: "Mozilla Firefox Adaptive Performance Extension", sub: "Fall 2025",
    gradient: "linear-gradient(135deg, #A0522D 0%, #4A1A0A 100%)",
    banner: firefoxBanner,
    categories: ["Coded", "UI/UX", "Web"], pinned: true, current: false,
  },
  {
    num: "06", title: "Mill Pond Research Website Re-Design", sub: "Fall 2025",
    gradient: "linear-gradient(135deg, #1A5276 0%, #0A2840 100%)",
    banner: millpondBanner,
    categories: ["Brand", "Coded", "Web", "UI/UX"], pinned: false, current: false,
  },
  {
    num: "07", title: "Milpitas High Varsity Boys Tennis Merchandise", sub: "Spring 2025",
    gradient: "linear-gradient(135deg, #7B3F00 0%, #3A1A00 100%)",
    banner: tennisBanner,
    categories: ["Merchandise"], pinned: false, current: false,
  },
  {
    num: "08", title: "Haddee Website Re-Design", sub: "Summer 2024",
    gradient: "linear-gradient(135deg, #1E4D2B 0%, #0A2010 100%)",
    banner: haddeeBanner,
    categories: ["UI/UX", "Web"], pinned: false, current: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

type Project = typeof projects[number];

function ProjectCard({ num, title, sub, gradient, banner, categories, pinned, current, i }: Project & { i: number }) {
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
          {banner && <Image src={banner} alt={title} fill className="object-cover" />}
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
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [filterKey, setFilterKey] = useState(0);

  const handleFilter = (cat: string) => {
    setActive(cat);
    setFilterKey(k => k + 1);
  };

  const base = active === "All" ? projects : projects.filter(p => p.categories.includes(active));
  const pinned = base.filter(p => p.pinned);
  const rest = base.filter(p => !p.pinned);
  const hasFeatured = pinned.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F0E8] px-16 pt-28 pb-6 relative overflow-hidden">
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
          style={{ fontSize: "clamp(5rem, 13vw, 13rem)", lineHeight: 1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="font-sans text-[#181a18]/50 mt-4"
          style={{ fontSize: "clamp(14px, 1.2vw, 18px)", letterSpacing: "0.05em" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          From Designing to Coding
        </motion.p>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-3 mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className="font-sans cursor-pointer transition-all duration-200"
              style={{
                fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500,
                padding: "7px 18px", borderRadius: "999px",
                border: active === cat ? "1px solid #7EC8E3" : "1px solid rgba(24,26,24,0.2)",
                backgroundColor: active === cat ? "#7EC8E3" : "transparent",
                color: active === cat ? "#181a18" : "#181a18",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects grid */}
      <div className="bg-[#F5F0E8] px-16 pt-6 pb-20" style={{ minHeight: "60vh" }}>

        <motion.div
          key={filterKey}
          className="grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          {[...pinned, ...rest].map((p, i) => <ProjectCard key={p.num} {...p} i={i} />)}
        </motion.div>

        {base.length === 0 && (
          <p className="text-[#181a18]/30 text-sm mt-8">No projects in this category yet.</p>
        )}
      </div>

      <Footer />
    </>
  );
}
