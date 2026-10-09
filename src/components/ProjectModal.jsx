import React, { useEffect } from 'react';
import { X, ExternalLink, Activity, CheckCircle2, Cpu, Database, Server, GitBranch, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all z-10 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {project.status}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {project.title}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Screenshot */}
        {project.heroImage && (
          <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative group">
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-auto max-h-96 object-contain object-center mx-auto"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-slate-700 border border-slate-200 shadow-xs font-semibold">
              Verified Project Screenshot
            </div>
          </div>
        )}

        {/* Verified Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {project.metrics.map((m, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-mono text-slate-500">{m.label}</div>
              <div className="text-xl font-bold font-mono text-blue-600 my-1">{m.value}</div>
              <div className="text-xs text-slate-600">{m.detail}</div>
            </div>
          ))}
        </div>

        {/* Problem & Architecture Breakdown */}
        <div className="space-y-6 my-6 text-sm text-slate-700">
          
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Problem Statement
            </h3>
            <p className="leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-purple-600" />
              Architecture & System Design
            </h3>
            <p className="leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Pipeline Step Breakdown */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              Pipeline Execution Sequence
            </h3>
            <div className="space-y-2.5">
              {project.pipelineSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Capabilities */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Verified Features & Codebase Evidence
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {project.verifiedFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span className="text-slate-700">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-slate-200 space-y-2">
          <div className="text-xs font-mono text-slate-500 font-semibold">TECHNOLOGIES & FRAMEWORKS:</div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="tech-pill text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons in Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-200">
          <div className="text-xs font-mono text-slate-500">
            {project.backendUrl ? `Backend: ${project.backendUrl}` : "Internal Enterprise Pipeline"}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4"
              >
                <span>Open Live Dashboard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-secondary text-xs py-2 px-4 cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
