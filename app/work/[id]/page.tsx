import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import { projects } from "../../lib/projects";
import { CaseStudyHero } from "../CaseStudy";

// Header details for projects whose full case study isn't written yet.
// Accents are sampled from each banner; light accents get ink badge text.
const headers: Record<string, { company: string; title: string; role: string; team?: string[]; accent: string; badgeText?: string }> = {
  "09": { company: "Zipline", title: "Split Risk Model & Simulator", role: "Strategy Consultant", team: ["1 Mentor", "1 Lead", "6 Strategy Consultants"], accent: "#643AED" },
  "10": { company: "Replate", title: "Donor Dashboard Design", role: "Project Manager Lead", team: ["2 Mentors", "1 Lead", "2 Advisors", "5 Designers"], accent: "#2BB081", badgeText: "#181a18" },
  "11": { company: "Healthcare Fraud Detection", title: "Medicare Claims Risk Modeling", role: "Data Science Researcher", team: ["2 Leads", "4 Data Science Researchers"], accent: "#4A1E28" },
  "04": { company: "DataGood at Berkeley", title: "Marketing & Merchandise", role: "Vice President of Marketing", accent: "#33151C" },
  "07": { company: "Milpitas High Varsity Boys Tennis", title: "Team Merchandise", role: "Merchandise Designer", accent: "#172750" },
};

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(p => p.num === id);
  const header = headers[id];
  if (!project || !header) notFound();

  return (
    <>
      <CaseStudyHero
        badge={`${header.company} · ${project.sub}`}
        title={header.title}
        role={header.role}
        team={header.team}
        banner={project.banner}
        accent={header.accent}
        badgeText={header.badgeText}
      />
      <section className="bg-[#F5F0E8] py-32 text-center">
        <p className="font-bold text-[#181a18]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Coming soon</p>
      </section>
      <Footer />
    </>
  );
}
