export default function Footer() {
  return (
    <footer
      id="contact"
      className="font-sans px-6 sm:px-10 md:px-16 py-16 md:py-20"
      style={{ backgroundColor: "#181a18" }}
    >
      {/* Mobile layout */}
      <div className="flex flex-col sm:hidden">
        <span className="text-white font-medium">Paco Lau</span>
        <span className="text-sm text-white/40 mt-0.5">© {new Date().getFullYear()} Paco Lau</span>
        <div className="flex flex-wrap gap-4 text-sm text-white/60 mt-4">
          <a href="/projects" className="hover:text-white transition-colors">Projects</a>
          <a href="/photography" className="hover:text-white transition-colors">Photography</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-white/60 mt-4">
          <a href="mailto:pacolau@berkeley.edu" className="hover:text-white transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/pacolau/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/paco-lau" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>

      {/* sm+ layout */}
      <div className="hidden sm:flex sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-white font-medium">Paco Lau</span>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="/projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/photography" className="hover:text-white transition-colors">Photography</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-sm text-white/40">© {new Date().getFullYear()} Paco Lau</span>
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <a href="mailto:pacolau@berkeley.edu" className="hover:text-white transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/pacolau/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/paco-lau" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
