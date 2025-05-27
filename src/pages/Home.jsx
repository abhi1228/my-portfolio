import React from "react";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}