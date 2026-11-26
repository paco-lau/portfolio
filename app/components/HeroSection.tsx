"use client";

import { useEffect, useState } from "react";
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

      {/* Name drawn twice: dark above the cut, cream where it enters the photo */}
      <div className="absolute inset-0 pointer-events-none" style={{ clipPath: `inset(0 0 calc(100% - ${CUT}) 0)` }}>
        <h1 className="font-sans text-[#181a18] select-none" style={nameStyle}>Paco Lau</h1>
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ clipPath: `inset(${CUT} 0 0 ${PHOTO_LEFT})` }} aria-hidden="true">
        <p className="font-sans text-[#F5F0E8] select-none" style={nameStyle}>Paco Lau</p>
      </div>
    </section>
  );
}
