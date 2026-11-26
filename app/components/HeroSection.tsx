"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import titleImg from "../../assets/title-img.png";

export default function HeroSection() {
  const [heroImgHeight, setHeroImgHeight] = useState("clamp(300px, 78vh, 860px)");
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsTablet(w >= 768 && w < 1280);
      if (w >= 768 && w < 1280) setHeroImgHeight("clamp(500px, 95vh, 900px)");
      else setHeroImgHeight("clamp(300px, 78vh, 860px)");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      className="h-screen sticky top-0 flex flex-col justify-end px-4 sm:px-8 md:px-12 overflow-hidden"
      style={{
        paddingBottom: "13vh",
        backgroundColor: "#F5F0E8",
        backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.20) 1.5px, transparent 1.5px)",
        backgroundSize: "36px 36px",
        zIndex: 1, // stays pinned so Recent Works (z 10) slides over it
      }}
    >
      {/* Top-left discipline lines */}
      <div
        className="absolute font-sans pointer-events-none hidden sm:block"
        style={{ left: "4.5rem", top: "10rem", zIndex: 10, opacity: 0.6 }}
      >
        <p style={{ fontSize: "clamp(20px, 2vw, 32px)", fontWeight: 450, letterSpacing: "0.06em", lineHeight: 1.5 }}>Data Science &amp; Visualization</p>
        <p style={{ fontSize: "clamp(20px, 2vw, 32px)", fontWeight: 450, letterSpacing: "0.06em", lineHeight: 1.5 }}>Brand &amp; Web Design</p>
        <p style={{ fontSize: "clamp(20px, 2vw, 32px)", fontWeight: 450, letterSpacing: "0.06em", lineHeight: 1.5 }}>Portrait Photography</p>
      </div>

      {/* Gradient glows — sky blue */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 700, height: 700, right: "-8rem", top: "-5%", zIndex: 1,
          background: "radial-gradient(circle, rgba(125,211,252,0.45) 0%, rgba(125,211,252,0.15) 45%, transparent 70%)" }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ width: 520, height: 520, right: "20rem", top: "35%", zIndex: 1,
          background: "radial-gradient(circle, rgba(56,189,248,0.30) 0%, rgba(56,189,248,0.08) 50%, transparent 70%)" }}
      />

      {/* Mobile-only image — centered, upper half */}
      <div
        className="absolute pointer-events-none flex sm:hidden justify-center"
        style={{ top: "16%", left: 0, right: 0, zIndex: 2 }}
      >
        <Image src={titleImg} alt="Paco Lau" height={600} priority style={{ width: "auto", height: "52vh", objectFit: "contain" }} />
      </div>

      {/* Image — absolute on sm+, hidden on mobile */}
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{ right: "4rem", zIndex: 2, ...(isTablet ? { bottom: 0 } : { top: "50%", transform: "translateY(-50%)" }) }}
      >
        <Image src={titleImg} alt="Paco Lau" height={860} priority style={{ width: "auto", height: heroImgHeight }} />
      </div>

      {/* Text group */}
      <div className="relative z-10 text-[#181a18] font-sans pl-4 sm:pl-6" style={{ paddingLeft: "1.5rem" }}>
        <h1
          className="font-bold leading-none select-none"
          style={{ fontSize: "clamp(4rem, 10vw, 10rem)", marginTop: 0, letterSpacing: "-0.06em" }}
        >
          Paco Lau
        </h1>

        <p
          className="font-sans"
          style={{
            fontSize: "clamp(16px, 1.4vw, 22px)",
            fontWeight: 400,
            letterSpacing: "0.12em",
            marginTop: "0.55em",
            color: "#181a18",
            opacity: 0.5,
          }}
        >
          BASED IN BERKELEY, CA
        </p>
      </div>
    </section>
  );
}
