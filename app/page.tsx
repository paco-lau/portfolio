import HeroSection from "./components/HeroSection";
import ProjectsCard from "./components/ProjectsCard";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Recent Works + Footer */}
      <ProjectsCard />
    </>
  );
}
