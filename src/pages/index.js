import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certification";
export default function Home() {
  useEffect(() => {
    document.title = "Talha Mobeen | Full Stack Developer";
  }, []);

  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      {/* More sections: About, Skills, Experience, Education, Contact */}
    </main>
  );
}
