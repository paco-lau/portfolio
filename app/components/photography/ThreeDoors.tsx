"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import urbanLandscapeMain from "../../../assets/photography/urban-landscape/urbanland-victoriaharbor-main.jpg";
import graduateIcbMain from "../../../assets/photography/graduate/grad-icb-main.jpg";
import portraitAndyMain from "../../../assets/photography/portrait/port-andy.jpg";

const doors = [
  {
    id: "portrait",
    label: "Portrait & Group",
    location: "Berkeley, CA, USA",
    href: "/photography/portrait",
    gradient: "linear-gradient(160deg, #2a1f1a 0%, #4a2e24 40%, #7a4a38 100%)",
    image: portraitAndyMain,
    accent: "#C8957E",
  },
  {
    id: "urban-landscape",
    label: "Urban & Landscape",
    location: "Hong Kong",
    href: "/photography/urban-landscape",
    gradient: "linear-gradient(160deg, #0d1f2d 0%, #1a3a4a 40%, #2d6080 100%)",
    image: urbanLandscapeMain,
    accent: "#E8552E",
  },
  {
    id: "graduation",
    label: "Graduation",
    location: "Berkeley, CA, USA",
    href: "/photography/graduation",
    gradient: "linear-gradient(160deg, #1a140a 0%, #3a2a10 40%, #6a4a20 100%)",
    image: graduateIcbMain,
    accent: "#F2B134",
  },
];

export default function ThreeDoors() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tapped, setTapped] = useState<string | null>(null);

  const handleTap = (door: typeof doors[number]) => {
    if (tapped === door.id) {
      window.location.href = door.href;
    } else {
      setTapped(door.id);
      setHovered(door.id);
    }
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100%" }}>
      {/* Desktop: horizontal flex layout */}
      <div className="hidden md:flex h-full">
        {doors.map((door, i) => {
          const isHovered = hovered === door.id;
          const isOther = hovered !== null && !isHovered;

          return (
            <motion.div
              key={door.id}
              className="relative overflow-hidden cursor-pointer"
              style={{ background: door.gradient, flexGrow: 1, flexShrink: 1, flexBasis: 0, minWidth: 0 }}
              animate={{ flexGrow: isHovered ? 2.2 : isOther ? 0.6 : 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(door.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => { window.location.href = door.href; }}
            >
              {door.image && (
                <>
                  <Image src={door.image} alt={door.label} fill className="object-cover" priority={i === 0} />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.35) 100%)" }}
                  />
                </>
              )}

              {/* Grain texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
                  opacity: 0.6,
                  mixBlendMode: "overlay",
                }}
              />

              {/* Vertical number — offset below navbar (~72px) */}
              <div
                className="absolute top-10 left-6 font-[family-name:var(--font-bebas)] text-white/20 select-none"
                style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 1 }}
              >
                0{i + 1}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {/* Accent line */}
                <motion.div
                  className="mb-4 rounded-full"
                  style={{ height: "2px", backgroundColor: door.accent }}
                  animate={{ width: isHovered ? "16rem" : "2rem" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />

                <h2
                  className="font-[family-name:var(--font-cormorant)] font-medium text-white select-none whitespace-nowrap"
                  style={{ fontSize: "clamp(2.25rem, 3.6vw, 4.5rem)", lineHeight: 0.9 }}
                >
                  {door.label}
                </h2>

                <motion.div
                  className="overflow-hidden"
                  animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pt-4 flex items-center justify-between">
                    <span
                      className="flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)]"
                      style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: door.image ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                      </svg>
                      {door.location}
                    </span>
                    <svg
                      width="52" height="52" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      style={{ color: door.accent }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: stacked vertical layout */}
      <div className="flex md:hidden flex-col h-full">
        {doors.map((door, i) => {
          const isActive = tapped === door.id;

          return (
            <motion.div
              key={door.id}
              className="relative overflow-hidden cursor-pointer"
              style={{ background: door.gradient, flexShrink: 1 }}
              animate={{ flexGrow: isActive ? 2.5 : 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleTap(door)}
            >
              {door.image && (
                <>
                  <Image src={door.image} alt={door.label} fill className="object-cover" />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.35) 100%)" }}
                  />
                </>
              )}

              {/* Grain texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
                  opacity: 0.6,
                  mixBlendMode: "overlay",
                }}
              />

              <div
                className="absolute right-5 font-[family-name:var(--font-bebas)] text-white/20 select-none"
                style={{ top: "50%", transform: "translateY(-50%)", fontSize: "clamp(4rem, 18vw, 10rem)", lineHeight: 1 }}
              >
                0{i + 1}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  className="mb-3 rounded-full"
                  style={{ height: "2px", backgroundColor: door.accent }}
                  animate={{ width: isActive ? "10rem" : "1.5rem" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />

                <h2
                  className="font-[family-name:var(--font-cormorant)] font-medium text-white select-none"
                  style={{ fontSize: "clamp(2rem, 7vw, 3.75rem)", lineHeight: 0.9 }}
                >
                  {door.label}
                </h2>

                <motion.div
                  className="overflow-hidden"
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pt-3 flex items-center justify-between">
                    <span
                      className="flex items-center gap-1.5 font-[family-name:var(--font-dm-sans)]"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.08em", color: door.image ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                      </svg>
                      {door.location}
                    </span>
                    <span className="text-white/50 font-[family-name:var(--font-dm-sans)] text-xs">
                      Tap again to open <span style={{ color: door.accent }}>→</span>
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
