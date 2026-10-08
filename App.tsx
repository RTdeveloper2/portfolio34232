import { useEffect, useState } from "react";

type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  live?: string;
  code: string;
};

const projects: Project[] = [
  {
    title: "TaskFlow",
    type: "Full-stack SaaS dashboard",
    description:
      "A production-style task management product with CRUD workflows, search, filters, dashboard metrics and a unified API + frontend deployment.",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    live: "https://taskflow-dashboard-zme5.onrender.com/",
    code: "https://github.com/RTdeveloper2/Portfolio/tree/main/projects/taskflow-dashboard",
  },
  {
    title: "Wisdom Dashboard",
    type: "Enterprise product engineering",
    description:
      "Modernized an analytics-heavy product experience through UI refactoring, reusable patterns and security improvements.",
    stack: ["React", "Node.js", "Azure", "Microservices"],
    code: "https://github.com/RTdeveloper2/Portfolio",
  },
  {
    title: "Schema Registry Services",
    type: "Backend / microservices",
    description:
      "Service-oriented backend capabilities for schema management, APIs and integration workflows.",
    stack: ["Node.js", "REST", "Microservices", "Cloud"],
    code: "https://github.com/RTdeveloper2/Portfolio",
  },
];

const skillGroups = [
  { label: "Frontend", items: ["React", "TypeScript", "JavaScript", "Angular", "HTML/CSS", "Responsive UI"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "Microservices", "API Design"] },
  { label: "Cloud", items: ["Azure", "Databricks", "Cloud Architecture", "CI/CD"] },
  { label: "Engineering", items: ["Git", "Security", "Testing", "Performance", "Agile"] },
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const project = projects[activeProject];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); scrollTo("top"); }}>
          <span className="brand-mark">RT</span>
          <span>Rahul Taneja</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <button onClick={() => scrollTo("work")}>Work</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
          <a href="https://github.com/RTdeveloper2" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
        </nav>

        <div className="nav-actions">
          <button className="theme-button" aria-label="Toggle theme" onClick={() => setDark((v) => !v)}>
            {dark ? "☼" : "☾"}
          </button>
          <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for selected freelance work</div>
            <h1>Software engineer who builds <em>useful products.</em></h1>
            <p className="hero-text">
              I'm Rahul Taneja, a full-stack developer focused on React, Node.js and Azure.
              I turn product ideas and messy requirements into fast, maintainable experiences.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo("work")}>View selected work <ArrowUpRight /></button>
              <button className="button button-ghost" onClick={() => scrollTo("contact")}>Let's work together</button>
            </div>
          </div>

          <div className="hero-meta">
            <div><strong>7+</strong><span>years engineering</span></div>
            <div><strong>React</strong><span>Node · Azure</span></div>
            <div><strong>Remote</strong><span>Dehradun, India</span></div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / Selected work</span>
              <h2>Built for real workflows.</h2>
            </div>
            <p>Projects that show how I approach product UI, APIs, architecture and delivery.</p>
          </div>

          <div className="project-layout">
            <div className="project-list" role="tablist" aria-label="Projects">
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  className={`project-tab ${activeProject === index ? "active" : ""}`}
                  onClick={() => setActiveProject(index)}
                  role="tab"
                  aria-selected={activeProject === index}
                >
                  <span className="project-number">0{index + 1}</span>
                  <span><strong>{item.title}</strong><small>{item.type}</small></span>
                  <ArrowUpRight />
                </button>
              ))}
            </div>

            <article className="project-detail">
              <div className="project-index">PROJECT 0{activeProject + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-actions">
                {project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></a>}
                <a className="button button-ghost" href={project.code} target="_blank" rel="noreferrer">View source <ArrowUpRight /></a>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">02 / About</span>
              <h2>Product-minded engineering.</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-statement">
              <p className="large-copy">
                I enjoy the space between <em>good UX</em> and solid engineering — clean interfaces,
                dependable APIs and systems that are easy to evolve.
              </p>
              <p>
                My background spans enterprise applications, microservices, security work and modern
                web development. For freelance projects, I bring that production mindset to smaller teams
                that need someone who can own a feature from UI to API.
              </p>
            </div>

            <div className="experience">
              <div className="experience-item"><span>2025 — Present</span><div><strong>Software Developer</strong><small>Concentrix Catalyst</small></div></div>
              <div className="experience-item"><span>2022 — 2024</span><div><strong>Application Development Analyst</strong><small>Accenture</small></div></div>
              <div className="experience-item"><span>2019 — 2022</span><div><strong>System Engineer</strong><small>TCS</small></div></div>
            </div>
          </div>
        </section>

        <section className="section skills-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">03 / Toolkit</span>
              <h2>Tools I work with.</h2>
            </div>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <span className="skill-label">{group.label}</span>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <span className="section-kicker">04 / Contact</span>
            <h2>Have a product that needs building?</h2>
            <p>I'm open to selected freelance projects involving React, Node.js, APIs and cloud-backed applications.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:rtaneja1584@gmail.com">Start a conversation <ArrowUpRight /></a>
              <a className="button button-ghost" href="https://github.com/RTdeveloper2" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Rahul Taneja</span>
        <span>React · Node.js · Azure</span>
        <span>Built with intent.</span>
      </footer>
    </div>
  );
}

export default App;
