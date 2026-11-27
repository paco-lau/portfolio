"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { Card, CaseStudyEnd, FadeIn, HeroMeta, SectionRail, ease } from "../CaseStudy";

import sslBanner from "../../../assets/projects/data-science/ssl-aurora/ssl-banner.png";
import sslPoster from "../../../assets/projects/data-science/ssl-aurora/ssl-poster.webp";

const ACCENT = "#091F40"; // the SSL navy from the banner

const SECTIONS = [
  { id: "role", label: "My Role" },
  { id: "data", label: "Data" },
  { id: "pipeline", label: "Pipeline" },
  { id: "results", label: "Results" },
];

const pad = "pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12";
const body: React.CSSProperties = { fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 };
const cardTitle: React.CSSProperties = { fontSize: "17px", fontWeight: 700, color: ACCENT };
const small: React.CSSProperties = { fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.6 };

/** Big number with a short caption, in a card. */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <Card style={{ height: "100%" }}>
      <p className="font-bold" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1, color: "#181a18" }}>{value}</p>
      <p className="font-sans mt-3" style={small}>{label}</p>
    </Card>
  );
}

const results = [
  { model: "Smoothing", f1: 0.48 },
  { model: "Single photo", f1: 0.47 },
  { model: "GRU with history", f1: 0.42 },
  { model: "GRU, no history (control)", f1: 0.40 },
  { model: "Chance", f1: 0.17 },
];

export default function SSLCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SectionRail accent={ACCENT} sectionRefs={sectionRefs} footerWrapRef={footerWrapRef} sections={SECTIONS} />

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
              Space Sciences Lab &middot; Sep 2026 - Current
            </span>
            <h1 className="font-bold mt-6" style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.08, color: "#181a18" }}>
              Auroral Image Classification
            </h1>
            <HeroMeta role="Data Science Researcher, Temporal Models" team={["1 Mentor", "1 Senior Data Science Researcher", "7 Data Science Researchers"]} />
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
              <Image src={sslBanner} alt="Space Sciences Laboratory auroral image classification" priority className="w-full h-auto" />
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
              The Antarctic Geophysical Observatory (AGO) has been photographing the night sky for about 30 years, and almost none of those images are labeled. A classifier that could reliably say what&rsquo;s in each frame would let researchers follow the aurora across whole solar cycles, not just a few nights someone had time to go through by hand.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
            <FadeIn>
              <p className="font-sans" style={body}>
                This semester I joined the Data Discovery aurora project at UC Berkeley&rsquo;s Space Sciences Laboratory, in the temporal-models group. Our question was simple: <strong className="font-bold">if a model also sees the sky photos from the last half hour, does it label the current one any better?</strong>
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card>
                <p className="font-sans mb-4" style={cardTitle}>What I Worked On</p>
                <ul className="space-y-2">
                  {["Exploring the raw AGO data", "Replicating the OATH benchmark", "Building the temporal-model pipeline", "Analysis and the poster's results"].map(r => (
                    <li key={r} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{r}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* ---------------- THE DATA ---------------- */}
        <section id="data" ref={el => { sectionRefs.current[1] = el; }} className={pad}>
          <FadeIn>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>The Data</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-8" style={body}>
              Before training anything, I wanted to see what the images actually looked like. I loaded one full day of AGO camera data and built contact sheets and sequence views in Python (astropy, NumPy), so we could catch bad frames before they ever reached a model.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: "1,354", label: "frames in one day, each 580 × 752 pixels" },
              { value: "64 s", label: "between frames, and never a gap over 70 seconds" },
              { value: "2", label: "circular camera fields side by side in every frame" },
            ].map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.08}><Stat {...s} /></FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Starting From a Known Result</h3>
              <p className="font-sans" style={body}>
                Next I reproduced the OATH benchmark (Clausen &amp; Nickisch, 2018): 5,824 labeled THEMIS images in 6 classes, sorted by a Ridge classifier on the paper&rsquo;s archived Inception-v4 features. I got 81% accuracy on 1,165 held-out images. The paper reports about 82%. That was close enough to give the team a baseline we could trust.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Planning Our Own Dataset</h3>
              <p className="font-sans" style={body}>
                For AGO, the team planned about 5,000 images from 50 dates, roughly 14 minutes apart, in 4 classes. We split by date, so no night shows up in both training and testing. Otherwise a model can score well just by remembering what a particular night looked like.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ---------------- THE PIPELINE ---------------- */}
        <section id="pipeline" ref={el => { sectionRefs.current[2] = el; }} className={pad}>
          <FadeIn>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>The Pipeline</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-8" style={body}>
              Two earlier notebooks each did part of the job. I merged them into one Colab pipeline, so every model gets tested on exactly the same target images.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { t: "Crop & embed", d: "Crop one camera field, turn it into features with a frozen DINOv2 model, and cache them." },
              { t: "Build a window", d: "For each target image, collect earlier frames from the same night (0, 30 or 60 minutes back) along with the time gaps." },
              { t: "Compare 4 models", d: "Single photo, smoothing, a GRU with no history as the control, and a GRU with history." },
              { t: "Score fairly", d: "Macro-F1, so rare labels count as much as common ones, plus a paired bootstrap to check if a gap is real." },
            ].map((s, i) => (
              <FadeIn key={s.t} delay={i * 0.05}>
                <Card style={{ height: "100%" }}>
                  <p className="font-sans mb-2" style={{ fontSize: "12px", color: "rgba(24,26,24,0.4)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-semibold mb-2" style={{ fontSize: "15px" }}>{s.t}</p>
                  <p className="font-sans" style={small}>{s.d}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>Testing the Test</h3>
              <p className="font-sans" style={body}>
                I didn&rsquo;t want to trust the pipeline on real data until I knew it worked, so I ran it on made-up data first. With random labels, every model stayed at chance, which meant nothing was leaking between training and testing. Then I made the labels actually depend on earlier images. The GRU with history picked that up almost perfectly, while the control couldn&rsquo;t. So if earlier photos really help, this setup will show it.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <FadeIn><Stat value="0.998" label="GRU with history, when labels depend on the past" /></FadeIn>
              <FadeIn delay={0.08}><Stat value="0.26" label="the same GRU without history (control)" /></FadeIn>
            </div>
          </div>
        </section>

        {/* ---------------- RESULTS ---------------- */}
        <section id="results" ref={el => { sectionRefs.current[3] = el; }} className={pad}>
          <FadeIn>
            <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Results</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <p className="font-sans mb-4" style={body}>
                The first real run used 500 labeled AGO images from 5 dates. The simple models came out on top. The GRU with history did beat its control by 1.8 points, but the 95% confidence interval runs from &minus;0.7 to +6.7, so that gap could just be noise. On this sample, I can&rsquo;t say earlier images help.
              </p>
              <p className="font-sans" style={body}>
                The models are fine on clear cases. Where they struggle is photos with external light, and the &ldquo;unsure&rdquo; class, which makes up half the data.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card>
                <p className="font-sans mb-5" style={cardTitle}>Macro-F1 on 500 AGO images</p>
                <ul className="space-y-4">
                  {results.map(r => (
                    <li key={r.model}>
                      <div className="font-sans flex justify-between mb-1.5" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>
                        <span>{r.model}</span>
                        <span className="font-semibold" style={{ color: "#181a18" }}>{r.f1.toFixed(2)}</span>
                      </div>
                      {/* bar length is out of 0.5 so the differences are visible */}
                      <div className="h-2 rounded-full" style={{ backgroundColor: "#d9d3c8" }}>
                        <div className="h-2 rounded-full" style={{ width: `${(r.f1 / 0.5) * 100}%`, backgroundColor: r.model === "Chance" ? "#B7B2A8" : ACCENT }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>The Bigger Problem: Labels</h3>
              <p className="font-sans" style={body}>
                We had two label sets for the same 500 images, one from a person and one generated by AI. They barely agreed, and most of the disagreement was over &ldquo;unsure.&rdquo; I used the human labels as ground truth, but until the team agrees on one labeling rule, it&rsquo;s hard to read too much into any model&rsquo;s score.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <FadeIn><Stat value="21%" label="of photos got the same label from both label sets" /></FadeIn>
              <FadeIn delay={0.08}><Stat value="κ 0.01" label="Cohen's kappa, which is chance-level agreement" /></FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-3" style={cardTitle}>Takeaway</p>
                <p className="font-sans" style={small}>
                  The replication worked and the temporal pipeline is ready to go. On this first small sample, earlier images don&rsquo;t clearly help, and label quality is what&rsquo;s really holding the results back.
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-3" style={cardTitle}>Next Steps</p>
                <ul className="space-y-1.5">
                  {[
                    "Agree on labeling rules and the 4 classes",
                    "Rerun on the full ~5,000 images, split by date",
                    "Compare DINOv2 with DINOv3 and THEMIS SimCLR features",
                    "Try GRU-D, which is built for missing images",
                  ].map(l => (
                    <li key={l} className="font-sans" style={small}>{l}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          <FadeIn>
            <p className="font-sans" style={body}>
              Along the way I put together the combined Colab notebook, the results text for our poster, and an 18-slide presentation with speaker notes.
            </p>
          </FadeIn>

          {/* Poster */}
          <FadeIn>
            <p className="font-sans mb-6 mt-14" style={body}>Research Poster</p>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={sslPoster}
                alt="Research poster: Evaluating Auroral Image Classifiers for the Antarctic Geophysical Observatory"
                sizes="(min-width: 1024px) 80vw, 95vw"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans mt-14" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)", lineHeight: 1.8 }}>
              Part of Berkeley Data Discovery at the Space Sciences Laboratory, Fall 2026. Team: Paco Lau, Sumedh Borkar, Nandini Prasad, Harry Wang, Brayden Yang, Winston Lin. Supervised by Yen-Jung Wu.
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
