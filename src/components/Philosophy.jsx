export default function Philosophy() {
  const principles = [
    {
      title: "Scalable Architecture",
      desc: "Designing systems that handle growth effortlessly without rewriting core logic.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      )
    },
    {
      title: "Clean Code & maintainability",
      desc: "Writing code that future engineers can understand, debug, and extend easily.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      )
    },
    {
      title: "Performance First",
      desc: "Optimizing critical paths to ensure sub-100ms response times for end users.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      )
    },
    {
      title: "Reliability & Security",
      desc: "Implementing robust error handling and security best practices from day one.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      )
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-background max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-white mb-6">
            Engineering <br /><span className="text-secondary">Philosophy</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            I don't just write code; I build digital products. My approach is rooted in
            pragmatism, performance, and user-centric design.
          </p>
        </div>

        <div className="md:w-2/3 grid md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div key={i} className="space-y-4 p-6 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                {p.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
