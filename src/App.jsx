import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-darkbg text-slate-200 font-sans">
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Philosophy />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
