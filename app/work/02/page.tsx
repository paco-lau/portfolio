"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

import globalBanner from "../../../assets/projects/global-inheritance/globalinheritance-banner.png";
import wireframeCoachella from "../../../assets/projects/global-inheritance/wireframe-coachella.png";
import wireframeCallToArtists from "../../../assets/projects/global-inheritance/wireframe-call-to-artists.png";
import wireframePrograms from "../../../assets/projects/global-inheritance/wireframe-programs.png";
import wireframeAbout from "../../../assets/projects/global-inheritance/wireframe-about.png";
import finalLanding from "../../../assets/projects/global-inheritance/final-landing.png";
import finalAbout from "../../../assets/projects/global-inheritance/final-about.png";
import finalProgram from "../../../assets/projects/global-inheritance/final-program.png";
import finalNews from "../../../assets/projects/global-inheritance/final-news.png";
import finalDonate from "../../../assets/projects/global-inheritance/final-donate.png";
import finalGetInvolved from "../../../assets/projects/global-inheritance/final-get-involved.png";
import finalCallToArtists from "../../../assets/projects/global-inheritance/final-call-to-artists.png";

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = "#2F8FC7";

const SECTIONS = [
  { id: "role", label: "My Role" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design & Iteration" },
  { id: "final", label: "Final Deliverable" },
];

function Kicker({ num, style }: { num: string; style?: React.CSSProperties }) {
  return (
    <div className="flex items-center gap-4 mb-4" style={style}>
      <span
        className="font-bold"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1, color: ACCENT }}
      >
        {num}
      </span>
      <span className="h-px w-10" style={{ backgroundColor: "rgba(24,26,24,0.2)" }} />
    </div>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="rounded-2xl p-6" style={{ backgroundColor: "#e8e3db", ...style }}>
      {children}
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

function Carousel({ items, aspectRatio }: { items: { src: StaticImageData; alt: string }[]; aspectRatio: string }) {
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
              style={{ width: i === index ? 20 : 8, height: 8, backgroundColor: i === index ? ACCENT : "#B7B2A8" }}
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

export default function GlobalInheritanceCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [overFooter, setOverFooter] = useState(false);
  const overBusyBg = overFooter;

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
                  backgroundColor: active === i ? ACCENT : "#B7B2A8",
                  boxShadow: active === i ? `0 0 0 7px ${ACCENT}40` : "0 0 0 4px #F5F0E8",
                }}
              />
            </button>
          ))}
        </div>
      </div>

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
              style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, padding: "6px 16px", borderRadius: "999px", backgroundColor: ACCENT, color: "#F5F0E8" }}
            >
              Global Inheritance &middot; Spring 2026
            </span>
            <h1 className="font-bold mt-6" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.08, color: "#181a18" }}>
              Brand &amp; Website Re-Design
            </h1>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute pointer-events-none rounded-full"
              style={{
                width: 1040, height: 680, left: "50%", top: "50%", marginLeft: -520, marginTop: -340, zIndex: 0,
                background: `radial-gradient(ellipse, ${ACCENT}59 0%, ${ACCENT}1a 45%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.08, 0.95, 1] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{ zIndex: 1 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              <Image src={globalBanner} alt="Global Inheritance brand and website re-design" priority className="w-full h-auto" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center" style={{ zIndex: 10 }}>
          <motion.div
            className="flex flex-col items-center gap-1.5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                letterSpacing: "0.25em",
                color: "#181a18",
                opacity: 0.6,
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <motion.div
              style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(24,26,24,0.35), transparent)" }}
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
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
            <Kicker num="01" />
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>My Role</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              Global Inheritance is a 501(c)3 nonprofit that creates art-driven experiences &mdash; installations, Carpoolchella, speaker series, cultural activations at festivals like Coachella &mdash; to inspire action on environmental and social issues. Their site wasn&rsquo;t keeping pace with that work, so the team set out to answer: <strong className="font-bold">How might we redesign Global Inheritance&rsquo;s website to sustainably communicate its year-round impact, ensure intentionality, and inspire broader connections to take action?</strong>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
                As one of six designers on this team, I contributed to the competitive analysis and website audit, helped synthesize findings from user surveys into personas and key takeaways, and designed wireframes and final UI across the redesigned pages.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card>
                <p className="font-sans mb-4" style={{ fontSize: "17px", fontWeight: 700, color: ACCENT }}>Contributed</p>
                <ul className="space-y-2">
                  {["Competitive analysis & website audit", "Research synthesis & personas", "Wireframing", "Final UI design"].map(r => (
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
            <Kicker num="02" />
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Research</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-10" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              The team ran a competitive analysis, a full audit of the existing website, and surveyed 9 past Global Inheritance volunteers to understand where the current site was falling short.
            </p>
          </FadeIn>

          {/* Competitive Analysis */}
          <FadeIn>
            <p className="font-sans mb-4" style={{ fontSize: "14px", color: "rgba(24,26,24,0.5)" }}>Competitive Analysis &mdash; benchmarked against The Ocean Cleanup, Eventbrite, Catchafire, and charity: water</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-4" style={{ fontSize: "17px", fontWeight: 700, color: ACCENT }}>What&rsquo;s Working</p>
                <ul className="space-y-2">
                  {["Strong, contrasting visual branding", "Credibility through statistics and evidence"].map(p => (
                    <li key={p} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{p}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-4" style={{ fontSize: "17px", fontWeight: 700, color: ACCENT }}>What&rsquo;s NOT Working</p>
                <ul className="space-y-2">
                  {["Information overload from too much text and competing CTAs", "Inconsistent navigation and design across pages"].map(p => (
                    <li key={p} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{p}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          {/* Website Audit */}
          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "14px", color: "rgba(24,26,24,0.5)" }}>Website Audit &mdash; four recurring pain points across the current site:</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { t: "Clarity & Understanding", d: ["Unclear purpose of platform", "Text-heavy and harder to digest"] },
              { t: "Navigation & Structure", d: ["Scattered, redundant pages and long scrolling", "Users prefer simple, filterable browsing"] },
              { t: "Actions & User Flow", d: ["Key actions like volunteering or donating aren’t obvious", "Users aren’t clearly guided to next steps"] },
              { t: "Visuals & Engagement", d: ["Inconsistent hierarchy; key info is buried", "Visuals, testimonials, and impact go underused"] },
            ].map((c, i) => (
              <FadeIn key={c.t} delay={i * 0.05}>
                <Card style={{ height: "100%" }}>
                  <p className="font-sans mb-3" style={{ fontSize: "15px", fontWeight: 700 }}>{c.t}</p>
                  <ul className="space-y-1.5">
                    {c.d.map(line => (
                      <li key={line} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.55)", lineHeight: 1.5 }}>{line}</li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* User Surveys */}
          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "14px", color: "rgba(24,26,24,0.5)" }}>User Surveys &mdash; 9 past Global Inheritance volunteer respondents surfaced three themes:</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Friction in Sign Up", d: "The current sign-up flow adds unnecessary steps between interest and involvement." },
              { t: "Motivated by More Than Cause", d: "Volunteers return for the events, the environmental mission, and career growth — not just altruism." },
              { t: "Gap in Incentives", d: "Almost no one felt incentives for volunteering were clearly communicated." },
            ].map((c, i) => (
              <FadeIn key={c.t} delay={i * 0.08}>
                <Card style={{ height: "100%" }}>
                  <p className="font-sans mb-3" style={{ fontSize: "17px", fontWeight: 700, color: ACCENT }}>{c.t}</p>
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
            <Kicker num="03" />
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Design &amp; Iteration</h2>
          </FadeIn>

          {/* Personas */}
          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
              Research findings converged into two personas that shaped every design decision that followed.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-sans" style={{ fontSize: "17px", fontWeight: 700, color: ACCENT }}>Allison Y.</p>
                <p className="font-sans mb-4" style={{ fontSize: "12px", color: "rgba(24,26,24,0.45)" }}>Student / First-Time Visitor</p>
                <p className="font-sans mb-1" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Needs</p>
                <p className="font-sans mb-3" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>Clear, immediate understanding of mission and impact; simple pathways to learn more or act.</p>
                <p className="font-sans mb-1" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Pain Points</p>
                <p className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>Doesn&rsquo;t quickly understand what the organization does; feels overwhelmed or unsure where to start.</p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-sans" style={{ fontSize: "17px", fontWeight: 700, color: ACCENT }}>Daniel L.</p>
                <p className="font-sans mb-4" style={{ fontSize: "12px", color: "rgba(24,26,24,0.45)" }}>Volunteer / Returning User</p>
                <p className="font-sans mb-1" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Needs</p>
                <p className="font-sans mb-3" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>Easy access to volunteer opportunities and updates; clear information on how to stay engaged over time.</p>
                <p className="font-sans mb-1" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Pain Points</p>
                <p className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>Hard to find current opportunities or next steps; no clear way to track involvement or continued impact.</p>
              </Card>
            </FadeIn>
          </div>

          {/* Key Takeaways */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <FadeIn>
              <p className="font-sans mb-4" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Key Takeaway 1</p>
              <p className="font-sans mb-4" style={{ fontSize: "15px", color: "rgba(24,26,24,0.7)", lineHeight: 1.6 }}>Users need to quickly understand Global Inheritance&rsquo;s mission and incentives to join.</p>
              <ul className="space-y-2">
                {["Clear, concise, & contextual language", "Visual hierarchy", "Program highlights", "Visual storytelling", "Measurable outcomes", "Testimonials"].map(g => (
                  <li key={g} className="font-sans flex gap-3" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>
                    <span style={{ color: ACCENT }}>&bull;</span> {g}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans mb-4" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Key Takeaway 2</p>
              <p className="font-sans mb-4" style={{ fontSize: "15px", color: "rgba(24,26,24,0.7)", lineHeight: 1.6 }}>Users need clear guidance and prompting on how to take action.</p>
              <ul className="space-y-2">
                {["Buttons & hyperlinks", "Call-to-action density", "Short page design", "Action confirmation", "Program/event filters", "Category grouping"].map(g => (
                  <li key={g} className="font-sans flex gap-3" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>
                    <span style={{ color: ACCENT }}>&bull;</span> {g}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Wireframes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <FadeIn>
              <p className="font-sans mb-4" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
                To streamline the user experience, three additional pages were wireframed alongside a refreshed About page:
              </p>
              <ul className="space-y-3">
                {["Coachella — activations, get involved, and volunteer sign-up", "Call to Artists — apply as an artist and join the artist community", "Programs — browsable gallery of Global Inheritance initiatives", "About — mission, history, and milestones"].map(g => (
                  <li key={g} className="font-sans flex gap-3" style={{ fontSize: "15px", color: "rgba(24,26,24,0.65)" }}>
                    <span style={{ color: ACCENT }}>&bull;</span> {g}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Carousel
                aspectRatio="380 / 682"
                items={[
                  { src: wireframeCoachella, alt: "Low-fidelity wireframe of the Coachella page with activations and volunteer sign-up" },
                  { src: wireframeCallToArtists, alt: "Low-fidelity wireframe of the Call to Artists page" },
                  { src: wireframePrograms, alt: "Low-fidelity wireframe of the Programs page" },
                  { src: wireframeAbout, alt: "Low-fidelity wireframe of the About page" },
                ]}
              />
            </FadeIn>
          </div>

          {/* Branding */}
          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "14px", color: "rgba(24,26,24,0.5)" }}>Branding direction: sustainable, a lighter tone, and a secondary color palette.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <FadeIn>
              <p className="font-sans mb-3" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Primary Palette</p>
              <div className="flex gap-3">
                {[
                  { name: "Sea", hex: "#1B3A4B" },
                  { name: "Butter", hex: "#FBEFD6" },
                  { name: "Tangerine", hex: "#F2994A" },
                ].map(c => (
                  <div key={c.name} className="text-center">
                    <div className="rounded-full" style={{ width: 44, height: 44, backgroundColor: c.hex, border: "1px solid rgba(24,26,24,0.15)" }} />
                    <p className="font-sans mt-2" style={{ fontSize: "11px", color: "rgba(24,26,24,0.5)" }}>{c.name}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-sans mb-3" style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(24,26,24,0.45)" }}>Secondary Palette</p>
              <div className="flex gap-3">
                {[
                  { name: "Sea", hex: "#A9C9E0" },
                  { name: "Matcha", hex: "#8E9B4E" },
                  { name: "Blush", hex: "#D6497A" },
                  { name: "Blue Tint", hex: "#6FBFB0" },
                ].map(c => (
                  <div key={c.name} className="text-center">
                    <div className="rounded-full" style={{ width: 44, height: 44, backgroundColor: c.hex, border: "1px solid rgba(24,26,24,0.15)" }} />
                    <p className="font-sans mt-2" style={{ fontSize: "11px", color: "rgba(24,26,24,0.5)" }}>{c.name}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Feature Implementation */}
          <FadeIn>
            <p className="font-sans mb-6" style={{ fontSize: "14px", color: "rgba(24,26,24,0.5)" }}>Feature implementation across the redesigned site:</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Permanent Navigation Bar", "Improved Site Architecture", "Engaging Components", "Submission Page", "Volunteer Opportunity Hub", "Frequent CTAs"].map((f, i) => (
              <FadeIn key={f} delay={i * 0.05}>
                <Card>
                  <p className="font-sans mb-2" style={{ fontSize: "12px", color: "rgba(24,26,24,0.4)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-semibold" style={{ fontSize: "15px" }}>{f}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------- FINAL DELIVERABLE ---------------- */}
        <section
          id="final"
          ref={el => { sectionRefs.current[3] = el; }}
          className="pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12"
        >
          <FadeIn>
            <Kicker num="04" />
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Final Deliverable</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="font-sans mb-6" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>
                The redesigned site leads with Global Inheritance&rsquo;s impact, gives every initiative a clear home, and puts a path to get involved on every page &mdash; ten pages in total, unified under one visual system.
              </p>
              <ul className="space-y-2">
                {["Landing Page", "About", "Program Page", "Coachella", "News", "Donate", "Get Involved", "Partnerships", "Contact", "Call to Artists"].map(f => (
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
            <FadeIn delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src={finalLanding} alt="Final Global Inheritance landing page" className="w-full h-auto" />
              </div>
            </FadeIn>
          </div>

          <div className="mt-10">
            <Carousel
              aspectRatio="1040 / 590"
              items={[
                { src: finalAbout, alt: "Final About page for Global Inheritance" },
                { src: finalProgram, alt: "Final Program page for Global Inheritance" },
                { src: finalNews, alt: "Final News page for Global Inheritance" },
                { src: finalDonate, alt: "Final Donate page for Global Inheritance" },
                { src: finalGetInvolved, alt: "Final Get Involved page for Global Inheritance" },
                { src: finalCallToArtists, alt: "Final Call to Artists page for Global Inheritance" },
              ]}
            />
          </div>

          {/* Presentation slides */}
          <FadeIn>
            <p className="font-sans mb-6 mt-14" style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 }}>Presentation Slides</p>
            <div
              className="rounded-2xl shadow-xl mx-auto"
              style={{ aspectRatio: "1920 / 1080", maxWidth: "90%", overflowY: "auto", overflowX: "hidden" }}
            >
              {Array.from({ length: 41 }, (_, i) => (
                <img
                  key={i}
                  src={`/projects/global-inheritance/slides/slide-${String(i + 1).padStart(2, "0")}.png`}
                  alt={`Global Inheritance brand and website re-design presentation, slide ${i + 1}`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans mt-14" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)", lineHeight: 1.8 }}>
              A collaboration between ICB and Global Inheritance in Spring 2026. Project Lead: Katie Wang. Designers: Paco Lau, Georgia Hadley, Julie Hsu, Katie Hion, Sasha Khajanchi, Shaylyn Tran. Advised by Taylor Tsan and Tanvi Patil. Mentored by Eric Ritz.
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
