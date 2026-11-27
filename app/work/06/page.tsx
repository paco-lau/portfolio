"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import CtaButton from "../../components/CtaButton";
import { Card, CaseStudyEnd, Carousel, FadeIn, HeroMeta, SectionRail, ease } from "../CaseStudy";

import millpondBanner from "../../../assets/projects/design/millpond-research/millpond-banner.png";

const ACCENT = "#021F45"; // the navy from the banner
const slide = (n: number) => `/projects/millpond-research/slides/slide-${String(n).padStart(2, "0")}.webp`;

const pad = "pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12";
const body: React.CSSProperties = { fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 };
const cardTitle: React.CSSProperties = { fontSize: "17px", fontWeight: 700, color: ACCENT };
const small: React.CSSProperties = { fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.6 };
const caption: React.CSSProperties = { fontSize: "13px", color: "rgba(24,26,24,0.45)" };

/** One slide from the deck, shown as a figure. */
function Slide({ n, alt }: { n: number; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <Image src={slide(n)} alt={alt} width={1920} height={1080} sizes="(min-width: 1024px) 50vw, 95vw" className="w-full h-auto block" />
    </div>
  );
}

// Slide 10 is an embedded Figma prototype that exports as a blank frame, so it's left out.
const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];

export default function MillPondCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SectionRail accent={ACCENT} sectionRefs={sectionRefs} footerWrapRef={footerWrapRef} />

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
              Mill Pond Research &middot; Sep 2025 - Dec 2025
            </span>
            <h1 className="font-bold mt-6" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.08, color: "#181a18" }}>
              Brand &amp; Website Re-Design
            </h1>
            <HeroMeta role="UX Designer & Engineer" team={["2 Mentors", "1 Lead", "4 UX Designers", "2 UX Engineers"]} />
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
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ zIndex: 1 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              <Image src={millpondBanner} alt="Mill Pond Research brand and website re-design" priority className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-[#F5F0E8]">
        {/* ---------------- MY ROLE ---------------- */}
        <section id="role" ref={el => { sectionRefs.current[0] = el; }} className={pad}>
          <FadeIn>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>My Role</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans" style={body}>
              Mill Pond Research is an AI governance and security startup. They offer real-time AI monitoring, prompt filtering and protection, and AI orchestration for enterprise teams. Around the time we started, they&rsquo;d just been picked for TechCrunch&rsquo;s Startup Battlefield 200, so a lot of new people were about to land on their site. The problem was that the site didn&rsquo;t make the product easy to understand, or easy to trust. That led to our guiding question: <strong className="font-bold">How might we build trust and clarity around Mill Pond Research&rsquo;s AI governance solutions, so organizations can easily understand, adopt, and feel confident in their AI oversight?</strong>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
            <FadeIn>
              <p className="font-sans" style={body}>
                I was one of six designers on the team. Over nine weeks we went from research to a new brand, a full set of hi-fi pages, and a coded front end. The goal was a site that reads like a trusted control center for AI governance: clear about what Mill Pond does, and confident about why it matters.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card>
                <p className="font-sans mb-4" style={cardTitle}>What We Delivered</p>
                <ul className="space-y-2">
                  {["Brand kit and brand guidelines", "User journeys and information architecture", "Hi-fi designs and a full design system", "Coded layouts in React"].map(r => (
                    <li key={r} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{r}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[
              { t: "Weeks 1-2", d: "Discovery and research" },
              { t: "Weeks 3-4", d: "Information architecture, user journeys, and wireframes" },
              { t: "Weeks 5-6", d: "High-fidelity design" },
              { t: "Weeks 7-9", d: "Hi-fi revisions and the coded front end" },
            ].map((s, i) => (
              <FadeIn key={s.t} delay={i * 0.05}>
                <Card style={{ height: "100%" }}>
                  <p className="font-sans mb-2" style={{ fontSize: "12px", color: "rgba(24,26,24,0.4)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-semibold mb-1" style={{ fontSize: "15px" }}>{s.t}</p>
                  <p className="font-sans" style={small}>{s.d}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------- RESEARCH ---------------- */}
        <section id="research" ref={el => { sectionRefs.current[1] = el; }} className={pad}>
          <FadeIn>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Research</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-8" style={body}>
              Going through the old site and talking it over with the client, four problems kept coming up:
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              "AI governance felt opaque, confusing, and hard to trust.",
              "Mill Pond's value was buried in dense, technical language.",
              "The messaging was too general and didn't speak to specific audiences.",
              "The brand lacked consistency, strength, and anything that set it apart.",
            ].map((p, i) => (
              <FadeIn key={p} delay={i * 0.05}>
                <Card style={{ height: "100%" }}>
                  <p className="font-sans mb-2" style={{ fontSize: "12px", color: "rgba(24,26,24,0.4)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-semibold" style={{ fontSize: "15px" }}>{p}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>What We Took Away</h3>
            <p className="font-sans mb-6" style={body}>Each finding from our research pointed to something the redesign could fix:</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Low trust in AI governance", d: "Use clear, human language and visuals." },
              { t: "Overwhelming technical complexity", d: "Break ideas into simple, digestible explanations." },
              { t: "A fragmented visual identity", d: "Build one unified design system." },
              { t: "Visitors don't get the \"why\"", d: "Frame the problem before selling the solution." },
              { t: "Stakeholders want proof of value", d: "Put metrics and outcomes up front." },
            ].map((c, i) => (
              <FadeIn key={c.t} delay={i * 0.05}>
                <Card style={{ height: "100%" }}>
                  <p className="font-sans mb-3" style={cardTitle}>{c.t}</p>
                  <p className="font-sans" style={small}>{c.d}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------- DESIGN & ITERATION ---------------- */}
        <section id="design" ref={el => { sectionRefs.current[2] = el; }} className={pad}>
          <FadeIn>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Design &amp; Iteration</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Finding the Look</h3>
              <p className="font-sans" style={body}>
                We started with a moodboard to pin down how Mill Pond should feel: calm and serious, not flashy. That meant deep navy and soft blues, a warm off-white, and a mix of a classic serif with a clean sans. The aim was a brand that feels steady enough to trust with something as sensitive as AI oversight.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}><Slide n={8} alt="Mill Pond Research brand moodboard with color palette, typography, and imagery" /></FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Wireframes</h3>
              <p className="font-sans" style={body}>
                With the user journeys mapped out, we wireframed the three pages that mattered most. The home page explains the problem before the product. The products page breaks each tool into plain-language pieces. And a resources page lets people dig deeper on their own time.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}><Slide n={9} alt="Wireframes for the home, products, and resources pages" /></FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Brand Guidelines</h3>
              <p className="font-sans" style={body}>
                To fix the inconsistent identity, we wrote brand guidelines covering logo use, the type scale, and the color palette. That way Mill Pond&rsquo;s team can keep everything consistent after we hand it off.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}><Slide n={11} alt="Mill Pond Research brand guidelines for logo, typography, and color" /></FadeIn>
          </div>
        </section>

        {/* ---------------- FINAL PRODUCT ---------------- */}
        <section id="final" ref={el => { sectionRefs.current[3] = el; }} className={pad}>
          <FadeIn>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Final Product</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <FadeIn>
              <p className="font-sans mb-6" style={body}>
                The final site leads with the problem, explains each product in plain language, and puts proof of value right where people look for it. Our UX engineers then built the hi-fi designs in React and Tailwind CSS and deployed them on Vercel, so what you see in Figma is what shipped.
              </p>
              <CtaButton href="https://millpondresearch.com" newTab>Visit the live site</CtaButton>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Carousel
                accent={ACCENT}
                aspectRatio="1920 / 1080"
                items={[
                  { src: slide(13), alt: "Home page: hi-fi design next to the coded version" },
                  { src: slide(14), alt: "Company page: hi-fi design next to the coded version" },
                  { src: slide(15), alt: "Resources page: hi-fi design next to the coded version" },
                ]}
              />
              <p className="font-sans mt-3" style={caption}>Hi-fi designs (left) next to the coded pages (right).</p>
            </FadeIn>
          </div>

          {/* Presentation slides */}
          <FadeIn>
            <p className="font-sans mb-6 mt-14" style={body}>Presentation Slides</p>
            <div
              className="rounded-2xl shadow-xl mx-auto"
              style={{ aspectRatio: "1920 / 1080", maxWidth: "90%", overflowY: "auto", overflowX: "hidden" }}
            >
              {deck.map(n => (
                <Image
                  key={n}
                  src={slide(n)}
                  alt={`Mill Pond Research final presentation, slide ${n}`}
                  width={1920}
                  height={1080}
                  sizes="(min-width: 1024px) 80vw, 95vw"
                  className="w-full h-auto block"
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans mt-14" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)", lineHeight: 1.8 }}>
              Designed for Mill Pond Research in Fall 2025. Team: Sophie Faustinelli, Zachary Liang, Paco Lau, Anika Wong, Laurice Corpuz, Priya Patel.
            </p>
          </FadeIn>
        </section>
      </div>

      <CaseStudyEnd num="06" />

      <div ref={footerWrapRef}>
        <Footer />
      </div>
    </>
  );
}
