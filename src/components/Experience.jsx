export default function Experience() {
  const experiences = [
    {
      company: "ModelSuite.ai",
      role: "Software Developer Intern",
      period: "Sep 2025 - Dec 2025",
      description:
        "Developed MERN-stack features, reusable React components, and frontend performance improvements for the platform.",
      achievements: [
        "Developed scalable MERN-stack features and modular platform architecture.",
        "Built reusable React components and state management workflows using Zustand.",
        "Improved application performance by reducing load times by 40% through frontend optimization and efficient API integration."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Zustand"]
    },
    {
      company: "Rawyal",
      role: "Software Development Intern",
      period: "Jan 2026 - Apr 2026",
      description:
        "Built scalable document processing and RAG pipelines combining async job processing, vector search, and transformation services.",
      achievements: [
        "Built a scalable asynchronous document processing pipeline supporting PDF, Office, HTML, and image transformations, reducing processing latency by 35%.",
        "Developed a distributed BullMQ-based job system with retries, concurrency control, and failure isolation, improving throughput by 40% under parallel workloads.",
        "Engineered a RAG-based retrieval system using vector embeddings and Pinecone, enabling context-aware search across large document datasets."
      ],
      tech: ["Node.js", "Express.js", "Python", "Redis", "BullMQ", "Pinecone", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
        Experience <span className="h-px bg-slate-700 flex-grow max-w-[200px]"></span>
      </h2>

      <div className="space-y-12 relative border-l border-slate-800 ml-3 md:ml-6 pl-8 md:pl-12 pb-4">
        {experiences.map((exp, i) => (
          <div key={i} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[43px] md:-left-[59px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-primary group-hover:bg-primary transition-colors"></div>

            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {exp.company}
              </h3>
              <span className="font-mono text-slate-400 text-sm border border-slate-800 px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </div>

            <div className="text-xl text-secondary mb-4 font-medium">{exp.role}</div>

            <p className="text-slate-400 mb-6 max-w-2xl leading-relaxed">{exp.description}</p>

            <ul className="space-y-2 mb-6 text-slate-400">
              {exp.achievements.map((item, j) => (
                <li key={j} className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1.5 text-xs">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, k) => (
                <span key={k} className="text-xs font-mono text-slate-300 bg-slate-800 px-3 py-1 rounded border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
