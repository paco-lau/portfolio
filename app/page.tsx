import AboutImages from "./components/AboutImages";
import HomeAnimated from "./components/HomeAnimated";
import HeroSection from "./components/HeroSection";
import ProjectsCard from "./components/ProjectsCard";

export default function Home() {
  return (
    <>
      <HeroSection />

      <HomeAnimated>
        {/* About Me */}
        <section id="about" className="sticky px-24 pt-20 pb-16 bg-[#F5F0E8]" style={{ top: "6vh", marginTop: "-85vh", zIndex: 1, minHeight: "100vh" }}>
          <h2 className="font-bold text-[#181a18] mb-10" style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)", lineHeight: 1 }}>Who I Am</h2>
          <div className="flex gap-12 items-start">
            <p className="flex-1 min-w-0 text-[#181a18] leading-relaxed" style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)" }}>
              I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics.
            </p>
            <AboutImages />
          </div>
        </section>

        {/* Spacer — keeps Who I Am pinned briefly before Projects slides in */}
        <div className="bg-[#F5F0E8]" style={{ height: "25vh" }} />

        {/* Recent Works + Footer */}
        <ProjectsCard />
      </HomeAnimated>
    </>
  );
}
