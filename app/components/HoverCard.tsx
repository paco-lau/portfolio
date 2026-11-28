"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";

const spring = { stiffness: 200, damping: 20, mass: 0.6 };

/** Project-card hover: lifts and tilts toward the cursor like a print picked up off a table.
 *  Viewfinder brackets (.card-frame) snap in around it, like the gallery photos. */
export default function HoverCard({ children }: { children: React.ReactNode }) {
  const still = useReducedMotion();
  const rx = useSpring(0, spring), ry = useSpring(0, spring), y = useSpring(0, spring);

  const aim = (px: number, py: number) => { ry.set(px * 4); rx.set(-py * 4); };

  return (
    <motion.div
      className="group/card relative"
      style={{ rotateX: rx, rotateY: ry, y, transformPerspective: 900 }}
      onMouseMove={e => {
        if (still) return;
        const r = e.currentTarget.getBoundingClientRect();
        aim((e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5);
        y.set(-6);
      }}
      onMouseLeave={() => { aim(0, 0); y.set(0); }}
    >
      {children}
      <span aria-hidden="true" className="card-frame"><i /><i /><i /><i /></span>
    </motion.div>
  );
}
