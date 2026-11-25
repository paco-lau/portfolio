import WorkIndex from "../components/WorkIndex";
import { projects, DATA_CATEGORY } from "../lib/projects";

// Data-only projects live on the Data tab; cross-disciplinary ones appear in both.
const visible = projects.filter(p => !p.current && p.categories.some(c => c !== DATA_CATEGORY));

export default function ProjectsPage() {
  return (
    <WorkIndex
      title="Design"
      items={visible}
      categories={["All", "Brand", "Coded", "Merchandise", "Mobile", "UI/UX", "Web"]}
      emptyText="No projects in this category yet."
    />
  );
}
