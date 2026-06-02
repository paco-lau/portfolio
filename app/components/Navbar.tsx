"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [navOpacity, setNavOpacity] = useState(isHome ? 0 : 0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setNavOpacity(0);
    setMenuOpen(false);

    const onScroll = () => {
      const currentY = window.scrollY;
      const start = window.innerHeight * 0.1;
      const end   = window.innerHeight * 0.3;
      setNavOpacity(Math.min(Math.max((currentY - start) / (end - start), 0), 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const textColor = `rgb(${Math.round(24 + 231 * navOpacity)}, ${Math.round(26 + 229 * navOpacity)}, ${Math.round(24 + 231 * navOpacity)})`;

  const navLinks = [
    { href: "/projects",    label: "Projects"    },
    { href: "/photography", label: "Photography"  },
    { href: "/contact",     label: "Contact"      },
  ];

  const navBg = `rgb(${Math.round(245 - 205 * navOpacity)}, ${Math.round(240 - 200 * navOpacity)}, ${Math.round(232 - 189 * navOpacity)})`;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-10 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`flex items-center justify-between w-full px-5 sm:px-8 py-3 rounded-full ${navOpacity > 0 ? "backdrop-blur-md" : ""}`}
        style={{
          backgroundColor: navBg,
          color: textColor,
          border: `1px solid rgba(24, 26, 24, ${(1 - navOpacity) * 0.22})`,
          transition: "background-color 0.15s linear, border-color 0.15s linear",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{ display: "inline-block" }}
          >
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="font-[family-name:var(--font-dm-sans)] font-normal transition-colors duration-200"
            style={{ fontSize: "20px", letterSpacing: "0.04em", color: "inherit" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#7EC8E3")}
            onMouseLeave={e => (e.currentTarget.style.color = "inherit")}
          >
            Paco Lau
          </Link>
          </motion.div>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-16 font-sans" style={{ fontSize: "16px" }}>
          {navLinks.map(({ href, label }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={href} className="relative group block">
                {label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                  style={{ backgroundColor: "#7EC8E3" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span
            className="block h-0.5 w-6 rounded-full transition-all duration-300"
            style={{
              backgroundColor: textColor,
              transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-0.5 w-6 rounded-full transition-all duration-300"
            style={{
              backgroundColor: textColor,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 rounded-full transition-all duration-300"
            style={{
              backgroundColor: textColor,
              transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-4 right-4 mt-2 rounded-2xl overflow-hidden md:hidden"
            style={{
              backgroundColor: navBg,
              border: `1px solid rgba(24,26,24,0.12)`,
              backdropFilter: "blur(12px)",
              transformOrigin: "top",
            }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-6 py-4 font-[family-name:var(--font-dm-sans)] text-base border-b last:border-b-0 transition-colors duration-200"
                style={{
                  color: textColor,
                  borderColor: "rgba(24,26,24,0.08)",
                }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={e => (e.currentTarget.style.color = "#7EC8E3")}
                onMouseLeave={e => (e.currentTarget.style.color = textColor)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
