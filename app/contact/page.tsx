import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-12 py-24">
      <h1 className="text-7xl font-bold text-[#181a18] mt-8 mb-4">Contact</h1>
      <hr className="border-[#181a18] mb-12" />
      <div className="flex flex-col gap-4 text-lg">
        <a href="mailto:pacolau@berkeley.edu" className="text-neutral-500 hover:text-[#181a18] transition-colors">
          pacolau@berkeley.edu →
        </a>
        <a href="https://www.linkedin.com/in/pacolau/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#181a18] transition-colors">
          LinkedIn →
        </a>
      </div>
    </main>
  );
}
