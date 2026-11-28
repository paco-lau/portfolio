"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Footer from "../Footer";
import { EXIF } from "../../lib/exif";

const ease = [0.22, 1, 0.36, 1] as const;

export type GalleryPhoto = {
  id: number;
  aspect: "portrait" | "landscape";
  gradient: string;
  image?: StaticImageData;
  scale?: number;
};

interface GalleryPageProps {
  title: string;
  columns: GalleryPhoto[][];
}

// Built-in file name of a static import, e.g. "/_next/static/media/port-andy.2vles.jpg" -> "port-andy"
const fileName = (src: string) => decodeURIComponent(src.split("/").pop()!).split(".")[0];
const corner = "absolute w-3.5 h-3.5 border-[#F5F0E8]";

function Photo({ photo, delay, inView }: { photo: GalleryPhoto; delay: number; inView: boolean }) {
  const finder = useRef<HTMLDivElement>(null);
  const settings = photo.image && EXIF[fileName(photo.image.src)];
  // Focus brackets follow the mouse (moved directly, no re-render per frame)
  const aim = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    finder.current?.style.setProperty("transform", `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px)`);
  };

  return (
    <motion.div
      className={settings ? "group cursor-none" : undefined}
      data-viewfinder={settings ? "" : undefined}
      style={{ aspectRatio: photo.aspect === "portrait" ? "3/4" : "4/3", overflow: "hidden", position: "relative" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease }}
      onPointerEnter={settings ? aim : undefined}
      onPointerMove={settings ? aim : undefined}
    >
      {photo.image ? (
        <Image
          src={photo.image}
          alt=""
          fill
          className="object-cover"
          style={photo.scale ? { transform: `scale(${photo.scale})` } : undefined}
        />
      ) : (
        <div className="w-full h-full" style={{ background: photo.gradient }} />
      )}
      {settings && (
        <>
          {/* Camera viewfinder: focus brackets at the cursor, shot settings along the bottom */}
          {/* sized to its brackets and on its own layer, so moving it repaints cleanly (no trails) */}
          <div ref={finder} aria-hidden="true" className="absolute left-0 top-0 -ml-14 -mt-10 w-28 h-20 will-change-transform pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 [filter:drop-shadow(0_0_1px_rgba(0,0,0,0.7))]">
            <div className="absolute inset-0 scale-125 group-hover:scale-100 transition-transform duration-300 motion-reduce:transition-none">
              <span className={`${corner} left-0 top-0 border-t-[1.5px] border-l-[1.5px]`} />
              <span className={`${corner} right-0 top-0 border-t-[1.5px] border-r-[1.5px]`} />
              <span className={`${corner} left-0 bottom-0 border-b-[1.5px] border-l-[1.5px]`} />
              <span className={`${corner} right-0 bottom-0 border-b-[1.5px] border-r-[1.5px]`} />
            </div>
            <span className="absolute left-1/2 top-1/2 -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-[#F5F0E8]" />
          </div>
          <p className="absolute inset-x-0 bottom-0 px-3 pt-6 pb-2 text-[11px] tracking-wide tabular-nums text-[#F5F0E8] bg-gradient-to-t from-black/55 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {settings}
          </p>
        </>
      )}
    </motion.div>
  );
}

function PhotoGrid({ columns, inView }: { columns: GalleryPhoto[][]; inView: boolean }) {
  // On mobile: show 2 columns (first two columns); on md+: show all columns
  const mobileColumns = columns.slice(0, 2);

  return (
    <>
      {/* Mobile: 2 columns */}
      <div className="flex md:hidden gap-3">
        {mobileColumns.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-3 flex-1">
            {col.map((photo, pi) => (
              <Photo key={photo.id} photo={photo} delay={0.1 + (ci * col.length + pi) * 0.07} inView={inView} />
            ))}
          </div>
        ))}
      </div>
      {/* Desktop: all columns */}
      <div className="hidden md:flex gap-3">
        {columns.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-3 flex-1">
            {col.map((photo, pi) => (
              <Photo key={photo.id} photo={photo} delay={0.1 + (ci * col.length + pi) * 0.07} inView={inView} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default function GalleryPage({ title, columns }: GalleryPageProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* Header */}
      <section className="bg-[#F5F0E8] px-4 sm:px-8 md:px-12 lg:px-16 pt-28 pb-12 relative overflow-hidden">
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
            style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", lineHeight: 1 }}
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
      <section className="pt-6 pb-16 px-4 sm:px-8 md:px-12 bg-[#F5F0E8]">
        <div ref={gridRef} className="max-w-6xl mx-auto">
          <PhotoGrid columns={columns} inView={gridInView} />
        </div>
      </section>

      <Footer />
    </>
  );
}
