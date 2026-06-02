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
        <section id="about" className="about-section sticky px-6 sm:px-12 md:px-16 lg:px-24 pt-20 pb-16 bg-[#F5F0E8]" style={{ top: "6vh", marginTop: "-85vh", zIndex: 1, minHeight: "100vh" }}>

          <h2 className="about-heading font-bold text-[#181a18] mb-4" style={{ lineHeight: 1 }}>Hi, I'm <span style={{ color: "#7EC8E3" }}>Paco</span>.</h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1 min-w-0">
              {/* Accent bar */}
              <div className="about-accent-bar" style={{ width: "100%", maxWidth: "42rem", height: "3px", backgroundColor: "#181a18", borderRadius: "999px", marginTop: 0, marginBottom: "2rem" }} />
              <p className="about-text text-[#181a18] leading-relaxed" style={{ maxWidth: "650px" }}>
                Born in Hong Kong, raised in the Bay Area, and along the way, I fell in love with making things — websites, photos, brands. I study Data Science & Economics at UC Berkeley, and I'm also greatly passionate about design, photography, and data science.
              </p>
              {/* Mobile: merged paragraph */}
              <p className="about-text md:hidden text-[#181a18] leading-relaxed mt-4" style={{ maxWidth: "650px" }}>
                On campus, I'm involved in Invention Corps of Berkeley and DataGood, where I explore the intersections of design, data, and real-world impact. In my free time, I enjoy playing tennis, collecting Pokémon cards, and trying out famous restaurants near me!
              </p>
              {/* iPad+: original two separate paragraphs */}
              <p className="hidden md:block text-[#181a18] leading-relaxed mt-4 about-text" style={{ maxWidth: "650px" }}>
                On campus, I stay involved through, but not limited to, Invention Corps of Berkeley, a human-centered design consulting organization, and DataGood, a data science in social good organization. I'm always excited to explore the intersections between some of my biggest passions.
              </p>
              <p className="hidden md:block text-[#181a18] leading-relaxed mt-4 about-text" style={{ maxWidth: "650px" }}>
                In my free time, I enjoy playing tennis, collecting Pokémon cards, and trying out famous restaurants near me!
              </p>
            </div>
            <AboutImages />
          </div>
        </section>

        {/* Spacer — keeps Who I Am pinned briefly before Projects slides in */}
        <div className="bg-[#F5F0E8]" style={{ height: "70vh" }} />

        {/* Recent Works + Footer */}
        <ProjectsCard />
      </HomeAnimated>
    </>
  );
}
