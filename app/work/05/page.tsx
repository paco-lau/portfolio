"use client";

import Image from "next/image";
import { useRef } from "react";
import Footer from "../../components/Footer";
import {
  Card, CaseStudyEnd, CaseStudyHero, Carousel, FadeIn, FlowArrow, Key as KeyBase, Labeled as LabeledBase,
  MiniBars as MiniBarsBase, Numbered as NumberedBase, SectionRail, SectionTitle, lead, pad, small,
} from "../CaseStudy";

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

const ACCENT = "#FF7139"; // Firefox orange
const INK = "#181a18";
// text on the orange cards
const LIGHT = "#F5F0E8";
const LIGHT_SOFT = "rgba(245,240,232,0.85)";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "final", label: "Final\nProduct" },
];

const cardTitle: React.CSSProperties = { fontSize: "17px", fontWeight: 700, color: ACCENT };

const Key = (p: { children: React.ReactNode }) => <KeyBase accent={ACCENT} {...p} />;
const Labeled = (p: { title: string; children: React.ReactNode; titleWidth?: number }) => <LabeledBase accent={ACCENT} {...p} />;
const Numbered = (p: { items: React.ReactNode[]; size?: number }) => <NumberedBase accent={ACCENT} {...p} />;
const MiniBars = (p: { bars: { label: string; value: number; text: string }[]; max: number; flush?: boolean }) => <MiniBarsBase accent={ACCENT} {...p} />;

/** A product screenshot with a soft frame. */
function Shot({ src, alt, className = "" }: { src: Parameters<typeof Image>[0]["src"]; alt: string; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg ${className}`}>
      <Image src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

export default function FirefoxCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SectionRail accent={ACCENT} sectionRefs={sectionRefs} footerWrapRef={footerWrapRef} sections={SECTIONS} />

      <CaseStudyHero
        github="https://github.com/cjmc7e/firefox-adaptive-performance"
        badge={"Mozilla | Sep 2025 - Feb 2026"}
        title="Adaptive Performance Extension"
        role="Designer & Back-End Engineer"
        team={["3 Mentors", "2 Leads", "2 Advisors", "6 Designers & Developers"]}
        banner={firefoxBanner}
        accent={ACCENT}
        badgeText={LIGHT}
      />

      <div className="bg-[#F5F0E8]">
        {/* ---------------- OVERVIEW ---------------- */}
        <section id="overview" ref={el => { sectionRefs.current[0] = el; }} className={pad}>
          <FadeIn>
            <SectionTitle>Overview</SectionTitle>
          </FadeIn>

          {/* Context first: who the client is and where I fit, in the hero's label | text format */}
          <FadeIn>
            <div className="space-y-8 mb-10">
              <Labeled title="What is Mozilla?">
                <p className="font-sans" style={{ ...small, fontSize: "17px" }}>
                  The company behind the Firefox browser, owned by the nonprofit Mozilla Foundation and known for putting privacy and users ahead of profit. I worked with them through Invention Corps of Berkeley, which pairs student teams with companies.
                </p>
              </Labeled>
              <Labeled title="My Role">
                <p className="font-sans" style={{ ...small, fontSize: "17px" }}>
                  One of 6 designers and developers, working as both a designer and a back-end engineer. I owned our audits and the benchmark analysis, and helped shape the screens and the logic behind them.
                </p>
              </Labeled>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-10" style={lead}>
              Mozilla wanted Firefox to save memory and battery on its own, without hiding what it&rsquo;s doing. I helped design the extension and analyzed the benchmarks that set its rules.
            </p>
          </FadeIn>

          {/* Hierarchy: the benchmark finding drove the product, so it gets the big card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 lg:row-span-2 [&>div]:h-full">
              <FadeIn>
                <Card style={{ height: "100%", backgroundColor: ACCENT, color: LIGHT, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem" }}>
                  <p className="font-sans font-bold" style={{ fontSize: "26px", color: LIGHT_SOFT }}>Key Finding</p>
                  <div>
                    <div className="flex items-center gap-6">
                      <p className="font-bold shrink-0" style={{ fontSize: "clamp(4.5rem, 10vw, 8rem)", lineHeight: 1 }}>9&ndash;21&times;</p>
                      <p className="font-sans" style={{ fontSize: "20px", lineHeight: 1.45 }}>slower on DOM-heavy pages for low-end laptops (&le;12 GB RAM) than high-end ones</p>
                    </div>
                    {/* relative slowdown on a 0..22x scale; the low-end bar is a range */}
                    <div className="mt-8 space-y-3 font-sans" style={{ fontSize: "14px" }} role="img" aria-label="High-end machines at 1 times, low-end machines 9 to 21 times slower">
                      {[
                        { label: "High-end", left: 0, width: 100 / 22, text: "1×" },
                        { label: "Low-end", left: (9 / 22) * 100, width: (12 / 22) * 100, text: "9–21×" },
                      ].map(r => (
                        <div key={r.label} className="grid grid-cols-[80px_1fr_56px] items-center gap-3">
                          <span style={{ color: LIGHT_SOFT }}>{r.label}</span>
                          <div className="relative h-3 rounded-full" style={{ backgroundColor: "rgba(245,240,232,0.25)" }}>
                            <div className="absolute top-0 h-3 rounded-full" style={{ left: `${r.left}%`, width: `${r.width}%`, backgroundColor: LIGHT }} />
                          </div>
                          <span className="font-semibold text-right">{r.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-6" style={{ borderTop: "1px solid rgba(245,240,232,0.3)" }}>
                    <span className="mt-1.5 shrink-0"><FlowArrow color={LIGHT} /></span>
                    <p className="font-sans" style={{ fontSize: "17px", lineHeight: 1.6, color: LIGHT_SOFT }}>
                      <strong style={{ color: LIGHT }}>Why it matters:</strong> one rule can&rsquo;t fit every laptop, so the extension suspends tabs aggressively on low-end machines and focuses on memory on high-end ones.
                    </p>
                  </div>
                </Card>
              </FadeIn>
            </div>
            <FadeIn delay={0.06}>
              <Card style={{ height: "100%" }}>
                <p className="font-bold" style={{ fontSize: "2.25rem", lineHeight: 1, color: INK }}>87.5%</p>
                <p className="font-sans mt-2" style={small}>of surveyed users want simple device stats, so live stats lead the popup</p>
                <MiniBars max={100} bars={[
                  { label: "Want simple device stats", value: 87.5, text: "87.5%" },
                  { label: "Use extensions lightly", value: 58, text: "58%" },
                  { label: "Keep 6–15 tabs open", value: 47.7, text: "47.7%" },
                ]} />
              </Card>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Card style={{ height: "100%" }}>
                <p className="font-bold" style={{ fontSize: "2.25rem", lineHeight: 1, color: INK }}>475</p>
                <p className="font-sans mt-2" style={small}>benchmark datapoints from 4 tests on 5 machines, which I analyzed</p>
                <MiniBars max={50} bars={[
                  { label: "High-end: tabs before slowdown", value: 50, text: "30–50+" },
                  { label: "Low-end: tabs before slowdown", value: 15, text: "10–15" },
                ]} />
              </Card>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-12">
              <Labeled title="What I Did">
                <Numbered size={19} items={[
                  <><Key>Led the competitive and internal audits</Key> behind the research</>,
                  <><Key>Analyzed the runtime benchmarks</Key>: 475 datapoints across 5 machines</>,
                  <>Co-led <Key>design exploration</Key> and the <Key>back-end logic</Key> for tab suggestions</>,
                ]} />
              </Labeled>
            </div>
          </FadeIn>
        </section>

        {/* ---------------- RESEARCH ---------------- */}
        <section id="research" ref={el => { sectionRefs.current[1] = el; }} className={pad}>
          <FadeIn>
            <SectionTitle>Research</SectionTitle>
            <p className="font-sans mb-10" style={lead}>Four methods, from how people use tabs to what their hardware can handle.</p>
          </FadeIn>

          {/* Benchmark is the featured step: it's the one that turned into product rules. Audit is widest so its longer text fits in 3 lines. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.75fr_auto_1fr_auto_1fr_auto_1.3fr] gap-4 lg:gap-3 items-stretch mb-10">
            {[
              { t: "Audit", d: "Compared Firefox with Chrome's tab management and mapped Firefox's own performance signals." },
              { t: "Survey", d: "88 responses on tabs, extensions, and power settings." },
              { t: "Interview", d: "15 users, to hear how those habits play out day to day." },
              { t: "Benchmark", featured: true, d: "4 tests on 5 low-, mid-, and high-end machines, to see where each one slows down." },
            ].flatMap((s, i) => [
              ...(i > 0 ? [<span key={`a${i}`} className="hidden lg:flex items-center"><FlowArrow color={ACCENT} /></span>] : []),
              <div key={s.t} className="[&>div]:h-full">
                <FadeIn delay={i * 0.05}>
                  <Card style={{ height: "100%", ...(s.featured && { backgroundColor: ACCENT }) }}>
                    <p className="font-bold mb-3" style={{ fontSize: "22px", color: s.featured ? LIGHT : INK }}>{s.t}</p>
                    <p className="font-sans" style={{ ...small, fontSize: "17px", color: s.featured ? LIGHT_SOFT : small.color }}>{s.d}</p>
                  </Card>
                </FadeIn>
              </div>,
            ])}
          </div>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <Shot src={dataAudit} alt="Internal audit of performance signals, their impact, and actions at low, medium, and high thresholds" />
              <Shot src={moreDataAudit} alt="Competitive audit of Chrome's tab management features and their Firefox equivalents" />
            </div>
            <p className="font-sans mb-12" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)" }}>Left: Firefox&rsquo;s performance signals and actions. Right: Chrome&rsquo;s tab features, rated for Firefox.</p>
          </FadeIn>

          <FadeIn>
            <Labeled title="Users Wanted">
              <Numbered size={17} items={[
                <><Key>Performance</Key>: a speed and battery balance that fits their workflow</>,
                <><Key>Visibility</Key>: device stats in plain language, not hidden in the background</>,
                <><Key>Impact</Key>: privacy and users first, in line with Mozilla&rsquo;s promise</>,
              ]} />
            </Labeled>
          </FadeIn>
        </section>

        {/* ---------------- DESIGN ---------------- */}
        <section id="design" ref={el => { sectionRefs.current[2] = el; }} className={pad}>
          <FadeIn>
            <SectionTitle>Design</SectionTitle>
            <p className="font-sans mb-10" style={lead}>Wireframes for the four core screens, then 8 follow-up interviews to test them.</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <Carousel
                accent={ACCENT}
                autoPlay={3500}
                aspectRatio="1124 / 708"
                items={[
                  { src: wireframe1, alt: "Wireframe of the extension popup with watts saved and tab memory usage" },
                  { src: wireframe2, alt: "Wireframes of tab management, computer performance, and settings screens" },
                  { src: wireframe3, alt: "Wireframes of the performance popup and expandable settings panel" },
                  { src: wireframe4, alt: "Wireframe of the memory usage popup with a usage graph and breakdown" },
                ]}
              />
            </FadeIn>
            <div className="space-y-10">
              <FadeIn>
                <Labeled title="Worked" titleWidth={120}>
                  <Numbered items={["Clean, simple UI", "Satisfying tab controls", "Useful for heavy tab users"]} />
                </Labeled>
              </FadeIn>
              <FadeIn delay={0.06}>
                <Labeled title="Didn&rsquo;t" titleWidth={120}>
                  <Numbered items={["Too much technical language", "Unclear what the main toggle does", "No multi-window support"]} />
                </Labeled>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 items-center">
            <FadeIn>
              <p className="font-sans mb-6" style={lead}>Users asked for a settings page, so we pulled every control into one place.</p>
              <Labeled title="Settings">
                <Numbered size={17} items={[
                  "Performance level: Low, Balanced, or Aggressive",
                  "Advanced display of what the extension is doing",
                  "Sleep tabs automatically, by time or battery",
                  "Dark mode",
                ]} />
              </Labeled>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Shot src={settingsPrototype} alt="Mid-fidelity settings screen for the Adaptive Performance extension" className="max-w-[260px] mx-auto" />
            </FadeIn>
          </div>
        </section>

        {/* ---------------- FINAL PRODUCT ---------------- */}
        <section id="final" ref={el => { sectionRefs.current[3] = el; }} className={pad}>
          <FadeIn>
            <SectionTitle>Final Product</SectionTitle>
            <p className="font-sans mb-10" style={lead}>
              The extension shows live memory and CPU use, suggests tabs to sleep or close, and adapts to the machine it runs on.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <div className="flex items-start gap-4 justify-center">
                <Shot src={finalPopup} alt="Final extension popup with suggested actions, browser usage, and all tabs" className="w-1/2 max-w-[280px]" />
                <Shot src={suggestedActions} alt="Suggested actions view recommending tabs to sleep or close" className="w-1/2 max-w-[280px]" />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Labeled title="Features">
                <Numbered size={17} items={[
                  "Activity summary of what the extension is saving",
                  "Suggested tabs to sleep or close",
                  "Live memory and CPU use per tab",
                  "Sort tabs by activity or resource use",
                  "One-click sleep and close",
                ]} />
              </Labeled>
            </FadeIn>
          </div>

          {/* How it decides: two listeners feed one decision */}
          <FadeIn>
            <Card style={{ backgroundColor: ACCENT, color: LIGHT }}>
              <p className="font-sans font-bold mb-6" style={{ fontSize: "26px", color: LIGHT_SOFT }}>How It Decides</p>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto_0.8fr] gap-6 items-center">
                {[
                  { t: "Performance listener", d: "Buffering, memory limits, slow page loads, dropped frames" },
                  { t: "Resource listener", d: "Idle tabs, domain clusters, background media, one-time pages" },
                ].map(l => (
                  <div key={l.t} className="rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.16)" }}>
                    <p className="font-bold mb-2" style={{ fontSize: "18px" }}>{l.t}</p>
                    <p className="font-sans" style={{ fontSize: "15px", lineHeight: 1.6, color: LIGHT_SOFT }}>{l.d}</p>
                  </div>
                ))}
                <span className="hidden lg:block"><FlowArrow color={LIGHT} /></span>
                <div className="rounded-xl p-5" style={{ backgroundColor: INK, color: "#F5F0E8" }}>
                  <p className="font-bold mb-2" style={{ fontSize: "18px" }}>Suggested action</p>
                  <p className="font-sans" style={{ fontSize: "15px", lineHeight: 1.6, color: "rgba(245,240,232,0.8)" }}>Keep, sleep, or close each tab</p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Benchmark tiers, one line each */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { t: "Low-end", sub: "≤12 GB RAM", find: "DOM-heavy pages run 9–21× slower; 10–15 tabs start a slowdown", act: "Suspend heavy tabs aggressively" },
              { t: "Mid-end", sub: "12–16 GB RAM", find: "Graphics is the bottleneck", act: "Suspend canvas, WebGL, and unwatched video tabs" },
              { t: "High-end", sub: ">16 GB RAM", find: "Handles 30–50+ tabs before slowing", act: "Suspend less and focus on memory" },
            ].map((b, i) => (
              <FadeIn key={b.t} delay={i * 0.06}>
                <Card style={{ height: "100%" }}>
                  <p className="font-bold" style={{ fontSize: "20px", color: INK }}>{b.t}</p>
                  <p className="font-sans mb-4" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)" }}>{b.sub}</p>
                  <p className="font-sans mb-3" style={small}>{b.find}</p>
                  <p className="font-sans flex items-start gap-3" style={{ ...small, color: INK }}>
                    <span className="mt-1.5 shrink-0"><FlowArrow color={ACCENT} /></span>{b.act}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Presentation slides */}
          <FadeIn>
            <p className="font-sans mb-6 mt-14" style={cardTitle}>Presentation Slides</p>
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

          <FadeIn delay={0.1}>
            <p className="font-sans mt-10" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)", lineHeight: 1.8 }}>
              Invention Corps of Berkeley &times; Mozilla, Fall 2025. Project Leads: Daniel Lee, Connor McSeveney. Designers: Paco Lau, Ethan Tam, Junho Choi, Samuel Hudson, Erin Pan, Kalyani Puthenpurayil. Advised by Seeun Ahn and Tommy Nguyen. Mentored by Mike Conca, Karen Kim, and Tyler Thorne.
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
