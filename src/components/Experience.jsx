import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Professional Experience & Track Record
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Practical deployment of high-throughput computer vision models, scalable inference pipelines, and production AI services.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-10">
          {experienceData.map((exp, idx) => (
            <div 
              key={idx}
              className="relative pl-8 sm:pl-10 pb-2 border-l-2 border-slate-300 last:border-none"
            >
              {/* Timeline Orb */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600 ring-4 ring-blue-100"></div>

              {/* Experience Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Role Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 mt-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3 pt-1">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
