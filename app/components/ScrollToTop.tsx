"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Every page opens at the top. Next.js otherwise keeps the old scroll position when the new page
 *  is long enough, so a card clicked halfway down one page opened halfway down the next. */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
