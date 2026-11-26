/** The site's one arrow (from "Get in touch"); slides right when its `group` parent is hovered.
 *  `head` draws just the arrowhead (a chevron) and slides it further, for cards. */
export default function Arrow({ size = 14, head = false, className = "" }: { size?: number; head?: boolean; className?: string }) {
  return (
    <svg
      // the chevron's box is cropped to its own width so it doesn't take space from card titles
      width={head ? size * 11 / 18 : size} height={size} viewBox={head ? "7 3 11 18" : "0 0 24 24"} fill="none" aria-hidden="true"
      stroke="currentColor" strokeWidth={head ? 1.5 : 2} strokeLinecap="round" strokeLinejoin="round"
      className={`shrink-0 transition-[color,translate] duration-300 ${head ? "group-hover:translate-x-2" : "group-hover:translate-x-1"} ${className}`}
    >
      <path d={head ? "M9 5l7 7-7 7" : "M5 12h14M12 5l7 7-7 7"} />
    </svg>
  );
}
