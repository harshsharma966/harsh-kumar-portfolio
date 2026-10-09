import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export default function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider font-semibold">
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Curriculum Vitae & Technical Resume
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Download the official resume verified with production milestones, engineering metrics, and academic credentials.
          </p>
        </div>

        {/* Central Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left side: Resume summary */}
            <div className="space-y-4 max-w-xl text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Latest Verified Version (Oct 2026)
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Harsh Kumar — AI Engineer Resume
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Highlights hands-on experience building RT-DETR + VideoMAE violence detection at ~26 FPS (Prahaar AI), 14K+ image ANPR (VISTRA AI), Drisyam VMS, multimodal Qwen2.5-VL video pipelines, and XTTS v2 voice cloning.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>AWS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SIH Winner 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>B.Tech AI & ML</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Live Production Apps</span>
                </div>
              </div>
            </div>

            {/* Right side: Action buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={personalInfo.resumePdf}
                download="Harsh_Kumar_AI_Engineer_Resume.pdf"
                className="btn-primary text-sm py-3.5 px-6 flex items-center justify-center gap-2 w-full"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => setShowPreview(!showPreview)}
                className="btn-secondary text-sm py-3.5 px-6 flex items-center justify-center gap-2 w-full cursor-pointer"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                <span>{showPreview ? "Hide Preview" : "Preview In-Browser"}</span>
              </button>

              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs py-2 px-4 justify-center"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Embedded PDF Preview Toggle */}
          {showPreview && (
            <div className="mt-8 pt-8 border-t border-slate-200 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono text-slate-500">Embedded Document Preview</div>
                <span className="text-xs text-slate-500">PDF Reader</span>
              </div>
              <div className="w-full h-[650px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  src={personalInfo.resumePdf}
                  title="Harsh Kumar Resume"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
