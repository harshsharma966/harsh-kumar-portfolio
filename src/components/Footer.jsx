import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800 text-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{personalInfo.name}</div>
              <div className="text-xs text-slate-400 font-mono">AI & Computer Vision Engineer</div>
            </div>
          </div>

          {/* Center: System notice */}
          <div className="text-center text-xs text-slate-400 font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Built with real codebases, verified metrics & production artifacts</span>
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer flex items-center gap-2 text-xs font-mono"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-[11px] text-slate-500 font-mono">
          © {new Date().getFullYear()} Harsh Kumar • Production AI & Computer Vision Engineering.
        </div>
      </div>
    </footer>
  );
}
