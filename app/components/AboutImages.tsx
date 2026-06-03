"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutImages() {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("mobile");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setBreakpoint("desktop");
      else if (w >= 768) setBreakpoint("tablet");
      else setBreakpoint("mobile");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ── Tablet: 2 images side by side, fully contained ── */
  if (breakpoint === "tablet") {
    return (
      <div className="flex-shrink-0" style={{ width: "32%", marginTop: "0.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/4", boxShadow: "0 4px 14px rgba(0,0,0,0.45)" }}>
            <Image src="/about-me-pic.jpg" alt="Paco Lau" width={200} height={267} className="object-cover w-full h-full" />
          </div>
          <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/4", boxShadow: "0 4px 14px rgba(0,0,0,0.45)" }}>
            <Image src="/about-me-pic-2.jpg" alt="Paco Lau" width={200} height={267} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    );
  }

  /* ── Desktop: overlapping absolute layout ── */
  if (breakpoint === "desktop") {
    return (
      <div className="flex-shrink-0 -mt-12" style={{ width: "48%", display: "flex", justifyContent: "center", paddingLeft: "5%" }}>
        <div className="relative" style={{ width: "100%", aspectRatio: "576 / 630" }}>
          <div className="absolute z-0 rounded-2xl overflow-hidden" style={{ top: "6%", right: "7%", width: "38%", height: "36%", boxShadow: "0 3px 9px 2px rgba(0,0,0,0.60)", transform: "rotate(3deg)" }}>
            <Image src="/about-me-pic-3.jpg" alt="Paco Lau" fill className="object-cover" />
          </div>
          <div className="absolute z-10 rounded-2xl overflow-hidden" style={{ top: 0, left: "-5%", width: "65%", height: "80%", boxShadow: "0 5px 12px 3px rgba(0,0,0,0.64)", transform: "rotate(-2deg)" }}>
            <Image src="/about-me-pic.jpg" alt="Paco Lau" fill className="object-cover" />
          </div>
          <div className="absolute z-20 rounded-2xl overflow-hidden" style={{ bottom: "8%", right: 0, width: "60%", height: "40%", boxShadow: "0 6px 15px 5px rgba(0,0,0,0.68)", transform: "rotate(1.5deg)" }}>
            <Image src="/about-me-pic-2.jpg" alt="Paco Lau" fill className="object-cover" />
          </div>
        </div>
      </div>
    );
  }

  /* ── Mobile: overlapping absolute layout ── */
  return (
    <div className="mt-4" style={{ width: "100%", display: "flex", justifyContent: "center", paddingLeft: "5%" }}>
      <div className="relative about-images-mobile" style={{ width: "88%", aspectRatio: "576 / 630" }}>
        <div className="absolute z-0 rounded-2xl overflow-hidden" style={{ top: "6%", right: "7%", width: "38%", height: "36%", boxShadow: "0 3px 9px 2px rgba(0,0,0,0.60)", transform: "rotate(3deg)" }}>
          <Image src="/about-me-pic-3.jpg" alt="Paco Lau" fill className="object-cover" />
        </div>
        <div className="absolute z-10 rounded-2xl overflow-hidden" style={{ top: 0, left: "-5%", width: "65%", height: "80%", boxShadow: "0 5px 12px 3px rgba(0,0,0,0.64)", transform: "rotate(-2deg)" }}>
          <Image src="/about-me-pic.jpg" alt="Paco Lau" fill className="object-cover" />
        </div>
        <div className="absolute z-20 rounded-2xl overflow-hidden" style={{ bottom: "8%", right: 0, width: "60%", height: "40%", boxShadow: "0 6px 15px 5px rgba(0,0,0,0.68)", transform: "rotate(1.5deg)" }}>
          <Image src="/about-me-pic-2.jpg" alt="Paco Lau" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
