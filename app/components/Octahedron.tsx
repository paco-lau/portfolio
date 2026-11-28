"use client";

import { useEffect, useRef, type RefObject } from "react";

// Solid octahedron like the favicon: 8 faces, one per octant, each (sx,0,0)-(0,sy,0)-(0,0,sz)
const SIGNS = [-1, 1];
const FACES = SIGNS.flatMap(sx => SIGNS.flatMap(sy => SIGNS.map(sz => [sx, sy, sz])));
// Favicon blues, shadow to highlight
const DARK = [0x2b, 0x74, 0x99], LIGHT = [0x7e, 0xc8, 0xe3];
const LIGHT_DIR = [-0.45, -0.65, -0.6]; // from the upper left, toward the viewer

/** Orientation + drawing for an octahedron rendered by <OctahedronSvg>.
 *  rotate() turns it about any axis; draw() repaints the visible, shaded faces. */
export function makeOctahedron(faces: RefObject<SVGPolygonElement[]>) {
  let R = [[1, 0, 0], [0, 0.9, -0.44], [0, 0.44, 0.9]];

  // Turn R by `angle` about the axis (x, y, z), then re-square it so rounding never warps the shape
  const rotate = (x: number, y: number, z: number, angle: number) => {
    const len = Math.hypot(x, y, z);
    if (!len || !angle) return;
    [x, y, z] = [x / len, y / len, z / len];
    const c = Math.cos(angle), s = Math.sin(angle), t = 1 - c;
    const M = [
      [t * x * x + c, t * x * y - s * z, t * x * z + s * y],
      [t * x * y + s * z, t * y * y + c, t * y * z - s * x],
      [t * x * z - s * y, t * y * z + s * x, t * z * z + c],
    ];
    R = M.map(row => [0, 1, 2].map(j => row[0] * R[0][j] + row[1] * R[1][j] + row[2] * R[2][j]));
    const [a, b] = R;
    const na = Math.hypot(...a); const u = a.map(v => v / na);
    const d = u[0] * b[0] + u[1] * b[1] + u[2] * b[2];
    const w0 = b.map((v, i) => v - d * u[i]); const nw = Math.hypot(...w0); const w = w0.map(v => v / nw);
    R = [u, w, [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]];
  };

  // Screen is (x, y); z points away from the viewer
  const draw = () => {
    const turn = (v: number[]) => R.map(row => row[0] * v[0] + row[1] * v[1] + row[2] * v[2]);
    FACES.forEach((s, k) => {
      const el = faces.current[k];
      const n = turn(s.map(v => v / Math.sqrt(3)));
      if (n[2] >= 0) { el.setAttribute("visibility", "hidden"); return; } // facing away
      const pts = [[s[0], 0, 0], [0, s[1], 0], [0, 0, s[2]]].map(turn);
      const lit = Math.max(0, n[0] * LIGHT_DIR[0] + n[1] * LIGHT_DIR[1] + n[2] * LIGHT_DIR[2]);
      el.setAttribute("points", pts.map(p => `${p[0]},${p[1]}`).join(" "));
      const color = `rgb(${DARK.map((d, i) => Math.round(d + (LIGHT[i] - d) * lit)).join(",")})`;
      el.setAttribute("fill", color);
      el.setAttribute("stroke", color); // hairline in the face's own color closes seams between faces
      el.setAttribute("visibility", "visible");
    });
  };

  return { rotate, draw };
}

/** The octahedron's SVG; fills its box. Faces are drawn by makeOctahedron. */
export function OctahedronSvg({ faces }: { faces: RefObject<SVGPolygonElement[]> }) {
  return (
    <svg viewBox="-1.05 -1.05 2.1 2.1" width="100%" height="100%" strokeLinejoin="round" strokeWidth="0.03" aria-hidden="true">
      {FACES.map((_, k) => <polygon key={k} ref={el => { if (el) faces.current[k] = el; }} visibility="hidden" />)}
    </svg>
  );
}

/** A standalone octahedron that tumbles slowly on its own (still for reduced-motion visitors). */
export default function Octahedron({ className }: { className?: string }) {
  const faces = useRef<SVGPolygonElement[]>([]);

  useEffect(() => {
    const shape = makeOctahedron(faces);
    shape.draw();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let time = 0, frame = 0;
    const tick = () => {
      time += 1 / 60;
      shape.rotate(Math.sin(time * 0.31), Math.cos(time * 0.23), Math.sin(time * 0.17 + 1), 0.012);
      shape.draw();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <div className={className}><OctahedronSvg faces={faces} /></div>;
}
