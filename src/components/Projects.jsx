export default function Projects() {
  const projects = [
    {
      title: "LifeFlow",
      description:
        "Real-time blood donation platform with geospatial donor matching, role-based authentication, and asynchronous SMS alert pipeline.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Twilio API", "JWT"],
      impact: "50% improvement in emergency donor search performance via 2dsphere indexing",
      achievements: [
        "Designed geospatial donor-matching system using MongoDB 2dsphere indexing",
        "Developed role-based RESTful APIs with JWT authentication and middleware validation",
        "Implemented async SMS alert pipeline with retry logic and failure handling",
        "Built real-time monitoring dashboards tracking request volume and donor engagement"
      ],
      github: "https://github.com/Sahil-kumar2/Lifeflow",
      live: "https://lifeflow-seven.vercel.app"
    },
    {
      title: "FarmFresh",
      description:
        "Full-stack agri-commerce platform with AI-assisted crop advisory, buyer-seller workflows, and analytics dashboards.",
      tech: ["MERN Stack", "Redux", "Cloudinary", "Gemini API", "Recharts"],
      impact: "30% reduction in session-related user issues via persistent authentication",
      achievements: [
        "Developed full-stack platform supporting buyer-seller workflows with protected routes",
        "Implemented persistent authentication and Redux state architecture",
        "Built AI-assisted crop advisory module using structured prompt pipelines",
        "Created analytics dashboards visualizing order trends and sales insights"
      ],
      github: "https://github.com/Sahil-kumar2/FarmFresh",
      live: "https://farmfresh-omega.vercel.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          Featured <span className="text-secondary">Work</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-background border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="View Code">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors" title="Live Demo">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-primary font-medium text-sm flex items-start gap-2">
                    <span className="text-lg leading-none">⚡</span>
                    {project.impact}
                  </p>
                </div>

                <ul className="space-y-1 text-sm text-slate-400">
                  {project.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-accent mr-2 mt-0.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, k) => (
                    <span key={k} className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
