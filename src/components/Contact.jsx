import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Clock } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  // Direct clean Gmail compose URL without any pre-filled body/subject so recruiter writes freely
  // const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Get in Touch with Harsh
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Directly connect for AI/ML & Computer Vision engineering roles, technical architecture reviews, or project discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">

          {/* Left Column: Direct contact info cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">

            {/* Email card with copy */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">Direct Email</div>
                    <div className="text-sm font-bold text-slate-900 break-all">{personalInfo.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all cursor-pointer shadow-2xs"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone card with copy */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">Phone / WhatsApp</div>
                    <div className="text-sm font-bold text-slate-900">{personalInfo.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all cursor-pointer shadow-2xs"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500">Location & Availability</div>
                    <div className="text-sm font-bold text-slate-900">{personalInfo.location} (Open to Relocation & Remote)</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Available immediately for Senior AI/ML & Computer Vision engineering roles.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Typically responds within 2–4 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Gmail & Mail Action (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6 h-full flex flex-col justify-between">

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Direct Recruiter Mail
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Send an Email to Harsh
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Feel free to reach out directly for engineering opportunities, technical discussions, or collaborations.
                </p>
              </div>

              {/* Main Primary Button: Open Gmail */}
              <div className="space-y-3.5">
                <a
                  // href={gmailDirectUrl}
                  href={`mailto:${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-4.5 text-base sm:text-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.491l8.073-5.998C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                  <span className="font-bold">Open in Gmail</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                {/* Secondary: Open in default desktop app */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-secondary w-full py-3 text-sm flex items-center justify-center gap-2 shadow-2xs"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Open via Default Email App (Outlook / Apple Mail)</span>
                </a>
              </div>

              {/* Bottom: Copy Email Address */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span>Email: <strong className="text-slate-800 font-mono">{personalInfo.email}</strong></span>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs hover:bg-slate-50 transition-colors"
                >
                  {copiedEmail ? (
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy Email
                    </span>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
