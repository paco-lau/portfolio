import WorkIndex from "../components/WorkIndex";
import { dataProjects, DATA_CATEGORY } from "../lib/projects";

// Every project here is "Data Science", so filter by the other tags they carry.
const categories = ["All", ...[...new Set(dataProjects.flatMap(p => p.categories))].filter(c => c !== DATA_CATEGORY).sort()];

export default function DataPage() {
  return (
    <WorkIndex
      title="Data"
      items={dataProjects}
      categories={categories}
      emptyText={dataProjects.length === 0 ? "No data projects yet." : "No projects in this category yet."}
    />
  );
}
