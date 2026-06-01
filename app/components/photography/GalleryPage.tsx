"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "../Footer";

const ease = [0.22, 1, 0.36, 1] as const;

export type GalleryPhoto = {
  id: number;
  aspect: "portrait" | "landscape";
  gradient: string;
};

interface GalleryPageProps {
  title: string;
  sub: string;
  accent: string;
  columns: GalleryPhoto[][];
  titleSize?: string;
}

function PhotoGrid({ columns, inView }: { columns: GalleryPhoto[][]; inView: boolean }) {
  return (
    <div className="flex gap-3">
      {columns.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-3 flex-1">
          {col.map((photo, pi) => (
            <motion.div
              key={photo.id}
              style={{ aspectRatio: photo.aspect === "portrait" ? "3/4" : "4/3", overflow: "hidden" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.1 + (ci * col.length + pi) * 0.07, ease }}
            >
              <div className="w-full h-full" style={{ background: photo.gradient }} />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage({ title, sub, accent, columns, titleSize }: GalleryPageProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Header */}
      <section className="bg-[#F5F0E8] px-16 pt-28 pb-12 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
            maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          }}
        />
        <div ref={headerRef}>

          <motion.h1
            className="font-bold text-[#181a18]"
            style={{ fontSize: titleSize ?? "clamp(3.5rem, 8vw, 8rem)", lineHeight: 1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            {title}
          </motion.h1>

<motion.div
            className="mt-4 h-px"
            style={{ backgroundColor: "#181a18", opacity: 0.15 }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          />
        </div>
      </section>

      {/* Gallery grid */}
      <section className="pt-6 pb-16 px-12 bg-[#F5F0E8]">
        <div ref={gridRef} className="max-w-6xl mx-auto">
          <PhotoGrid columns={columns} inView={gridInView} />
        </div>
      </section>

      <Footer />
    </>
  );
}
