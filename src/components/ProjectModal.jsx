import React, { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, Activity, CheckCircle2, Cpu, Database, Server, GitBranch, ArrowRight, ShieldCheck, Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeout = useRef(null);

  // Reset video state when selected project changes
  useEffect(() => {
    setIsPlaying(false);
    setVideoProgress(0);
    setCurrentTime(0);
    setVideoDuration(0);
    setVideoError(false);
    setShowControls(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [project?.id, project?.demoVideo]);

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setVideoProgress(progress);
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    if (isPlaying) {
      controlsTimeout.current = setTimeout(() => setShowControls(false), 3000);
    }
  };

  const hasDemoVideo = Boolean(project.demoVideo && !videoError);

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
            {hasDemoVideo && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-50 text-violet-700 border border-violet-200 flex items-center gap-1.5">
                <Film className="w-3 h-3" />
                Video Demo
              </span>
            )}
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

        {/* ===== VIDEO PLAYER SECTION ===== */}
        {hasDemoVideo && (
          <div className="my-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                  <Film className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Project Demo Video
                </h3>
              </div>
            </div>
            
            <div 
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-black group/video cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              <video
                ref={videoRef}
                src={project.demoVideo}
                className="w-full max-h-[480px] object-contain mx-auto"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onError={() => setVideoError(true)}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                playsInline
                preload="metadata"
              />

              {/* Big center play button (shown when paused) */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200 group/play">
                    <Play className="w-8 h-8 text-slate-900 ml-1" />
                  </div>
                </div>
              )}

              {/* Bottom controls bar */}
              <div 
                className={`absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }}
              >
                {/* Progress bar */}
                <div 
                  className="h-1.5 mx-4 mt-4 bg-white/20 rounded-full cursor-pointer group/progress hover:h-2.5 transition-all"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-violet-400 to-blue-500 rounded-full relative transition-all"
                    style={{ width: `${videoProgress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Control buttons */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                      className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 text-white" />
                      ) : (
                        <Play className="w-4 h-4 text-white ml-0.5" />
                      )}
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                      className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                    <span className="text-white/80 text-xs font-mono">
                      {formatTime(currentTime)} / {formatTime(videoDuration)}
                    </span>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleFullscreen(); }}
                    className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Maximize className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* ===== END VIDEO PLAYER ===== */}

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
