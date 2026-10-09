import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, FileDown, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
        : 'bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors shadow-xs">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-base text-slate-900 tracking-tight flex items-center gap-2">
                <span>{personalInfo.name}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot-pulse"></span>
              </div>
              <p className="text-xs text-slate-500 font-mono">AI & Vision Engineer</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1 text-xs font-semibold text-slate-600 hover:text-blue-600 rounded-full hover:bg-white transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Download Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.resumePdf}
              download="Harsh_Kumar_AI_Engineer_Resume.pdf"
              className="btn-ghost flex items-center gap-2 text-xs font-semibold px-3.5 py-2"
            >
              <FileDown className="w-4 h-4 text-blue-600" />
              <span>Resume PDF</span>
            </a>
            <a
              href="#contact"
              className="btn-primary text-xs px-4 py-2 font-semibold"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 animate-fade-in">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">
                <a
                  href={personalInfo.resumePdf}
                  download="Harsh_Kumar_AI_Engineer_Resume.pdf"
                  className="btn-secondary text-xs justify-center py-2.5"
                >
                  <FileDown className="w-4 h-4 text-blue-600" />
                  <span>Download Verified Resume</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary text-xs justify-center py-2.5"
                >
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
