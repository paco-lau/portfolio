"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState, type RefObject } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CtaButton from "../components/CtaButton";

// Building blocks shared by the case-study pages under app/work/.

export const ease = [0.22, 1, 0.36, 1] as const;

export const SECTIONS = [
  { id: "role", label: "My Role" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design & Iteration" },
  { id: "final", label: "Final Deliverable" },
];

export function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: "#e8e3db", ...style }}>
      {children}
    </div>
  );
}

/** Role / Team lines under a case study's hero title. */
export function HeroMeta({ role, team }: { role: string; team: string }) {
  return (
    <dl className="font-sans grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mt-8 text-[#181a18]">
      <dt className="text-xs uppercase tracking-[0.15em] font-medium text-[#181a18]/50 pt-0.5">Role</dt>
      <dd>{role}</dd>
      <dt className="text-xs uppercase tracking-[0.15em] font-medium text-[#181a18]/50 pt-0.5">Team</dt>
      <dd>{team}</dd>
    </dl>
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

export function Carousel({ items, aspectRatio, accent }: { items: { src: StaticImageData; alt: string }[]; aspectRatio: string; accent: string }) {
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

/** Closing call to action, so a case study ends on a next step instead of the footer. */
export function CaseStudyEnd() {
  return (
    <section className="bg-[#F5F0E8] flex flex-col items-center gap-6 text-center py-20 px-4">
      <p className="font-bold text-[#181a18]" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.1 }}>
        Like what you see? <span style={{ color: "#7EC8E3" }}>Let&apos;s talk.</span>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <CtaButton href="/contact">Get in touch</CtaButton>
        <Link href="/design" className="font-semibold text-[#181a18]/60 hover:text-[#181a18] transition-colors" style={{ fontSize: "0.9rem", letterSpacing: "0.05em" }}>
          More design work
        </Link>
      </div>
    </section>
  );
}

/** Fixed scroll-spy rail: highlights the section in view and hides over the footer. */
export function SectionRail({ accent, sectionRefs, footerWrapRef }: {
  accent: string;
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
            style={{ top: 14, width: 5, height: `calc((100% - 28px) * ${active / (SECTIONS.length - 1)})`, backgroundColor: accent }}
          />
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="relative flex items-center justify-center cursor-pointer"
              aria-label={`Go to ${s.label}`}
            >
              <span
                className="absolute right-full mr-4 font-sans transition-all duration-300"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 800,
                  color: overFooter ? "#F5F0E8" : "#181a18",
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "translateX(0)" : "translateX(6px)",
                  pointerEvents: active === i ? "auto" : "none",
                  textShadow: overFooter ? "none" : "0 1px 12px rgba(245,240,232,0.9), 0 1px 3px rgba(245,240,232,0.9)",
                  backgroundColor: overFooter ? "#181a18" : "transparent",
                  padding: overFooter ? "8px 16px" : 0,
                  borderRadius: "999px",
                  boxShadow: overFooter ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
                  width: "max-content",
                  maxWidth: "140px",
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
