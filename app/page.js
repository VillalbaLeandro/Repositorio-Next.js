import Image from "next/image";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import IslandMenu from "./components/IslandMenu";
import Carrusel from "./components/Carrusel";
import Cards from "./components/Cards";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <AboutMe />
      <IslandMenu />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
