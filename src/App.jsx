import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
