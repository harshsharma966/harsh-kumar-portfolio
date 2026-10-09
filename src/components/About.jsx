import React from 'react';
import { personalInfo, certificationsData, educationData } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, Shield, Zap, Target, Mail, Calendar } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: "End-to-End Ownership",
      desc: "Takes models from raw data collection & annotation, custom fine-tuning, all the way to containerized FastAPI microservices and production web dashboards."
    },
    {
      title: "Low-Latency Edge & RTSP Engineering",
      desc: "Specialized in sub-second inference architectures, video decoding queues, thread-safe consensus algorithms, and multi-factor suspicion gates."
    },
    {
      title: "Multimodal GenAI & VLM Systems",
      desc: "Hands-on experience orchestrating Qwen2.5-VL 32B/7B vision models with sequential 4-bit loading/unloading to maximize throughput within limited GPU VRAM."
    },
    {
      title: "Enterprise Rigor & Parity",
      desc: "Proven track record achieving high-accuracy ANPR (96.1% mAP@50), eliminating memory leaks on continuous 24/7 CCTV feeds, and building audit-grade evidence packages."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Engineering Real-Time AI for the Physical World
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            I specialize in bridging the gap between cutting-edge AI research (vision transformers, large multimodal models, speech synthesizers) and production deployments that must run 24/7 without fail.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Core Competencies & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <Target className="w-5 h-5 text-blue-600" />
                <span>Engineering Focus & Approach</span>
              </h3>
              
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Currently working as an <span className="text-blue-600 font-semibold">AI Engineer at SysTools Software</span>, I have designed and deployed high-stakes systems including a <strong className="text-slate-900 font-semibold">~26 FPS fight and crowd detection surveillance pipeline (Prahaar AI)</strong>, an <strong className="text-slate-900 font-semibold">ANPR system trained on 14K+ Indian license plates (VISTRA AI)</strong>, an <strong className="text-slate-900 font-semibold">enterprise video management platform (Drisyam VMS)</strong>, and a <strong className="text-slate-900 font-semibold">production voice-cloning SaaS (VoiceForge)</strong> serving active web traffic.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((h, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-blue-400 transition-all shadow-2xs">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-slate-900 mb-1">{h.title}</div>
                        <div className="text-xs text-slate-600 leading-normal">{h.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Recognitions */}
            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                <Award className="w-5 h-5 text-purple-600" />
                <span>Certifications & Honors</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {certificationsData.map((c, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
                    <div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                        {c.badge}
                      </span>
                      <div className="text-xs font-bold text-slate-800 mt-2 leading-snug">{c.title}</div>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2 font-mono">{c.issuer} ({c.year})</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education & Quick Facts (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Card */}
            <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>Education</span>
              </h3>

              <div className="space-y-6">
                {educationData.map((edu, i) => (
                  <div key={i} className="relative pl-6 pb-2 border-l-2 border-slate-200 last:border-none">
                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white"></span>
                    <div className="text-xs font-mono text-blue-600 font-semibold">{edu.period}</div>
                    <div className="text-base font-bold text-slate-900 mt-0.5">{edu.degree}</div>
                    <div className="text-xs text-slate-600">{edu.institution}</div>
                    <div className="text-xs text-slate-500 mt-2 leading-relaxed">{edu.details}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruitment & Deployment Box */}
            <div className="rounded-2xl p-6 bg-blue-50/80 border border-blue-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase text-blue-800 tracking-wider font-bold">
                  Recruitment & Hiring
                </div>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Available for Roles
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Available for full-time Senior AI Engineer, Computer Vision Engineer, or Machine Learning roles where high performance, sub-second latency, and production reliability matter.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2 shadow-xs"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Open in Gmail</span>
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="btn-secondary text-xs py-2.5 px-3.5 flex items-center gap-1.5 shadow-2xs"
                >
                  <span>Default Mail App</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
