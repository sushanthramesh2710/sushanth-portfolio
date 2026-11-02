
import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  Menu,
  X,
  Sparkles,
  Gamepad2,
  Cpu,
  Palette,
  ExternalLink,
  GraduationCap,
  ChevronDown,
  Phone
} from "lucide-react";

import "./App.css";

// NAVIGATION
const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// SKILLS
const skills = [
  {
    number: "01",
    icon: Code2,
    title: "Programming",
    description: "Building logic and developing applications.",
    technologies: ["Java", "Python", "C"],
  },
  {
    number: "02",
    icon: Palette,
    title: "Web & Design",
    description: "Exploring digital interfaces and creative workflows.",
    technologies: ["HTML", "CSS", "Figma"],
  },
  {
    number: "03",
    icon: Cpu,
    title: "Hardware & IoT",
    description: "Connecting physical systems with technology.",
    technologies: ["Arduino", "ESP32", "Sensors"],
  },
  {
    number: "04",
    icon: Gamepad2,
    title: "Development Tools",
    description: "Learning, experimenting and building projects.",
    technologies: ["Git", "GitHub", "VS Code"],
  },
];

// PROJECTS
const projects = [
  {
    number: "01",
    category: "ACCESSIBILITY · AI",
    status: "ONGOING PROJECT",
    title: "AI-Assisted Blind Walking Assist System",
    description:
      "An assistive technology project designed to help visually impaired users identify obstacles and receive directional voice guidance.",
    details:
      "Combines distance sensing, object identification and voice-based guidance to explore safer navigation assistance.",
    technologies: [
      "Java",
      "ESP32",
      "Ultrasonic Sensors",
      "YOLO",
      "Voice Guidance",
    ],
    icon: Cpu,
  },
  {
    number: "02",
    category: "MACHINE LEARNING · NLP",
    status: "ACADEMIC PROJECT",
    title: "Sentiment Analysis for Movie Reviews",
    description:
      "A machine learning project that analyses movie reviews and classifies their sentiment as positive or negative.",
    details:
      "Explores text preprocessing, natural language processing and sentiment classification.",
    technologies: ["Python", "Scikit-learn", "NLP"],
    icon: Code2,
  },
  {
    number: "03",
    category: "INTERNET OF THINGS",
    status: "ACADEMIC PROJECT",
    title: "Smart Agriculture Using IoT",
    description:
      "An IoT-based smart irrigation concept that monitors soil moisture and automates water supply.",
    details:
      "Explores sensor-based monitoring and automation for more efficient water management.",
    technologies: ["Arduino", "Soil Moisture Sensor", "IoT"],
    icon: Cpu,
  },
];

// CERTIFICATIONS
const certifications = [
  "Network Defense",
  "Python Programming — NPTEL",
  "Introduction to Modern AI",
  "HTML Essentials",
  "Security and Connectivity Support",
];

// ANIMATION
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// REVEAL COMPONENT
function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// SECTION HEADING
function SectionHeading({ label, number }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <span className="section-number">{number}</span>
    </div>
  );
}

// MAIN APP
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* NAVIGATION */}

      <header className="navbar">

        <a href="#home" className="brand" onClick={closeMenu}>
          S<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Connect <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>

      <main>

        {/* HERO */}

        <section className="hero" id="home">

          <div className="hero-grid" />

          <div className="hero-content">

            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="availability-dot" />
              OPEN TO INTERNSHIP OPPORTUNITIES
            </motion.div>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
            >
              HELLO, I'M
            </motion.p>

            {/* UPDATED NAME */}

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.8 }}
            >
              SUSHANTH<span>.</span>R
            </motion.h1>

            <motion.h2
              className="hero-tagline"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              CREATIVE MIND.
              <br />
              <span>TECHNICAL SOUL.</span>
            </motion.h2>

            {/* VICE PRESIDENT DESIGNATION */}

            <motion.div
              className="hero-role"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <span className="role-line" />
              <span>VICE PRESIDENT</span>
              <span className="role-divider">/</span>
              <span className="role-organization">D2ES</span>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              A Computer Science &amp; Design student passionate about game
              development, creative technology and building meaningful digital
              experiences.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.7 }}
            >
              <a
                href="https://github.com/sushanthramesh2710"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={21} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness size={21} />
              </a>

              <a
                href="mailto:Sushanthramesh2710@gmail.com"
                aria-label="Email"
              >
                <Mail size={21} />
              </a>
            </motion.div>

            <div className="scroll-indicator">
              SCROLL TO EXPLORE <ChevronDown size={17} />
            </div>

          </div>

          {/* HERO PORTRAIT */}

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 45, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >

            <div className="portrait-glow" />

            <div className="portrait-frame">
              <img
                src="/images/profile.jpg.jpeg"
                alt="Portrait of Sushanth"
                className="profile-photo"
              />
            </div>

            <div className="floating-card card-top">
              <Sparkles size={23} />
              <div>
                <strong>DESIGN</strong>
                <small>Creative thinking</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <Code2 size={23} />
              <div>
                <strong>DEVELOP</strong>
                <small>Building solutions</small>
              </div>
            </div>

            <span className="portrait-caption">
              CREATIVE TECHNOLOGIST / 2026
            </span>

          </motion.div>

        </section>

        {/* ABOUT */}

        <section className="about-section section" id="about">

          <Reveal>
            <SectionHeading
              label="01 — GET TO KNOW ME"
              number="ABOUT / 001"
            />
          </Reveal>

          <div className="about-grid">

            <Reveal className="about-main">

              <span className="eyebrow">
                A LITTLE ABOUT MYSELF
              </span>

              <h2>
                Not just building
                <span> technology.</span>
                <br />
                Building experiences.
              </h2>

              <p>
                I'm Sushanth R, a Computer Science and Design student at SRM
                Easwari Engineering College, Chennai. I enjoy exploring the
                intersection of technology, creativity and problem-solving.
              </p>

              <p>
                From developing intelligent accessibility solutions to
                experimenting with machine learning and IoT, I enjoy turning
                ideas into meaningful real-world applications.
              </p>

              <p>
                I'm particularly interested in game development, interactive
                experiences and creative technologies. I'm always looking for
                opportunities to learn, experiment and contribute to impactful
                projects.
              </p>

            </Reveal>

            <Reveal className="about-side" delay={0.2}>

              <div className="about-stat">
                <span className="stat-number">8.25</span>
                <span>ACADEMIC CGPA</span>
              </div>

              <div className="about-stat">
                <span className="stat-number">2025–29</span>
                <span>ENGINEERING JOURNEY</span>
              </div>

              <div className="about-stat">
                <span className="stat-number">D2ES</span>
                <span>VICE PRESIDENT</span>
              </div>

              <div className="about-quote">
                "Curiosity drives innovation. Creativity gives it direction."
              </div>

            </Reveal>

          </div>

        </section>

        {/* EXPERTISE */}

        <section className="skills-section section" id="skills">

          <Reveal>

            <SectionHeading
              label="02 — MY EXPERTISE"
              number="SKILLS / 002"
            />

            <h2 className="section-title">
              Tools I use.
              <span> Ideas I explore.</span>
            </h2>

            <p className="section-description">
              A growing toolkit built through academic learning,
              experimentation and practical projects.
            </p>

          </Reveal>

          <div className="skills-grid">

            {skills.map((skill, index) => {

              const Icon = skill.icon;

              return (
                <Reveal key={skill.number} delay={index * 0.1}>

                  <div className="skill-card">

                    <div className="skill-card-top">
                      <span className="skill-index">
                        {skill.number}
                      </span>
                      <Icon size={25} />
                    </div>

                    <h3>{skill.title}</h3>

                    <p>{skill.description}</p>

                    <div className="skill-tags">
                      {skill.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                  </div>

                </Reveal>
              );

            })}

          </div>

          <p className="skills-note">
            Always learning. Always experimenting.
          </p>

        </section>

        {/* PROJECTS */}

        <section className="projects-section section" id="projects">

          <Reveal>

            <SectionHeading
              label="03 — SELECTED WORK"
              number="PROJECTS / 003"
            />

            <h2 className="section-title">
              Ideas transformed into
              <span> experiences.</span>
            </h2>

            <p className="section-description">
              A collection of academic explorations, technical experiments and
              solutions built around real-world problems.
            </p>

          </Reveal>

          <div className="project-list">

            {projects.map((project, index) => {

              const Icon = project.icon;

              return (
                <Reveal key={project.number} delay={index * 0.12}>

                  <article className="project-card">

                    <div className="project-side">

                      <span className="project-number">
                        {project.number}
                      </span>

                      <Icon size={55} strokeWidth={1} />

                      <span className="project-category">
                        {project.category}
                      </span>

                    </div>

                    <div className="project-content">

                      <span className="project-status">
                        {project.status}
                      </span>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      <p className="project-details">
                        {project.details}
                      </p>

                      <div className="skill-tags">
                        {project.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                    </div>

                    <div className="project-arrow">
                      <ArrowUpRight size={23} />
                    </div>

                  </article>

                </Reveal>
              );

            })}

          </div>

        </section>

        {/* LEADERSHIP */}

        <section className="leadership-section section" id="leadership">

          <Reveal>

            <SectionHeading
              label="04 — BEYOND THE CODE"
              number="LEADERSHIP / 004"
            />

          </Reveal>

          <Reveal>

            <div className="leadership-card">

              <div className="leadership-mark">
                D2ES<span>.</span>
              </div>

              <div className="leadership-content">

                <span className="project-status">
                  STUDENT LEADERSHIP
                </span>

                <h2>Vice President</h2>

                <h3>Design Driven Engineering Society</h3>

                <p>
                  Serving as Vice President of the departmental student
                  association for Computer Science and Design at SRM Easwari
                  Engineering College.
                </p>

                <div className="skill-tags">
                  <span>Leadership</span>
                  <span>Teamwork</span>
                  <span>Student Community</span>
                </div>

              </div>

              <BriefcaseBusiness
                className="leadership-icon"
                size={45}
              />

            </div>

          </Reveal>

        </section>

        {/* EDUCATION */}

        <section className="education-section section" id="education">

          <Reveal>

            <SectionHeading
              label="05 — MY JOURNEY"
              number="EDUCATION / 005"
            />

            <div className="education-card">

              <div className="education-icon">
                <GraduationCap size={32} />
              </div>

              <div className="education-content">

                <span className="project-status">
                  2025 — 2029
                </span>

                <h2>SRM Easwari Engineering College</h2>

                <p>Bachelor of Engineering</p>

                <h3>Computer Science &amp; Design</h3>

              </div>

              <div className="education-cgpa">

                <span>CURRENT CGPA</span>

                <strong>8.25</strong>

                <small>/ 10</small>

              </div>

            </div>

          </Reveal>

          <Reveal>

            <h2 className="certification-title">
              Certifications <span>&amp; Learning.</span>
            </h2>

            <div className="certification-grid">

              {certifications.map((certificate, index) => (

                <div
                  className="certificate-item"
                  key={certificate}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{certificate}</strong>

                  <ArrowUpRight size={16} />

                </div>

              ))}

            </div>

          </Reveal>

        </section>

        {/* CONTACT */}

        <section className="contact-section section" id="contact">

          <Reveal>

            <SectionHeading
              label="06 — LET'S CONNECT"
              number="CONTACT / 006"
            />

            <span className="eyebrow">
              HAVE AN INTERESTING OPPORTUNITY?
            </span>

            <h2>
              Let's build
              <span> something meaningful.</span>
            </h2>

            <p>
              I'm open to internship opportunities, collaborations and
              exciting projects across technology and creative fields.
              Have an idea or opportunity? Let's connect.
            </p>

            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="primary-button contact-button"
            >
              Get In Touch <ArrowUpRight size={19} />
            </a>

            
<div className="contact-socials">

  <a href="tel:+919150711001" aria-label="Call Sushanth">
    <Phone size={19} />
    +91 91507 11001
    <ArrowUpRight size={13} />
  </a>

  <a href="mailto:Sushanthramesh2710@gmail.com">
    <Mail size={19} />
    Email Me
    <ArrowUpRight size={13} />
  </a>

  <a
    href="https://github.com/sushanthramesh2710"
    target="_blank"
    rel="noreferrer"
  >
    <Code2 size={19} />
    GitHub
    <ExternalLink size={13} />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noreferrer"
  >
    <BriefcaseBusiness size={19} />
    LinkedIn
    <ExternalLink size={13} />
  </a>

</div>


          </Reveal>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <a href="#home" className="brand">
          S<span>.</span>
        </a>

        <p>
          Designed &amp; built with curiosity by Sushanth R.
        </p>

        <span>
          © 2026 · ALL RIGHTS RESERVED
        </span>

      </footer>

      {/* BACK TO TOP */}

      <a
        href="#home"
        className="back-to-top"
        aria-label="Back to top"
      >
        <ArrowUpRight size={19} />
      </a>

    </div>
  );
}

export default App;
