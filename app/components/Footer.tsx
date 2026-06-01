export default function Footer() {
  return (
    <footer
      id="contact"
      className="flex items-end justify-between font-sans"
      style={{ backgroundColor: "#181a18", padding: "3rem 4rem" }}
    >
      <div className="flex flex-col gap-2">
        <span className="text-white font-medium">Paco Lau</span>
        <div className="flex gap-6 text-sm text-white/60">
          <a href="/projects" className="hover:text-white transition-colors">Projects</a>
          <a href="/photography" className="hover:text-white transition-colors">Photography</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-sm text-white/40">© {new Date().getFullYear()} Paco Lau</span>
        <div className="flex gap-6 text-sm text-white/60">
          <a href="mailto:pacolau@berkeley.edu" className="hover:text-white transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/pacolau/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/paco-lau" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
