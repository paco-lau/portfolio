const pages = [
  { href: "/about", label: "About" },
  { href: "/data", label: "Data" },
  { href: "/design", label: "Design" },
  { href: "/photography", label: "Photography" },
  { href: "/contact", label: "Contact" },
];

const elsewhere = [
  { href: "mailto:pacolau@berkeley.edu", label: "Email" },
  { href: "/RESUME-for-portfolio.pdf", label: "Resume", newTab: true },
  { href: "https://www.linkedin.com/in/pacolau/", label: "LinkedIn", newTab: true },
  { href: "https://github.com/paco-lau", label: "GitHub", newTab: true },
];

function Links({ links, className }: { links: { href: string; label: string; newTab?: boolean }[]; className: string }) {
  return (
    <div className={`flex flex-wrap text-sm text-white/60 ${className}`}>
      {links.map(({ href, label, newTab }) => (
        <a
          key={href}
          href={href}
          {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
          className="hover:text-white transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="font-sans px-6 sm:px-10 md:px-16 py-16 md:py-20"
      style={{ backgroundColor: "#181a18" }}
    >
      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden">
        <span className="text-white font-medium">Paco Lau</span>
        <span className="text-sm text-white/40 mt-0.5">© {year} Paco Lau</span>
        <Links links={pages} className="gap-4 mt-4" />
        <Links links={elsewhere} className="gap-4 mt-4" />
      </div>

      {/* sm+ layout */}
      <div className="hidden sm:flex sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-white font-medium">Paco Lau</span>
          <Links links={pages} className="gap-6" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-sm text-white/40">© {year} Paco Lau</span>
          <Links links={elsewhere} className="gap-6" />
        </div>
      </div>
    </footer>
  );
}
