export default function About() {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-8">About <span className="text-slate-600">Me</span></h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm a B.Tech student in Electronics and Communication Engineering at
            <span className="text-white font-medium"> Indian Institute of Information Technology, Una</span>,
            specializing in full-stack development and scalable system architecture.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed">
            My engineering approach combines deep algorithmic understanding with production-ready
            solutions across the entire stack. I architect resilient systems—from responsive frontends
            to high-performance backends—that empower businesses to scale without technical debt.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
              C++ & DSA
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
              JavaScript & TypeScript
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
              Node.js & Express
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
              Python
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
              MongoDB & PostgreSQL
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
              React & Redux
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300">
              Git & REST APIs
            </span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-6 bg-white/5 border-l-4 border-primary rounded-r-xl">
            <h3 className="text-white font-semibold mb-2">Education</h3>
            <p className="text-slate-300 font-medium">B.Tech in ECE</p>
            <p className="text-slate-400 text-sm">IIIT Una • 2023 - Present</p>
            <p className="text-slate-500 text-sm mt-1">CGPA: 7.04</p>
          </div>
          <div className="p-6 bg-white/5 border-l-4 border-accent rounded-r-xl italic text-slate-300">
            "Complexity is the enemy of execution."
          </div>
        </div>
      </div>
    </section>
  );
}
