import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, Layers, ArrowRight, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Computer Vision", "Full-Stack & Systems", "Multimodal & Vision", "Speech & GenAI"];

  const filteredProjects = filterCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Verified Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            All systems have been inspected directly from active production codebases and live endpoints. No simulated or fabricated achievements.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image Area */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                {project.heroImage ? (
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <Layers className="w-12 h-12" />
                  </div>
                )}

                {/* Status Badges Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200/90 shadow-xs font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/95 text-emerald-700 border border-emerald-200 shadow-xs flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-dot-pulse"></span>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Primary Metric Highlights */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                      <div className="text-[10px] text-slate-500 font-mono truncate">{m.label}</div>
                      <div className="text-xs font-bold text-blue-600 font-mono mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tech-pill text-[10px] py-0.5 px-2">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tech-pill text-[10px] py-0.5 px-2 text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    Deep Dive Architecture <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  {project.liveUrl && (
                    <span 
                      className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-3 h-3" /> Live Demo
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
