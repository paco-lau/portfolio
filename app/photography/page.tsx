"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";
import { useRef } from "react";
import ThreeDoors from "../components/photography/ThreeDoors";
import SelectedWork from "../components/photography/SelectedWork";
import BeforeAfterSlider from "../components/photography/BeforeAfterSlider";

const ease = [0.22, 1, 0.36, 1] as const;

function PhotographyCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 px-16 bg-[#F5F0E8] text-center">
      <motion.p
        className="text-[#181a18]/40 text-xs tracking-widest uppercase font-[family-name:var(--font-dm-sans)] mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
      >
        Work Together
      </motion.p>
      <motion.h2
        className="font-[family-name:var(--font-cormorant)] font-medium text-[#181a18]"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        Looking for a Photographer?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25, ease }}
        className="mt-8"
      >
        <motion.div
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(126,200,227,0.45), 0 2px 8px rgba(126,200,227,0.25)" }}
          whileTap={{ scale: 0.97, boxShadow: "0 2px 8px rgba(126,200,227,0.2)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          style={{ display: "inline-block", borderRadius: "9999px", cursor: "pointer" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-dm-sans)] font-medium group"
            style={{
              backgroundColor: "#7EC8E3",
              color: "#181a18",
              padding: "14px 32px",
              borderRadius: "999px",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 20px rgba(126,200,227,0.35)",
            }}
          >
            Book a Session
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function PhotographyPage() {
  return (
    <>
      {/* Cream header + three doors = exactly one viewport height */}
      <div className="flex flex-col" style={{ height: "100svh" }}>
      <section className="bg-[#F5F0E8] px-16 pt-28 pb-10 relative overflow-hidden flex-shrink-0">
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
          Photography
        </motion.h1>
        <motion.p
          className="font-sans text-[#181a18]/50 mt-4"
          style={{ fontSize: "clamp(14px, 1.2vw, 18px)", letterSpacing: "0.05em" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          Portrait · Urban & Landscape · Graduation
        </motion.p>
      </section>

      <ThreeDoors />
      </div>
      <SelectedWork />
      <BeforeAfterSlider />
      <PhotographyCTA />
      <Footer />
    </>
  );
}
