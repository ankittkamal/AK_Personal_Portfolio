import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SectionDivider from "./components/SectionDivider";
import Skills from "./components/Skills";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main className="flex items-center justify-center  flex-col px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
