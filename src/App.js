import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#050A14" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
