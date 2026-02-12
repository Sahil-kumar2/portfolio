export default function Experience() {
  const experiences = [
    {
      company: "Rawyal",
      role: "Software Development Intern",
      period: "Jan 2026 - Present",
      description: "Architecting backend infrastructure for multi-format document processing and API management.",
      achievements: [
        "Engineered a multi-format document processing pipeline supporting Office, PDF, HTML, and image transformations, reducing external API dependency by 35%.",
        "Built asynchronous job-processing workflows in Node.js to manage parallel document conversions, decreasing request blocking time by 40% during peak workloads.",
        "Developed Python modules for structured PDF-to-DOCX and Excel extraction, reducing manual correction effort by 30%.",
        "Implemented secure file upload and format validation, reducing invalid file processing failures by 25%.",
        "Designed retry handling and failure isolation logic for conversion tasks, preventing system-wide crashes under malformed inputs."
      ],
      tech: ["Node.js", "Express.js", "Python", "Multer", "ImageMagick", "LibreOffice"]
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

            <p className="text-slate-400 mb-6 max-w-2xl leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-2 mb-6 text-slate-400">
              {exp.achievements.map((item, j) => (
                <li key={j} className="flex items-start">
                  <span className="text-emerald-400 mr-2 mt-1.5 text-xs">▹</span>
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
