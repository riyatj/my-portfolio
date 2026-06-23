import { useState, useEffect, useRef } from "react";
import "./App.css";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

const EXPERIENCE = [
  {
    company: "Hexinox Innovations Pvt. Ltd.",
    role: "Frontend / Full Stack Intern",
    period: "Jun 19 – Jun 25, 2025 · Remote",
    points: [
      "Built MERN stack applications integrating AI features and Google Analytics.",
      "Implemented Microsoft Clarity for user session tracking and behaviour analysis.",
    ],
    color: "#3b82f6",
  },
  {
    company: "Bumble Bee Media",
    role: "AI Portfolio Developer Intern",
    period: "Jun 6 – 12, 2025 · Remote",
    points: [
      "Developed an AI-powered portfolio application using Gemini Flash API.",
      "Designed interactive UI showcasing AI-driven content generation features.",
    ],
    color: "#8b5cf6",
  },
  {
    company: "Techmaghi LLP",
    role: "Embedded Systems Workshop",
    period: "July 2025 · Remote",
    points: [
      "Completed hands-on workshop on embedded system programming using Arduino.",
    ],
    color: "#06b6d4",
  },
];

const PROJECTS = [
  {
    title: "AI Smart Ward System",
    tech: ["React.js", "Django", "SQLite", "ESP32", "IoT Sensors", "Groq API"],
    year: "2025 – 2026",
    description:
      "Final year B.Tech project combining AI and IoT for real-time hospital patient monitoring with role-based dashboards for doctors, nurses, lab staff, and patients.",
    highlights: [
      "ESP32 + MAX30100 + LM35 sensors transmitting live vitals via Wi-Fi",
      "93% anomaly detection accuracy with AI-driven auto-alerts",
      "Groq API for voice-based SOS emergency response",
    ],
    badge: "🏆 Best Creative Thesis",
    color: "#3b82f6",
    featured: true,
    minor: false,
  },
  {
    title: "HanStyle – React Frontend",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    year: "Jun 2025",
    description:
      "Responsive e-commerce-style UI with React, managing component state and ensuring cross-browser compatibility.",
    highlights: [],
    color: "#8b5cf6",
    featured: false,
    minor: false,
  },
  {
    title: "NewSilo – Mini Web App",
    tech: ["PHP", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
    year: "Mar 2025",
    description:
      "PHP backend with MySQL integration; implemented password reset, email validation, and interactive UI.",
    highlights: [],
    color: "#06b6d4",
    featured: false,
    minor: false,
  },
  {
    title: "Personal Portfolio Website",
    tech: ["HTML", "CSS", "Python"],
    year: "May 2025",
    description:
      "Deployed personal portfolio at riyatj.github.io showcasing projects, blog, and contact info with Python-powered backend.",
    highlights: [],
    color: "#10b981",
    featured: false,
    minor: false,
  },
];

const MINOR_PROJECT = {
  title: "Transmission Line Fault Detection",
  tech: ["React.js", "Python", "JavaScript", "HTML", "CSS", "MATLAB", "Simulink", "Supabase"],
  year: "2025 – 2026",
  description:
    "Mini project for B.Tech in Electrical & Electronics Engineering. A web-based simulation system that detects, classifies, and visualizes faults in a three-phase transmission line in real time.",
  highlights: [
    "Detects LG, LL, LLG, LLL faults and overvoltage/undervoltage conditions",
    "React.js dashboard with live phase indicators, fault alerts & severity classification",
    "MATLAB/Simulink used for modeling and wavelet-based (DWT) signal validation",
    "Fault log management with timestamp, affected phase, and export to JSON",
  ],
  badge: "⚡ Minor · EEE Dept.",
  color: "#f59e0b",
  guide: "Ms. Anooja C.L, Asst. Professor – Dept. of EEE",
  institution: "SNM Institute of Management & Technology, Maliankara",
};

const SKILLS = {
  Languages: ["C", "Python", "HTML"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  Backend: ["Django", "PHP"],
  Database: ["MySQL", "MongoDB", "SQLite", "Supabase"],
  "Cloud / DevOps": ["Git", "GitHub", "Linux"],
  "Hardware / IoT": ["ESP32", "Arduino", "MAX30100", "LM35", "Sensor Integration"],
  "AI / APIs": ["Groq API", "Gemini Flash", "Google Analytics", "Microsoft Clarity"],
  "Core CS": ["Data Structures", "Algorithms", "DBMS", "OS"],
};

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const roles = ["COMPUTER SCIENCE ENGINEER ", " MINOR IN EEE", "FRONTEND DEVELOPER"];
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useScrollReveal();

  useEffect(() => {
    const type = () => {
      const current = roles[roleIndex.current];
      if (!deleting.current) {
        setTypedText(current.slice(0, charIndex.current + 1));
        charIndex.current++;
        if (charIndex.current === current.length) {
          deleting.current = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        setTypedText(current.slice(0, charIndex.current - 1));
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      setTimeout(type, deleting.current ? 55 : 90);
    };
    const t = setTimeout(type, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Background */}
      <div className="bg-layer">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="glow glow-3" />
        <div className="grid-overlay" />
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => scrollTo("hero")}>
          RIYA <span className="accent"></span>TJ
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`nav-btn ${activeSection === link.toLowerCase() ? "active" : ""}`}
                onClick={() => scrollTo(link.toLowerCase())}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/riyatj"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-badge reveal">
            <span className="badge-dot" /> Open to Opportunities
          </div>
          <h1 className="hero-name reveal">
            RIYA <span className="gradient-text">TJ</span>
          </h1>
          <div className="hero-role reveal">
            <span className="typed">{typedText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-desc reveal">
            B.Tech Computer Science student building at the intersection of <strong>AI, IoT,</strong> and{" "}
            <strong>Modern Web</strong>. From hospital smart wards to AI-powered portfolios — I turn ideas into products.
          </p>
          <div className="hero-actions reveal">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View Projects
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("contact")}>
              Let's Connect
            </button>
          </div>
          <div className="hero-stats reveal">
            <div className="stat">
              <span className="stat-num">4+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">93%</span>
              <span className="stat-label">AI Accuracy</span>
            </div>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="orb-container">
            <div className="orb orb-outer" />
            <div className="orb orb-mid" />
            <div className="orb orb-inner" />
            <div className="orb-text">
              <span>CS</span>
              <span className="orb-sub">Engineer</span>
            </div>
          </div>
          <div className="floating-chips">
            {["React", "Django", "ESP32", "Groq API", "IoT", "AI"].map((chip, i) => (
              <span key={chip} className="chip" style={{ "--i": i }}>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">01 / About</span>
            <h2>Who I Am</h2>
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I'm <strong>Riya TJ</strong>, a final-year Computer Science student at{" "}
                <em>SNM Institute of Management & Technology</em> under APJ Abdul Kalam Technological University,
                Kerala. I specialize in building full-stack web applications powered by AI and embedded systems.
              </p>
              <p>
                Alongside my <strong>B.Tech in Computer Science</strong>, I'm also pursuing a{" "}
                <strong>Minor in Electrical & Electronics Engineering</strong> — where I built a
                React + Python based <em>Transmission Line Fault Detection System</em> that simulates
                and classifies real-world power grid faults.
              </p>
              <p>
                My CS flagship — the <strong>AI Smart Ward System</strong> — integrates IoT sensors, real-time vitals monitoring,
                and a Groq-powered voice SOS, earning recognition as{" "}
                <strong>Best Creative Thesis potential</strong> at my institution.
              </p>
              <p>
                I love bridging hardware and software — programming Arduino boards, deploying AI APIs,
                or simulating power systems using MATLAB/Simulink.
              </p>
              <div className="contact-chips">
                <a href="mailto:riyatj123@gmail.com" className="contact-chip">✉ riyatj123@gmail.com</a>
                <a href="https://github.com/riyatj" target="_blank" rel="noreferrer" className="contact-chip">⌥ github.com/riyatj</a>
                <a href="https://linkedin.com/in/riya-tj" target="_blank" rel="noreferrer" className="contact-chip">in linkedin.com/in/riya-tj</a>
              </div>
            </div>
            <div className="about-cards reveal">
              {[
                { icon: "🧠", title: "AI & ML", desc: "Groq API, Gemini Flash, anomaly detection" },
                { icon: "⚡", title: "IoT & Hardware", desc: "ESP32, Arduino, MAX30100, LM35 sensors" },
                { icon: "🌐", title: "Full Stack", desc: "React, Django, Node.js, MySQL, MongoDB" },
                { icon: "🔌", title: "Minor – EEE", desc: "Transmission line faults, MATLAB/Simulink, power systems" },
              ].map((card) => (
                <div className="about-card" key={card.title}>
                  <span className="about-card-icon">{card.icon}</span>
                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">02 / Experience</span>
            <h2>Internship History</h2>
          </div>
          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <div className="timeline-item reveal" key={i} style={{ "--accent": exp.color }}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3>{exp.company}</h3>
                      <span className="timeline-role">{exp.role}</span>
                    </div>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <ul className="timeline-points">
                    {exp.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">03 / Projects</span>
            <h2>What I've Built</h2>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((proj, i) => (
              <div
                className={`project-card reveal ${proj.featured ? "featured" : ""}`}
                key={i}
                style={{ "--accent": proj.color }}
              >
                {proj.badge && <div className="proj-badge">{proj.badge}</div>}
                <div className="proj-top">
                  <span className="proj-year">{proj.year}</span>
                  <h3 className="proj-title">{proj.title}</h3>
                  <p className="proj-desc">{proj.description}</p>
                </div>
                {proj.highlights.length > 0 && (
                  <ul className="proj-highlights">
                    {proj.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="proj-tech">
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Minor Project – EEE */}
          <div className="minor-section reveal">
            <div className="minor-header">
              <div className="minor-label-row">
                <span className="minor-icon">🔌</span>
                <div>
                  <span className="minor-dept-tag">Minor · Electrical &amp; Electronics Engineering</span>
                  <p className="minor-dept-sub">APJ Abdul Kalam Technological University · 2025–2026</p>
                </div>
              </div>
            </div>
            <div className="minor-card" style={{ "--accent": MINOR_PROJECT.color }}>
              <div className="minor-card-left">
                <div className="proj-badge">{MINOR_PROJECT.badge}</div>
                <span className="proj-year">{MINOR_PROJECT.year}</span>
                <h3 className="proj-title">{MINOR_PROJECT.title}</h3>
                <p className="proj-desc">{MINOR_PROJECT.description}</p>
                <div className="minor-meta">
                  <span className="minor-meta-item">👩‍🏫 {MINOR_PROJECT.guide}</span>
                  <span className="minor-meta-item">🏛 {MINOR_PROJECT.institution}</span>
                </div>
              </div>
              <div className="minor-card-right">
                <h4 className="minor-highlights-title">Key Features</h4>
                <ul className="proj-highlights">
                  {MINOR_PROJECT.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="proj-tech" style={{ marginTop: "20px" }}>
                  {MINOR_PROJECT.tech.map((t) => (
                    <span key={t} className="tech-tag amber">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">04 / Skills</span>
            <h2>Technical Arsenal</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([category, items], i) => (
              <div className="skill-group reveal" key={category}>
                <h4 className="skill-category">{category}</h4>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">05 / Education</span>
            <h2>Academic Background</h2>
          </div>
          <div className="edu-grid">
            {[
              {
                degree: "B.Tech in Computer Science",
                institution: "SNM Institute of Management & Technology",
                board: "APJ Abdul Kalam Technological University",
                year: "Oct 2022 – May 2026",
                grade: "CGPA: 6.9/10",
                icon: "🎓",
                primary: true,
              },
              {
                degree: "Senior Secondary (Class XII)",
                institution: "Holy Ghost Convent Girls HSS",
                board: "State Board",
                year: "2022",
                grade: "77.7%",
                icon: "📚",
                primary: false,
              },
              {
                degree: "Secondary (Class X)",
                institution: "Infant Jesus Senior Secondary School",
                board: "CBSE",
                year: "2020",
                grade: "63%",
                icon: "🏫",
                primary: false,
              },
            ].map((edu, i) => (
              <div className={`edu-card reveal ${edu.primary ? "primary" : ""}`} key={i}>
                <span className="edu-icon">{edu.icon}</span>
                <div className="edu-info">
                  <h3>{edu.degree}</h3>
                  <p className="edu-inst">{edu.institution}</p>
                  <p className="edu-board">{edu.board} · {edu.year}</p>
                  <span className="edu-grade">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="certs reveal">
            <h3 className="certs-title">Certifications & Awards</h3>
            <div className="certs-grid">
              {[
                { text: "Best Creative Thesis Potential", sub: "AI Smart Ward System", icon: "🏆" },
                { text: "Full Stack MERN + AI", sub: "Hexinox Innovations", icon: "💻" },
                { text: "Embedded Systems Workshop", sub: "Techmaghi LLP", icon: "🔧" },
                { text: "AI Portfolio using Gemini Flash", sub: "Bumble Bee Media", icon: "✨" },
              ].map((cert, i) => (
                <div className="cert-card" key={i}>
                  <span className="cert-icon">{cert.icon}</span>
                  <div>
                    <p className="cert-text">{cert.text}</p>
                    <p className="cert-sub">{cert.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">06 / Contact</span>
            <h2>Get In Touch</h2>
          </div>
          <div className="contact-section reveal">
            <div className="contact-text">
              <p>
                I'm currently looking for new opportunities. Whether you have a question,
                a project idea, or just want to say hi — my inbox is always open!
              </p>
            </div>
            <div className="contact-links">
              {[
                { label: "Email", value: "riyatj123@gmail.com", href: "mailto:riyatj123@gmail.com", icon: "✉" },
                { label: "Phone", value: "+91-8943690129", href: "tel:+918943690129", icon: "📱" },
                { label: "GitHub", value: "github.com/riyatj", href: "https://github.com/riyatj", icon: "⌥" },
                { label: "LinkedIn", value: "linkedin.com/in/riya-tj", href: "https://www.linkedin.com/in/riya-t-j-bba335275/", icon: "in" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-card">
                  <span className="contact-icon">{link.icon}</span>
                  <div>
                    <p className="contact-label">{link.label}</p>
                    <p className="contact-value">{link.value}</p>
                  </div>
                  <span className="contact-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Designed & Built by <strong>Riya TJ</strong> · 2025</p>
        <p className="footer-sub">Computer Science Engineer · Kerala, India</p>
      </footer>
    </div>
  );
}