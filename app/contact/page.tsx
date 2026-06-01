"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const LINKS = [
  {
    value: "pacolau@berkeley.edu",
    href: "mailto:pacolau@berkeley.edu",
    description: "Best way to reach me",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    value: "linkedin.com/in/pacolau",
    href: "https://www.linkedin.com/in/pacolau/",
    description: "Let's connect professionally",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    value: "github.com/paco-lau",
    href: "https://github.com/paco-lau",
    description: "See what I'm building",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

function LinkRow({ value, href, description, icon, isLast, delay = 0 }: {
  value: string; href: string; description: string; icon: React.ReactNode; isLast: boolean; delay?: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "block",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: isLast ? "1px solid rgba(255,255,255,0.1)" : undefined,
        cursor: "pointer", textDecoration: "none",
      }}
    >
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "28px 0",
        transform: hovered ? "translateX(8px)" : "translateX(0px)",
        transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <span style={{ color: hovered ? "#7EC8E3" : "rgba(255,255,255,0.4)", transition: "color 0.2s", flexShrink: 0 }}>
          {icon}
        </span>
        <span style={{ color: hovered ? "#7EC8E3" : "white", fontWeight: 600, fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)", letterSpacing: "-0.01em", transition: "color 0.2s" }}>
          {value}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>{description}</span>
        <motion.span
          animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: hovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)", fontSize: 22, transition: "color 0.2s", display: "inline-block" }}
        >
          ↗
        </motion.span>
      </div>
      </div>
    </motion.a>
  );
}

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ContactPage() {

  return (
    <main style={{ backgroundColor: "#F5F0E8", minHeight: "100vh" }}>

      {/* CREAM HEADER */}
      <div style={{ position: "relative", padding: "128px 96px 60px" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
        }} />

        <motion.p {...anim(0)} style={{ color: "rgba(24,26,24,0.4)", fontSize: "clamp(14px, 1.2vw, 18px)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 12, position: "relative" }}>
          Let&apos;s connect
        </motion.p>

        <motion.h1 {...anim(0.1)} style={{ color: "#181a18", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em", fontSize: "clamp(3.5rem, 10vw, 9rem)", position: "relative", margin: 0 }}>
          Get in <span style={{ color: "#7EC8E3" }}>touch</span>.
        </motion.h1>
      </div>

      {/* DARK CARD */}
      <div style={{ backgroundColor: "#2a2c2a", borderRadius: "48px 48px 0 0" }}>
        <div style={{ padding: "64px 96px 0" }}>

          <div style={{ marginBottom: 48 }}>
            <motion.div {...anim(0.2)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4ade80", display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite", flexShrink: 0 }} />
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>Available for internships &amp; freelance projects</span>
            </motion.div>
            <motion.p {...anim(0.28)} style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(1rem, 1.5vw, 1.15rem)", whiteSpace: "nowrap", margin: 0 }}>
              I&apos;m always open to new opportunities, collaborations, or just a good conversation.
            </motion.p>
          </div>

          <div>
            {LINKS.map(({ value, href, description, icon }, i) => (
              <LinkRow
                key={value}
                value={value}
                href={href}
                description={description}
                icon={icon}
                isLast={i === LINKS.length - 1}
                delay={0.35 + i * 0.08}
              />
            ))}
          </div>

          <div style={{ height: 80 }} />
        </div>

        <Footer />
      </div>
    </main>
  );
}
