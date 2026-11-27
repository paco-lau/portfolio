"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { Card, CaseStudyEnd, Carousel, FadeIn, HeroMeta, SectionRail, ease } from "../CaseStudy";

import firefoxBanner from "../../../assets/projects/both/mozilla-firefox/firefox-banner.png";
import finalPopup from "../../../assets/projects/both/mozilla-firefox/final-deliverable.png";
import suggestedActions from "../../../assets/projects/both/mozilla-firefox/suggested-actions.png";
import settingsPrototype from "../../../assets/projects/both/mozilla-firefox/setting.png";
import wireframe1 from "../../../assets/projects/both/mozilla-firefox/wireframe-1.png";
import wireframe2 from "../../../assets/projects/both/mozilla-firefox/wireframe-2.png";
import wireframe3 from "../../../assets/projects/both/mozilla-firefox/wireframe-3.png";
import wireframe4 from "../../../assets/projects/both/mozilla-firefox/wireframe-4.png";
import dataAudit from "../../../assets/projects/both/mozilla-firefox/data.png";
import moreDataAudit from "../../../assets/projects/both/mozilla-firefox/more-data.png";


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
            stroke="#FF7139" strokeWidth="14" strokeLinecap="round"
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

export default function FirefoxCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <SectionRail accent={"#FF7139"} sectionRefs={sectionRefs} footerWrapRef={footerWrapRef} />

      {/* Hero */}
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
              style={{ fontSize: "14px", fontWeight: 600, padding: "6px 16px", borderRadius: "999px", backgroundColor: "#FF7139", color: "#181a18" }}
            >
              Mozilla&ensp;|&ensp;Sep 2025 - Feb 2026
            </span>
            <h1 className="font-bold mt-6" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.08, color: "#181a18" }}>
              Adaptive Performance Extension
            </h1>
            <HeroMeta role="Designer & Back-End Engineer" team={["3 Mentors", "2 Leads", "2 Advisors", "6 Designers & Developers"]} />
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute pointer-events-none rounded-full"
              style={{
                width: 1040, height: 680, left: "50%", top: "50%", marginLeft: -520, marginTop: -340, zIndex: 0,
                background: "radial-gradient(ellipse, rgba(255,113,57,0.35) 0%, rgba(255,113,57,0.10) 45%, transparent 70%)",
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
              <Image src={firefoxBanner} alt="Mozilla Firefox Adaptive Performance Extension" priority className="w-full h-auto" />
            </motion.div>
          </div>
        </div>

      </section>

      <div className="bg-[#F5F0E8]">
        {/* ---------------- GUIDING QUESTION + MY ROLE ---------------- */}
        <section
          id="role"
          ref={el => { sectionRefs.current[0] = el; }}
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12"
        >
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>My Role</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              Mozilla was developing a new product called Adaptive Performance &mdash; its main uses were to minimize energy consumption and personalize browser performance and power usage. However, the team was concerned the product itself wouldn&rsquo;t align with Firefox&rsquo;s branding or its users&rsquo; interests. Hence, the team created this guiding question: <strong className="font-bold">How might we design and implement an Adaptive Performance feature within Firefox&rsquo;s web browser that promotes equitable and resource-conscious internet usage?</strong>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
                As one of six designers on this team, I led the competitive and internal audits that grounded our research, then helped carry that work forward through interviews, the survey, and synthesis. As the project moved from insight to interface, I partly led design exploration and backend/logic ideation, and handled the data analysis behind our runtime benchmarks.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card>
                <p className="font-sans mb-4" style={{ fontSize: "17px", fontWeight: 700, color: "#FF7139" }}>Major Contribution</p>
                <ul className="space-y-2">
                  {["Competitive & internal audit", "Design exploration", "Back-end logic & ideation", "Data analysis"].map(r => (
                    <li key={r} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{r}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* ---------------- RESEARCH ---------------- */}
        <section
          id="research"
          ref={el => { sectionRefs.current[1] = el; }}
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12"
        >
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Research</h2>
          </FadeIn>

          {/* Methods */}
          <FadeIn>
            <p className="font-sans mb-10" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              The team ran a competitive and internal audit, an 88-response user survey, and 15 user interviews, then profiled hardware limitations across low-, mid-, and high-end machines. Together, these methods surfaced how people actually use tabs, extensions, and power settings day to day. From there, the team distilled a few key metrics:
            </p>
          </FadeIn>

          {/* Competitive & internal audit */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src={dataAudit} alt="Internal audit of performance signals, their impact, and scalable actions across low, medium, and high thresholds" className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image src={moreDataAudit} alt="Competitive audit comparing Chrome's tab management features against potential Firefox equivalents" className="w-full h-auto" />
              </div>
            </div>
            <p className="font-sans mb-10" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)" }}>Internal audit mapping performance signals to scalable, threshold-based actions, alongside a competitive audit of Chrome&rsquo;s tab management evaluated for Firefox.</p>
          </FadeIn>

          {/* Key metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
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
            <p className="font-sans mb-6" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>What users want in Adaptive Performance:</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { t: "Performance", d: "Customizable balance of speed and battery life for all workflows." },
              { t: "Visibility", d: "Unified controls that bring backend data to everyone with an intuitive interface." },
              { t: "Impact", d: "Maintaining the brand promise of prioritizing privacy, environment, and users over profit." },
            ].map((c, i) => (
              <FadeIn key={c.t} delay={i * 0.08}>
                <Card style={{ height: "100%" }}>
                  <p className="font-sans mb-3" style={{ fontSize: "17px", fontWeight: 700, color: "#FF7139" }}>{c.t}</p>
                  <p className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.6 }}>{c.d}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

        </section>

        {/* ---------------- DESIGN & ITERATION ---------------- */}
        <section
          id="design"
          ref={el => { sectionRefs.current[2] = el; }}
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12"
        >
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Design &amp; Iteration</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
            <FadeIn>
              <p className="font-sans mb-4" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
                Together with the team, I helped design and produce the wireframes and lo-fidelity prototypes that explored visual hierarchy and interaction across the extension&rsquo;s core screens:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Extension popup with watts saved and tab memory usage",
                  "Tab management, computer performance, and settings screens",
                  "Performance popup with an expandable settings panel",
                  "Memory usage popup with a usage graph and breakdown",
                ].map(g => (
                  <li key={g} className="font-sans flex gap-3" style={{ fontSize: "15px", color: "rgba(24,26,24,0.65)" }}>
                    <span style={{ color: "#FF7139" }}>&bull;</span> {g}
                  </li>
                ))}
              </ul>

              <p className="font-sans" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
                Feedback gathered from 8 follow-up user interviews shaped the next round of design, pointing toward multi-window control, clearer in-the-moment feedback, and more automation like auto-sleeping tabs. From these interviews, we identified several major positive reactions and pain points.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Carousel
                accent="#FF7139"
                aspectRatio="1124 / 708"
                items={[
                  { src: wireframe1, alt: "Low-fidelity wireframe of the extension popup with watts saved and tab memory usage" },
                  { src: wireframe2, alt: "Low-fidelity wireframes of tab management, computer performance, and settings screens" },
                  { src: wireframe3, alt: "Low-fidelity wireframes of the performance popup and expandable settings panel" },
                  { src: wireframe4, alt: "Low-fidelity wireframe of the memory usage popup with usage graph and breakdown" },
                ]}
              />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-4" style={{ fontSize: "17px", fontWeight: 700, color: "#FF7139" }}>Positive Reactions</p>
                <ul className="space-y-2">
                  {["Clean UI", "Simple usability", "Satisfying tab controls", "Useful in everyday tasks", "Ideal for heavy tab users"].map(p => (
                    <li key={p} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{p}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-4" style={{ fontSize: "17px", fontWeight: 700, color: "#FF7139" }}>Pain Points</p>
                <ul className="space-y-2">
                  {["Technical language barrier", "Confusion around AP toggle", "Weak AP transparency", "Lack of multi-window support"].map(p => (
                    <li key={p} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{p}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          {/* Mid-fi settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
            <FadeIn>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Refining Settings</h3>
              <p className="font-sans mb-6" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7, maxWidth: "42ch" }}>
                Users also called out a settings page as a high-priority need. Based on feedback, performance levels, advanced display details, automatic tab sleeping thresholds, and dark mode were consolidated into one clear settings surface.
              </p>
              <ul className="space-y-3">
                {["Performance Level (Low, Balanced, Aggressive)", "Advanced Display for AP activity details", "Sleep Tabs Automatically, by time or battery", "Dark Mode"].map(g => (
                  <li key={g} className="font-sans flex gap-3" style={{ fontSize: "15px", color: "rgba(24,26,24,0.65)" }}>
                    <span style={{ color: "#FF7139" }}>&bull;</span> {g}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-[260px] mx-auto">
                <Image src={settingsPrototype} alt="Mid-fidelity settings prototype for the Adaptive Performance extension" className="w-full h-auto" />
              </div>
            </FadeIn>
          </div>

        </section>

        {/* ---------------- FINAL DELIVERABLE ---------------- */}
        <section
          id="final"
          ref={el => { sectionRefs.current[3] = el; }}
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12"
        >
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Final Product</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="font-sans mb-6" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7, maxWidth: "42ch" }}>
                The shipped extension surfaces real-time memory and CPU savings, proactively suggests which tabs to sleep or close, and keeps every open tab searchable in one place.
              </p>
              <ul className="space-y-4">
                {[
                  { t: "AP Activity Summary", d: "A quick snapshot of how Adaptive Performance is impacting the current session." },
                  { t: "Suggested Actions", d: "Proactive recommendations for which tabs to sleep or close, based on real-time signals." },
                  { t: "Active Memory & CPU Monitoring", d: "Live memory and CPU usage tracked per tab." },
                  { t: "Tab Sort", d: "Quickly reorder tabs by activity or resource usage." },
                  { t: "Tab Sleeping & Closing", d: "One-click controls to sleep or close tabs directly from the popup." },
                ].map(f => (
                  <li key={f.t} className="flex gap-3">
                    <span
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ width: 22, height: 22, marginTop: 2, backgroundColor: "#181a18", color: "#F5F0E8" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: 12, height: 12 }}>
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-sans font-bold" style={{ fontSize: "15px", color: "#181a18" }}>{f.t}</p>
                      <p className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>{f.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ width: 280 }}>
                  <Image src={finalPopup} alt="Final Adaptive Performance extension popup showing suggested actions, browser usage, and all tabs" className="w-full h-auto" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ width: 280, aspectRatio: "848 / 1482" }}>
                  <Image src={suggestedActions} alt="Suggested actions view of the Adaptive Performance extension recommending tabs to sleep or close" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <p className="font-sans mt-14 mb-8" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              Under the hood, the <strong className="font-bold">Attention Prioritization Algorithm</strong>{" "}feeds on behavior patterns, device context, and domain sensitivity to generate each tab&rsquo;s suggested action. Two listeners feed it in real time: a Performance Listener watching for signs of strain like buffering, memory pressure, and dropped framerates, and a Resource Listener tracking usage patterns like dormancy, domain clusters, and background media. Together, they let the algorithm tell a tab that&rsquo;s actively working apart from one that&rsquo;s just sitting open and draining resources.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-3" style={{ fontSize: "17px", fontWeight: 700, color: "#FF7139" }}>Performance Listener</p>
                <ul className="space-y-1.5">
                  {["Video buffering", "Memory limit reached", "Increased FCP/LCP", "Framerate drops", "Event handler latency", "Increased script execution time"].map(l => (
                    <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.55)" }}>{l}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-3" style={{ fontSize: "17px", fontWeight: 700, color: "#FF7139" }}>Resource Listener</p>
                <ul className="space-y-1.5">
                  {["Dormancy patterns", "Temporal/behavioral patterning", "Domain clusters", "Background media", "“One-time” content recognition"].map(l => (
                    <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.55)" }}>{l}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              To validate these thresholds, the team ran 4 benchmarks across 5 machines for 475 datapoints, profiling how tabs behave under real workloads on low-, mid-, and high-end hardware. That data shaped a different set of priorities and suggested actions for each tier:
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
                <Card style={{ height: "100%" }}>
                  <p className="font-sans" style={{ fontSize: "17px", fontWeight: 700, color: "#FF7139" }}>{b.t}</p>
                  <p className="font-sans mb-4" style={{ fontSize: "12px", color: "rgba(24,26,24,0.45)" }}>{b.sub}</p>
                  <p className="font-sans mb-1" style={{ fontSize: "13px", fontWeight: 600, color: "rgba(24,26,24,0.45)" }}>Priorities</p>
                  <ul className="space-y-1 mb-4">
                    {b.p.map(l => <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>{l}</li>)}
                  </ul>
                  <p className="font-sans mb-1" style={{ fontSize: "13px", fontWeight: 600, color: "rgba(24,26,24,0.45)" }}>Suggested Actions</p>
                  <ul className="space-y-1">
                    {b.a.map(l => <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>{l}</li>)}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Presentation slides */}
          <FadeIn>
            <p className="font-sans mb-6 mt-14" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>Presentation Slides</p>
            <div
              className="rounded-2xl shadow-xl mx-auto"
              style={{ aspectRatio: "1728 / 1117", maxWidth: "90%", overflowY: "auto", overflowX: "hidden" }}
            >
              {Array.from({ length: 49 }, (_, i) => (
                <Image
                  key={i}
                  src={`/projects/mozilla-firefox/slides/slide-${String(i + 1).padStart(2, "0")}.webp`}
                  alt={`Mozilla Adaptive Performance presentation, slide ${i + 1}`}
                  width={1920}
                  height={1241}
                  sizes="(min-width: 1024px) 80vw, 95vw"
                  className="w-full h-auto block"
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-sans mt-14" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)", lineHeight: 1.8 }}>
              A collaboration between ICB and Mozilla in Fall 2025. Project Leads: Daniel Lee, Connor McSeveney. Designers: Paco Lau, Ethan Tam, Junho Choi, Samuel Hudson, Erin Pan, Kalyani Puthenpurayil. Advised by Seeun Ahn and Tommy Nguyen. Mentored by Mike Conca, Karen Kim, and Tyler Thorne.
            </p>
          </FadeIn>
        </section>
      </div>

      <CaseStudyEnd num="05" />

      <div ref={footerWrapRef}>
        <Footer />
      </div>
    </>
  );
}
