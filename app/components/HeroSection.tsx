"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import harbour from "../../assets/photography/urban-landscape/urbanland-victoriaharbor-main.jpg";
import tokyo from "../../assets/photography/urban-landscape/urbanland-tokyoskytree.jpg";
import pointReyes from "../../assets/photography/urban-landscape/urbanland-pointreyes.jpg";
import zhangjiajie from "../../assets/photography/urban-landscape/urbanland-zhangjiajie.jpg";
import tahoe from "../../assets/photography/urban-landscape/urbanland-tahoe.jpg";

const slides = [
  { src: harbour, caption: "Victoria Harbour, Hong Kong", pos: "center 55%" },
  { src: tokyo, caption: "Tokyo Skytree, Japan", pos: "center 40%" },
  { src: pointReyes, caption: "Point Reyes, California", pos: "center 60%" },
  { src: zhangjiajie, caption: "Zhangjiajie, China", pos: "center 35%" },
  { src: tahoe, caption: "Lake Tahoe, California", pos: "center 50%" },
];

const INTERVAL = 3000;
// Photo's top edge cuts the lower third of the name at every size (name: top 17vh, 24vw × 0.8 tall).
const CUT = "calc(17vh + 12.5vw)";
const PHOTO_LEFT = "4.4vw";

// Letters near the mouse thin from the base weight toward PEAK (DM Sans is variable, 100-1000).
const NAME = "Paco Lau";
const BASE = 800, PEAK = 200;

const nameStyle: React.CSSProperties = {
  position: "absolute", left: "3vw", top: "17vh", fontSize: "24vw",
  lineHeight: 0.8, letterSpacing: "-0.065em", fontWeight: 800, whiteSpace: "nowrap",
};

/** Huge name over a photo carousel; the part of the name inside the photo turns cream. Pinned so Recent Works slides over it. */
export default function HeroSection() {
  // i runs 0..slides.length; the last position is a copy of slide 0, so the loop always slides forward
  const [i, setI] = useState(0);
  const [animate, setAnimate] = useState(true);
  const current = slides[i % slides.length];
  const [visible, setVisible] = useState(true);
  // Each letter is drawn in both name layers; [dark, cream] spans per letter
  const letters = useRef<HTMLSpanElement[][]>(NAME.split("").map(() => []));

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let centers: number[][] = [];
    const weight = NAME.split("").map(() => BASE), target = [...weight];
    let mouse: number[] | null = null, frame = 0;
    // Measured at rest; the hero is pinned, so viewport positions hold while scrolling
    const measure = () => {
      centers = letters.current.map(([el]) => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; });
    };
    const tick = () => {
      const reach = window.innerWidth * 0.3;
      let moving = false;
      weight.forEach((w, k) => {
        const d = mouse ? Math.hypot(mouse[0] - centers[k][0], mouse[1] - centers[k][1]) : Infinity;
        target[k] = BASE + (PEAK - BASE) * Math.max(0, 1 - d / reach) ** 2;
        weight[k] += (target[k] - w) * 0.15;
        if (Math.abs(target[k] - weight[k]) > 0.5) moving = true;
        letters.current[k].forEach(el => { el.style.fontWeight = String(Math.round(weight[k])); });
      });
      frame = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => { if (!frame) frame = requestAnimationFrame(tick); };
    // Ignored once Recent Works covers the hero
    const onMove = (e: PointerEvent) => { mouse = window.scrollY < window.innerHeight ? [e.clientX, e.clientY] : null; kick(); };
    const onLeave = () => { mouse = null; kick(); };
    document.fonts.ready.then(measure);
    window.addEventListener("resize", measure);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const name = (layer: number) => NAME.split("").map((c, k) => (
    <span key={k} ref={el => { if (el) letters.current[k][layer] = el; }}>{c}</span>
  ));

  // Pause while the tab is hidden or Recent Works has scrolled fully over the pinned hero
  // (it stays "in the viewport" while covered, so scroll position is the real signal).
  useEffect(() => {
    const update = () => setVisible(document.visibilityState === "visible" && window.scrollY < window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  useEffect(() => {
    if (!visible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => { setAnimate(true); setI(n => n + 1); }, INTERVAL);
    return () => clearTimeout(t);
  }, [i, visible]);

  // After sliding onto the copy of slide 0, jump back to the real one without animating
  const onSlid = () => { if (i === slides.length) { setAnimate(false); setI(0); } };

  return (
    <section
      className="h-screen sticky top-0 overflow-hidden"
      style={{
        backgroundColor: "#F5F0E8",
        backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.18) 1.5px, transparent 1.5px)",
        backgroundSize: "36px 36px",
        zIndex: 1, // Recent Works (z 10) slides over it
      }}
    >
      {/* Photo carousel: from under the P to the right edge and the bottom */}
      <div
        className="absolute right-0 bottom-0 overflow-hidden"
        style={{ left: PHOTO_LEFT, top: CUT }}
      >
        <div
          className="flex h-full"
          style={{ transform: `translateX(-${i * 100}%)`, transition: animate ? "transform 1.1s cubic-bezier(0.65, 0, 0.35, 1)" : "none" }}
          onTransitionEnd={onSlid}
        >
          {[...slides, slides[0]].map((s, k) => (
            <div key={k} className="relative w-full h-full shrink-0">
              <Image src={s.src} alt={k === slides.length ? "" : s.caption} fill priority={k === 0} sizes="96vw" className="object-cover" style={{ objectPosition: s.pos }} />
            </div>
          ))}
        </div>

        <div className="absolute left-[2vw] right-[2.5vw] bottom-[3.5vh] flex items-center justify-between text-[#F5F0E8]">
          {/* editorial caption: a thin rule, then the place */}
          <span className="font-sans flex items-center gap-3 text-[14px] tracking-[0.01em]" style={{ color: "rgba(245,240,232,0.88)" }}>
            <span aria-hidden="true" className="block w-10 h-px bg-current" />
            {current.caption}
          </span>
        </div>
      </div>

      {/* Who I am, in the gap between the navbar and the top of the name */}
      <p
        className="absolute font-sans text-[#181a18]/75"
        style={{ left: "3.4vw", right: "3vw", top: "calc(17vh - 2.6rem)", fontSize: "clamp(15px, 1.3vw, 20px)", lineHeight: 1.3 }}
      >
        Data Science &amp; Economics at UC Berkeley. I design products and find patterns in data.
      </p>

      {/* Name drawn twice: dark above the cut, cream where it enters the photo */}
      <div className="absolute inset-0 pointer-events-none" style={{ clipPath: `inset(0 0 calc(100% - ${CUT}) 0)` }}>
        <h1 className="font-sans text-[#181a18] select-none" style={nameStyle} aria-label={NAME}>{name(0)}</h1>
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ clipPath: `inset(${CUT} 0 0 ${PHOTO_LEFT})` }} aria-hidden="true">
        <p className="font-sans text-[#F5F0E8] select-none" style={nameStyle}>{name(1)}</p>
      </div>
    </section>
  );
}
