"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

import firefoxBanner from "../../../assets/projects/mozilla-firefox/firefox-banner.png";
import finalPopup from "../../../assets/projects/mozilla-firefox/final-deliverable-popup.png";
import settingsPrototype from "../../../assets/projects/mozilla-firefox/settings-prototype.png";
import affinityDiagram from "../../../assets/projects/mozilla-firefox/affinity-diagram.jpeg";
import impactEffort from "../../../assets/projects/mozilla-firefox/impact-effort-matrix.jpeg";
import wireframes from "../../../assets/projects/mozilla-firefox/wireframes.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

const SECTIONS = [
  { id: "research", label: "Research" },
  { id: "design", label: "Design & Iteration" },
  { id: "final", label: "Final Deliverable" },
];

function Kicker({ num }: { num: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span
        className="font-bold"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1, color: "#FF7139" }}
      >
        {num}
      </span>
      <span className="h-px w-10" style={{ backgroundColor: "rgba(24,26,24,0.2)" }} />
    </div>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ backgroundColor: "#e8e3db", ...style }}
    >
      {children}
    </div>
  );
}

function PieStat({ pct, label }: { pct: number; label: string }) {
  const r = 50;
  const c = 2 * Math.PI * r;
  const filled = (pct / 100) * c;
  return (
    <div className="flex items-center gap-5">
      <div className="relative flex-shrink-0" style={{ width: 108, height: 108 }}>
        <svg viewBox="0 0 120 120" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
          <circle cx="60" cy="60" r={r} fill="none" stroke="#e3ddd1" strokeWidth="14" />
          <circle
            cx="60" cy="60" r={r} fill="none"
            stroke="#7EC8E3" strokeWidth="14" strokeLinecap="round"
            strokeDasharray={`${filled} ${c}`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-bold" style={{ fontSize: "1.4rem", color: "#181a18" }}>{pct}%</span>
        </div>
      </div>
      <p className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.6)", maxWidth: "20ch", lineHeight: 1.5 }}>{label}</p>
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

export default function FirefoxCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const heroRef = useRef<HTMLElement | null>(null);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [overHero, setOverHero] = useState(true);
  const [overFooter, setOverFooter] = useState(false);
  const overBusyBg = overHero || overFooter;

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

    const heroObserver = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    if (heroRef.current) heroObserver.observe(heroRef.current);

    const footerObserver = new IntersectionObserver(
      ([entry]) => setOverFooter(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    if (footerWrapRef.current) footerObserver.observe(footerWrapRef.current);

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

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
                  color: overBusyBg ? "#F5F0E8" : "#181a18",
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? "translateX(0)" : "translateX(6px)",
                  pointerEvents: active === i ? "auto" : "none",
                  textShadow: overBusyBg ? "none" : "0 1px 12px rgba(245,240,232,0.9), 0 1px 3px rgba(245,240,232,0.9)",
                  backgroundColor: overBusyBg ? "#181a18" : "transparent",
                  padding: overBusyBg ? "8px 16px" : 0,
                  borderRadius: "999px",
                  boxShadow: overBusyBg ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
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
                  backgroundColor: active === i ? "#FF7139" : "#B7B2A8",
                  boxShadow: active === i ? "0 0 0 7px rgba(255,113,57,0.25)" : "0 0 0 4px #F5F0E8",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <Image src={firefoxBanner} alt="Mozilla Firefox Adaptive Performance Extension" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,6,2,0.35) 0%, rgba(10,6,2,0.55) 60%, rgba(10,6,2,0.85) 100%)" }} />

        <div className="absolute inset-0 flex flex-col justify-end pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 pb-16 pt-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <h1 className="font-bold text-white whitespace-nowrap" style={{ fontSize: "clamp(1.5rem, 4.4vw, 5.5rem)", lineHeight: 1.05 }}>
              Adaptive Performance Extension
            </h1>
            <p className="font-sans mt-4" style={{ fontSize: "clamp(14px, 1.4vw, 20px)", color: "rgba(255,255,255,0.65)" }}>
              Mozilla &middot; Fall 2025
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-[#F5F0E8]">
        {/* Guiding question */}
        <section className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-12 md:py-16">
          <FadeIn>
            <p className="font-sans mb-4" style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>
              Guiding Question
            </p>
            <p className="font-sans" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              Mozilla was developing a new product called Adaptive Performance &mdash; its main uses were to minimize energy consumption and personalize browser performance and power usage. However, the team was concerned the product itself wouldn&rsquo;t align with Firefox&rsquo;s branding or its users&rsquo; interests. Hence, the team created this guiding question:
            </p>
            <h2 className="font-bold mt-8" style={{ fontSize: "clamp(1.5rem, 3.6vw, 3rem)", lineHeight: 1.25 }}>
              How might we design and implement an Adaptive Performance feature within Firefox&rsquo;s web browser that promotes equitable and resource-conscious internet usage?
            </h2>
          </FadeIn>
        </section>

        {/* ---------------- RESEARCH ---------------- */}
        <section
          id="research"
          ref={el => { sectionRefs.current[0] = el; }}
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-12 md:py-16"
        >
          <FadeIn>
            <Kicker num="01" />
            <h2 className="font-bold mb-14" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Research</h2>
          </FadeIn>

          {/* Methods */}
          <FadeIn>
            <p className="font-sans mb-16" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              The team ran a competitive and internal audit, an 88-response user survey, and 15 user interviews, then profiled hardware limitations across low-, mid-, and high-end machines. Together, these methods surfaced how people actually use tabs, extensions, and power settings day to day. From there, the team distilled a few key metrics:
            </p>
          </FadeIn>

          {/* Key metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { pct: 47.7, label: "of users have 6–15 tabs open at once on their browsers" },
              { pct: 58, label: "of users have extensions mildly integrated into their workflow" },
              { pct: 87.5, label: "want simple device statistics displayed" },
            ].map((k, i) => (
              <FadeIn key={k.pct} delay={i * 0.08}>
                <PieStat pct={k.pct} label={k.label} />
              </FadeIn>
            ))}
          </div>

          {/* Design implications */}
          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Design Implications &mdash; What users want in Adaptive Performance</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { t: "Performance", d: "Customizable balance of speed and battery life for all workflows." },
              { t: "Visibility", d: "Unified controls that bring backend data to everyone with an intuitive interface." },
              { t: "Impact", d: "Maintaining the brand promise of prioritizing privacy, environment, and users over profit." },
            ].map((c, i) => (
              <FadeIn key={c.t} delay={i * 0.08}>
                <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(24,26,24,0.15)" }}>
                  <p className="font-semibold mb-2" style={{ fontSize: "16px", color: "#7EC8E3" }}>{c.t}</p>
                  <p className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.6 }}>{c.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Synthesis & ideation */}
          <FadeIn>
            <div className="rounded-2xl overflow-hidden mb-3 max-w-md mr-auto shadow-lg">
              <Image src={affinityDiagram} alt="Affinity diagram organizing user concerns into categories" className="w-full h-auto" />
            </div>
            <p className="font-sans mb-16 max-w-md mr-auto" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)" }}>Affinity diagrams organizing user concerns into categories for the solutions to target.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <FadeIn>
              <p className="font-sans mb-4" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Design Goals</p>
              <ul className="space-y-4">
                {["Balancing various use cases", "Seamless integration and low maintenance"].map(g => (
                  <li key={g} className="font-sans flex gap-3" style={{ fontSize: "15px" }}>
                    <span style={{ color: "#7EC8E3" }}>&bull;</span> {g}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans mb-4" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Solutions</p>
              <ul className="space-y-4">
                {["Simplicity & easy interaction", "Proactive & personalized control", "Color coding & digestible statistics"].map(g => (
                  <li key={g} className="font-sans flex gap-3" style={{ fontSize: "15px" }}>
                    <span style={{ color: "#7EC8E3" }}>&bull;</span> {g}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="rounded-2xl overflow-hidden mb-3 max-w-md ml-auto shadow-lg">
              <Image src={impactEffort} alt="Impact / effort matrix used to prioritize feature ideas" className="w-full h-auto" />
            </div>
            <p className="font-sans mb-16 max-w-md ml-auto text-right" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)" }}>Impact/effort matrix used to determine feasibility and user impact across data-driven ideation.</p>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Product Features</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "One-Click Customizability",
              "Tangible Energy Impact",
              "Performance Diagnostics",
              "Active Tab Monitoring",
              "CPU & Memory Popups",
              "Modular Settings",
            ].map((f, i) => (
              <FadeIn key={f} delay={i * 0.05}>
                <Card>
                  <p className="font-sans mb-2" style={{ fontSize: "12px", color: "rgba(24,26,24,0.4)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-semibold" style={{ fontSize: "15px" }}>{f}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------- DESIGN & ITERATION ---------------- */}
        <section
          id="design"
          ref={el => { sectionRefs.current[1] = el; }}
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-12 md:py-16"
        >
          <FadeIn>
            <Kicker num="02" />
            <h2 className="font-bold mb-14" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Design &amp; Iteration</h2>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl overflow-hidden mb-3 max-w-md mr-auto shadow-lg">
              <Image src={wireframes} alt="Low-fidelity wireframes of the extension popup and settings" className="w-full h-auto" />
            </div>
            <p className="font-sans mb-16 max-w-md mr-auto" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)" }}>Wireframing & lo-fidelity prototypes exploring visual hierarchy and interaction.</p>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-14" style={{ fontSize: "14px", color: "rgba(24,26,24,0.5)" }}>Feedback gathered from 8 follow-up user interviews shaped the next round of design.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-semibold mb-4" style={{ fontSize: "15px", color: "#2A6F4A" }}>Positive Reactions</p>
                <ul className="space-y-2">
                  {["Clean UI", "Simple usability", "Satisfying tab controls", "Useful in everyday tasks", "Ideal for heavy tab users"].map(p => (
                    <li key={p} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{p}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-semibold mb-4" style={{ fontSize: "15px", color: "#A0522D" }}>Pain Points</p>
                <ul className="space-y-2">
                  {["Technical language barrier", "Confusion around AP toggle", "Weak AP transparency", "Lack of multi-window support"].map(p => (
                    <li key={p} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{p}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Opportunities</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { t: "Multi-Window Control", d: ["Oversight over tab usage across windows", "Clear, visible performance diagnostics across all tabs"] },
              { t: "Information Clarity", d: ["Clearer feedback after actions", "Explanation of passive processes"] },
              { t: "Increased Automation", d: ["Auto-sleeping tabs", "Background tab optimization", "Adjustable performance thresholds"] },
            ].map((o, i) => (
              <FadeIn key={o.t} delay={i * 0.08}>
                <div className="rounded-2xl p-6 border" style={{ borderColor: "rgba(24,26,24,0.15)" }}>
                  <p className="font-semibold mb-3" style={{ fontSize: "15px" }}>{o.t}</p>
                  <ul className="space-y-1.5">
                    {o.d.map(line => (
                      <li key={line} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.55)", lineHeight: 1.5 }}>{line}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mid-fi settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn>
              <p className="font-sans mb-4" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Mid-Fi Prototype</p>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Refining Settings</h3>
              <p className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.7, maxWidth: "42ch" }}>
                Based on feedback, performance levels, advanced display details, automatic tab sleeping thresholds, and dark mode were consolidated into one clear settings surface.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-[340px] mx-auto">
                <Image src={settingsPrototype} alt="Mid-fidelity settings prototype for the Adaptive Performance extension" className="w-full h-auto" />
              </div>
            </FadeIn>
          </div>

          {/* Attention prioritization + data analysis */}
          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Attention Prioritization Algorithm</p>
            <p className="font-sans mb-8" style={{ fontSize: "14px", color: "rgba(24,26,24,0.6)", maxWidth: "60ch", lineHeight: 1.7 }}>
              Behavior patterns, device context, and domain sensitivity feed the algorithm that generates each tab&rsquo;s suggested action.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-semibold mb-3" style={{ fontSize: "15px" }}>Performance Listener</p>
                <ul className="space-y-1.5">
                  {["Video buffering", "Memory limit reached", "Increased FCP/LCP", "Framerate drops", "Event handler latency", "Increased script execution time"].map(l => (
                    <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.55)" }}>{l}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-semibold mb-3" style={{ fontSize: "15px" }}>Resource Listener</p>
                <ul className="space-y-1.5">
                  {["Dormancy patterns", "Temporal/behavioral patterning", "Domain clusters", "Background media", "“One-time” content recognition"].map(l => (
                    <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.55)" }}>{l}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Runtime Deployment &mdash; 4 Benchmarks · 5 Machines · 475 Datapoints</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                t: "Low-end", sub: "≤12 GB RAM",
                p: ["DOM-heavy operations are 9–21x slower", "React/Angular/Vue tabs consume disproportionate CPU", ">10–15 open tabs cause cascading degradation"],
                a: ["Aggressively suspend tabs with heavy DOM", "Prioritize closing jQuery-heavy legacy sites", "Target tabs with active animations/auto-refresh"],
              },
              {
                t: "Mid-end", sub: "12–16 GB RAM",
                p: ["Graphics workloads are the primary bottleneck", "JavaScript 2–3x slower than high-end", "GPU and CPU compete for shared memory bandwidth"],
                a: ["Suspend tabs with canvas/WebGL content", "Target video streaming tabs when not watched", "Close tabs with auto-playing background media"],
              },
              {
                t: "High-end", sub: ">16 GB RAM",
                p: ["Handles 30–50+ tabs before degradation", "Graphics needs throttling without a discrete GPU", "Multi-threaded workloads shine"],
                a: ["Less aggressive suspension, prioritize UX", "Focus on memory consumption over CPU", "Prioritize user organization over performance"],
              },
            ].map((b, i) => (
              <FadeIn key={b.t} delay={i * 0.08}>
                <div className="rounded-2xl p-6 border h-full" style={{ borderColor: "rgba(24,26,24,0.15)" }}>
                  <p className="font-semibold" style={{ fontSize: "16px" }}>{b.t}</p>
                  <p className="font-sans mb-4" style={{ fontSize: "12px", color: "rgba(24,26,24,0.45)" }}>{b.sub}</p>
                  <p className="font-sans mb-1" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7EC8E3" }}>Priorities</p>
                  <ul className="space-y-1 mb-4">
                    {b.p.map(l => <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>{l}</li>)}
                  </ul>
                  <p className="font-sans mb-1" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7EC8E3" }}>Suggested Actions</p>
                  <ul className="space-y-1">
                    {b.a.map(l => <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>{l}</li>)}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------- FINAL DELIVERABLE ---------------- */}
        <section
          id="final"
          ref={el => { sectionRefs.current[2] = el; }}
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-12 md:py-16"
        >
          <FadeIn>
            <Kicker num="03" />
            <h2 className="font-bold mb-14" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Final Deliverable</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-[380px] mx-auto lg:mx-0">
                <Image src={finalPopup} alt="Final Adaptive Performance extension popup showing suggested actions, browser usage, and all tabs" className="w-full h-auto" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-sans mb-6" style={{ fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.7, maxWidth: "42ch" }}>
                The shipped extension surfaces real-time memory and CPU savings, proactively suggests which tabs to sleep or close, and keeps every open tab searchable in one place &mdash; built and demoed live with the Mozilla team.
              </p>
              <ul className="space-y-3">
                {["AP Activity Summary", "Suggested Actions", "Active Memory & CPU Monitoring", "Tab Sort", "Tab Sleeping & Closing"].map(f => (
                  <li key={f} className="font-sans flex items-center gap-3" style={{ fontSize: "15px" }}>
                    <span
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ width: 22, height: 22, backgroundColor: "#181a18", color: "#F5F0E8" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: 12, height: 12 }}>
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <p className="font-sans mt-24" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)", lineHeight: 1.8 }}>
              A collaboration between ICB and Mozilla &mdash; Fall 2025. Project Leads: Daniel Lee, Connor McSeveney. Designers: Junho Choi, Samuel Hudson, Paco Lau, Erin Pan, Kalyani Puthenpurayil, Ethan Tam. Advised by Seeun Ahn and Tommy Nguyen.
            </p>
          </FadeIn>
        </section>
      </div>

      <div ref={footerWrapRef}>
        <Footer />
      </div>
    </>
  );
}
