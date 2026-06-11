"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BinaryRain from "@/components/BinaryRain";
import Cursor from "@/components/Cursor";
import CaseStudyModal from "@/components/CaseStudyModal";
import { useState } from "react";

export default function Home() {
  const [modalProject, setModalProject] = useState<object | null>(null);

  return (
    <main className="relative min-h-screen">
      <Cursor />
      <div className="bg-noise" />
      <div className="bg-gradient-spot gs-1" />
      <div className="bg-gradient-spot gs-2" />
      <div className="bg-gradient-spot gs-3" />
      <BinaryRain />
      <div className="bg-hex fixed inset-0 z-[2] pointer-events-none" />
      <div className="relative z-10">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(176,38,255,0.15), transparent)" }} />
        <Navbar />
        <Hero />
        <div className="section-divider my-4" />
        <About />
        <div className="section-divider my-4" />
        <Projects onOpenModal={setModalProject} />
        <div className="section-divider my-4" />
        <Contact />
        <div className="section-divider my-4" />
        <Footer />
      </div>
      {modalProject && <CaseStudyModal project={modalProject} onClose={() => setModalProject(null)} />}
    </main>
  );
}
