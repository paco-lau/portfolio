"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [navOpacity, setNavOpacity] = useState(isHome ? 0 : 0);

  useEffect(() => {
    setNavOpacity(0);

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

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-10 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`flex items-center justify-between w-full px-8 py-3 rounded-full ${navOpacity > 0 ? "backdrop-blur-md" : ""}`}
        style={{
          backgroundColor: `rgb(${Math.round(245 - 205 * navOpacity)}, ${Math.round(240 - 200 * navOpacity)}, ${Math.round(232 - 189 * navOpacity)})`,
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
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="font-[family-name:var(--font-cormorant)] italic font-light hover:opacity-70 transition-opacity"
            style={{ fontSize: "26px" }}
          >
            Paco Lau
          </Link>
        </motion.div>

        <nav className="flex gap-16 font-sans" style={{ fontSize: "16px" }}>
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
      </div>
    </motion.header>
  );
}
