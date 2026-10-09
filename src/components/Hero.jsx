import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ShieldCheck, Video, Activity, Sparkles, FileDown, ArrowRight, Mail, Cpu, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80">
      
      {/* Soft ambient lighting */}
      <div className="absolute top-12 left-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Text & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot-pulse"></span>
              <span className="tracking-wide">{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Hi, I'm <span className="text-blue-600">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700">
                AI & Computer Vision Engineer
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Specializing in production-grade Computer Vision, Multimodal VLMs, and Real-Time Systems. Architected live violence & crowd detection on CCTV RTSP feeds (<strong className="text-slate-800 font-semibold">~26 FPS</strong>), 14K+ dataset ANPR pipelines (<strong className="text-slate-800 font-semibold">96.1% mAP@50</strong>), enterprise Video Management Systems (<strong className="text-slate-800 font-semibold">Drisyam VMS</strong>), and low-latency GenAI services with 2-tier caching.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "RT-DETR & VideoMAE", 
                "YOLOv11 & PaddleOCR", 
                "Qwen2.5-VL (32B/7B)", 
                "Coqui XTTS v2", 
                "FastAPI & Redis", 
                "Drisyam VMS",
                "AWS Certified"
              ].map((tech) => (
                <span 
                  key={tech} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono bg-white text-slate-700 border border-slate-200 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a href="#projects" className="btn-primary">
                <span>Explore 6 AI Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePdf}
                download="Harsh_Kumar_AI_Engineer_Resume.pdf"
                className="btn-secondary"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="btn-ghost"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Direct</span>
              </a>
            </div>

            {/* Verified Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
              {personalInfo.stats.map((st, i) => (
                <div key={i} className="metric-card">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600">
                    {st.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                    {st.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Round Circular Photo & Well-Written Profile (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative group text-center flex flex-col items-center">
              
              {/* Outer soft halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-500 -z-10"></div>
              
              {/* Circular Photo Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-slate-200 bg-white">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Status Pill Positioned Below the Round Avatar */}
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800">AI Engineer @ SysTools Software</span>
              </div>

              {/* Clean Sub-Text Information Below Photo */}
              <div className="mt-3 max-w-xs space-y-1">
                <p className="text-xs font-medium text-slate-600">
                  Real-Time Computer Vision & Multimodal VLMs
                </p>
                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                  <span>Prahaar AI</span>
                  <span>•</span>
                  <span>VISTRA AI</span>
                  <span>•</span>
                  <span>Drisyam VMS</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
