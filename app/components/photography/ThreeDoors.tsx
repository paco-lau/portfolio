"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const doors = [
  {
    id: "portrait",
    label: "Portrait",
    sub: "Faces & Stories",
    location: "Berkeley, CA, USA",
    href: "/photography/portrait",
    gradient: "linear-gradient(160deg, #2a1f1a 0%, #4a2e24 40%, #7a4a38 100%)",
    accent: "#C8957E",
  },
  {
    id: "urban-landscape",
    label: "Urban & Landscape",
    sub: "Light & Space",
    location: "Hong Kong",
    href: "/photography/urban-landscape",
    gradient: "linear-gradient(160deg, #0d1f2d 0%, #1a3a4a 40%, #2d6080 100%)",
    accent: "#7EC8E3",
  },
  {
    id: "graduation",
    label: "Graduation",
    sub: "Milestones & Moments",
    location: "Berkeley, CA, USA",
    href: "/photography/graduation",
    gradient: "linear-gradient(160deg, #1a140a 0%, #3a2a10 40%, #6a4a20 100%)",
    accent: "#C8A97E",
  },
];

export default function ThreeDoors() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100%" }}>
      <div className="flex h-full">
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

                <motion.p
                  className="text-white/50 mb-1 font-[family-name:var(--font-dm-sans)]"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
                  animate={{ opacity: isHovered ? 1 : 0.5 }}
                >
                  {door.sub.toUpperCase()}
                </motion.p>

                <h2
                  className="font-[family-name:var(--font-bebas)] text-white select-none whitespace-nowrap"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 5rem)", lineHeight: 0.9 }}
                >
                  {door.label}
                </h2>

                <motion.div
                  className="overflow-hidden"
                  animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-white/40 font-[family-name:var(--font-dm-sans)]" style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}>
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

              {/* Divider line between panels */}
              {i < doors.length - 1 && (
                <div className="absolute top-0 right-0 bottom-0 w-px bg-white/10 pointer-events-none" />
              )}
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
