"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chunks = [
  ["I"],
  ["design", "things"],
  ["people", "use,", "and"],
  ["photograph", "the"],
  ["moments", "they"],
  ["remember"],
];

// Glass bubbles — sky blue, positioned in left/right margins only
const glassBubbles = [
  { size: 380, top: "0%",  left: "-6%"  },
  { size: 160, top: "4%",  left: "20%"  },
  { size: 120, top: "2%",  left: "38%"  },
  { size: 200, top: "30%", left: "2%"   },
  { size: 260, top: "58%", left: "-4%"  },
  { size: 160, top: "78%", left: "10%"  },
  { size: 140, top: "3%",  right: "22%" },
  { size: 180, top: "8%",  right: "8%"  },
  { size: 220, top: "25%", right: "1%"  },
  { size: 170, top: "50%", right: "-2%" },
  { size: 280, top: "70%", right: "5%"  },
  { size: 150, top: "88%", left: "30%"  },
];

// Editorial shapes: pills, hexagons, circles, stars, squares
const leftShapes = [
  { shape: "hexagon", color: "#7EC8E3", size: 38, top: "12%", left: "10%", dur: 3.6, delay: 0.4 },
  { shape: "pill-h",  color: "#7EC8E3", w: 55, h: 22, top: "28%", left: "16%", dur: 4.2, delay: 0.9 },
  { shape: "pill-v",  color: "#7EC8E3", w: 30, h: 80, top: "44%", left: "6%",  dur: 5,   delay: 1.1 },
  { shape: "star",    color: "#7EC8E3", size: 32, top: "52%", left: "18%", dur: 3.1, delay: 1.2 },
  { shape: "square",  color: "#7EC8E3", size: 36, top: "64%", left: "14%", dur: 6,   delay: 0   },
  { shape: "star",    color: "#7EC8E3", size: 30, top: "82%", left: "8%",  dur: 2.5, delay: 0.3 },
];

const rightShapes = [
  { shape: "square",  color: "#7EC8E3", size: 42, top: "8%",  right: "10%", dur: 2.8, delay: 0.2 },
  { shape: "pill-h",  color: "#7EC8E3", w: 72, h: 26, top: "22%", right: "8%",  dur: 3.4, delay: 0.6 },
  { shape: "pill-v",  color: "#7EC8E3", w: 24, h: 70, top: "38%", right: "18%", dur: 4.8, delay: 1.0 },
  { shape: "star",    color: "#7EC8E3", size: 52, top: "50%", right: "12%", dur: 4.2, delay: 0.4 },
  { shape: "star",    color: "#7EC8E3", size: 36, top: "65%", right: "10%", dur: 3.7, delay: 0.2 },
  { shape: "hexagon", color: "#7EC8E3", size: 48, top: "84%", right: "15%", dur: 5.5, delay: 1.2 },
];

const topShapes = [
  { shape: "pill-h",  color: "#7EC8E3", w: 66, h: 26, top: "4%",  left: "43%", dur: 2.6, delay: 0.5 },
  { shape: "star",    color: "#7EC8E3", size: 30, top: "7%",  left: "35%", dur: 3.2, delay: 0.7 },
  { shape: "square",  color: "#7EC8E3", size: 28, top: "5%",  left: "55%", dur: 2.8, delay: 1.1 },
  { shape: "hexagon", color: "#7EC8E3", size: 34, top: "3%",  left: "68%", dur: 3.8, delay: 0.3 },
  { shape: "pill-v",  color: "#7EC8E3", w: 22, h: 60, top: "2%",  left: "78%", dur: 4.0, delay: 0.2 },
];

const bottomShapes = [
  { shape: "hexagon", color: "#7EC8E3", size: 32, top: "86%", left: "30%", dur: 3.5, delay: 0.6 },
  { shape: "star",    color: "#7EC8E3", size: 34, top: "88%", left: "41%", dur: 2.9, delay: 0.8 },
  { shape: "square",  color: "#7EC8E3", size: 28, top: "84%", left: "56%", dur: 5.2, delay: 0.4 },
  { shape: "pill-v",  color: "#7EC8E3", w: 22, h: 58, top: "85%", left: "70%", dur: 4.3, delay: 1.0 },
];

function Hexagon({ size, color }: { size: number; color: string }) {
  const glow = `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 18px ${color}88)`;
  const w = size * 0.866;
  return (
    <svg width={w} height={size} viewBox="0 0 100 115" style={{ filter: glow }}>
      <polygon points="50,0 100,28.75 100,86.25 50,115 0,86.25 0,28.75" fill={color} />
    </svg>
  );
}

function Star({ size, color }: { size: number; color: string }) {
  const glow = `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 18px ${color}88)`;
  const pts = "50,2 61.8,35.5 97.6,35.5 68.9,57.5 79.4,91 50,69.5 20.6,91 31.1,57.5 2.4,35.5 38.2,35.5";
  return (
    <svg width={size} height={size} viewBox="-20 -20 140 140" overflow="visible" style={{ filter: glow }}>
      <polygon points={pts} fill={color} stroke={color} strokeWidth="10" strokeLinejoin="round" />
    </svg>
  );
}

function GlassBubble({ size }: { size: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, rgba(224, 242, 254, 0.55), rgba(125, 211, 252, 0.12) 60%, rgba(56, 189, 248, 0.06))",

        boxShadow: "inset 0 0 40px rgba(125, 211, 252, 0.35), inset 0 2px 4px rgba(255,255,255,0.7)",
        backdropFilter: "blur(2px)",
      }}
    />
  );
}

function Shape(s: { shape: string; color: string; size?: number; w?: number; h?: number }) {
  const glow = `0 0 12px 4px ${s.color}88, 0 0 28px 8px ${s.color}44`;
  if (s.shape === "hexagon") return <Hexagon size={s.size!} color={s.color} />;
  if (s.shape === "star")    return <Star size={s.size!} color={s.color} />;
  if (s.shape === "circle")  return <div style={{ width: s.size, height: s.size, borderRadius: "50%", background: s.color, boxShadow: glow }} />;
  if (s.shape === "square")  return <div style={{ width: s.size, height: s.size, borderRadius: 6, background: s.color, boxShadow: glow }} />;
  if (s.shape === "pill-h")  return <div style={{ width: s.w, height: s.h, borderRadius: 999, background: s.color, boxShadow: glow }} />;
  if (s.shape === "pill-v")  return <div style={{ width: s.w, height: s.h, borderRadius: 999, background: s.color, boxShadow: glow }} />;
  return null;
}

function ClickWord() {
  const [hovered, setHovered] = useState(false);
  const letters = ["c", "l", "i", "c", "k"];
  return (
    <span
      className="relative inline-block cursor-pointer"
      style={{ marginRight: "0.25em", transform: "translateY(-0.3em)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(h => !h)}
    >
      {/* Dark pill — always underneath */}
      <span className="absolute inset-0 rounded-full bg-[#181a18]" />
      {/* Blue pill — covers by default, wipes upward on hover to reveal dark */}
      <span
        className="absolute rounded-full"
        style={{
          inset: "-1px",
          backgroundColor: "#A8DCF0",
          clipPath: hovered
            ? "inset(0 0 100% 0 round 9999px)"
            : "inset(0 0 0% 0 round 9999px)",
          transition: "clip-path 0.52s cubic-bezier(0.76,0,0.24,1)",
        }}
      />
      {/* Letters — stagger up and fade */}
      <span
        className="relative z-10 px-10 py-2 flex"
        style={{ color: hovered ? "#f5f5f0" : "#181a18", transition: "color 0.25s ease 0.1s" }}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transition: `transform 0.38s ease ${i * 0.05}s, opacity 0.32s ease ${i * 0.05}s`,
              transform: hovered ? "translateY(-120%)" : "translateY(0)",
              opacity: hovered ? 0 : 1,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
      {/* "Made you look." fades in on the blue pill */}
      <span
        className="absolute inset-0 z-20 flex items-center justify-center whitespace-nowrap"
        style={{
          color: "#f5f5f0",
          fontSize: "clamp(1rem, 2.5vw, 36px)",
          opacity: hovered ? 1 : 0,
          transition: hovered ? "opacity 0.3s ease 0.35s" : "opacity 0.15s ease 0s",
          pointerEvents: "none",
        }}
      >
        Made you look.
      </span>
    </span>
  );
}

function DesignWord() {
  const [hovered, setHovered] = useState(false);
  const letters = ["d","e","s","i","g","n"];
  return (
    <span
      className="relative inline-block cursor-pointer"
      style={{ marginRight: "0.4em", transform: "translateY(-0.005em)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(h => !h)}
    >
      <span className="absolute inset-0 rounded-full bg-[#181a18]" />
      <span
        className="absolute rounded-full"
        style={{
          inset: "-1px",
          backgroundColor: "#A8DCF0",
          clipPath: hovered ? "inset(0 0 100% 0 round 9999px)" : "inset(0 0 0% 0 round 9999px)",
          transition: "clip-path 0.52s cubic-bezier(0.76,0,0.24,1)",
        }}
      />
      <span
        className="relative z-10 px-10 py-2 flex"
        style={{ color: hovered ? "#f5f5f0" : "#181a18", transition: "color 0.25s ease 0.1s" }}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transition: `transform 0.38s ease ${i * 0.05}s, opacity 0.32s ease ${i * 0.05}s`,
              transform: hovered ? "translateY(-120%)" : "translateY(0)",
              opacity: hovered ? 0 : 1,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
      <span
        className="absolute inset-0 z-20 flex items-center justify-center whitespace-nowrap"
        style={{
          color: "#f5f5f0",
          fontSize: "clamp(1rem, 2.5vw, 36px)",
          opacity: hovered ? 1 : 0,
          transition: hovered ? "opacity 0.3s ease 0.35s" : "opacity 0.15s ease 0s",
          pointerEvents: "none",
        }}
      >
        Made you look.
      </span>
    </span>
  );
}

function PhotographWord() {
  const [hovered, setHovered] = useState(false);
  const letters = ["p","h","o","t","o","g","r","a","p","h"];
  return (
    <span
      className="relative inline-block cursor-pointer"
      style={{ marginRight: "0.4em", marginLeft: "0.15em", transform: "translateY(-0.005em)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(h => !h)}
    >
      {/* Dark pill — always underneath */}
      <span className="absolute inset-0 rounded-full bg-[#181a18]" />
      {/* Blue pill — curtain wipes upward */}
      <span
        className="absolute rounded-full"
        style={{
          inset: "-1px",
          backgroundColor: "#A8DCF0",
          clipPath: hovered ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
          transition: "clip-path 0.75s cubic-bezier(0.76,0,0.24,1)",
        }}
      />
      {/* Letters — shutter scatter on hover */}
      <span className="relative z-10 px-10 py-2 flex">
        {letters.map((letter, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transition: `transform 0.6s ease ${i * 0.06}s, opacity 0.5s ease ${i * 0.06}s`,
              transform: hovered ? `translateY(${(i % 2 === 0 ? -1 : 1) * 16}px) rotate(${(i - 5) * 5}deg)` : "translateY(0) rotate(0deg)",
              opacity: hovered ? 0 : 1,
              color: hovered ? "#f5f5f0" : "#181a18",
            }}
          >
            {letter}
          </span>
        ))}
      </span>
      {/* "Say cheese!" fades in */}
      <span
        className="absolute inset-0 z-20 flex items-center justify-center whitespace-nowrap"
        style={{
          color: "#f5f5f0",
          fontSize: "clamp(1rem, 2.5vw, 36px)",
          opacity: hovered ? 1 : 0,
          transition: hovered ? "opacity 0.4s ease 0.5s" : "opacity 0.2s ease 0s",
          pointerEvents: "none",
        }}
      >
        Say cheese!
      </span>
    </span>
  );
}

function ShapeItem({ s, shapeScale, shapeOpacity, floatAnim }: { s: any; shapeScale: number; shapeOpacity: number; floatAnim: string }) {
  return (
    <div style={{ opacity: shapeOpacity, transform: `scale(${shapeScale})`, transformOrigin: "center center" }}>
      <div style={{ animation: `${floatAnim} ${s.dur}s ease-in-out ${s.delay}s infinite` }}>
        <Shape {...s} />
      </div>
    </div>
  );
}

export default function ToyStorySection({ onProgressChange }: { onProgressChange?: (p: number) => void }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      onUpdate: (self) => {
        setProgress(self.progress);
        onProgressChange?.(self.progress);
        if (self.progress > 0.05) setWordVisible(true);
      },
    });

    return () => trigger.kill();
  }, [onProgressChange]);

  const shapeScale = 1 + progress * 5.5;
  const shapeOpacity = progress > 0.75 ? Math.max(0, 1 - (progress - 0.75) / 0.25) : 1;
  const textOpacity = progress > 0.6 ? Math.max(0, 1 - (progress - 0.6) / 0.3) : 1;

  const floatAnims = ["float-subtle", "float-reverse-subtle", "drift-subtle", "float-subtle", "float-reverse-subtle", "drift-subtle"];

  return (
    <div ref={wrapperRef} style={{ height: "200vh" }}>
      <section className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-12 md:px-20 lg:px-32" style={{ zIndex: 10 }}>

        {/* Dot grid — fades out as page scrolls down */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(24,26,24,1) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
            opacity: Math.max(0, 0.2 - progress * 0.5),
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />

        {/* Glass Bubbles — behind all shapes, fixed size */}
        {glassBubbles.map((b, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{ top: b.top, ...((b as any).left ? { left: (b as any).left } : { right: (b as any).right }), opacity: shapeOpacity }}
          >
            <GlassBubble size={b.size} />
          </div>
        ))}

        {/* Left */}
        <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none">
          {leftShapes.map((s, i) => (
            <div key={i} className="absolute" style={{ top: s.top, left: (s as any).left }}>
              <ShapeItem s={s} shapeScale={shapeScale} shapeOpacity={shapeOpacity} floatAnim={floatAnims[i % floatAnims.length]} />
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none">
          {rightShapes.map((s, i) => (
            <div key={i} className="absolute" style={{ top: s.top, right: (s as any).right }}>
              <ShapeItem s={s} shapeScale={shapeScale} shapeOpacity={shapeOpacity} floatAnim={floatAnims[i % floatAnims.length]} />
            </div>
          ))}
        </div>

        {/* Top */}
        {topShapes.map((s, i) => (
          <div key={i} className="absolute pointer-events-none" style={{ top: s.top, left: s.left }}>
            <ShapeItem s={s} shapeScale={shapeScale} shapeOpacity={shapeOpacity} floatAnim="float-subtle" />
          </div>
        ))}

        {/* Bottom */}
        {bottomShapes.map((s, i) => (
          <div key={i} className="absolute pointer-events-none" style={{ top: s.top, left: s.left }}>
            <ShapeItem s={s} shapeScale={shapeScale} shapeOpacity={shapeOpacity} floatAnim={floatAnims[i % floatAnims.length]} />
          </div>
        ))}

        {/* Text */}
        <p
          className="relative z-10 text-center text-[#181a18] font-sans"
          style={{ fontSize: "clamp(2.2rem, 7vw, 88px)", fontWeight: 600, lineHeight: 1.15, opacity: textOpacity, transition: "opacity 0.1s linear", maxWidth: "76rem" }}
        >
          {chunks.map((chunk, ci) =>
            chunk.map((word, wi) => {
              if (word === "design") {
                return <DesignWord key={`${ci}-${wi}`} />;
              }
              if (word === "photograph") {
                return <PhotographWord key={`${ci}-${wi}`} />;
              }
              return (
                <span
                  key={`${ci}-${wi}`}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word}
                </span>
              );
            })
          )}
        </p>
      </section>
    </div>
  );
}
