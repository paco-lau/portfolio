import Image from "next/image";

export default function AboutImages() {
  return (
    <div className="relative min-w-0" style={{ aspectRatio: "576 / 630", width: "40%", marginTop: "-3rem" }}>
      {/* Pic 3 — small accent, back */}
      <div
        className="absolute z-0 rounded-2xl overflow-hidden"
        style={{ top: "6%", right: "7%", width: "38%", height: "36%", boxShadow: "0 3px 9px 2px rgba(0,0,0,0.60)", transform: "rotate(3deg)" }}
      >
        <Image src="/about-me-pic-3.jpg" alt="Paco Lau" fill className="object-cover" />
      </div>
      {/* Pic 1 — large primary */}
      <div
        className="absolute z-10 rounded-2xl overflow-hidden"
        style={{ top: 0, left: "-5%", width: "65%", height: "80%", boxShadow: "0 5px 12px 3px rgba(0,0,0,0.64)", transform: "rotate(-2deg)" }}
      >
        <Image src="/about-me-pic.jpg" alt="Paco Lau" fill className="object-cover" />
      </div>
      {/* Pic 2 — medium secondary */}
      <div
        className="absolute z-20 rounded-2xl overflow-hidden"
        style={{ bottom: "8%", right: 0, width: "60%", height: "40%", boxShadow: "0 6px 15px 5px rgba(0,0,0,0.68)", transform: "rotate(1.5deg)" }}
      >
        <Image src="/about-me-pic-2.jpg" alt="Paco Lau" fill className="object-cover" />
      </div>
    </div>
  );
}
