"use client";

import Image from "next/image";
import { useRef } from "react";
import Footer from "../../components/Footer";
import { Card, CaseStudyEnd, CaseStudyHero, FadeIn, SectionRail } from "../CaseStudy";

import healthcareBanner from "../../../assets/projects/data-science/healthcare-fraud/healthcare-fraud-banner.png";

const ACCENT = "#4A1E28"; // the maroon from the banner

const SECTIONS = [
  { id: "role", label: "My Role" },
  { id: "data", label: "Data" },
  { id: "signals", label: "Fraud\nSignals" },
  { id: "results", label: "Results" },
];

const pad = "pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12";
const body: React.CSSProperties = { fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 };
const cardTitle: React.CSSProperties = { fontSize: "17px", fontWeight: 700, color: ACCENT };
const small: React.CSSProperties = { fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.6 };
const caption: React.CSSProperties = { fontSize: "13px", color: "rgba(24,26,24,0.45)" };
const h3: React.CSSProperties = { fontSize: "clamp(1.5rem, 2.5vw, 2rem)" };

/** Big number with a short caption, in a card. */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <Card style={{ height: "100%" }}>
      <p className="font-bold" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1, color: "#181a18" }}>{value}</p>
      <p className="font-sans mt-3" style={small}>{label}</p>
    </Card>
  );
}

/** A notebook chart on a white card, so matplotlib's white background sits cleanly. */
function Chart({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      <Image src={src} alt={alt} width={w} height={h} className="w-full h-auto block" />
    </div>
  );
}

// Fraud-labeled vs. not, per provider (medians unless noted)
const compare = [
  { metric: "Excess dollars above the expected range", fraud: "$19,483", clean: "$0" },
  { metric: "Largest one-week spike in excess", fraud: "$8,653", clean: "$0" },
  { metric: "Weeks with claims on file", fraud: "19", clean: "4" },
  { metric: "Worst week's share of flagged claims", fraud: "50%", clean: "0%" },
];

export default function HealthcareFraudCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SectionRail accent={ACCENT} sectionRefs={sectionRefs} footerWrapRef={footerWrapRef} sections={SECTIONS} />

      <CaseStudyHero
        badge={"Healthcare Fraud Detection\u2002|\u2002Feb 2026 - May 2026"}
        title="Medicare Claims Risk Modeling"
        role="Data Science Researcher"
        team={["2 Leads", "4 Data Science Researchers"]}
        banner={healthcareBanner}
        accent={ACCENT}
      />

      <div className="bg-[#F5F0E8]">
        {/* ---------------- MY ROLE ---------------- */}
        <section id="role" ref={el => { sectionRefs.current[0] = el; }} className={pad}>
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>My Role</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans" style={body}>
              Medicare fraud usually doesn&rsquo;t look like one obviously fake bill. It looks like a provider who bills a little more than they should, a little more often, for a long time. This project was part of DataGood at Berkeley, and our question was: <strong className="font-bold">using only claims data, can we tell which providers are worth a closer look?</strong>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
            <FadeIn>
              <p className="font-sans" style={body}>
                I was one of four researchers working under two leads. Each week we built a new way of scoring providers in Python, and I wrote up what each one was actually telling us. A lot of the work was figuring out which numbers meant something, and which just looked dramatic.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card>
                <p className="font-sans mb-4" style={cardTitle}>What I Worked On</p>
                <ul className="space-y-2">
                  {["Cleaning and feature-building on inpatient claims", "Regression with prediction intervals", "kNN outlier scores for providers", "Weekly time-series spike metrics"].map(r => (
                    <li key={r} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{r}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* ---------------- DATA ---------------- */}
        <section id="data" ref={el => { sectionRefs.current[1] = el; }} className={pad}>
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Data</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-8" style={body}>
              We worked with a public Medicare claims dataset where each provider is labeled as potential fraud or not. I focused on inpatient claims. From each one I built a few simple features: length of stay, how many diagnosis and procedure codes were filled in, and the diagnosis group (keeping the 20 most common and lumping the rest into &ldquo;Other&rdquo;). Then I dropped negative payouts and stays over 30 days.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: "40,007", label: "inpatient claims after cleaning" },
              { value: "2,021", label: "providers in our 30,000-claim sample, each labeled fraud or not" },
              { value: "57.6%", label: "accuracy of a first logistic model on just two dollar amounts" },
            ].map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.08}><Stat {...s} /></FadeIn>
            ))}
          </div>

          <FadeIn>
            <h3 className="font-bold mb-4" style={h3}>Why a Baseline Wasn&rsquo;t Enough</h3>
            <p className="font-sans" style={body}>
              Our first try was a logistic regression that guessed the fraud label from just the reimbursement and deductible on each claim. It landed at 57.6% accuracy, barely better than guessing. That made sense: a big bill isn&rsquo;t suspicious on its own. A long hospital stay with lots of procedures <em>should</em> cost a lot. What we needed was a sense of what each claim should have cost, and then to measure how far a provider strays from that.
            </p>
          </FadeIn>
        </section>

        {/* ---------------- FRAUD SIGNALS ---------------- */}
        <section id="signals" ref={el => { sectionRefs.current[2] = el; }} className={pad}>
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Fraud Signals</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-10" style={body}>
              We built up three signals, each one catching something the one before it could miss.
            </p>
          </FadeIn>

          {/* 1. Prediction intervals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <FadeIn>
              <p className="font-sans mb-2" style={{ fontSize: "12px", color: "rgba(24,26,24,0.4)" }}>01</p>
              <h3 className="font-bold mb-4" style={h3}>Is This Claim Too Expensive?</h3>
              <p className="font-sans mb-4" style={body}>
                I fit a regression that predicts a claim&rsquo;s payout from its length of stay, code counts, and diagnosis group, then put a 95% prediction interval around each prediction. Anything above the top of that range got flagged, and the amount over it counted as &ldquo;excess dollars.&rdquo;
              </p>
              <p className="font-sans" style={body}>
                Adding context nearly doubled how much the model explained (R&sup2; from 0.09 with length of stay alone to 0.17). Procedure codes mattered most: each extra one added about $3,692 to the expected payout. About 4.4% of claims ended up flagged.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Chart src="/projects/healthcare-fraud/prediction-intervals.webp" alt="Scatter plot of predicted vs actual reimbursement with the 95% prediction interval; points above the upper line are flagged" w={649} h={470} />
              <p className="font-sans mt-3" style={caption}>Each dot is a claim. Dots above the dashed blue line cost more than the model&rsquo;s 95% range allows.</p>
            </FadeIn>
          </div>

          {/* 2. kNN */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <FadeIn>
              <p className="font-sans mb-2" style={{ fontSize: "12px", color: "rgba(24,26,24,0.4)" }}>02</p>
              <h3 className="font-bold mb-4" style={h3}>Does This Provider Look Like Anyone Else?</h3>
              <p className="font-sans mb-4" style={body}>
                Next we rolled claims up into a profile for each provider: claim count, share flagged, number flagged, total excess, and biggest single excess. After scaling them so no one feature dominated, a kNN score measured how far each provider sits from its 10 closest neighbors.
              </p>
              <p className="font-sans" style={body}>
                All 10 of the most isolated providers were labeled fraud, and the average score for fraud-labeled providers was almost double (0.094 vs. 0.054).
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Chart src="/projects/healthcare-fraud/knn-scores.webp" alt="Histogram of kNN outlier scores for fraud and non-fraud providers; fraud-labeled providers stretch into the long right tail" w={790} h={490} />
              <p className="font-sans mt-3" style={caption}>Non-fraud providers cluster near zero. The long tail to the right is almost all fraud-labeled.</p>
            </FadeIn>
          </div>

          {/* 3. Time series */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="font-sans mb-2" style={{ fontSize: "12px", color: "rgba(24,26,24,0.4)" }}>03</p>
              <h3 className="font-bold mb-4" style={h3}>Did Something Spike?</h3>
              <p className="font-sans" style={body}>
                An overall profile can hide a provider who&rsquo;s fine most of the year and then has one really bad week. So I bucketed every claim by week and tracked each provider&rsquo;s weekly excess and flag rate. Then I looked at their worst week, their average week, and how often they had any flagged claim at all.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <FadeIn><Stat value="9 / 10" label="providers with the biggest one-week spike were fraud-labeled" /></FadeIn>
              <FadeIn delay={0.08}><Stat value="$53.5K" label="the single worst week of excess billing we found" /></FadeIn>
            </div>
          </div>
        </section>

        {/* ---------------- RESULTS ---------------- */}
        <section id="results" ref={el => { sectionRefs.current[3] = el; }} className={pad}>
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Results</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <p className="font-sans mb-4" style={body}>
                Every signal pointed the same way. All 10 providers with the most excess dollars were fraud-labeled. The top one, PRV52019, billed about $483K above what the model expected across 511 claims. Only 6.3% of its claims were flagged, but at that volume the dollars still pile up.
              </p>
              <p className="font-sans" style={body}>
                The gap between the two groups is clearest at the median. A typical clean provider never goes over the expected range at all. A typical fraud-labeled one does, and keeps billing week after week.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card>
                <div className="font-sans grid grid-cols-[1fr_auto_auto] gap-x-6 gap-y-3 items-center" style={{ fontSize: "14px" }}>
                  <span style={{ color: "rgba(24,26,24,0.45)", fontSize: "13px", fontWeight: 600 }}>Median, per provider</span>
                  <span className="text-right font-semibold" style={{ color: ACCENT }}>Fraud</span>
                  <span className="text-right font-semibold" style={{ color: "rgba(24,26,24,0.5)" }}>Not fraud</span>
                  {compare.map(r => (
                    <div key={r.metric} className="contents">
                      <span style={{ color: "rgba(24,26,24,0.65)" }}>{r.metric}</span>
                      <span className="text-right font-semibold" style={{ color: "#181a18" }}>{r.fraud}</span>
                      <span className="text-right" style={{ color: "rgba(24,26,24,0.5)" }}>{r.clean}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-3" style={cardTitle}>Takeaway</p>
                <p className="font-sans" style={small}>
                  Raw dollar amounts can&rsquo;t tell fraud apart (57.6%). Comparing each claim to what it <em>should</em> have cost can. Then each provider can be judged against its peers and against its own weekly history. The three signals catch different patterns: steady overbilling, a few huge claims, and short bursts.
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-3" style={cardTitle}>Caveats &amp; Next Steps</p>
                <ul className="space-y-1.5">
                  {[
                    "Feed all three signals into one model and test it on held-out providers",
                    "Bring in outpatient claims, not just inpatient",
                    "Unusual isn't always fraud: a rare, expensive illness can look like an outlier",
                  ].map(l => (
                    <li key={l} className="font-sans" style={small}>{l}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <p className="font-sans mt-14" style={{ fontSize: "13px", color: "rgba(24,26,24,0.45)", lineHeight: 1.8 }}>
              Part of DataGood at Berkeley, Spring 2026. Led by Zen and Kristen.
            </p>
          </FadeIn>
        </section>
      </div>

      <CaseStudyEnd num="11" />

      <div ref={footerWrapRef}>
        <Footer />
      </div>
    </>
  );
}
