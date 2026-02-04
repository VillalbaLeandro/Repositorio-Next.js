'use client';
import { useState, useEffect } from 'react';
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
import DialogBubble from "./components/DialogBubble";
import Loader from "./components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between pt-16 animate-fade-in">
          <AboutMe />
          <IslandMenu />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
