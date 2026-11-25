import firefoxBanner from "../../assets/projects/mozilla-firefox/firefox-banner.png";
import globalBanner from "../../assets/projects/global-inheritance/globalinheritance-banner.png";
import millpondBanner from "../../assets/projects/millpond-research/millpond-banner.png";
import gotourBanner from "../../assets/projects/gotourglobal/gotourglobal-banner.png";
import tennisBanner from "../../assets/projects/mhs-merch-design/mhs-tennis-banner.png";
import datagoodBanner from "../../assets/projects/datagood-merch-design/datagood-banner.png";

export const projects = [
  {
    num: "10", title: "Replate Dashboard Design", sub: "Sep 2026 - Current",
    gradient: "linear-gradient(135deg, #3D4A2A 0%, #161C0E 100%)",
    banner: undefined,
    categories: ["UI/UX"], pinned: false, current: false,
  },
  {
    num: "09", title: "Zipline Split Risk Model & Simulator", sub: "Sep 2026 - Current",
    gradient: "linear-gradient(135deg, #1F3A4D 0%, #0B1620 100%)",
    banner: undefined,
    categories: ["Data Science"], pinned: false, current: false,
  },
  {
    num: "02", title: "Global Inheritance Brand & Website Re-Design", sub: "Feb 2026 - May 2026",
    gradient: "linear-gradient(135deg, #2A4A3A 0%, #0F1F18 100%)",
    banner: globalBanner,
    categories: ["Brand", "UI/UX", "Web"], pinned: false, current: false,
  },
  {
    num: "03", title: "GoTourGlobal Mobile App", sub: "Feb 2026 - May 2026",
    gradient: "linear-gradient(135deg, #5C3D6E 0%, #2A1A3A 100%)",
    banner: gotourBanner,
    categories: ["Coded", "Mobile", "UI/UX"], pinned: false, current: false,
  },
  {
    num: "04", title: "UC Berkeley DataGood VP of Marketing", sub: "Jan 2026 - Current",
    gradient: "linear-gradient(135deg, #030001 0%, #030001 100%)",
    banner: datagoodBanner,
    categories: ["Brand", "Merchandise"], pinned: false, current: false,
  },
  {
    num: "05", title: "Mozilla Firefox Adaptive Performance Extension", sub: "Sep 2025 - Feb 2026",
    gradient: "linear-gradient(135deg, #A0522D 0%, #4A1A0A 100%)",
    banner: firefoxBanner,
    categories: ["Coded", "Data Science", "UI/UX", "Web"], pinned: true, current: false,
  },
  {
    num: "06", title: "Mill Pond Research Brand & Website Re-Design", sub: "Sep 2025 - Dec 2025",
    gradient: "linear-gradient(135deg, #1A5276 0%, #0A2840 100%)",
    banner: millpondBanner,
    categories: ["Brand", "Coded", "Web", "UI/UX"], pinned: false, current: false,
  },
  {
    num: "07", title: "Milpitas High Varsity Boys Tennis Merchandise", sub: "Feb 2025 - Apr 2025",
    gradient: "linear-gradient(135deg, #7B3F00 0%, #3A1A00 100%)",
    banner: tennisBanner,
    categories: ["Brand", "Merchandise"], pinned: false, current: false,
  },
];

export type Project = typeof projects[number];

export const DATA_CATEGORY = "Data Science";

/** Projects shown on the Data tab. */
export const dataProjects = projects.filter(p => !p.current && p.categories.includes(DATA_CATEGORY));
