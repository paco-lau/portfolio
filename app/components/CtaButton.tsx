"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** The blue pill button. On hover it leans toward the cursor, and dark ink floods in from
 *  where the cursor entered (and drains out where it leaves), turning the label cream. */
export default function CtaButton({ href, children, newTab = false }: { href: string; children: React.ReactNode; newTab?: boolean }) {
  const spring = { stiffness: 250, damping: 18, mass: 0.5 };
  const x = useSpring(useMotionValue(0), spring), y = useSpring(useMotionValue(0), spring);

  // Ink origin = the cursor's spot on the pill, so it spreads from (or shrinks back to) that point
  const aim = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--ink-x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--ink-y", `${e.clientY - r.top}px`);
    return r;
  };

  return (
    <motion.div className="relative inline-block" style={{ x, y, borderRadius: "9999px" }} whileTap={{ scale: 0.96 }}>
      <Link
        href={href}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
        className="cta group relative inline-flex items-center gap-3 font-semibold rounded-full overflow-hidden text-[#181a18] hover:text-[#F5F0E8] transition-colors duration-300"
        style={{ backgroundColor: "#7EC8E3", padding: "14px 32px", fontSize: "0.9rem", letterSpacing: "0.05em" }}
        onMouseEnter={aim}
        onMouseMove={e => {
          const r = aim(e);
          x.set((e.clientX - r.left - r.width / 2) * 0.1);
          y.set((e.clientY - r.top - r.height / 2) * 0.15);
        }}
        onMouseLeave={e => { aim(e); x.set(0); y.set(0); }}
      >
        <span aria-hidden="true" className="cta-ink" />
        <span className="relative inline-flex items-center gap-3">{children}</span>
      </Link>
    </motion.div>
  );
}
