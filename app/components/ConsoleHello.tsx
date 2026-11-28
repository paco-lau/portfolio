"use client";

import { useEffect } from "react";

/** A note for anyone who opens the browser console. */
export default function ConsoleHello() {
  useEffect(() => {
    console.log(
      "%cHi, I'm Paco.%c\nI designed and built this site with Next.js, React and Tailwind.\nCurious how something works, or want to talk? pacolau@berkeley.edu",
      "font: 700 16px sans-serif; color: #2B7499",
      "font: 13px sans-serif; color: inherit",
    );
  }, []);
  return null;
}
