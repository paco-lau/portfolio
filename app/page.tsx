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

          <h2 className="font-bold text-[#181a18] mb-4" style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)", lineHeight: 1 }}>Hi, I'm <span style={{ color: "#7EC8E3" }}>Paco</span>.</h2>

          <div className="flex gap-12 items-start">
            <div className="flex-1 min-w-0">
              {/* Sky blue accent bar */}
              <div style={{ width: "42rem", height: "3px", backgroundColor: "#181a18", borderRadius: "999px", marginTop: 0, marginBottom: "2rem" }} />
              <p className="text-[#181a18] leading-relaxed" style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)", maxWidth: "650px" }}>
                I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics. I am a UC Berkeley Student Majoring in Data Science & Economics.
              </p>
            </div>
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
