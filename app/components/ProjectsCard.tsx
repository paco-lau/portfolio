"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "./Footer";

import firefoxBanner from "../../assets/projects/mozilla-firefox/firefox-banner.png";

const projects = [
  {
    num: "05", title: "Mozilla Firefox Adaptive Performance Extension", sub: "Fall 2025",
    gradient: "linear-gradient(135deg, #A0522D 0%, #4A1A0A 100%)",
    banner: firefoxBanner,
    categories: ["Coded", "UI/UX", "Web"],
    pinned: true, current: false,
  },
  {
    num: "01", title: "UC Berkeley HKSA Logo Re-Design", sub: "Summer 2026",
    gradient: "linear-gradient(135deg, #2B4590 0%, #0D1B4B 100%)",
    banner: undefined,
    categories: ["Brand"],
    pinned: false, current: true,
  },
  {
    num: "photography", title: "UC Berkeley Class of '26", sub: "Spring 2026",
    gradient: "linear-gradient(135deg, #2A4A3A 0%, #0F1F18 100%)",
    banner: undefined,
    categories: ["Graduation Photography"],
    pinned: false, current: false,
  },
];

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
      className="rounded-t-[48px] px-16 pt-14 pb-20"
      style={{
        backgroundColor: "#2a2c2a",
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
      }}
    >
      <h2
        ref={headingRef}
        className="font-bold text-white mb-10"
        style={{ fontSize: "clamp(3rem, 9vw, 9rem)", lineHeight: 1 }}
      >
        I help clients{" "}
        <span className="relative inline-block text-sky-300">
          win
          <span
            className="absolute left-0 bottom-0 h-[8px] rounded-full"
            style={{
              width: underlined ? "100%" : "0%",
              backgroundColor: "#7dd3fc",
              transition: "width 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: "0.2s",
            }}
          />
        </span>{" "}
        on projects like:
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {projects.map(({ num, title, sub, gradient, banner, categories, pinned, current }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/work/${i + 1}`}
              className="group block rounded-2xl overflow-hidden"
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
                {categories.length > 0 && (
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {[...categories].sort().map(cat => (
                      <span key={cat} className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, padding: "3px 10px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)" }}>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 text-white/25 group-hover:text-white/70 transition-colors" style={{ width: "20px", height: "20px", transform: "rotate(-45deg)" }}>
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </div>
            </Link>
          </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="relative mt-20 flex flex-col items-center gap-6 text-center py-20 overflow-hidden"
        style={{ backgroundColor: "#F5F0E8", margin: "5rem -4rem -5rem" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
        />
        <p
          className="relative font-bold"
          style={{ color: "#181a18", fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.1 }}
        >
          Impressed?{" "}
          <span style={{ color: "#7EC8E3" }}>Let's talk.</span>
        </p>
        <motion.div
          className="relative cursor-pointer"
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(126,200,227,0.45), 0 2px 8px rgba(126,200,227,0.25)" }}
          whileTap={{ scale: 0.97, boxShadow: "0 2px 8px rgba(126,200,227,0.2)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          style={{ borderRadius: "9999px" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-semibold rounded-full text-[#181a18] group"
            style={{ backgroundColor: "#7EC8E3", padding: "14px 32px", fontSize: "0.9rem", letterSpacing: "0.05em" }}
          >
            Get in touch
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <div style={{ margin: "5rem -4rem -5rem" }}>
        <Footer />
      </div>
    </div>
  );
}
