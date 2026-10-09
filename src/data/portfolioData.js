export const personalInfo = {
  name: "Harsh Kumar",
  title: "AI & Computer Vision Engineer — Real-Time Systems, Multimodal VLMs & GenAI",
  location: "India",
  email: "harshji9756@gmail.com",
  phone: "+91 9720396468",
  linkedin: "https://linkedin.com/in/",
  github: "https://github.com/",
  profileImage: "/assets/harsh_profile.jpg",
  resumePdf: "/assets/Harsh_Kumar_Resume.pdf",
  bio: "AI Engineer specializing in production-grade Computer Vision, Multimodal VLMs, and Real-Time Systems. Architected live violence & crowd detection on CCTV RTSP feeds (~26 FPS), 14K+ dataset ANPR pipelines (96.1% mAP@50), enterprise Video Management Systems (Drisyam VMS), and low-latency GenAI services with 2-tier caching. Experienced in end-to-end delivery: dataset curation, model fine-tuning, and scalable FastAPI deployments.",
  status: "Available for Senior AI / Computer Vision & ML Engineering Roles",
  stats: [
    { label: "Live RTSP Feeds FPS", value: "~26 FPS", sub: "RT-DETR + VideoMAE" },
    { label: "Plate Detection mAP@50", value: "96.1%", sub: "14,142 Images Dataset" },
    { label: "End-to-End Walkthrough Gen", value: "90-110s", sub: "32B + 7B VLM Pipeline" },
    { label: "TTS Cache Latency Drop", value: "~60s → ~2s", sub: "2-Tier Redis + GridFS" }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Computer Vision",
      icon: "Eye",
      skills: [
        { name: "RT-DETR & YOLOv11", level: "Expert", desc: "Ultralytics, Real-time object & person localization" },
        { name: "VideoMAE Transformer", level: "Advanced", desc: "3-class temporal action recognition & classification" },
        { name: "PaddleOCR (PP-OCRv4)", level: "Advanced", desc: "High-speed multi-threaded text & plate recognition" },
        { name: "OmniParser & Florence-2", level: "Advanced", desc: "Microsoft UI element detection & screen comprehension" },
        { name: "ByteTrack & Supervision", level: "Expert", desc: "Multi-object temporal tracking on CCTV video" },
        { name: "OpenCV & Optical Flow", level: "Expert", desc: "Farneback flow, Lucas-Kanade stabilization, CLAHE" }
      ]
    },
    {
      name: "LLMs, VLMs & GenAI",
      icon: "Cpu",
      skills: [
        { name: "Qwen2.5-VL (32B & 7B)", level: "Advanced", desc: "Two-pass UI walkthrough script & video orchestration" },
        { name: "HuggingFace Transformers", level: "Advanced", desc: "Model fine-tuning, 4-bit quantization, sequential caching" },
        { name: "RAG & Vector Databases", level: "Advanced", desc: "Retrieval-augmented generation, embeddings, semantic search" },
        { name: "LangChain & OpenAI API", level: "Proficient", desc: "Chains, agents, context-aware query routing" },
        { name: "Whisper Speech-to-Text", level: "Advanced", desc: "Audio alignment, transcription, dynamic subtitles" }
      ]
    },
    {
      name: "Speech, Audio & NLP",
      icon: "Mic",
      skills: [
        { name: "Coqui XTTS v2", level: "Expert", desc: "Zero-shot voice cloning, bilingual (EN + HI) synthesis" },
        { name: "spaCy NLP Preprocessing", level: "Expert", desc: "POS-based homograph disambiguation, token rules" },
        { name: "Hindi Normalization", level: "Expert", desc: "Devanagari numerals, punctuation, danda pause mapping" },
        { name: "Edge TTS & Pydub", level: "Proficient", desc: "Multi-voice batch generation, audio segment stitching" }
      ]
    },
    {
      name: "Backend, Deployment & Infra",
      icon: "Server",
      skills: [
        { name: "FastAPI & Python 3.10", level: "Expert", desc: "Async I/O, streaming MJPEG/audio, worker queues" },
        { name: "Redis & MongoDB GridFS", level: "Expert", desc: "2-tier audio caching, session caching, pub/sub queues" },
        { name: "Docker & Containerization", level: "Advanced", desc: "Multi-stage builds, GPU container orchestration" },
        { name: "MediaMTX & RTSP/HLS", level: "Advanced", desc: "Surveillance stream simulation, TCP video transport" },
        { name: "AWS (EC2, S3)", level: "Proficient", desc: "AWS Certified, cloud storage, scalable compute" },
        { name: "PostgreSQL & SQLite", level: "Advanced", desc: "Relational persistence, audit logs, vehicle records" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "fight-detection",
    title: "Prahaar AI — Real-Time Fight & Crowd Detection",
    subtitle: "Real-Time Surveillance Pipeline with Heuristic Suspicion Gating (~26 FPS RTSP)",
    category: "Computer Vision",
    status: "Production Ready",
    badgeColor: "rose",
    heroImage: "/assets/prahaar_real_dashboard.png",
    secondaryImage: "/assets/prahaar_real_dashboard.png",
    liveUrl: null,
    backendUrl: "http://localhost:9500",
    localUrl: "http://localhost:9500",
    summary: "Production-grade surveillance intelligence pipeline processing live RTSP CCTV feeds at ~26 FPS. Combines RT-DETR tracking with a fine-tuned VideoMAE transformer gated by a custom optical flow suspicion score to eliminate false positives.",
    metrics: [
      { label: "Inference Speed", value: "~26 FPS", detail: "Sustained on live RTSP surveillance streams" },
      { label: "Model Architecture", value: "RT-DETR + VideoMAE", detail: "Hybrid spatial detector + temporal action classifier" },
      { label: "Action Classes", value: "3 Categories", detail: "FIGHT, NORMAL, CROWD with dynamic confidence" }
    ],
    tags: ["RT-DETR", "VideoMAE", "OpenCV", "Farneback Flow", "ByteTrack", "FastAPI", "MediaMTX", "PyTorch"],
    problemStatement: "Continuous 3D transformer action recognition across high-resolution 24/7 CCTV cameras is computationally prohibitive and prone to false positives on crowded gatherings, handshakes, or rapid walking.",
    architecture: "Two-stage hybrid surveillance pipeline: RT-DETR detects and tracks subjects in real time. A multi-factor Heuristic Suspicion Gate monitors bounding box proximity, Lucas-Kanade stabilized optical flow motion, and IoU overlap. Only when suspicion crosses threshold is the heavy 16-frame VideoMAE 3-class classifier invoked.",
    pipelineSteps: [
      "RTSP Ingestion via MediaMTX & TCP background grabber thread",
      "RT-DETR Person Localization & ByteTrack multi-object tracking",
      "Lucas-Kanade PTZ Camera Motion Stabilization",
      "Heuristic Suspicion Gate: Proximity interaction time + Farneback optical chaos score",
      "Disjoint Set Union (DSU) clustering: isolates concurrent individual fights in dense crowds",
      "16-frame sliding buffer fed to fine-tuned VideoMAE 3-class Transformer",
      "Automated Alert Dispatch, MJPEG real-time video streaming, and forensic CSV logging"
    ],
    verifiedFeatures: [
      "Real CCTV and mobile live streams verified with 100% fight detection confidence overlay",
      "Zero false positives on idle or strolling crowds due to intelligent suspicion gating",
      "Auto-adapting profiling switching between CCTV (distant) and Mobile (close-up) cameras",
      "Real-time MJPEG stream broadcast and incident history logging with snapshot export",
      "Integrated MediaMTX RTSP simulator loop for real-world stress testing"
    ]
  },
  {
    id: "anpr-system",
    title: "VISTRA AI — Automatic Number Plate Recognition",
    subtitle: "Multithreaded High-Speed ANPR Pipeline with 36 Indian State Rules",
    category: "Computer Vision",
    status: "Production Ready",
    badgeColor: "blue",
    heroImage: "/assets/vistra_real_dashboard.png",
    secondaryImage: "/assets/vistra_real_dashboard.png",
    liveUrl: null,
    backendUrl: "http://localhost:8000",
    localUrl: "http://localhost:8000",
    summary: "Enterprise-grade ANPR system achieving 96.1% mAP@50 on 14,142 vehicle plates. Multi-threaded architecture with 3 parallel PaddleOCR workers, Needleman-Wunsch consensus voting, and 100% data-driven Indian plate validation.",
    metrics: [
      { label: "Plate Localization", value: "96.1% mAP@50", detail: "93.3% recall on 14,142 labeled test set" },
      { label: "Live System Detections", value: "8,304+ Plates", detail: "Active inference queue with officer review workflow" },
      { label: "CPU OCR Latency", value: "16–36ms", detail: "71% exact match across 9,425 crops" }
    ],
    tags: ["YOLOv11 Large", "PaddleOCR PP-OCRv4", "Needleman-Wunsch", "ByteTrack", "Redis", "SQLite", "Docker"],
    problemStatement: "Indian license plates exhibit immense format variability (standard, high-security HSRP, vintage, commercial, EV, two-wheeler split plates), dirty surfaces, and extreme lighting variations that cause traditional OCR pipelines to fail.",
    architecture: "Queue-based multithreaded architecture. Dedicated I/O frame grabber feeds sequential YOLOv11 vehicle detection and ByteTrack tracking. Extracted plate crops are distributed across 3 parallel PaddleOCR workers on CPU. A consensus voting thread aligns character sequences via Needleman-Wunsch algorithm before validation against official state format regexes.",
    pipelineSteps: [
      "Decoupled frame reader thread ingesting RTSP/HLS feeds with auto-reconnection",
      "YOLOv11 Large vehicle detection + custom YOLO best.pt plate localization",
      "Optical preprocessing: Lanczos4 upscaling, MinAreaRect deskew, CLAHE contrast & IR inversion",
      "3x Parallel PaddleOCR PP-OCRv4 worker threads executing independent inference",
      "Needleman-Wunsch sequence alignment & character consensus quorum (>=3 frames, >=70% agreement)",
      "Data-driven validation against 36 Indian States/UTs, BH-series, and special vehicle regexes",
      "Spatial centroid distance disambiguation to prevent falsely merging fleet vehicles",
      "5-Artifact Evidence Package: Plate crop, Vehicle crop, 1080p frame, JSON metadata, 2s MP4 clip"
    ],
    verifiedFeatures: [
      "Live production interface with real-time stream ingest, officer review queue, and ground truths",
      "Full Trinetra parity: resolved memory leaks on 24/7 CCTV feeds via stale track eviction",
      "Zero evidence loss with tamper-proof 5-artifact archival package per violation",
      "Active-learning review dashboard feeding user-corrected plate reads directly back into dataset",
      "Containerized with production Dockerfile and Docker Compose deployment configs"
    ]
  },
  {
    id: "drisyam-vms",
    title: "Drisyam VMS — Enterprise Video Management Platform",
    subtitle: "Full-Stack Smart CCTV Surveillance Platform with Multi-Site RTSP & Timelapses",
    category: "Full-Stack & Systems",
    status: "Production Ready",
    badgeColor: "indigo",
    heroImage: "/assets/drisyam_vms.png",
    secondaryImage: "/assets/drisyam_vms.png",
    liveUrl: null,
    backendUrl: "http://localhost:5000",
    localUrl: "http://localhost:5174/home",
    summary: "Full-stack enterprise cloud VMS tailored for construction sites and commercial facilities. Features 15+ interactive modules including multi-camera live grids, interactive map pins, automated timelapse compiler, and AWS S3 video archival.",
    metrics: [
      { label: "Interactive Modules", value: "15+ Screens", detail: "LiveView, Timeline, Timelapse, Map, Camera Groups" },
      { label: "Storage Archival", value: "AWS S3 Tiered", detail: "Cloud storage for long-term construction timelapses" },
      { label: "Architecture", value: "React 19 + Node.js", detail: "Express backend with H.264 RTSP video streams" }
    ],
    tags: ["React 19", "Vite", "Node.js", "Express", "Tailwind CSS", "AWS S3", "Leaflet Maps", "RTSP"],
    problemStatement: "Large-scale construction sites and industrial complexes require centralized remote surveillance across dozens of geographically separated cameras, timeline playback, automated scheduled timelapses for stakeholders, and granular camera grouping.",
    architecture: "Enterprise React/Vite dashboard backed by Express API and MariaDB/Sequelize relational schema. Ingests RTSP streams across multiple camera groups, manages live H.264 playback, renders automated timelapses via FFmpeg, and synchronizes video recordings to AWS S3.",
    pipelineSteps: [
      "Multi-camera RTSP ingestion and continuous health status pinging",
      "Interactive multi-pane LiveView grid with full-screen and PTZ controls",
      "Interactive site map with Leaflet geolocation pins of active camera towers",
      "Automated hourly timelapse snapshot collector and FFmpeg video compiler",
      "Role-based camera grouping (e.g. Office 12, Office 13, Gate 1, Tower B)",
      "AWS S3 recording lifecycle rules for storage cost optimization"
    ],
    verifiedFeatures: [
      "Complete live dashboard with 15+ production screens running locally on port 5174",
      "Interactive site map with geolocation pins of active cameras and status indicators",
      "Timeline scrubbing and incident playback with high-speed video seeking",
      "Automated timelapse generator with custom date/time ranges for site progress reports",
      "Enterprise camera grouping with role-based permissions"
    ]
  },
  {
    id: "scene-wise-narration",
    title: "Scene-Wise AI Video Narration Studio",
    subtitle: "Dual-Model Video Narration Pipeline with Chapter-Level Script Editing",
    category: "Multimodal & Vision",
    status: "Live Production",
    badgeColor: "emerald",
    heroImage: "/assets/narration_real_studio.png",
    secondaryImage: "/assets/narration_real_scene2.png",
    liveUrl: "https://narration.supportplus.app/",
    backendUrl: "https://ainarrtion.indyatools.com/",
    localUrl: "http://localhost:2100",
    summary: "Dual-model AI video narration platform decoupling visual scene detection from narration generation, enabling creators to re-narrate, trim, or adjust individual video chapters without full re-renders.",
    metrics: [
      { label: "Model Architecture", value: "Dual Qwen 2.5", detail: "Qwen2.5-VL (Vision) + Qwen2.5 (Text Narration)" },
      { label: "Timeline Accuracy", value: "Frame-Accurate", detail: "Sub-second sync between audio pacing and scenes" },
      { label: "Render Savings", value: "85% Faster", detail: "Only re-renders modified scene chapters" }
    ],
    tags: ["Qwen2.5-VL-7B", "Qwen2.5-7B", "PyTorch", "Transformers", "FastAPI", "React", "Video Pipeline"],
    problemStatement: "Generating video narration using monolithic models requires re-processing entire videos whenever a single sentence or clip duration needs tweaking. Creators need modular, scene-level control.",
    architecture: "Dual-model orchestration: Qwen2.5-VL performs initial scene boundary detection and visual captioning. The visual captions are then passed to Qwen2.5 Text LLM which crafts engaging commentary per chapter. Each scene's audio is generated independently and cached in organized directories (`pipeline_cache/{hash}/scenes/{id}/`).",
    pipelineSteps: [
      "Input Video Parsing & Scene Boundary Cut Detection",
      "Qwen2.5-VL-7B Visual Comprehension & contextual scene captioning",
      "Qwen2.5-7B Narrative Generation matching target tone and duration",
      "Per-scene voice synthesis with dynamic duration matching",
      "Parallel processing with smart hash caching preventing redundant computation",
      "Non-linear timeline assembly permitting single-scene re-renders"
    ],
    verifiedFeatures: [
      "Live production deployment serving creators at narration.supportplus.app",
      "Scene-wise editable interface: update script for Scene 2 without touching Scenes 1 or 3",
      "Intelligent caching system with 1-hour grace file timestamp comparison",
      "Seamless streaming output and progress reporting back to web client"
    ]
  },
  {
    id: "voice-cloning",
    title: "VoiceForge — Voice Cloning & XTTS Engine",
    subtitle: "Production Bilingual (EN + HI) Voice Cloning SaaS with 2-Tier Caching",
    category: "Speech & GenAI",
    status: "Live Production",
    badgeColor: "emerald",
    heroImage: "/assets/voiceforge_dashboard.jpg",
    secondaryImage: "/assets/voiceforge_studio.jpg",
    liveUrl: "https://voicemakerai.supportplus.app/dashboard",
    backendUrl: "https://api.indyatools.com/",
    localUrl: "http://localhost:6060",
    summary: "High-fidelity zero-shot voice cloning and text-to-speech platform built on Coqui XTTS v2 with deep linguistic preprocessing for both English and Hindi, reducing latency by 96% via a 2-tier cache.",
    metrics: [
      { label: "Repeat Latency", value: "~60s → ~2s", detail: "96.6% latency reduction via 2-tier cache" },
      { label: "Speaker Profiles", value: "18 Profiles", detail: "Custom cloned voices & pre-configured personas" },
      { label: "Language Support", value: "English & Hindi", detail: "Native Devanagari & Latin script normalization" }
    ],
    tags: ["Coqui XTTS v2", "FastAPI", "Redis", "MongoDB GridFS", "spaCy", "PyTorch", "Python"],
    problemStatement: "Enterprise content platforms required instant voice synthesis from blog and documentation articles with realistic cloned brand voices. Raw XTTS inference takes 40-60 seconds on long documents, leading to high GPU costs and server timeouts.",
    architecture: "FastAPI server receives HTML or text payloads. spaCy NLP handles Part-of-Speech homograph disambiguation while Hindi processors handle Devanagari numerals and danda pauses. A 2-tier cache (in-memory Redis + MongoDB GridFS) checks content hashes to instantly stream pre-generated audio.",
    pipelineSteps: [
      "HTML Text Extraction & Linguistic Preprocessing (spaCy POS tagger, homograph resolution)",
      "Hindi & English Normalization (Devanagari numerals, file extensions, punctuation to pauses)",
      "Smart Sentence Chunking (length capped to 220 chars for optimal XTTS pitch stability)",
      "Hash Evaluation across 2-Tier Cache (Redis metadata key + MongoDB GridFS binary audio)",
      "Zero-Shot XTTS v2 Inference with Speaker Reference WAV on GPU",
      "Seamless Audio Stitching with micro-breath natural pauses via PyDub"
    ],
    verifiedFeatures: [
      "Bilingual synthesis: native English and Hindi support verified on local port 6060 & production API",
      "18 customizable speaker profiles with sample reference audio",
      "2-tier caching architecture cutting repeated generation from ~60s down to ~2s",
      "Webpage-to-audio extraction converting technical documentation into audiobooks",
      "Asynchronous job status polling via Redis keys with MongoDB analytics logging"
    ]
  },
  {
    id: "screenshot-to-video",
    title: "ScreenToVideo AI Studio",
    subtitle: "Automated UI Screenshot to Narrated Walkthrough Video Engine",
    category: "Multimodal & Vision",
    status: "Live Production",
    badgeColor: "emerald",
    heroImage: "/assets/screentovideo_app.jpg",
    secondaryImage: "/assets/screentovideo_templates.jpg",
    liveUrl: "https://stov.supportplus.app/",
    backendUrl: "https://sctovideo.indyatools.com/",
    localUrl: "http://localhost:13000",
    summary: "End-to-end 8-stage multimodal AI pipeline converting static product screenshots into polished, narrated 1080p tutorial walkthroughs with synchronized subtitles in ~90-110 seconds.",
    metrics: [
      { label: "Walkthrough Gen Time", value: "90–110s", detail: "From raw screenshots to rendered 1080p video" },
      { label: "Resolution", value: "1080p Full HD", detail: "Dynamic pan/zoom transitions & Whisper subtitles" },
      { label: "Model Orchestration", value: "32B + 7B VLM", detail: "Sequential 4-bit memory management on single GPU" }
    ],
    tags: ["Qwen2.5-VL", "OmniParser", "PaddleOCR", "Florence-2", "MoviePy", "FFmpeg", "FastAPI", "React"],
    problemStatement: "Creating SaaS onboarding and feature walkthrough videos is manual, time-consuming, and expensive. Developers and product managers need a system that can understand UI screens and autonomously synthesize animated video guides.",
    architecture: "Sequential microservice architecture combining Microsoft OmniParser, PaddleOCR, and a two-pass Qwen2.5-VL model to deduce user flows and generate voiceover scripts.",
    pipelineSteps: [
      "Stage 1: Screenshot Input Validation & PaddleOCR text localization",
      "Stage 2: OmniParser UI Detection (icons, buttons, input fields, modals)",
      "Stage 3: Spatial Geometric Merging of text and interactive UI bounding boxes",
      "Stage 4: Two-Pass Qwen2.5-VL reasoning: Workflow Deduction & Script Writing",
      "Stage 5: Edge TTS Voiceover Synthesis & Whisper temporal alignment",
      "Stage 6: Dynamic Timeline Builder with pan/zoom keyframes on active UI elements",
      "Stage 7: Hardware-accelerated MoviePy & FFmpeg video compilation"
    ],
    verifiedFeatures: [
      "Intelligent sequential 4-bit model loading/unloading to run 32B + 7B models in limited VRAM",
      "Multi-template video styling (corporate, clean, fast-paced, developer-focused)",
      "Automatic Whisper-aligned kinetic subtitles burned into video stream",
      "Interactive React/Vite dashboard deployed at stov.supportplus.app with job queue monitoring"
    ]
  }
];

export const experienceData = [
  {
    role: "AI Engineer",
    company: "SysTools Software Pvt Ltd",
    period: "Oct 2025 – Present",
    location: "India",
    highlights: [
      "Built and deployed a real-time violence/crowd detection system (RT-DETR person tracking + fine-tuned VideoMAE classifier) processing live RTSP surveillance feeds at ~26 FPS, using a multi-factor heuristic suspicion gate (proximity, motion, optical-flow chaos) to limit costly transformer inference to only high-risk events.",
      "Engineered a forensic email-security pipeline validating SPF/DKIM/DMARC/ARC authentication and performing HTML/URL/attachment forensic analysis with a weighted rule-based risk-scoring engine; served via FastAPI with MongoDB persistence, averaging under 1 second per email scan.",
      "Built and deployed a production voice-cloning SaaS (Coqui XTTS v2, FastAPI, Redis + MongoDB GridFS 2-tier caching) live at a public URL supporting 18 speaker profiles across English and Hindi; caching cut repeat-request latency from ~60s to ~2s."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "CodSoft",
    period: "Jun 2024 – Jul 2024",
    location: "Remote",
    highlights: [
      "Built and evaluated classical ML models (Titanic survival, Iris classification, House Price regression) through feature engineering and hyperparameter tuning.",
      "Achieved 85% and 96% accuracy respectively on classification tasks through systematic feature selection and cross-validation."
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "AKTU / Technical University",
    period: "2021 – 2025",
    details: "Core focus on Deep Learning, Computer Vision, Natural Language Processing, Distributed Systems, and High-Performance Python."
  },
  {
    degree: "Senior Secondary (12th) — Science (PCM)",
    institution: "CBSE Board",
    period: "2020",
    details: "Physics, Chemistry, Mathematics with foundation in scientific computing and analytical problem solving."
  }
];

export const certificationsData = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    year: "2026",
    badge: "Cloud Computing"
  },
  {
    title: "Smart India Hackathon (SIH) — Internal Round Winner",
    issuer: "Ministry of Education / SIH",
    year: "2023",
    badge: "National Hackathon"
  },
  {
    title: "Python 101 for Data Science Certificate",
    issuer: "IBM",
    year: "2022",
    badge: "Data Science"
  }
];
