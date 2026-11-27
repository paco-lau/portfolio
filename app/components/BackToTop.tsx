"use client";

import { useEffect, useState } from "react";

/** "Back to top ↑" pill in the bottom-right corner; appears once you're two screens down. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(window.scrollY > window.innerHeight * 2);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      className={`fixed bottom-5 right-5 z-40 h-8 px-3.5 gap-1.5 rounded-full flex items-center text-xs font-medium bg-[#7EC8E3] text-[#181a18] shadow-lg transition-[opacity,translate] duration-300 hover:-translate-y-1 cursor-pointer ${show ? "opacity-100" : "opacity-0 translate-y-3 pointer-events-none"}`}
    >
      Back to top
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
