import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-12 text-center">
      <p className="font-sans text-[#181a18]" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1 }}>
        404
      </p>
      <p className="font-sans text-[#181a18]/60 mt-4" style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 400 }}>
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="font-sans mt-10 transition-opacity hover:opacity-75"
        style={{ fontSize: "15px", fontWeight: 600, padding: "14px 32px", borderRadius: "999px", backgroundColor: "#181a18", color: "#F5F0E8" }}
      >
        ← Back Home
      </Link>
    </main>
  );
}
