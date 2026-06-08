import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className={`space-y-8 transform transition-all duration-1000 ${mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-400 tracking-wider">AVAILABLE FOR HIRE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Building systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">scale</span>.
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Software Development Engineer at IIIT Una, specializing in full-stack development,
            scalable architectures, and production-grade systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group relative px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-all flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
            <a href="/Sahil_resume_.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-primary/50 rounded-lg text-primary hover:text-white hover:bg-primary/10 hover:border-primary transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              View Resume
            </a>
            <a href="#contact" className="px-6 py-3 border border-white/10 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content - Profile Photo */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl rounded-2xl"></div>
          <div className="relative bg-[#0F1117] border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl space-y-4">
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <img
                src="/profile-photo.png"
                alt="Portrait of Sahil Kumar"
                className="w-full h-[300px] md:h-[360px] object-cover object-[center_25%]"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-slate-200 font-semibold">Sahil Kumar</p>
              <p className="text-xs tracking-wider text-emerald-400 font-mono">SOFTWARE ENGINEER</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
