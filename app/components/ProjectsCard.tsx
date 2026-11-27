"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Footer from "./Footer";

import grad26Banner from "../../assets/photography/grad-26-banner.jpg";
import { projects as allProjects, DATA_FILTERS, DESIGN_CATEGORIES } from "../lib/projects";
import Arrow from "./Arrow";
import CtaButton from "./CtaButton";

// The projects pinned on the Data and Design pages, pulled from the shared list so dates
// and titles stay in one place; tags limited to the page each one is pinned on.
const featured = (num: string, tags: string[]) => {
  const p = allProjects.find(p => p.num === num)!;
  return { ...p, pinned: true, categories: p.categories.filter(c => tags.includes(c)) };
};

const projects = [
  featured("05", DESIGN_CATEGORIES),
  featured("12", DATA_FILTERS),
  {
    num: "photography", title: "UC Berkeley Class of '26", sub: "Spring 2026",
    gradient: "linear-gradient(135deg, #2A4A3A 0%, #0F1F18 100%)",
    banner: grad26Banner,
    categories: ["Graduation Photography"],
    pinned: false, current: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center gap-6 text-center py-20 overflow-hidden -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16"
      style={{ backgroundColor: "#F5F0E8", marginTop: "5rem", marginBottom: "-5rem" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }}
      />
      <motion.p
        className="relative font-bold"
        style={{ color: "#181a18", fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.1 }}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, ease }}
      >
        Impressed?{" "}
        <span style={{ color: "#7EC8E3" }}>Let&apos;s talk.</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, delay: 0.2, ease }}
      >
        <CtaButton href="/contact">Get in touch</CtaButton>
      </motion.div>
    </div>
  );
}

export default function ProjectsCard() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [underlined, setUnderlined] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setUnderlined(entry.isIntersecting); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects"
      className="rounded-t-[48px] px-4 sm:px-8 md:px-12 lg:px-16 pt-14 pb-20"
      style={{
        backgroundColor: "#2a2c2a",
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
      }}
    >
      <h2
        ref={headingRef}
        className="font-bold text-white mb-10 whitespace-nowrap"
        style={{ fontSize: "clamp(1.25rem, 6.8vw, 9rem)", lineHeight: 1 }}
      >
        Some of my recent{" "}
        <span className="relative inline-block text-[#7EC8E3]">
          wins
          <span
            className="absolute left-0 bottom-0 h-[clamp(3px,0.8vw,8px)] rounded-full"
            style={{
              width: underlined ? "100%" : "0%",
              backgroundColor: "#7EC8E3",
              transition: "width 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.2s",
            }}
          />
        </span>
        :
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map(({ num, title, sub, gradient, banner, categories, pinned, current }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.1, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* radius 24 = badge pill radius (~12) + its 12px inset, so the corners nest */}
            <Link
              href={num === "photography" ? "/photography/graduation" : `/work/${num}`}
              className="group block rounded-[24px] overflow-hidden"
              style={{ backgroundColor: "#363836", boxShadow: "0 2px 8px rgba(0,0,0,0.3)", transition: "box-shadow 0.3s ease" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.5)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)")}
            >
              {/* Image area */}
              <div className="h-72 relative" style={{ background: gradient }}>
                {banner && <Image src={banner} alt={title} fill className="object-cover" />}
                <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))" }} />
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                  {pinned && (
                    <span className="font-sans" style={{ fontSize: "12px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px", backgroundColor: "#F5F0E8", color: "#181a18" }}>
                      Featured
                    </span>
                  )}
                  {current && (
                    <span className="font-sans" style={{ fontSize: "12px", fontWeight: 500, padding: "3px 10px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                      In Progress
                    </span>
                  )}
                </div>
                {categories.length > 0 && (
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {[...categories].sort().map(cat => (
                      <span key={cat} className="font-sans" style={{ fontSize: "12px", fontWeight: 500, padding: "3px 10px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Text row */}
              <div className="p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-white text-base">{title}</p>
                  <p className="text-white/40 text-sm mt-1">{sub}</p>
                </div>
                <Arrow head size={28} className="relative right-1 text-white/25 group-hover:text-white/70" />
              </div>
            </Link>
          </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <div className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16" style={{ marginTop: "5rem", marginBottom: "-5rem" }}>
        <Footer />
      </div>
    </div>
  );
}
