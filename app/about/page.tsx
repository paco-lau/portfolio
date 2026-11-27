import Link from "next/link";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import { projects } from "../lib/projects";

type Entry = { title: string; role?: string; sub: string; href?: string };

// Jobs shown under Employment; projects come from lib/projects.
const roles: Entry[] = [
  { title: "UC Berkeley EECS", role: "Student Assistant", sub: "Aug 2025 - Current" },
  { title: "UC Berkeley CED", role: "Comms Graphic Designer & Photo Assistant", sub: "Aug 2026 - Current" },
  { title: "Milpitas Unified (MUSD)", role: "Office Intern", sub: "Jun 2024 - Aug 2024" },
];

// Projects header (company) and subheader (what you did), by project num.
// Projects without an entry fall back to their title.
const experience: Record<string, [company: string, what: string]> = {
  "10": ["Replate", "Donor Dashboard Design"],
  "12": ["UC Berkeley Space Sciences Lab", "Auroral Image Classification"],
  "09": ["Zipline", "Split Risk Model & Simulator"],
  "11": ["Healthcare Fraud Detection", "Medicare Claims Risk Modeling"],
  "02": ["Global Inheritance", "Brand & Website Redesign"],
  "03": ["GoTourGlobal", "Mobile App"],
  "05": ["Mozilla, Firefox", "Adaptive Performance Extension"],
  "06": ["Mill Pond Research", "Brand & Website Redesign"],
};

// Résumé order: ongoing first, then most recent end date, then most recent start.
const startOf = (sub: string) => Date.parse(`1 ${sub.split(" - ")[0]}`);
const endOf = (sub: string) => sub.endsWith("Current") ? Infinity : Date.parse(`1 ${sub.split(" - ").at(-1)}`);
const newestFirst = (a: Entry, b: Entry) => (endOf(b.sub) - endOf(a.sub)) || (startOf(b.sub) - startOf(a.sub));

// DataGood lives under Campus Involvement; tennis merch is left off.
const history: Entry[] = projects
  .filter(p => !p.current && !["04", "07"].includes(p.num))
  .map(p => ({ title: experience[p.num]?.[0] ?? p.title, role: experience[p.num]?.[1], sub: p.sub, href: `/work/${p.num}` }))
  .sort(newestFirst);

const campus: Entry[] = [
  { title: "DataGood at Berkeley", role: "VP of Marketing; prev. Research Associate", sub: "Feb 2026 - Current", href: "https://datagood.studentorg.berkeley.edu" },
  { title: "Invention Corps of Berkeley", role: "Project Manager; prev. Design Associate", sub: "Sep 2025 - Current", href: "https://inventioncorps.org" },
  { title: "imagiCal (AAF)", role: "Design Associate", sub: "Sep 2026 - Current", href: "https://imagical.club" },
  { title: "UX at Berkeley", role: "UX Engineering Associate; prev. UX Design Associate", sub: "Sep 2025 - May 2026", href: "https://uxab.org" },
  { title: "Hong Kong Student Association", role: "Media & Marketing Head; prev. Intern", sub: "Feb 2026 - Current" },
];

const skills = [
  { group: "Languages & Tools", items: ["Python", "R", "SQL", "Java", "Git", "Excel"] },
  { group: "Python Libraries", items: ["Pandas", "Polars", "NumPy", "Matplotlib", "Seaborn", "statsmodels", "scikit-learn", "PyTorch"] },
  { group: "Data Platforms & BI", items: ["Snowflake", "dbt", "Airflow", "AWS", "Tableau", "Power BI"] },
  { group: "Methods", items: ["Machine Learning", "Statistical Modeling & Regression", "Feature Engineering", "Time-Series Analysis", "Anomaly & Outlier Detection", "A/B Testing", "Probability", "Linear Algebra", "Monte Carlo Simulation", "Financial Modeling & Valuation"] },
  { group: "Design & Web", items: ["Figma", "Wireframing & Prototyping", "User Research", "Usability Testing", "Visual & Brand Design", "Design Systems", "Adobe Creative Suite", "HTML/CSS", "JavaScript", "React"] },
  { group: "Product & Leadership", items: ["Project Leadership", "Product Roadmapping", "Cross-Functional Teamwork"] },
  { group: "Spoken Languages", items: ["English (Native)", "Cantonese (Native)", "Mandarin (Native)"] },
];

// Core skills, highlighted like the active filter pill.
const keySkills = new Set(["Python", "SQL", "R", "Excel", "Pandas", "scikit-learn", "Machine Learning", "Statistical Modeling & Regression", "Probability", "A/B Testing", "Figma", "React"]);

const pad = "px-6 sm:px-12 md:px-16 lg:px-24";
// Headings trail off into a thin rule: "Skills ——————"
const rule = "flex items-center gap-4 after:content-[''] after:flex-1 after:h-px";
const heading = `${rule} after:bg-white/15 font-bold text-white text-4xl md:text-6xl mb-8`;
const label = `${rule} after:bg-white/15 font-bold text-white text-3xl md:text-4xl mb-3`;
const dots = { backgroundImage: "radial-gradient(circle, rgba(24,26,24,0.18) 1.5px, transparent 1.5px)", backgroundSize: "36px 36px" };

const entryTitle = "block text-xl md:text-2xl font-medium leading-tight text-white";

/** Stacked entry: company, what you did, then dates. Current roles get a blue dot. */
function Row({ title, role, sub, href }: Entry) {
  const current = sub.endsWith("Current");
  const body = (
    <>
      <span className={`${entryTitle} group-hover:text-[#7EC8E3] transition-colors`}>{title}</span>
      {role && <span className="block text-white/60 mt-0.5">{role}</span>}
      {sub && (
        <span className={`block text-sm mt-0.5 ${current ? "text-[#7EC8E3]" : "text-white/45"}`}>
          {current && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7EC8E3] mr-2 align-middle" />}
          {sub}
        </span>
      )}
    </>
  );
  const cls = "block py-2";
  return <li>{href ? <Link href={href} className={`${cls} group`} {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}>{body}</Link> : <div className={cls}>{body}</div>}</li>;
}

export default function AboutPage() {
  return (
    <>
      <section className={`about-section ${pad} pt-28 pb-16 bg-[#F5F0E8]`} style={dots}>
        <AboutMe />
      </section>

      <div className="bg-[#F5F0E8]">
      <div className="bg-[#2a2c2a] rounded-t-[48px]">
      <section className={`${pad} pt-16 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-12`}>
        <div>
          <h2 className={label}>Education</h2>
          <div className="py-2">
            <p className={entryTitle}>University of California, Berkeley</p>
            <p className="text-white/60 mt-0.5">B.A. Data Science</p>
            <p className="text-white/60">B.A. Economics</p>
            <p className="text-sm text-white/45 mt-0.5">Expected May 2028</p>
          </div>
          <div className="py-2">
            <p className={entryTitle}>The Chinese University of Hong Kong (CUHK)</p>
            <p className="text-white/60 mt-0.5">Summer Study Abroad</p>
            <p className="text-sm text-white/45 mt-0.5">Jun 2026 - Jul 2026</p>
          </div>

          <h2 className={`${label} mt-10`}>Employment</h2>
          <ul>{[...roles].sort(newestFirst).map(e => <Row key={e.title} {...e} />)}</ul>
        </div>

        <div>
          <h2 className={label}>Experience</h2>
          <ul>{history.map(e => <Row key={e.title} {...e} />)}</ul>
        </div>

        <div>
          <h2 className={label}>Campus Involvement</h2>
          <ul>{[...campus].sort(newestFirst).map(e => <Row key={e.title} {...e} />)}</ul>
        </div>
      </section>

      <section className={`${pad} pb-24`}>
        <h2 className={heading}>Skills</h2>
        <div className="flex flex-col">
          {skills.map(({ group, items }) => (
            <div key={group} className="flex flex-col sm:flex-row gap-3 sm:gap-0 py-3 sm:py-0">
              <h3 className="font-sans text-sm font-medium text-white/50 sm:w-56 shrink-0 whitespace-nowrap sm:pt-5 sm:pb-3 sm:pr-6 sm:border-r border-white/15">{group}</h3>
              <ul className="flex flex-wrap gap-2 sm:py-3 sm:pl-6">
                {items.map(s => (
                  <li key={s} className={`text-sm px-3.5 py-1.5 rounded-full border ${keySkills.has(s) ? "bg-[#7EC8E3] border-[#7EC8E3] text-[#181a18] font-medium" : "border-white/20 text-white/85"}`}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      </div>
      </div>

      <Footer />
    </>
  );
}
