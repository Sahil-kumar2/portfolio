export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight text-white font-mono">
          sahil<span className="text-accent">.tech</span>
        </a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
          <a href="#contact" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
