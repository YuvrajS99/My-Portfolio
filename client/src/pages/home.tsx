import Navigation from "../components/navigation";
import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Certifications from "../components/certifications";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
