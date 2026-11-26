import WorkIndex from "../components/WorkIndex";
import { projects, DESIGN_CATEGORIES } from "../lib/projects";

// Data-only projects live on the Data tab; cross-disciplinary ones appear in both.
const visible = projects.filter(p => !p.current && p.categories.some(c => DESIGN_CATEGORIES.includes(c)));

export default function ProjectsPage() {
  return (
    <WorkIndex
      title="Design"
      items={visible}
      categories={["All", ...DESIGN_CATEGORIES]}
      pinned="05"
      emptyText="No projects in this category yet."
    />
  );
}
