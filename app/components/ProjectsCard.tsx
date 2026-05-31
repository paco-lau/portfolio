"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01", title: "Title Title Title Title Title", sub: "Subtitle Subtitle Subtitle Subtitle",
    gradient: "linear-gradient(135deg, #2B4590 0%, #0D1B4B 100%)",
  },
  {
    num: "02", title: "Title Title Title Title Title", sub: "Subtitle Subtitle Subtitle Subtitle",
    gradient: "linear-gradient(135deg, #C4622D 0%, #6B2D0F 100%)",
  },
  {
    num: "03", title: "Title Title Title Title Title", sub: "Subtitle Subtitle Subtitle Subtitle",
    gradient: "linear-gradient(135deg, #2A4A3A 0%, #0F1F18 100%)",
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
      id="design"
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
        {projects.map(({ num, title, sub, gradient }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <Link
              href={`/work/${i + 1}`}
              className="group block rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#363836" }}
            >
              {/* Image area */}
              <div className="h-72 relative" style={{ background: gradient }}>
                <span
                  className="absolute top-3 left-5 font-bold select-none pointer-events-none"
                  style={{ fontSize: "72px", lineHeight: 1, color: "rgba(255,255,255,0.07)" }}
                >
                  {num}
                </span>
              </div>

              {/* Text row */}
              <div className="p-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-white text-sm">{title}</p>
                  <p className="text-white/40 text-xs mt-1">{sub}</p>
                </div>
                <span
                  className="flex-shrink-0 text-white/25 group-hover:text-white/70 transition-colors"
                  style={{ fontSize: "20px" }}
                >
                  ↗
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer
        id="contact"
        className="flex items-end justify-between font-sans"
        style={{ backgroundColor: "#181a18", margin: "5rem -4rem -5rem", padding: "3rem 4rem" }}
      >
        <div className="flex flex-col gap-2">
          <span className="text-white font-medium">Paco Lau</span>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#design" className="hover:text-white transition-colors">Design</a>
            <a href="#photography" className="hover:text-white transition-colors">Photography</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-sm text-white/40">© {new Date().getFullYear()} Paco Lau</span>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="mailto:pacolau@berkeley.edu" className="hover:text-white transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/pacolau/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
