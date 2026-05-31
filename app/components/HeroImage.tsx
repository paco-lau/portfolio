"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import titleImg from "../../assets/title-img.png";

export default function HeroImage() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ right: "4rem", top: "50%", transform: "translateY(-50%)" }}
    >
      <motion.div
        initial={{ opacity: 0, x: 56 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={titleImg} alt="" height={600} style={{ width: "auto" }} />
      </motion.div>
    </div>
  );
}
