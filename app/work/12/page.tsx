"use client";

import Image from "next/image";
import { useRef } from "react";
import Footer from "../../components/Footer";
import { Card, CaseStudyEnd, CaseStudyHero, FadeIn, FlowArrow, Key as KeyBase, Labeled as LabeledBase, MiniBars as MiniBarsBase, Numbered as NumberedBase, SectionRail, SectionTitle, Waffle, lead, pad, small } from "../CaseStudy";

import sslBanner from "../../../assets/projects/data-science/ssl-aurora/ssl-banner.png";
import sslPoster from "../../../assets/projects/data-science/ssl-aurora/ssl-poster.webp";

const ACCENT = "#091F40"; // the SSL navy from the banner

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "approach", label: "Approach" },
  { id: "results", label: "Results" },
  { id: "poster", label: "Poster" },
];

const cardTitle: React.CSSProperties = { fontSize: "17px", fontWeight: 700, color: ACCENT };

const Key = (p: { children: React.ReactNode }) => <KeyBase accent={ACCENT} {...p} />;
const Labeled = (p: { title: string; children: React.ReactNode }) => <LabeledBase accent={ACCENT} {...p} />;
const Numbered = (p: { items: React.ReactNode[]; size?: number }) => <NumberedBase accent={ACCENT} {...p} />;
const MiniBars = (p: { bars: { label: string; value: number; text: string }[]; max: number; flush?: boolean }) => <MiniBarsBase accent={ACCENT} {...p} />;

const results = [
  { model: "Smoothing", f1: 0.48 },
  { model: "Single photo", f1: 0.47 },
  { model: "GRU with history", f1: 0.42 },
  { model: "GRU without history", f1: 0.40 },
  { model: "Chance", f1: 0.17 },
];

export default function SSLCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SectionRail accent={ACCENT} sectionRefs={sectionRefs} footerWrapRef={footerWrapRef} sections={SECTIONS} />

      <CaseStudyHero
        badge={"Space Sciences Lab | Sep 2026 - Current"}
        title="Auroral Image Classification"
        role="Data Science Researcher, Temporal Models"
        team={["1 Mentor", "1 Senior Data Science Researcher", "7 Data Science Researchers"]}
        banner={sslBanner}
        accent={ACCENT}
      />

      <div className="bg-[#F5F0E8]">
        {/* ---------------- OVERVIEW ---------------- */}
        <section id="overview" ref={el => { sectionRefs.current[0] = el; }} className={pad}>
          <FadeIn>
            <SectionTitle>Overview</SectionTitle>
          </FadeIn>

          {/* Context first: who the lab is and where I fit, in the hero's label | text format */}
          <FadeIn>
            <div className="space-y-8 mb-10">
              <Labeled title="What is the Space Sciences Lab (SSL)?">
                <p className="font-sans" style={{ ...small, fontSize: "17px" }}>
                  UC Berkeley&rsquo;s research lab for space physics. It helps run NASA&rsquo;s THEMIS mission, whose ground cameras photograph the aurora. I joined through Berkeley Data Discovery, which pairs students with research teams.
                </p>
              </Labeled>
              <Labeled title="My Role">
                <p className="font-sans" style={{ ...small, fontSize: "17px" }}>
                  One of 8 student researchers, in the temporal-models group. Our group asked whether earlier sky photos help label the current one, and I built the pipeline we used to test it.
                </p>
              </Labeled>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-10" style={lead}>
              The Antarctic Geophysical Observatory (AGO) has 30 years of mostly unlabeled sky photos. I tested whether a model labels aurora better when it also sees the 30&ndash;60 minutes before each photo.
            </p>
          </FadeIn>

          {/* Hierarchy: the key finding gets the big card; the two proof points support it */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* [&>div]:h-full lets the fade wrapper, and so the card, fill both rows */}
            <div className="lg:col-span-2 lg:row-span-2 [&>div]:h-full">
              <FadeIn>
                <Card style={{ height: "100%", backgroundColor: ACCENT, color: "#F5F0E8", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem" }}>
                  <p className="font-sans" style={{ ...cardTitle, fontSize: "26px", color: "rgba(245,240,232,0.7)" }}>Key Finding</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                    <div className="flex-1">
                      <p className="font-bold" style={{ fontSize: "clamp(5rem, 12vw, 10rem)", lineHeight: 1, color: "#F5F0E8" }}>21%</p>
                      <p className="font-sans mt-4" style={{ ...small, color: "#F5F0E8", fontSize: "20px", lineHeight: 1.45 }}>
                        label agreement between two label sets for the same 500 photos (Cohen&rsquo;s &kappa; = 0.01, chance level)
                      </p>
                    </div>
                    <Waffle on="#F5F0E8" off="rgba(245,240,232,0.15)" filled={21} label="21 of 100 squares filled: 21% of photos got the same label from both label sets" />
                  </div>
                  <div className="flex items-start gap-3 pt-6" style={{ borderTop: "1px solid rgba(245,240,232,0.2)" }}>
                    <span className="mt-1.5 shrink-0"><FlowArrow color="#F5F0E8" /></span>
                    <p className="font-sans" style={{ ...small, fontSize: "17px", color: "rgba(245,240,232,0.8)" }}>
                      <strong style={{ color: "#F5F0E8" }}>Why it matters:</strong> no model score means much until the labels are reliable. This shifted the team&rsquo;s next step from new models to one shared labeling rule.
                    </p>
                  </div>
                </Card>
              </FadeIn>
            </div>
            <FadeIn delay={0.06}>
              <Card style={{ height: "100%" }}>
                <p className="font-bold" style={{ fontSize: "2.25rem", lineHeight: 1, color: "#181a18" }}>81%</p>
                <p className="font-sans mt-2" style={small}>Reproduced the published OATH benchmark, giving the team a trusted baseline</p>
                <MiniBars max={100} bars={[{ label: "My replication", value: 81, text: "81%" }, { label: "Published paper", value: 82, text: "~82%" }]} />
              </Card>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Card style={{ height: "100%" }}>
                <p className="font-bold" style={{ fontSize: "2.25rem", lineHeight: 1, color: "#181a18" }}>0.998</p>
                <p className="font-sans mt-2" style={small}>F1 on planted test data, so the pipeline detects a real effect when one exists</p>
                <MiniBars max={1} bars={[{ label: "GRU with history", value: 0.998, text: "0.998" }, { label: "Control", value: 0.26, text: "0.26" }]} />
              </Card>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-12">
              <Labeled title="What I Did">
                <Numbered size={19} items={[
                  <><Key>Replicated the OATH benchmark</Key> to give the team a trusted baseline</>,
                  <>Built the <Key>Colab pipeline</Key> that compares <Key>four models</Key> on identical images</>,
                  <><Key>Validated it on synthetic data</Key> before running it on real photos</>,
                ]} />
              </Labeled>
            </div>
          </FadeIn>
        </section>

        {/* ---------------- APPROACH ---------------- */}
        <section id="approach" ref={el => { sectionRefs.current[1] = el; }} className={pad}>
          <FadeIn>
            <SectionTitle>Approach</SectionTitle>
            <p className="font-sans mb-10" style={lead}>One pipeline, four models, and the same target images for every model.</p>
          </FadeIn>

          {/* Steps flow left to right; arrows sit between cards on wide screens.
              Compare is the featured (navy) step: the no-history control is what makes the test fair. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1.35fr_auto_1fr] gap-4 lg:gap-3 items-stretch mb-6">
            {[
              { t: "Embed", d: <>Crop one camera field and turn it into features with a frozen DINOv2 model.</> },
              { t: "Add history", d: <>Attach frames from the previous 0, 30 or 60 min of the same night, with the time gaps.</> },
              { t: "Compare", featured: true, d: <>Four models on the same photos. The GRU without history is a control, so any gain comes from the history, not the model.</> },
              { t: "Score", d: <>Macro-F1 so rare labels count equally, and a paired bootstrap to test if a gap is real.</> },
            ].flatMap((s, i) => [
              ...(i > 0 ? [<span key={`a${i}`} className="hidden lg:flex items-center"><FlowArrow color={ACCENT} /></span>] : []),
              <div key={s.t} className="[&>div]:h-full">
                <FadeIn delay={i * 0.05}>
                  <Card style={{ height: "100%", ...(s.featured && { backgroundColor: ACCENT }) }}>
                    <p className="font-bold mb-3" style={{ fontSize: "22px", color: s.featured ? "#F5F0E8" : "#181a18" }}>{s.t}</p>
                    <p className="font-sans" style={{ ...small, fontSize: "17px", color: s.featured ? "rgba(245,240,232,0.8)" : small.color }}>{s.d}</p>
                  </Card>
                </FadeIn>
              </div>,
            ])}
          </div>

          {/* A footnote to the steps, not a step: no card */}
          <FadeIn>
            <p className="font-sans mt-8" style={{ ...small, fontSize: "17px" }}>
              <span className="font-semibold" style={{ color: ACCENT }}>Fairness check:</span> with random labels, every model scored at chance, so no model could cheat by seeing test data during training.
            </p>
          </FadeIn>
        </section>

        {/* ---------------- RESULTS ---------------- */}
        <section id="results" ref={el => { sectionRefs.current[2] = el; }} className={pad}>
          <FadeIn>
            <SectionTitle>Results</SectionTitle>
            <p className="font-sans mb-10" style={lead}>
              On 500 photos from 5 nights, earlier photos did not clearly help. Label quality, not the model, was the main limit.
            </p>
          </FadeIn>

          {/* Hierarchy: the answer to the research question is the featured (navy) card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="[&>div]:h-full">
              <FadeIn>
                <Card style={{ height: "100%", backgroundColor: ACCENT, color: "#F5F0E8", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                  <p className="font-sans" style={{ ...cardTitle, fontSize: "26px", color: "rgba(245,240,232,0.7)" }}>Main Result</p>
                  {/* same number-left, text-right header as the 0.48 card, so both rows line up */}
                  <div className="flex items-center gap-6">
                    <p className="font-bold shrink-0" style={{ fontSize: "clamp(4rem, 9vw, 7rem)", lineHeight: 1 }}>+1.8</p>
                    <p className="font-sans" style={{ fontSize: "20px", lineHeight: 1.45 }}>points of macro-F1 from adding history, which is not significant</p>
                  </div>
                  {/* 95% CI drawn on a -2..+8 scale; the bar crossing the zero line is the point */}
                  <div role="img" aria-label="95% confidence interval from -0.7 to +6.7, estimate +1.8, crossing zero">
                    <div className="relative h-8">
                      <span className="absolute top-0 bottom-0 w-px" style={{ left: "20%", backgroundColor: "rgba(245,240,232,0.5)" }} />
                      <span className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full" style={{ left: "13%", width: "74%", backgroundColor: "rgba(245,240,232,0.35)" }} />
                      <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full" style={{ left: "38%", backgroundColor: "#F5F0E8" }} />
                    </div>
                    <div className="relative h-5 font-sans" style={{ fontSize: "13px", color: "rgba(245,240,232,0.7)" }}>
                      <span className="absolute -translate-x-1/2" style={{ left: "13%" }}>&minus;0.7</span>
                      <span className="absolute -translate-x-1/2" style={{ left: "20%" }}>0</span>
                      <span className="absolute -translate-x-1/2" style={{ left: "38%" }}>+1.8</span>
                      <span className="absolute -translate-x-1/2" style={{ left: "87%" }}>+6.7</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-6" style={{ borderTop: "1px solid rgba(245,240,232,0.2)" }}>
                    <span className="mt-1.5 shrink-0"><FlowArrow color="#F5F0E8" /></span>
                    <p className="font-sans" style={{ fontSize: "17px", lineHeight: 1.6, color: "rgba(245,240,232,0.8)" }}>
                      The 95% interval includes zero, so on this sample earlier photos don&rsquo;t clearly help.
                    </p>
                  </div>
                </Card>
              </FadeIn>
            </div>
            <FadeIn delay={0.06}>
              {/* a step smaller than +1.8, so the main result stays dominant and the cards end level */}
              <Card style={{ height: "100%", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                <p className="font-sans" style={{ ...cardTitle, fontSize: "26px" }}>Model Scores</p>
                <div className="flex items-center gap-6">
                  <p className="font-bold shrink-0" style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", lineHeight: 1, color: "#181a18" }}>0.48</p>
                  <p className="font-sans" style={{ ...small, fontSize: "20px", lineHeight: 1.45 }}>Best macro-F1, from simple smoothing. Chance is 0.17.</p>
                </div>
                <MiniBars flush max={0.5} bars={results.map(r => ({ label: r.model, value: r.f1, text: r.f1.toFixed(2) }))} />
              </Card>
            </FadeIn>
          </div>

          <div className="space-y-10 mt-12">
            <FadeIn>
              <Labeled title="Limitations">
              <Numbered size={17} items={[
                "Small sample: 500 photos from 5 nights",
                "Half the photos are labeled \u201cunsure,\u201d where most errors land, along with photos that have external light",
                "Unreliable labels (\u03ba = 0.01) make every score noisy",
                "Only one feature model, DINOv2, was tested",
              ]} />
              </Labeled>
            </FadeIn>
            <FadeIn delay={0.06}>
              <Labeled title="Next Steps">
              <Numbered size={17} items={[
                "Agree on one labeling rule and 4 classes",
                "Rerun on the full ~5,000 images, split by night",
                "Compare DINOv2 with DINOv3 and THEMIS SimCLR features",
                "Try GRU-D, which handles missing frames",
              ]} />
              </Labeled>
            </FadeIn>
          </div>
        </section>

        {/* ---------------- POSTER ---------------- */}
        <section id="poster" ref={el => { sectionRefs.current[3] = el; }} className={pad}>
          <FadeIn>
            <SectionTitle>Poster</SectionTitle>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={sslPoster}
                alt="Research poster: Evaluating Auroral Image Classifiers for the Antarctic Geophysical Observatory"
                sizes="(min-width: 1024px) 80vw, 95vw"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-sans mt-10" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)", lineHeight: 1.8 }}>
              Berkeley Data Discovery at the Space Sciences Laboratory, Fall 2026. Team: Paco Lau, Sumedh Borkar, Nandini Prasad, Harry Wang, Brayden Yang, Winston Lin, Nicholas Pedersen, Omar Aslai. Supervised by Yen-Jung Wu.
            </p>
          </FadeIn>
        </section>
      </div>

      <CaseStudyEnd num="12" />

      <div ref={footerWrapRef}>
        <Footer />
      </div>
    </>
  );
}
