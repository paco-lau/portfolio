import Image from "next/image";

export default function AboutImages() {
  return (
    <div className="relative min-w-0" style={{ aspectRatio: "576 / 630", width: "33%" }}>
      {/* Pic 3 — back */}
      <div
        className="absolute z-0 rounded-2xl overflow-hidden"
        style={{ top: "6%", right: "7%", width: "45%", height: "44%", boxShadow: "0 3px 9px 2px rgba(0,0,0,0.60)" }}
      >
        <Image src="/about-me-pic-3.jpg" alt="Paco Lau" fill className="object-cover" />
      </div>
      {/* Pic 1 — middle */}
      <div
        className="absolute z-10 rounded-2xl overflow-hidden"
        style={{ top: 0, left: "-5%", width: "58%", height: "76%", boxShadow: "0 5px 12px 3px rgba(0,0,0,0.64)" }}
      >
        <Image src="/about-me-pic.jpg" alt="Paco Lau" fill className="object-cover" />
      </div>
      {/* Pic 2 — front */}
      <div
        className="absolute z-20 rounded-2xl overflow-hidden"
        style={{ bottom: "10%", right: 0, width: "75%", height: "46%", boxShadow: "0 6px 15px 5px rgba(0,0,0,0.68)" }}
      >
        <Image src="/about-me-pic-2.jpg" alt="Paco Lau" fill className="object-cover" />
      </div>
    </div>
  );
}
