"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState, type RefObject } from "react";
import { motion } from "framer-motion";
import ProjectGridCard from "../components/ProjectGridCard";
import { projects, DATA_FILTERS, DESIGN_CATEGORIES, type Project } from "../lib/projects";

// Building blocks shared by the case-study pages under app/work/.

export const ease = [0.22, 1, 0.36, 1] as const;

export const SECTIONS = [
  { id: "role", label: "My Role" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design &\nIteration" },
  { id: "final", label: "Final\nProduct" },
];

export function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: "#e8e3db", ...style }}>
      {children}
    </div>
  );
}

/** Role / Team lines under a case study's hero title. */
export function HeroMeta({ role, team }: { role: string; team?: string | string[] }) {
  // each label is one value line tall (h-6 = 16px × 1.5), so it centres on the first line;
  // row spacing is padding, not gap, so the divider line between the columns stays unbroken
  return (
    <dl className="font-sans grid grid-cols-[auto_1fr] items-start gap-x-6 mt-8 text-[#181a18]">
      <dt className="h-6 my-1 flex items-center text-xs uppercase tracking-[0.15em] font-medium text-[#181a18]/50">Role</dt>
      <dd className="border-l border-[#181a18]/20 pl-6 py-1">{role}</dd>
      {team && <>
        <dt className="h-6 my-1 flex items-center text-xs uppercase tracking-[0.15em] font-medium text-[#181a18]/50">Team</dt>
        <dd className="border-l border-[#181a18]/20 pl-6 py-1">{[team].flat().map(t => <span key={t} className="block">{t}</span>)}</dd>
      </>}
    </dl>
  );
}

/** Case-study hero: badge, title, role/team on the left; banner over a slow accent glow on the right. */
export function CaseStudyHero({ badge, title, role, team, banner, accent, badgeText = "#F5F0E8" }: {
  badge: string; title: string; role: string; team?: string | string[];
  banner: StaticImageData; accent: string; badgeText?: string;
}) {
  return (
    <section
      className="relative w-full h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: "#F5F0E8",
        backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.20) 1.5px, transparent 1.5px)",
        backgroundSize: "36px 36px",
      }}
    >
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <span
            className="font-sans inline-block"
            style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, padding: "6px 16px", borderRadius: "999px", backgroundColor: accent, color: badgeText }}
          >
            {badge}
          </span>
          <h1 className="font-bold mt-6" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.08, color: "#181a18" }}>{title}</h1>
          <HeroMeta role={role} team={team} />
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 1040, height: 680, left: "50%", top: "50%", marginLeft: -520, marginTop: -340, zIndex: 0,
              background: `radial-gradient(ellipse, ${accent}59 0%, ${accent}1a 45%, transparent 70%)`,
            }}
            animate={{ scale: [1, 1.08, 0.95, 1] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ zIndex: 1 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <Image src={banner} alt={title} priority className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Carousel({ items, aspectRatio, accent }: { items: { src: StaticImageData | string; alt: string }[]; aspectRatio: string; accent: string }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const go = (i: number) => setIndex((i + total) % total);

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio, backgroundColor: "#F5F0E8" }}>
        <Image src={items[index].src} alt={items[index].alt} fill style={{ objectFit: "contain" }} />
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous"
          className="flex items-center justify-center rounded-full cursor-pointer"
          style={{ width: 32, height: 32, backgroundColor: "#e8e3db", color: "#181a18" }}
        >
          &#8249;
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{ width: i === index ? 20 : 8, height: 8, backgroundColor: i === index ? accent : "#B7B2A8" }}
            />
          ))}
        </div>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next"
          className="flex items-center justify-center rounded-full cursor-pointer"
          style={{ width: 32, height: 32, backgroundColor: "#e8e3db", color: "#181a18" }}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

/** "Check out my other projects": the 3 projects sharing the most tags with this one. */
export function CaseStudyEnd({ num }: { num: string }) {
  const tags = projects.find(p => p.num === num)?.categories ?? [];
  // Show the tags of the tab this project lives on (same rule as /work/[id]: design unless data-only).
  const pageTags = tags.some(c => DESIGN_CATEGORIES.includes(c)) ? DESIGN_CATEGORIES : DATA_FILTERS;
  const shared = (p: Project) => p.categories.filter(c => tags.includes(c)).length;
  // sort is stable, so ties keep the list's newest-first order
  const similar = projects.filter(p => p.num !== num).sort((a, b) => shared(b) - shared(a)).slice(0, 3);
  return (
    <section className="bg-[#F5F0E8] pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 pt-10 pb-20">
      <h2 className="font-bold mb-8" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Check out my other projects:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {similar.map((p, i) => <ProjectGridCard key={p.num} {...p} categories={p.categories.filter(c => pageTags.includes(c))} i={i} />)}
      </div>
    </section>
  );
}

/** Fixed scroll-spy rail: highlights the section in view and hides over the footer. */
export function SectionRail({ accent, sectionRefs, footerWrapRef, sections = SECTIONS }: {
  accent: string;
  sections?: { id: string; label: string }[];
  sectionRefs: RefObject<(HTMLElement | null)[]>;
  footerWrapRef: RefObject<HTMLDivElement | null>;
}) {
  const [active, setActive] = useState(0);
  const [overFooter, setOverFooter] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((el) => el && sectionObserver.observe(el));

    const footerObserver = new IntersectionObserver(
      ([entry]) => setOverFooter(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    if (footerWrapRef.current) footerObserver.observe(footerWrapRef.current);

    return () => {
      sectionObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [sectionRefs, footerWrapRef]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Scroll-spy rail */}
      <div className="hidden md:flex fixed right-6 top-[18vh] bottom-[18vh] z-40 flex-col items-center">
        <div className="relative flex-1 flex flex-col justify-between items-center">
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: 14, bottom: 14, width: 5, backgroundColor: "#181a18", opacity: 0.25 }}
          />
          {/* progress fill: the track fills up to the current section */}
          <div
            className="absolute left-1/2 -translate-x-1/2 transition-[height] duration-500"
            style={{ top: 14, width: 5, height: `calc((100% - 28px) * ${active / (sections.length - 1)})`, backgroundColor: accent }}
          />
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="relative flex items-center justify-center cursor-pointer"
              aria-label={`Go to ${s.label}`}
            >
              <span
                className="absolute right-full mr-4 font-sans transition-all duration-300"
                style={{
                  // the other sections stay readable as a small, dimmed table of contents
                  // (hidden over the footer, where each label becomes a dark pill)
                  fontSize: active === i ? "13px" : "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: active === i ? 800 : 600,
                  color: overFooter ? "#F5F0E8" : "#181a18",
                  opacity: active === i ? 1 : overFooter ? 0 : 0.4,
                  pointerEvents: active === i || !overFooter ? "auto" : "none",
                  textShadow: overFooter ? "none" : "0 1px 12px rgba(245,240,232,0.9), 0 1px 3px rgba(245,240,232,0.9)",
                  backgroundColor: overFooter ? "#181a18" : "transparent",
                  padding: overFooter ? "8px 16px" : 0,
                  borderRadius: "999px",
                  boxShadow: overFooter ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
                  width: "max-content",
                  maxWidth: "140px",
                  whiteSpace: "pre-line", // honours the \n in two-line labels
                  textAlign: "right",
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </span>
              <span
                className="rounded-full transition-all duration-300"
                style={{
                  width: active === i ? 30 : 18,
                  height: active === i ? 30 : 18,
                  backgroundColor: i <= active ? accent : "#B7B2A8",
                  boxShadow: active === i ? `0 0 0 7px ${accent}40` : "0 0 0 4px #F5F0E8",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
