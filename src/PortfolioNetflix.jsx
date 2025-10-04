import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";

// =====================
// Netflix-Style Portfolio
// Single-file React component with TailwindCSS
// =====================

const data = {
  name: "Smitha Kedila",
  title: "Software Engineer | AI & Distributed Systems",
  location: "San Jose, California, United States",
  email: "smitha.kedila@sjsu.edu",
  phone: "+1 408 420 8846",
  links: {
    linkedin: "https://www.linkedin.com/in/smithakedila", // TODO: Add real LinkedIn URL
    github: "https://github.com/SmithaKedila", // TODO: Add real GitHub URL if desired
    //resume: "", // TODO: Add hosted resume link
  },
  heroTagline:
    "Graduate MS student in Computer Engineering @ SJSU. 4 years of industry experience across AI agents, distributed systems, Kubernetes, SD-WAN, and ML engineering.",
  availability: "Available full-time from Jan 2026 (Graduating May 2026)",
  experience: [
    {
      company: "Hwy Haul",
      role: "SDE Intern",
      period: "May 2025 — Aug 2025",
      bullets: [
        "Engineered advanced prompt flows for AI inference achieving ~95% intent detection accuracy for bookings & negotiations.",
        "Reduced human involvement per load by ~25% and cut booking time by 30–40% with automated flows (0% error rate).",
        "Built and deployed an AI voice agent with Python, LiveKit Cloud, OpenAI, Cartesia, Deepgram; used Redis caching and Google Pub/Sub for real-time pipelines.",
      ],
      tech: ["Python", "LiveKit", "OpenAI", "Cartesia", "Deepgram", "Redis", "Pub/Sub"],
      poster: "linear-gradient(135deg, #0ea5e9, #1f2937)",
    },
    {
      company: "Dell",
      role: "Software Engineer",
      period: "Jul 2022 — Jul 2024",
      bullets: [
        "Implemented namespace-level parallelism controls in Kubernetes orchestrators (↓ 40% configuration overhead).",
        "Accelerated persistent volume protection from 90 min → 30 min using Go concurrency primitives.",
        "Developed features supporting scalable data protection for containerized workloads (Helm, REST APIs).",
      ],
      tech: ["Go", "Kubernetes", "Helm", "REST"],
      poster: "linear-gradient(135deg, #22c55e, #111827)",
    },
    {
      company: "Versa Networks",
      role: "Software Engineer",
      period: "Sep 2020 — Jul 2022",
      bullets: [
        "Designed real-time client/server statistics collection via TWAMP protocol.",
        "Improved HA by enhancing state recovery & failover in SD-WAN controllers (↓ downtime 35%).",
        "C/C++ for embedded Linux with focus on high-performance routing & telemetry.",
      ],
      tech: ["C/C++", "Embedded Linux", "SD-WAN", "TWAMP"],
      poster: "linear-gradient(135deg, #ef4444, #0b1220)",
    },
  ],
  education: [
    {
      school: "San José State University",
      degree: "MS, Computer Engineering (GPA 3.8/4.0)",
      period: "Aug 2024 — May 2026",
      bullets: [
        "Coursework: Computer Architecture, Advanced Data Mining, AI & Data Engineering, Advanced Computer Design, System Software, Enterprise Software Platform.",
      ],
      poster: "linear-gradient(135deg, #a78bfa, #111827)",
    },
    {
      school: "The National Institute of Engineering, Bengaluru",
      degree: "BE, Electronics & Communication (GPA 8.9/10)",
      period: "Aug 2016 — Aug 2020",
      bullets: [
        "Coursework: Operating Systems, DSA, C++, Neural Networks, Computer Networking, Microcontrollers/Processors, Embedded Systems.",
      ],
      poster: "linear-gradient(135deg, #f59e0b, #111827)",
    },
  ],
  projects: [
    {
      name: "MIND News Recommender",
      period: "Jan 2025 — May 2025",
      desc:
        "Personalized news recommendation using BERT4Rec transformer; preprocessed MIND-small dataset and optimized sequence inputs.",
      tech: ["PyTorch", "Transformers", "BERT4Rec"],
      href: "#",
      poster: "linear-gradient(135deg, #06b6d4, #0f172a)",
    },
    {
      name: "Health Agent (CrewAI)",
      period: "Jan 2025 — May 2025",
      desc:
        "Goal-oriented assistant built with CrewAI; integrated a local LLM via Ollama for private, efficient inference.",
      tech: ["CrewAI", "Ollama", "Python"],
      href: "#",
      poster: "linear-gradient(135deg, #10b981, #0b1220)",
    },
    {
      name: "Song Recommender",
      period: "Jan 2025 — May 2025",
      desc:
        "Hybrid CF + boosted trees (XGBoost/CatBoost) for rating prediction; feature engineering & model tuning.",
      tech: ["XGBoost", "CatBoost", "scikit-learn"],
      href: "#",
      poster: "linear-gradient(135deg, #ef4444, #0b1220)",
    },
  ],
  skills: [
    {
      group: "Programming Languages",
      items: ["C", "C++", "Python", "Java", "Go", "Verilog HDL", "MATLAB"],
    },
    {
      group: "Machine Learning",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost"],
    },
    {
      group: "Development Tools",
      items: ["Kubernetes", "Docker", "Git", "CrewAI", "Ollama", "Postman", "REST APIs"],
    },
    { group: "Operating Systems", items: ["RTOS", "Embedded Linux"] },
    { group: "Networking", items: ["SD-WAN", "Distributed Systems"] },
  ],
};

function SectionHeader({ title, tagline }) {
  return (
    <div className="flex items-end justify-between mb-3 px-2">
      <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white">{title}</h2>
      {tagline && (
        <span className="text-xs md:text-sm text-slate-300/80">{tagline}</span>
      )}
    </div>
  );
}

function Poster({ style, children }) {
  return (
    <div
      className="relative w-[220px] md:w-[260px] h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
      style={{ background: style }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
        {children}
      </div>
    </div>
  );
}

function Carousel({ children }) {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-thin scrollbar-thumb-slate-700/50 scrollbar-track-transparent">
        {children}
      </div>
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
      {children}
    </span>
  );
}

const Hero = () => (
  <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-black p-6 md:p-10 border border-white/10">
    <div className="absolute -inset-1 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(59,130,246,0.18),transparent),radial-gradient(80%_60%_at_100%_0%,rgba(99,102,241,0.18),transparent)] blur-2xl" />
    <div className="relative z-10">
      <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
        <div className="max-w-2xl">
          <motion.h1
            className="text-3xl md:text-5xl font-black text-white leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {data.name}
          </motion.h1>
          <p className="mt-2 text-slate-300/90 font-semibold">{data.title}</p>
          <p className="mt-4 text-slate-300/80 max-w-xl">{data.heroTagline}</p>
          <p className="mt-2 text-emerald-300/90 text-sm font-medium">{data.availability}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={`mailto:${data.email}`} className="btn-primary"><Mail className="w-4 h-4"/> Email</a>
            <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="btn-secondary"><Linkedin className="w-4 h-4"/> LinkedIn</a>
            <a href={data.links.resume} target="_blank" rel="noreferrer" className="btn-secondary"><FileText className="w-4 h-4"/> Resume</a>
          </div>
        </div>
        <div className="text-slate-300/80 text-sm grid gap-2 min-w-[220px]">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {data.location}</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> {data.email}</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> {data.phone}</div>
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => (
  <section className="mt-10">
    <SectionHeader title="Now Streaming – Experience" tagline="Latest roles and highlights" />
    <Carousel>
      {data.experience.map((item, idx) => (
        <motion.div key={idx} className="snap-start" whileHover={{ y: -6 }}>
          <Poster style={item.poster}>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-white/80">{item.period}</p>
                <h3 className="text-lg font-extrabold">{item.company}</h3>
                <p className="text-sm text-white/90">{item.role}</p>
              </div>
              <ul className="text-xs text-white/90 space-y-1 list-disc list-inside marker:text-white/60">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </Poster>
        </motion.div>
      ))}
    </Carousel>
  </section>
);

const Education = () => (
  <section className="mt-10">
    <SectionHeader title="Top Picks – Education" tagline="Academic highlights" />
    <Carousel>
      {data.education.map((item, idx) => (
        <motion.div key={idx} className="snap-start" whileHover={{ y: -6 }}>
          <Poster style={item.poster}>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-white/80">{item.period}</p>
                <h3 className="text-lg font-extrabold">{item.school}</h3>
                <p className="text-sm text-white/90">{item.degree}</p>
              </div>
              <ul className="text-xs text-white/90 space-y-1 list-disc list-inside marker:text-white/60">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </Poster>
        </motion.div>
      ))}
    </Carousel>
  </section>
);

const Projects = () => (
  <section className="mt-10">
    <SectionHeader title="Featured Projects" tagline="Work I'm proud of" />
    <Carousel>
      {data.projects.map((p, idx) => (
        <motion.a
          href={p.href}
          target={p.href?.startsWith("#") ? "_self" : "_blank"}
          rel="noreferrer"
          key={idx}
          className="snap-start block"
          whileHover={{ y: -6 }}
        >
          <Poster style={p.poster}>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-white/80">{p.period}</p>
                <h3 className="text-lg font-extrabold flex items-center gap-2">
                  {p.name}
                  <ArrowUpRight className="w-4 h-4" />
                </h3>
                <p className="text-xs text-white/90">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </Poster>
        </motion.a>
      ))}
    </Carousel>
  </section>
);

const Skills = () => (
  <section className="mt-10">
    <SectionHeader title="Trending Skills" tagline="Tooling, ML, and systems" />
    <div className="grid md:grid-cols-2 gap-4">
      {data.skills.map((s, idx) => (
        <div key={idx} className="rounded-2xl border border-white/10 p-4 bg-gradient-to-b from-slate-900 to-black">
          <h4 className="text-white font-bold mb-2">{s.group}</h4>
          <div className="flex flex-wrap gap-2">
            {s.items.map((i) => (
              <Chip key={i}>{i}</Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-10 pt-6 border-t border-white/10 text-slate-400 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
    <div>
      © {new Date().getFullYear()} {data.name}. Built with ♥ in a Netflix-style theme.
    </div>
    <div className="flex items-center gap-4">
      <a href={data.links.github} className="flex items-center gap-2 hover:text-white/90"><Github className="w-4 h-4"/> GitHub</a>
      <a href={data.links.linkedin} className="flex items-center gap-2 hover:text-white/90"><Linkedin className="w-4 h-4"/> LinkedIn</a>
      <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-white/90"><Mail className="w-4 h-4"/> Email</a>
    </div>
  </footer>
);

export default function PortfolioNetflix() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white selection:bg-indigo-500/30">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Footer />
      </div>

      {/* Floating backdrop gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-1/3 -left-1/3 h-[80vh] w-[80vw] rounded-full blur-3xl opacity-25 bg-indigo-500/30" />
        <div className="absolute -bottom-1/3 -right-1/3 h-[80vh] w-[80vw] rounded-full blur-3xl opacity-25 bg-sky-500/20" />
      </div>

      {/* Tailwind component tokens */}
      <style>{`
        .btn-primary { @apply inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-slate-900 font-semibold shadow hover:opacity-90 transition; }
        .btn-secondary { @apply inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/20 text-white/90 hover:bg-white/10 transition; }
        .scrollbar-thin { scrollbar-width: thin; }
        .scrollbar-thin::-webkit-scrollbar { height: 8px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 9999px; }
      `}</style>
    </div>
  );
}
