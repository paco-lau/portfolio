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
                I'm born &amp; raised in Hong Kong, went to high school in the Bay Area, and now studying Data Science &amp; Economics at UC Berkeley. I'm drawn to the overlap between how things work and how they look. I build websites, find patterns in data, shoot photos, and think a lot about design.
              </p>
              {/* Mobile: merged paragraph */}
              <p className="about-text md:hidden text-[#181a18] leading-relaxed mt-4" style={{ maxWidth: "650px" }}>
                On campus I'm a EECS student assistant and active in Invention Corps and DataGood. Outside of that — tennis, Pokémon cards, and food. Reach out if any of that resonates!
              </p>
              {/* iPad+: two separate paragraphs */}
              <p className="hidden md:block text-[#181a18] leading-relaxed mt-4 about-text" style={{ maxWidth: "650px" }}>
                On campus, I work as a student assistant in the EECS department and stay active through the clubs on campus, such as Invention Corps of Berkeley, a human-centered design organization, and DataGood, a data science in social good organization.
              </p>
              <p className="hidden md:block text-[#181a18] leading-relaxed mt-4 about-text" style={{ maxWidth: "650px" }}>
                Beyond academics, I play tennis, collect Pokémon cards, and eat my way through Berkeley's restaurant scene. If you're working on something at the intersection of data, design, or social impact, or just want to grab coffee, reach out!
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
