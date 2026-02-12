export default function Metrics() {
  const metrics = [
    { value: "35%", label: "API Dependency Reduction", desc: "Local conversion engines vs external APIs" },
    { value: "40%", label: "Request Blocking Reduction", desc: "Async job processing workflows" },
    { value: "50%", label: "Faster Donor Search", desc: "MongoDB 2dsphere geospatial indexing" },
    { value: "300+", label: "DSA Problems Solved", desc: "3⭐ CodeChef" }
  ];

  return (
    <section className="py-20 bg-background border-y border-white/5 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-xl font-bold text-white mb-12 flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          System Performance
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((item, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-all group">
              <h3 className="text-4xl font-mono font-bold text-accent group-hover:text-primary transition-colors">
                {item.value}
              </h3>
              <p className="mt-2 text-white font-medium">
                {item.label}
              </p>
              <p className="mt-1 text-slate-500 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
