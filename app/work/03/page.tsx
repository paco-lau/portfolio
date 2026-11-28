"use client";

import Image from "next/image";
import { useRef } from "react";
import Footer from "../../components/Footer";
import { Card, CaseStudyEnd, CaseStudyHero, Carousel, FadeIn, SectionRail } from "../CaseStudy";

import gotourBanner from "../../../assets/projects/design/gotourglobal/gotourglobal-banner.png";

const ACCENT = "#CC6F51"; // the coral from the banner
const slide = (n: number) => `/projects/gotourglobal/slides/slide-${String(n).padStart(2, "0")}.webp`;

const pad = "pl-4 sm:pl-8 md:pl-12 lg:pl-16 pr-4 sm:pr-8 md:pr-32 lg:pr-48 py-10 md:py-12";
const body: React.CSSProperties = { fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(24,26,24,0.6)", lineHeight: 1.7 };
const cardTitle: React.CSSProperties = { fontSize: "17px", fontWeight: 700, color: ACCENT };
const small: React.CSSProperties = { fontSize: "14px", color: "rgba(24,26,24,0.6)", lineHeight: 1.6 };
const label: React.CSSProperties = { fontSize: "13px", fontWeight: 600, color: "rgba(24,26,24,0.45)" };
const h3: React.CSSProperties = { fontSize: "clamp(1.5rem, 2.5vw, 2rem)" };

/** One slide from the deck, shown as a figure. */
function Slide({ n, alt }: { n: number; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <Image src={slide(n)} alt={alt} width={1920} height={1080} sizes="(min-width: 1024px) 50vw, 95vw" className="w-full h-auto block" />
    </div>
  );
}

const personas = [
  {
    name: "Alejandra", who: "High school counselor, Los Angeles",
    pains: ["Finding activities the kids and adults both enjoy", "Hidden costs in booking", "Too much information at once"],
    needs: ["Knowing if a place is stroller-accessible", "One place for every activity and ticket"],
  },
  {
    name: "Maya", who: "Remote UX designer, New York",
    pains: ["Safety, especially traveling solo", "Most activities are built for groups", "Planning info is scattered across apps"],
    needs: ["Solo-friendly itineraries", "Safety tips on neighborhoods and transit", "Local events and small group tours"],
  },
  {
    name: "Fiona", who: "Software designer, Santa Cruz",
    pains: ["Always recommended the same places", "Too much effort comparing and coordinating"],
    needs: ["A nicer, more aesthetic trip", "Booking fitness classes along the way"],
  },
  {
    name: "Joshua", who: "University student, Berkeley",
    pains: ["Lining up schedules across a big group", "Disagreeing on budget and activities", "Tracking who paid for what"],
    needs: ["A shared itinerary everyone can edit", "Built-in expense splitting", "Voting on activities and hotels"],
  },
];

export default function GoTourGlobalCaseStudyPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const footerWrapRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <SectionRail accent={ACCENT} sectionRefs={sectionRefs} footerWrapRef={footerWrapRef} />

      <CaseStudyHero
        github="https://github.com/paco-lau/gotourglobal_mobile"
        badge={"GoTourGlobal\u2002|\u2002Feb 2026 - May 2026"}
        title="Mobile App"
        role="UX Engineer"
        team={["1 Project Manager", "4 UX Designers", "1 UX Engineer"]}
        banner={gotourBanner}
        accent={ACCENT}
        badgeText="#181a18"
      />

      <div className="bg-[#F5F0E8]">
        {/* ---------------- MY ROLE ---------------- */}
        <section id="role" ref={el => { sectionRefs.current[0] = el; }} className={pad}>
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>My Role</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans" style={body}>
              GoTourGlobal runs curated group trips and plans travel end to end, but most of that happened through a website that was hard to get around and an inquiry form. They wanted a mobile app. The traveler&rsquo;s side of the problem was simple: planning a trip is stressful, and that stress follows you once you&rsquo;re actually traveling. So we asked: <strong className="font-bold">How might we create a seamless mobile app that makes travelers feel at ease, and encourages stress-free travel on the go?</strong>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
            <FadeIn>
              <p className="font-sans" style={body}>
                I was the only UX engineer on a team of six, working alongside a project manager and four UX designers through UX at Berkeley. While the designers worked through research and screens, my job was figuring out how the app would actually get built, and then building it in React Native with TypeScript.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card>
                <p className="font-sans mb-4" style={cardTitle}>What I Worked On</p>
                <ul className="space-y-2">
                  {["Research and the competitive audit", "Choosing the tech stack", "Turning the hi-fi screens into a React Native app"].map(r => (
                    <li key={r} className="font-sans" style={{ fontSize: "14px", color: "rgba(24,26,24,0.65)" }}>{r}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* ---------------- RESEARCH ---------------- */}
        <section id="research" ref={el => { sectionRefs.current[1] = el; }} className={pad}>
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Research</h2>
          </FadeIn>

          <FadeIn>
            <p className="font-sans mb-8" style={body}>
              We started by looking at what travelers already use, including Luxe Travel, Airbnb, and Black &amp; Traveled, and by auditing GoTourGlobal&rsquo;s own website.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FadeIn>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-3" style={cardTitle}>What Competitors Do Well</p>
                <ul className="space-y-1.5">
                  {["Interactive maps and daily itineraries", "Expense tracking and in-depth guides", "Booking flights, hotels, and tickets in one app", "Clean, minimal layouts with a strong nav bar"].map(l => (
                    <li key={l} className="font-sans" style={small}>{l}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
            <FadeIn delay={0.08}>
              <Card style={{ height: "100%" }}>
                <p className="font-sans mb-3" style={cardTitle}>Where They Fall Short</p>
                <ul className="space-y-1.5">
                  {["Weak search and filters", "No clear visual hierarchy, and long scrolls that overwhelm", "Niche problems still mean calling support", "GoTourGlobal's own site: cluttered, with broken links"].map(l => (
                    <li key={l} className="font-sans" style={small}>{l}</li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>

          <FadeIn>
            <h3 className="font-bold mb-6" style={h3}>Key Insights</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              "Travelers want navigation that's fast and easy to reach while they're on the go.",
              "Travelers want one clear, organized place to manage bookings and payments.",
              "Travelers want filters that actually help them find the kind of trip they're after.",
            ].map((t, i) => (
              <FadeIn key={t} delay={i * 0.08}>
                <Card style={{ height: "100%" }}>
                  <p className="font-bold mb-2" style={{ fontSize: "2rem", lineHeight: 1, color: ACCENT }}>{i + 1}</p>
                  <p className="font-sans" style={small}>{t}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <h3 className="font-bold mb-4" style={h3}>Who We Designed For</h3>
            <p className="font-sans mb-6" style={body}>We built four personas to keep very different kinds of travelers in mind, from a parent planning for three generations to a student organizing a grad trip.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personas.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.06}>
                <Card style={{ height: "100%" }}>
                  <p className="font-sans" style={cardTitle}>{p.name}</p>
                  <p className="font-sans mb-4" style={{ fontSize: "12px", color: "rgba(24,26,24,0.45)" }}>{p.who}</p>
                  <p className="font-sans mb-1" style={label}>Pain Points</p>
                  <ul className="space-y-1 mb-4">
                    {p.pains.map(l => <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>{l}</li>)}
                  </ul>
                  <p className="font-sans mb-1" style={label}>Needs</p>
                  <ul className="space-y-1">
                    {p.needs.map(l => <li key={l} className="font-sans" style={{ fontSize: "13px", color: "rgba(24,26,24,0.6)", lineHeight: 1.5 }}>{l}</li>)}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ---------------- DESIGN & ITERATION ---------------- */}
        <section id="design" ref={el => { sectionRefs.current[2] = el; }} className={pad}>
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Design &amp; Iteration</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <h3 className="font-bold mb-4" style={h3}>From Website to App</h3>
              <p className="font-sans" style={body}>
                We mapped out the existing website&rsquo;s structure first, then cut it down for mobile. The website branches off in a lot of directions. The app keeps it to three tabs, Explore, Trips, and Profile, so you&rsquo;re never more than a tap or two from your bookings.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}><Slide n={7} alt="Information architecture of the GoTourGlobal website next to the simplified mobile app" /></FadeIn>
          </div>

          <FadeIn>
            <h3 className="font-bold mb-4" style={h3}>Sketches to Wireframes</h3>
            <p className="font-sans mb-6" style={body}>
              We sketched screens on paper first, then moved to grayscale wireframes, and then to mid-fi screens with the coral color and real layouts. Each round cut a little more clutter, which was the main complaint about the old site.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn><Slide n={11} alt="Paper sketches of the GoTourGlobal app screens" /></FadeIn>
            <FadeIn delay={0.08}><Slide n={13} alt="Mid-fidelity screens for profile, destination search, and itinerary" /></FadeIn>
          </div>
        </section>

        {/* ---------------- FINAL PRODUCT ---------------- */}
        <section id="final" ref={el => { sectionRefs.current[3] = el; }} className={pad}>
          <FadeIn>
            <h2 className="flex items-center gap-6 after:content-[''] after:flex-1 after:h-px after:bg-[#181a18]/20 font-bold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Final Product</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <FadeIn>
              <p className="font-sans mb-6" style={body}>
                The hi-fi app lets you browse trips and trips nearby, search by destination, date, and trip type, and keep every upcoming trip with its day-by-day itinerary in one place. Payments show what you owe and let you pick a payment plan, and a posts page lets travelers share photos and reviews afterward.
              </p>
              <ul className="space-y-3">
                {["Explore with search and trip types", "Trips with daily itineraries", "Payments with flexible plans", "Profile and trip posts"].map(g => (
                  <li key={g} className="font-sans flex gap-3" style={{ fontSize: "15px", color: "rgba(24,26,24,0.65)" }}>
                    <span style={{ color: ACCENT }}>&bull;</span> {g}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Carousel
                accent={ACCENT}
                aspectRatio="1920 / 1080"
                items={[
                  { src: slide(14), alt: "Hi-fi screens: explore, destination search, and upcoming trips" },
                  { src: slide(15), alt: "Hi-fi screens: trips, itinerary, and profile" },
                  { src: slide(16), alt: "Hi-fi screens: payments, order summary, and posts" },
                ]}
              />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h3 className="font-bold mb-4" style={h3}>Building It</h3>
              <p className="font-sans" style={body}>
                For the engineering side, we went with React Native so one codebase runs on both iPhone and Android, and TypeScript to catch mistakes before they reach a phone. These screens are from our midpoint presentation, so the build was still in progress at that point.
              </p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <FadeIn><Card style={{ height: "100%" }}><p className="font-sans mb-1" style={label}>Language</p><p className="font-bold" style={{ fontSize: "1.5rem" }}>TypeScript</p></Card></FadeIn>
              <FadeIn delay={0.08}><Card style={{ height: "100%" }}><p className="font-sans mb-1" style={label}>Framework</p><p className="font-bold" style={{ fontSize: "1.5rem" }}>React Native</p></Card></FadeIn>
            </div>
          </div>

          {/* Presentation slides */}
          <FadeIn>
            <p className="font-sans mb-6 mt-14" style={body}>Presentation Slides</p>
            <div
              className="rounded-2xl shadow-xl mx-auto"
              style={{ aspectRatio: "1920 / 1080", maxWidth: "90%", overflowY: "auto", overflowX: "hidden" }}
            >
              {Array.from({ length: 18 }, (_, i) => (
                <Image
                  key={i}
                  src={slide(i + 1)}
                  alt={`GoTourGlobal midpoint presentation, slide ${i + 1}`}
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
              A UX at Berkeley project for GoTourGlobal in Spring 2026. Project Manager: Kiana George. UX Designers: Jannet Rashid, Tim Lee, Sahnon Panggabean, Camila Fernandez. UX Engineer: Paco Lau.
            </p>
          </FadeIn>
        </section>
      </div>

      <CaseStudyEnd num="03" />

      <div ref={footerWrapRef}>
        <Footer />
      </div>
    </>
  );
}
