"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import gradSaba2 from "../../../assets/photography/graduate/grad-saba-2.jpg";
import urbanZhangjiajie from "../../../assets/photography/urban-landscape/urbanland-zhangjiajie.jpg";
import portKylie from "../../../assets/photography/portrait/port-kylie.jpg";
import gradEthanball from "../../../assets/photography/graduate/grad-icb-ethanball.jpg";
import urbanTahoe from "../../../assets/photography/urban-landscape/urbanland-tahoe.jpg";
import gradChampine from "../../../assets/photography/graduate/grad-icb-champine.jpg";

const photos = [
  { id: 1, aspect: "landscape", gradient: "linear-gradient(180deg, #0d1f2d 0%, #1a3a4a 50%, #2d6080 100%)", image: gradSaba2 },
  { id: 2, aspect: "portrait",  gradient: "linear-gradient(160deg, #1a1a14 0%, #3a3a28 60%, #5a5a3a 100%)", image: urbanZhangjiajie },
  { id: 3, aspect: "landscape", gradient: "linear-gradient(160deg, #0a1a0a 0%, #1a3a1a 50%, #2a5a2a 100%)", image: portKylie },
  { id: 4, aspect: "portrait",  gradient: "linear-gradient(160deg, #2a1f1a 0%, #5a3a2a 60%, #8a6050 100%)", image: gradEthanball },
  { id: 5, aspect: "landscape", gradient: "linear-gradient(200deg, #1a1208 0%, #3a2a10 50%, #6a4a20 100%)", image: gradChampine },
  { id: 6, aspect: "portrait",  gradient: "linear-gradient(160deg, #1a0a1a 0%, #3a1a3a 50%, #6a306a 100%)", image: urbanTahoe },
];

export default function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 md:py-20 px-4 sm:px-8 md:px-12" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="max-w-2xl md:max-w-4xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-8 md:mb-12">
          <motion.p
            className="text-[#181a18]/40 text-xs tracking-widest uppercase font-[family-name:var(--font-dm-sans)] mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            Selected Works
          </motion.p>
          <motion.h2
            className="font-[family-name:var(--font-cormorant)] font-medium text-[#181a18]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1 }}
          >
            A few favourites.
          </motion.h2>
          <motion.div
            className="mt-4 h-px bg-[#181a18]/20"
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.25 }}
          />
        </div>

        {/* Mobile: 2 columns, md+: 3 columns (CSS masonry via column-count) */}
        <div className="columns-2 md:columns-3 gap-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="mb-3 break-inside-avoid"
              style={{ aspectRatio: photo.aspect === "portrait" ? "3/4" : "4/3", overflow: "hidden", position: "relative" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {photo.image ? (
                <Image src={photo.image} alt="" fill className="object-cover" />
              ) : (
                <div className="w-full h-full" style={{ background: photo.gradient }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
