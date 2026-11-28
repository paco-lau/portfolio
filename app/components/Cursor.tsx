"use client";

import { useEffect, useRef } from "react";
import { makeOctahedron, OctahedronSvg } from "./Octahedron";

/** Tumbling solid octahedron on the pointer; it also rolls the way the mouse moves. Grows and spins faster over clickable things;
 *  hides over gallery photos, where the viewfinder takes over. Mouse only; styles in globals.css (.cursor-ring). */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const faces = useRef<SVGPolygonElement[]>([]);
  const trail = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("custom-cursor");

    const shape = makeOctahedron(faces);
    let time = 0, frame = 0, hovering = false, lastX = 0, lastY = 0, vx = 0, vy = 0;
    let visible = false;
    const show = (on: boolean) => { visible = on; ring.current?.style.setProperty("opacity", on ? "1" : "0"); };

    // Fading trail: recent pointer positions drawn as a tapering light-blue line on a full-screen canvas
    const LIFE = 150; // ms a point stays on screen
    const ctx = trail.current!.getContext("2d")!;
    let points: { x: number; y: number; t: number }[] = [];
    const fit = () => {
      const dpr = devicePixelRatio || 1;
      trail.current!.width = innerWidth * dpr; trail.current!.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();
    const drawTrail = () => {
      const now = performance.now();
      points = points.filter(p => now - p.t < LIFE);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      // Opaque segments, so overlapping joints don't darken into dots; the tail fades by
      // thinning out, and the canvas itself is slightly see-through (globals.css)
      ctx.lineCap = "round";
      ctx.strokeStyle = "#7EC8E3";
      for (let i = 1; i < points.length; i++) {
        ctx.lineWidth = 6 * (1 - (now - points[i].t) / LIFE);
        ctx.beginPath();
        ctx.moveTo(points[i - 1].x, points[i - 1].y);
        ctx.lineTo(points[i].x, points[i].y);
        ctx.stroke();
      }
    };

    const tick = () => {
      time += 1 / 60;
      // Idle tumble about a slowly wandering axis
      shape.rotate(Math.sin(time * 0.31), Math.cos(time * 0.23), Math.sin(time * 0.17 + 1), hovering ? 0.09 : 0.018);
      // Roll the way the mouse moves, like a die across the page
      shape.rotate(vy, -vx, 0, Math.min(Math.hypot(vx, vy) * 0.012, 0.3)); // capped so flicks don't blur it
      vx *= 0.85; vy *= 0.85;
      shape.draw();
      drawTrail();
      frame = requestAnimationFrame(tick);
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      ring.current?.style.setProperty("transform", `translate(${e.clientX}px, ${e.clientY}px)`);
      if (lastX || lastY) { vx += e.clientX - lastX; vy += e.clientY - lastY; }
      lastX = e.clientX; lastY = e.clientY;
      const t = e.target as Element;
      show(!t.closest("[data-viewfinder]"));
      if (visible && !still) points.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      hovering = !!t.closest("a, button, [role=button], label, select, input");
      ring.current?.toggleAttribute("data-hover", hovering);
      if (still) shape.draw();
      else if (!frame) frame = requestAnimationFrame(tick);
    };
    const leave = () => show(false);
    // A click that moves a pixel would start the browser's own link/image drag, which stops
    // pointer events (the cursor froze, then jumped). Nothing on the site needs dragging.
    const noDrag = (e: DragEvent) => e.preventDefault();

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("resize", fit);
    root.addEventListener("pointerleave", leave);
    window.addEventListener("dragstart", noDrag);
    return () => {
      window.removeEventListener("dragstart", noDrag);
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("resize", fit);
      root.removeEventListener("pointerleave", leave);
      root.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <canvas ref={trail} aria-hidden="true" className="cursor-trail" />
      <div ref={ring} aria-hidden="true" className="cursor-ring">
        <OctahedronSvg faces={faces} />
      </div>
    </>
  );
}
