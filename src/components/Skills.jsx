import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Eye, Cpu, Mic, Server, Layers, CheckCircle } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const iconMap = {
    "Eye": Eye,
    "Cpu": Cpu,
    "Mic": Mic,
    "Server": Server
  };

  const categories = ["All", ...skillsData.categories.map(c => c.name)];

  const filteredCategories = activeCategory === "All" 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.name === activeCategory);

  return (
    <section id="skills" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Verified Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Core AI Engineering Competencies
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every technology listed below is backed by real models trained, optimized, and deployed in production codebases across my portfolio.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Layers;
            return (
              <div 
                key={idx} 
                className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 space-y-6 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{cat.name}</h3>
                      <p className="text-xs text-slate-500 font-mono">{cat.skills.length} Core Disciplines</p>
                    </div>
                  </div>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-1 gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all shadow-2xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                          {skill.name}
                        </span>
                        <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                          skill.level === 'Expert' 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : skill.level === 'Advanced'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'bg-purple-50 text-purple-700 border border-purple-200'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 pl-5.5 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
