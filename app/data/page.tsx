import WorkIndex from "../components/WorkIndex";
import { dataProjects, DATA_FILTERS } from "../lib/projects";

export default function DataPage() {
  return (
    <WorkIndex
      title="Data"
      items={dataProjects}
      categories={["All", ...DATA_FILTERS]}
      pinned="12"
      emptyText={dataProjects.length === 0 ? "No data projects yet." : "No projects in this category yet."}
    />
  );
}
