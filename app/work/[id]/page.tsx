import Link from "next/link";
import { projects, DATA_CATEGORY } from "../../lib/projects";

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Data-only projects are listed on the Data tab, so send people back there.
  const project = projects.find(p => p.num === id);
  const dataOnly = !!project && project.categories.every(c => c === DATA_CATEGORY);
  const back = dataOnly ? { href: "/data", label: "Data" } : { href: "/projects", label: "Projects" };

  return (
    <main className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-12 text-center">
      <p
        className="font-sans text-[#181a18]"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1 }}
      >
        Oops...
      </p>
      <p
        className="font-sans text-[#181a18]/60 mt-4"
        style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 400 }}
      >
        Site in progress, come back later!
      </p>
      <Link
        href={back.href}
        className="font-sans mt-10 transition-opacity hover:opacity-75"
        style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, padding: "14px 32px", borderRadius: "999px", backgroundColor: "#181a18", color: "#F5F0E8" }}
      >
        ← Back to {back.label}
      </Link>
    </main>
  );
}
