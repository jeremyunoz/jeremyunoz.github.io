import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { MotionConfig, motion } from "motion/react";
import {
  copy,
  filters,
  filterProjects,
  pipeline,
  PROFILE,
  projects,
  toolkit,
} from "./content.js";

const Language = createContext("en");
const useCopy = () => copy[useContext(Language)];

function Icon({ name, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {name === "arrow" && (
        <>
          <path d="M5 19 19 5M5 5h14v14" />
        </>
      )}
      {name === "download" && (
        <>
          <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
        </>
      )}
      {name === "sun" && (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1" />
        </>
      )}
      {name === "moon" && <path d="M20 15A8 8 0 0 1 9 4a8 8 0 1 0 11 11Z" />}
      {name === "copy" && (
        <>
          <rect x="8" y="8" width="12" height="13" rx="1" />
          <path d="M16 8V3H3v13h5" />
        </>
      )}
      {name === "check" && <path d="m5 12 4 4L19 6" />}
      {name === "down" && <path d="M12 4v16m-6-6 6 6 6-6" />}
      {name === "plus" && <path d="M12 5v14M5 12h14" />}
      {name === "sense" && (
        <>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
      {name === "think" && (
        <>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
        </>
      )}
      {name === "respond" && (
        <>
          <path d="m11 5-5 4H3v6h3l5 4V5ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
        </>
      )}
    </svg>
  );
}

function Reveal({ children, className = "", as = "div", delay = 0 }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={false}
      whileInView={{ y: [18, 0], opacity: [0.65, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}

function Header({ lang, setLang, theme, setTheme }) {
  const t = useCopy();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuButton = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    function escape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label={`${t.name} — ${t.home}`}>
        {t.name}
        <span className="wordmark-mark" aria-hidden="true">
          .
        </span>
      </Link>
      <nav
        className="desktop-nav"
        aria-label={lang === "en" ? "Main navigation" : "主导航"}
      >
        <Link to="/#projects">{t.work}</Link>
        <Link
          to="/about"
          aria-current={location.pathname === "/about" ? "page" : undefined}
        >
          {t.about}
        </Link>
        <Link to="/#skills">{t.skills}</Link>
        <Link to="/#contact">{t.contact}</Link>
      </nav>
      <div className="header-tools">
        <button
          className="language-button"
          onClick={() => {
            setLang(lang === "en" ? "zh" : "en");
            setOpen(false);
          }}
          aria-label={t.language}
          lang={lang === "en" ? "zh-CN" : "en"}
        >
          {lang === "en" ? "中" : "EN"}
        </button>
        <button
          className="theme-button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`${t.theme}: ${theme === "dark" ? t.light : t.dark}`}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
        <a className="header-resume" href={PROFILE.resume} download>
          {t.resume}
          <Icon name="download" />
        </a>
        <button
          className="menu-button"
          ref={menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? t.close : t.menu}
        </button>
      </div>
      {open && (
        <nav
          className="mobile-menu"
          id="mobile-menu"
          aria-label={lang === "en" ? "Mobile navigation" : "移动端导航"}
        >
          <Link to="/#projects">{t.work}</Link>
          <Link to="/about">{t.about}</Link>
          <Link to="/#skills">{t.skills}</Link>
          <Link to="/#contact">{t.contact}</Link>
          <a href={PROFILE.resume} download>
            {t.download}
          </a>
        </nav>
      )}
    </header>
  );
}

function Meta({ title, description }) {
  const lang = useContext(Language);
  useEffect(() => {
    document.title = `${title} | ${lang === "en" ? "Jeremy Zheng" : "郑剑铭"}`;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[property="og:title"]').content =
      document.title;
    document.querySelector('meta[property="og:description"]').content =
      description;
  }, [title, description, lang]);
  return null;
}

function Contact() {
  const t = useCopy();
  const [status, setStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setStatus("copied");
    } catch {
      setStatus("copyFailed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 2000);
  }
  return (
    <section
      className="contact-section section-space"
      id="contact"
      aria-labelledby="contact-title"
    >
      <Reveal>
        <h2 id="contact-title">
          <a className="contact-cta" href={`mailto:${PROFILE.email}`}>
            <span className="rolling-label">
              <span>{t.contactTitle}</span>
              <span aria-hidden="true">{t.contactTitle}</span>
            </span>
            <Icon name="arrow" />
          </a>
        </h2>
      </Reveal>
      <div className="contact-layout">
        <Reveal>
          <p className="lead">{t.contactText}</p>
          <p className="contact-note">{t.contactNote}</p>
        </Reveal>
        <Reveal className="contact-links" delay={0.08}>
          <div className="email-row">
            <a className="email-link" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
            <button
              className="copy-button"
              onClick={copyEmail}
              data-copied={status === "copied"}
              aria-label={t.copyEmail}
              title={t.copyEmail}
            >
              <motion.span
                className="copy-icon"
                key={status === "copied" ? "copied" : "copy"}
                initial={false}
                animate={{ scale: [0.8, 1], opacity: [0.5, 1] }}
                transition={{ duration: 0.18 }}
              >
                <Icon name={status === "copied" ? "check" : "copy"} />
              </motion.span>
            </button>
          </div>
          <p
            className={status === "copyFailed" ? "copy-status" : "sr-only"}
            role="status"
          >
            {status ? t[status] : ""}
          </p>
          <div className="social-links">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              GitHub
              <Icon name="arrow" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <Icon name="arrow" />
            </a>
            <a href={PROFILE.resume} download>
              {t.download}
              <Icon name="download" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const t = useCopy();
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p>{t.footer}</p>
        <button
          className="text-button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            });
            document.querySelector("h1")?.focus({ preventScroll: true });
          }}
        >
          {t.footerBack}
          <span aria-hidden="true">↑</span>
        </button>
      </div>
      <p className="footer-name" aria-hidden="true">
        {t.name}
      </p>
      <p className="copyright">
        © {new Date().getFullYear()} {t.name}
      </p>
    </footer>
  );
}

function ProjectList() {
  const lang = useContext(Language);
  const t = useCopy();
  const [filter, setFilter] = useState("all");
  const visible = filterProjects(filter);
  return (
    <section
      className="work-section section-space"
      id="projects"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <Reveal>
          <h2 id="work-title">{t.selected}</h2>
        </Reveal>
        <Reveal>
          <p>{t.workIntro}</p>
        </Reveal>
      </div>
      <div className="filter-bar">
        <div
          className="filters"
          role="group"
          aria-label={lang === "en" ? "Filter projects" : "筛选项目"}
        >
          {filters.map((id) => (
            <button
              key={id}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {t.filters[id]}
            </button>
          ))}
        </div>
        <p className="project-count" role="status">
          {t.projectCount(visible.length)}
        </p>
      </div>
      <div className="project-list">
        {visible.map((project) => (
          <Reveal
            as="article"
            className={`project-row project-${project.id}`}
            key={project.id}
          >
            <Link
              className="project-image-link"
              to={`/projects/${project.id}`}
              aria-label={`${project.title}: ${t.readCase}`}
            >
              <img
                className="project-image"
                src={project.image}
                alt={project[lang].alt}
                width="1200"
                height="900"
                loading="lazy"
              />
              <span className="project-image-action" aria-hidden="true">
                <Icon name="arrow" />
              </span>
            </Link>
            <div className="project-description">
              <div className="project-title-row">
                <h3>
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <span>{project.year}</span>
              </div>
              <p>{project[lang].description}</p>
              <ul className="stack-list" aria-label={t.technology}>
                {project.stack.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="project-link" to={`/projects/${project.id}`}>
                {t.readCase}
                <Icon name="arrow" />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SystemExplorer({ photo = true }) {
  const lang = useContext(Language);
  const t = useCopy();
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  function moveTab(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % pipeline.length;
    if (event.key === "ArrowLeft")
      next = (index + pipeline.length - 1) % pipeline.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = pipeline.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }
  return (
    <section
      className={`system-section section-space ${photo ? "" : "system-case"}`}
      aria-labelledby="system-title"
    >
      <div className="section-heading">
        <Reveal>
          <h2 id="system-title">{t.systemTitle}</h2>
        </Reveal>
        <Reveal>
          <p>{t.systemIntro}</p>
        </Reveal>
      </div>
      <div className="system-layout">
        {photo && (
          <Reveal as="figure" className="system-photo">
            <img
              src="/assets/aurabot-team.webp"
              alt={projects[0][lang].galleryAlt}
              width="1200"
              height="900"
              loading="lazy"
            />
            <figcaption>{t.systemCaption}</figcaption>
          </Reveal>
        )}
        <Reveal className="system-explorer">
          <div
            className="pipeline-tabs"
            role="tablist"
            aria-label={
              lang === "en"
                ? "AuraBot system responsibilities"
                : "AuraBot 系统职责"
            }
          >
            {pipeline.map((step, i) => (
              <button
                key={step.id}
                id={`tab-${step.id}`}
                role="tab"
                aria-selected={i === active}
                aria-controls={`panel-${step.id}`}
                tabIndex={i === active ? 0 : -1}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => setActive(i)}
                onKeyDown={(event) => moveTab(event, i)}
              >
                <Icon name={step.id} />
                {step.label[lang]}
              </button>
            ))}
          </div>
          {pipeline.map((step, i) => (
            <div
              className="pipeline-panel"
              key={step.id}
              id={`panel-${step.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${step.id}`}
              hidden={i !== active}
              tabIndex={0}
            >
              <p className="pipeline-hardware">{step.hardware}</p>
              <p>{step[lang]}</p>
            </div>
          ))}
          {photo && (
            <Link className="project-link" to="/projects/aurabot">
              {t.readCase}
              <Icon name="arrow" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  const lang = useContext(Language);
  const t = useCopy();
  return (
    <>
      <Meta
        title={
          lang === "en" ? "Embedded systems & edge AI" : "嵌入式系统与端侧 AI"
        }
        description={t.intro}
      />
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-title" tabIndex={-1}>
          <motion.span
            initial={false}
            animate={{ y: [36, 0], opacity: [0.6, 1] }}
            transition={{ duration: 0.8 }}
          >
            {t.hero[0]}
          </motion.span>
          <motion.span
            initial={false}
            animate={{ y: [36, 0], opacity: [0.6, 1] }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            {t.hero[1]}
          </motion.span>
        </h1>
        <div className="hero-bottom">
          <div className="hero-intro">
            <p className="lead">{t.intro}</p>
            <p>{t.heroDetail}</p>
          </div>
          <div className="hero-actions">
            <Link className="button-primary" to="/#projects">
              {t.viewWork}
              <Icon name="down" className="action-icon" />
            </Link>
            <Link className="text-link" to="/about">
              {t.introLink}
            </Link>
          </div>
        </div>
      </section>
      <ProjectList />
      <SystemExplorer />
      <section
        className="expertise-section section-space"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="section-heading">
          <Reveal>
            <h2 id="skills-title">{t.expertiseTitle}</h2>
          </Reveal>
          <Reveal>
            <p>{t.expertiseIntro}</p>
          </Reveal>
        </div>
        <div className="expertise-list">
          {t.expertise.map(([title, body, evidence], i) => (
            <Reveal
              as="article"
              className="expertise-row"
              key={title}
              delay={i * 0.04}
            >
              <h3>{title}</h3>
              <p>{body}</p>
              <p className="expertise-evidence">{evidence}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        className="person-section section-space"
        aria-labelledby="person-title"
      >
        <Reveal className="person-photo">
          <img
            src="/assets/jeremy.webp"
            alt={
              lang === "en"
                ? "Jeremy Zheng outdoors holding a drink"
                : "郑剑铭在户外手持饮料"
            }
            width="900"
            height="1200"
            loading="lazy"
          />
        </Reveal>
        <div className="person-copy">
          <Reveal>
            <h2 id="person-title">{t.personTitle}</h2>
          </Reveal>
          <Reveal>
            <p className="lead">{t.personText}</p>
            <p>{t.educationShort}</p>
            <Link className="project-link" to="/about">
              {t.storyLink}
              <Icon name="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>
      <Contact />
    </>
  );
}

function About() {
  const lang = useContext(Language);
  const t = useCopy();
  return (
    <>
      <Meta title={t.about} description={t.aboutIntro} />
      <section className="about-hero">
        <div className="about-heading">
          <h1 tabIndex={-1}>
            {t.aboutTitle[0]}
            <br />
            {t.aboutTitle[1]}
          </h1>
          <p className="lead">{t.aboutIntro}</p>
          <a className="text-link" href={PROFILE.resume} download>
            {t.download}
            <Icon name="download" />
          </a>
        </div>
        <motion.figure
          className="about-photo"
          initial={false}
          animate={{ rotate: [-3, 0], y: [24, 0] }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src="/assets/jeremy.webp"
            alt={
              lang === "en"
                ? "Jeremy Zheng outside with a drink, enjoying time away from the workbench"
                : "工作台之外，郑剑铭手持饮料在户外散步"
            }
            width="900"
            height="1200"
            fetchPriority="high"
          />
          <figcaption>{t.photoCaption}</figcaption>
        </motion.figure>
      </section>
      <section
        className="about-story section-space"
        aria-labelledby="background-title"
      >
        <Reveal>
          <h2 id="background-title">{t.background}</h2>
          <p className="background-intro">{t.backgroundIntro}</p>
          <div className="toolkit">
            <h3 id="toolkit-title">{t.toolkitTitle}</h3>
            <ul aria-labelledby="toolkit-title">
              {toolkit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <div className="background-list">
          {t.backgroundItems.map(([title, preview, detail], i) => (
            <details
              className="background-item"
              name="background"
              key={title}
              open={i === 0}
            >
              <summary>
                <span>
                  <span className="background-title">{title}</span>
                  <span className="background-preview">{preview}</span>
                </span>
                <Icon name="plus" className="background-toggle" />
              </summary>
              <p>{detail}</p>
            </details>
          ))}
        </div>
      </section>
      <section
        className="education-section section-space"
        aria-labelledby="education-title"
      >
        <Reveal>
          <h2 id="education-title">{t.educationTitle}</h2>
        </Reveal>
        <div className="education-list">
          {t.education.map(([school, degree, date]) => (
            <Reveal as="article" key={school}>
              <h3>{school}</h3>
              <p>{degree}</p>
              <p className="secondary">{date}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        className="experience-section section-space"
        aria-labelledby="experience-title"
      >
        <Reveal>
          <h2 id="experience-title">{t.researchTitle}</h2>
        </Reveal>
        <div>
          {t.experience.map(([name, role, date, text]) => (
            <Reveal as="article" className="experience-row" key={name}>
              <div>
                <h3>{name}</h3>
                <p>{role}</p>
                <p className="secondary">{date}</p>
              </div>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        className="beyond-section section-space"
        aria-labelledby="beyond-title"
      >
        <Reveal>
          <h2 id="beyond-title">{t.beyond}</h2>
        </Reveal>
        <Reveal>
          <p className="lead">{t.beyondText}</p>
        </Reveal>
      </section>
      <Contact />
    </>
  );
}

function Project({ project }) {
  const lang = useContext(Language);
  const t = useCopy();
  const p = project[lang];
  const next = filterProjects("all").find((item) => item.id !== project.id);
  return (
    <>
      <Meta title={project.title} description={p.description} />
      <section className="case-hero">
        <Link className="back-link" to="/#projects">
          <span aria-hidden="true">←</span>
          {t.back}
        </Link>
        <h1 tabIndex={-1}>{project.title}</h1>
        <div className="case-intro">
          <p className="lead">{p.description}</p>
          <div className="case-actions">
            <a
              className="button-primary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              {t.code}
              <Icon name="arrow" />
            </a>
            {project.external && (
              <a
                className="text-link"
                href={project.external}
                target="_blank"
                rel="noreferrer"
              >
                {t.projectSite}
              </a>
            )}
          </div>
        </div>
        <Reveal as="figure" className={`case-image case-${project.id}`}>
          <img
            src={project.image}
            alt={p.alt}
            width="1200"
            height="900"
            fetchPriority="high"
          />
        </Reveal>
      </section>
      <dl className="case-meta">
        <div>
          <dt>{t.role}</dt>
          <dd>{p.role}</dd>
        </div>
        <div>
          <dt>{t.context}</dt>
          <dd>{p.context}</dd>
        </div>
        <div>
          <dt>{t.timeline}</dt>
          <dd>{p.dates}</dd>
        </div>
        <div>
          <dt>{t.technology}</dt>
          <dd>{project.stack.join(", ")}</dd>
        </div>
      </dl>
      <section
        className="case-copy section-space"
        aria-labelledby="overview-title"
      >
        <Reveal>
          <h2 id="overview-title">{t.overview}</h2>
        </Reveal>
        <Reveal>
          <p className="lead">{p.overview}</p>
        </Reveal>
      </section>
      <section
        className="case-copy section-space"
        aria-labelledby="contribution-title"
      >
        <Reveal>
          <h2 id="contribution-title">{t.contribution}</h2>
        </Reveal>
        <Reveal>
          <p>{p.contribution}</p>
        </Reveal>
      </section>
      {project.id === "aurabot" && <SystemExplorer photo={false} />}
      <section
        className="case-decisions section-space"
        aria-labelledby="decisions-title"
      >
        <Reveal>
          <h2 id="decisions-title">{t.decisions}</h2>
        </Reveal>
        <div>
          {p.decisions.map(([title, body]) => (
            <Reveal as="article" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      {project.gallery && (
        <Reveal as="figure" className="case-gallery">
          <img
            src={project.gallery}
            alt={p.galleryAlt}
            width="1200"
            height="900"
            loading="lazy"
          />
          <figcaption>{p.galleryAlt}</figcaption>
        </Reveal>
      )}
      <section
        className="case-copy section-space"
        aria-labelledby="outcome-title"
      >
        <Reveal>
          <h2 id="outcome-title">{t.outcome}</h2>
        </Reveal>
        <Reveal>
          <p className="lead">{p.outcome}</p>
        </Reveal>
      </section>
      <section
        className="case-copy section-space"
        aria-labelledby="reflection-title"
      >
        <Reveal>
          <h2 id="reflection-title">{t.reflection}</h2>
        </Reveal>
        <Reveal>
          <p>{p.reflection}</p>
        </Reveal>
      </section>
      <section
        className="next-project section-space"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">{t.next}</h2>
        <Link to={`/projects/${next.id}`}>
          <span>{next.title}</span>
          <Icon name="arrow" width="40" height="40" />
        </Link>
      </section>
      <Contact />
    </>
  );
}

function NotFound() {
  const t = useCopy();
  return (
    <section className="not-found">
      <Meta title={t.notFound} description={t.notFoundText} />
      <h1 tabIndex={-1}>{t.notFound}</h1>
      <p>{t.notFoundText}</p>
      <Link className="button-primary" to="/#projects">
        {t.viewWork}
      </Link>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("portfolio-language") === "zh" ? "zh" : "en";
    } catch {
      return "en";
    }
  });
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content =
      theme === "dark" ? "#181a1b" : "#f4f4ef";
    try {
      localStorage.setItem("portfolio-language", lang);
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }, [lang, theme]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash)
        document.getElementById(location.hash.slice(1))?.scrollIntoView({
          behavior:
            navigationType === "PUSH" &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "smooth"
              : "instant",
        });
      else window.scrollTo({ top: 0, behavior: "instant" });
      if (previousPath.current !== location.pathname) {
        document.querySelector("main")?.focus({ preventScroll: true });
        previousPath.current = location.pathname;
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.hash, navigationType]);
  return (
    <Language.Provider value={lang}>
      <MotionConfig reducedMotion="user">
        <a
          className="skip-link"
          href="#main"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("main")?.focus();
          }}
        >
          {copy[lang].skip}
        </a>
        <Header
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
        />
        <main id="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {projects.map((project) => (
              <Route
                key={project.id}
                path={`/projects/${project.id}`}
                element={<Project project={project} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </MotionConfig>
    </Language.Provider>
  );
}
