import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-white" />
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-1.5 bg-neutral-900 h-16 mt-1" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Sahil Kumar
                  </h1>
                  <p className="mt-2 text-lg text-neutral-700">
                    Software Engineer · SDE & Full-Stack Experience
                  </p>
                </div>
              </div>

              <p className="max-w-xl text-neutral-600 leading-relaxed">
                I’m particularly interested in backend systems, APIs, and solving problems that scale.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-7 py-3 rounded-md bg-neutral-900 text-neutral-50 text-sm font-medium hover:-translate-y-1 transition"
                >
                  Explore Projects
                </a>
                <a
                  href="/Sahil_Resume (2).pdf"
                  className="px-7 py-3 rounded-md border border-neutral-300 text-sm font-medium hover:bg-neutral-100 hover:-translate-y-1 transition"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/Sahil-kumar2"
                  className="px-7 py-3 rounded-md border border-neutral-300 text-sm font-medium hover:bg-neutral-100 hover:-translate-y-1 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right – Metrics */}
            <div className="grid grid-cols-2 gap-6">
              {[
                ["300+", "DSA Problems Solved"],
                ["3★", "CodeChef Rating"],
                ["MERN", "Production Projects"],
                ["IIIT", "Una · B.Tech"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="p-6 rounded-xl bg-white border border-neutral-200"
                >
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-neutral-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pt-14 pb-24">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-14 space-y-14">
          <Project
            title="LifeFlow — Real-Time Blood Donation Platform"
            description="A real-time system that identifies and notifies nearby eligible blood donors during medical emergencies using geospatial queries and automated messaging."
            architecture={[
              "React frontend for user interaction and dashboards",
              "Node.js & Express backend handling APIs and business logic",
              "MongoDB with geospatial indexes for donor discovery",
              "Twilio service for automated SMS notifications",
            ]}
            decisions={[
              "Used geospatial indexing for efficient radius-based queries",
              "Implemented JWT authentication for stateless scalability",
              "Separated notification logic into a service layer",
            ]}
            github="https://github.com/Sahil-kumar2/Lifeflow"
            live="https://lifeflow-seven.vercel.app"
          />

          <Project
            title="FarmFresh — AgriCommerce Platform"
            description="Agri-commerce platform enabling farmers to sell crops directly to consumers with AI-assisted insights and analytics dashboards."
            architecture={[
              "React role-based buyer and seller dashboards",
              "Node.js & Express backend managing orders and inventory",
              "MongoDB for users, products, and transactions",
              "External AI and media services",
            ]}
            decisions={[
              "Separated buyer and seller flows for clearer feature ownership",
              "Used Redux for predictable global state management",
              "Integrated AI as an isolated service layer",
            ]}
            github="https://github.com/Sahil-kumar2/FarmFresh"
            live="https://farmfresh-omega.vercel.app"
          />
        </div>
      </section>

      {/* PROBLEM SOLVING */}
<section className="max-w-6xl mx-auto px-6 pt-8 pb-24">
  <div className="p-8 rounded-2xl bg-white border border-neutral-200">
    <h2 className="text-2xl font-semibold">Problem Solving</h2>

    <p className="mt-4 max-w-3xl text-neutral-700">
      I actively practice data structures and algorithms and participate in
      competitive programming to strengthen my problem-solving skills for
      software engineering roles.
    </p>

    <ul className="mt-6 list-disc ml-6 text-neutral-700 space-y-1">
      <li>Solved 300+ DSA problems across platforms</li>
      <li>CodeChef: 3★ rated</li>
      <li>LeetCode: Weekly contest participant</li>
    </ul>

    <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium">
      <a
        href="https://www.codechef.com/users/epic_road_43"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        CodeChef Profile
      </a>

      <a
        href="https://leetcode.com/u/Sahilkumar83"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        LeetCode Profile
      </a>

      <a
        href="https://www.geeksforgeeks.org/profile/sahilkumazpz5"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        GeeksforGeeks Profile
      </a>
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-14 text-sm text-neutral-600">
        <p>📧 sahilkumar832832@gmail.com</p>
        <p className="mt-2">
          <a href="https://github.com/Sahil-kumar2" className="hover:underline">GitHub</a> ·{" "}
          <a href="https://www.linkedin.com/in/sahil-kumar-873910293" className="hover:underline">LinkedIn</a>
        </p>

      </footer>
    </div>
  );
}

function Project({ title, description, architecture, decisions, github, live }) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-neutral-200">
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-3 max-w-3xl text-neutral-700">{description}</p>

      <h4 className="mt-6 font-medium">Architecture</h4>
      <ul className="mt-3 list-disc ml-6 text-neutral-700 space-y-1">
        {architecture.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="mt-6 font-medium">Design Decisions</h4>
      <ul className="mt-3 list-disc ml-6 text-neutral-700 space-y-1">
        {decisions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-6 flex gap-6 text-sm font-medium">
        <a href={github} target="_blank" rel="noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href={live} target="_blank" rel="noreferrer" className="hover:underline">
          Live Demo
        </a>
      </div>
    </div>
  );
}
