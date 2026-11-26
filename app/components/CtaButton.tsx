"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Arrow from "./Arrow";

/** The blue "Get in touch" pill: springs up with a glow on hover, arrow slides right. */
export default function CtaButton({ href, children, newTab = false }: { href: string; children: React.ReactNode; newTab?: boolean }) {
  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(126,200,227,0.45), 0 2px 8px rgba(126,200,227,0.25)" }}
      whileTap={{ scale: 0.97, boxShadow: "0 2px 8px rgba(126,200,227,0.2)" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{ borderRadius: "9999px" }}
    >
      <Link
        href={href}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
        className="inline-flex items-center gap-3 font-semibold rounded-full text-[#181a18] group"
        style={{ backgroundColor: "#7EC8E3", padding: "14px 32px", fontSize: "0.9rem", letterSpacing: "0.05em" }}
      >
        {children}
        <Arrow />
      </Link>
    </motion.div>
  );
}
