import AboutImages from "./AboutImages";
import CtaButton from "./CtaButton";

/** "Hi, I'm Paco" intro + photo collage for /about. */
export default function AboutMe() {
  return (
    <>
      <h2 className="about-heading font-bold text-[#181a18] mb-4" style={{ lineHeight: 1 }}>Hi, I&apos;m <span style={{ color: "#7EC8E3" }}>Paco</span>.</h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex-1 min-w-0">
          {/* Accent bar */}
          <div className="about-accent-bar" style={{ width: "100%", maxWidth: "42rem", height: "3px", backgroundColor: "#181a18", borderRadius: "999px", marginTop: 0, marginBottom: "2rem" }} />
          <p className="about-text text-[#181a18] leading-relaxed" style={{ maxWidth: "650px" }}>
            I was born &amp; raised in Hong Kong, went to high school in the Bay Area, and am now studying Data Science &amp; Economics at UC Berkeley. I&apos;m drawn to the overlap between how things work and how they look. I build <span style={{ color: "#2A82A8" }}>websites</span>, find patterns in <span style={{ color: "#2A82A8" }}>data</span>, shoot <span style={{ color: "#2A82A8" }}>photos</span>, and think a lot about <span style={{ color: "#2A82A8" }}>design</span>.
          </p>
          <p className="about-text text-[#181a18] leading-relaxed mt-4" style={{ maxWidth: "650px" }}>
            I like taking a messy problem, finding what the data is actually saying, and turning it into something people can use.
          </p>
          {/* Mobile: shorter version */}
          <p className="about-text md:hidden text-[#181a18] leading-relaxed mt-4" style={{ maxWidth: "650px" }}>
            Outside of class: tennis, Pokémon cards, and food. Reach out if any of that resonates!
          </p>
          <p className="hidden md:block text-[#181a18] leading-relaxed mt-4 about-text" style={{ maxWidth: "650px" }}>
            Beyond academics, I play tennis, collect Pokémon cards, and eat my way through Berkeley&apos;s restaurant scene. If you&apos;re working on something at the intersection of data, design, or social impact, or just want to grab coffee, reach out!
          </p>
          <div className="mt-6">
            <CtaButton href="/RESUME-for-portfolio.pdf" newTab>View Resume</CtaButton>
          </div>
        </div>
        <AboutImages />
      </div>
    </>
  );
}
