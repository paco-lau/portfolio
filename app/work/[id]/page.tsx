import Link from "next/link";

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="min-h-screen px-12 py-24">
      <Link href="/" className="text-sm text-neutral-400 hover:text-[#181a18] transition-colors">
        ← Back
      </Link>
      <h1 className="text-5xl font-bold text-[#181a18] mt-8 mb-4">Project {id}</h1>
      <p className="text-neutral-500">Project details coming soon.</p>
    </main>
  );
}
