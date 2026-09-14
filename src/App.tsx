import { motion } from 'framer-motion'
import profilePicture from './assets/profile/profile-picture.jpg'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  Menu,
  UserRound,
  X,
} from 'lucide-react'
import { useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'StyleIQ',
    category: 'Fashion Technology',
    description:
      'A fashion-focused mobile application built to help users discover products using Ai, manage their style preferences, save items, create looks, and manage their shopping experience.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Firebase',
      'Firestore',
      'Supabase',
    ],
    featured: true,
    link: 'https://github.com/ogumsamuel/StyleIQ',
  },
  {
    title: 'CashPilot',
    category: 'Fintech',
    description:
      'A modern financial application focused on helping users manage their finances through a clean and practical digital experience.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Firebase',
      "JavaScript",
      "Cloud Firestore",
      "Expo SecureStore",
      "Fraud & investigation system",
    ],
    featured: false,
    link: 'https://github.com/ogumsamuel/CashPilot',
  },
  {
    title: 'SD Fashion',
    category: 'Fashion Application',
    description:
      'A fashion application project focused on creating a modern digital shopping experience and connecting users with fashion products.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Firebase',
      'Firestore',
      'Supabase',
      "JavaScript",
    ],
    featured: false,
    link: 'https://github.com/ogumsamuel/SDFashion',
  },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Expo',
  'Firebase',
  'Firestore',
  'Supabase',
  'Git',
  'GitHub',
  'REST APIs',
  'Responsive Design',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          OS<span>.</span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's talk
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        {/* =========================
            HERO
        ========================= */}

        <section className="hero-section" id="home">
          <div className="hero-content">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="status-dot" />
              Software Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              I build digital
              <span> experiences </span>
              that solve real problems.
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              I am Ogum, Samuel Boniface, a Software Developer focused on
              building modern mobile and web applications with thoughtful
              interfaces, reliable technology, and practical solutions.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a href="#projects" className="button button-primary">
                View my work
                <ArrowDown size={18} />
              </a>

              <a href="#contact" className="button button-secondary">
                Contact me
                <ArrowDown size={18} />
              </a>

              
              <a href="/Ogum-Samuel-CV.pdf" 
              className="button button-secondary"
              download
              >
                Download CV
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Profile */}
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-placeholder">
              <img
                src={profilePicture}
                alt="Ogum Samuel"
              />
            </div>

            <div className="profile-note">
              <span>Software Developer</span>
              <small>Ogum Samuel</small>
            </div>
          </motion.div>
        </section>

        {/* =========================
            ABOUT
        ========================= */}

        <section className="section about-section" id="about">
          <div className="section-label">
            <UserRound size={18} />
            <span>About me</span>
          </div>

          <div className="about-grid">
            <h2>
              Turning ideas into
              <span> working software.</span>
            </h2>

            <div className="about-copy">
              <p>
                I enjoy turning ideas into useful digital products. My work
                spans mobile application development, frontend development,
                backend services, databases, authentication, and API
                integration.
              </p>

              <p>
                I focus on writing practical, maintainable software while
                creating interfaces that are simple for people to understand
                and use.
              </p>

              <div className="about-stats">
                <div>
                  <strong>03</strong>
                  <span>Featured projects</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Ideas to build</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SKILLS
        ========================= */}

        <section className="section skills-section" id="skills">
          <div className="section-label">
            <Code2 size={18} />
            <span>Skills & technologies</span>
          </div>

          <div className="skills-heading">
            <h2>Tools I use to build.</h2>

            <p>
              Technologies and tools I use across my development projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
              >
                <Code2 size={18} />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================
            PROJECTS
        ========================= */}

        <section className="section projects-section" id="projects">
          <div className="section-label">
            <BriefcaseBusiness size={18} />
            <span>Selected work</span>
          </div>

          <div className="projects-heading">
            <h2>Projects I'm building.</h2>

            <p>
              A selection of applications I've worked on and continue to
              develop.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.article
                className={
                  project.featured
                    ? 'project-card featured'
                    : 'project-card'
                }
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                {/* Project visual */}
                <div className="project-visual">
                  <div className="project-icon">
                    {project.title === 'StyleIQ' && (
                      <span className="project-letter">SQ</span>
                    )}

                    {project.title === 'CashPilot' && (
                      <span className="project-letter">CP</span>
                    )}

                    {project.title === 'SD Fashion' && (
                      <span className="project-letter">SD</span>
                    )}
                  </div>

                  <span className="project-number">
                    0{index + 1}
                  </span>
                </div>

                {/* Project information */}
                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="project-link"
                    target={
                      project.link.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      project.link.startsWith('http')
                        ? 'noreferrer'
                        : undefined
                    }
                  >
                    View project
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* =========================
            CTA
        ========================= */}

        <section className="cta-section">
          <div>
            <span className="section-label">
              <Mail size={18} />
              <span>Let's work together</span>
            </span>

            <h2>
              Have an idea?
              <br />
              Let's build it.
            </h2>

            <p>
              I'm always interested in creating useful products and solving
              interesting problems with technology.
            </p>

            <a href="#contact" className="button button-primary">
              Get in touch
              <ArrowUpDown size={18} />
            </a>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================= */}

        <section className="section contact-section" id="contact">
          <div className="section-label">
            <Mail size={18} />
            <span>Contact</span>
          </div>

          <div className="contact-grid">
            <div>
              <h2>Let's connect.</h2>

              <p>
                Whether you're looking for a Software Developer, have a
                project idea, or simply want to connect, I'd be happy to hear
                from you.
              </p>
            </div>

            <div className="contact-links">
              {/* Email */}
              <a
                href="mailto:ogumsamuel12@gmail.com"
                className="contact-link"
              >
                <Mail size={20} />

                <span>
                  <small>Email</small>
                  ogumsamuel12@gmail.com
                </span>

                <ArrowUpRight size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ogumsamuel"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="brand-icon">🐙</span>

                <span>
                  <small>GitHub</small>
                  github.com/ogumsamuel
                </span>

                <ArrowUpRight size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="http://linkedin.com/in/ogumsamuel"
                 target="_blank"
                rel="noreferrer"

                className="contact-link"
              >
                <span className="brand-icon">💼</span>

                <span>
                  <small>LinkedIn</small>
                  linkedin.com/in/ogumsamuel
                </span>

                <ArrowUpRight size={18} />
              </a>

              {/* Phone */}
              <a
                href="tel:+2348149418622"
                className="contact-link"
              >
                <span className="brand-icon">📞</span>

                <span>
                  <small>Phone</small>
                  +234 814 941 8622
                </span>

                <ArrowUpRight size={18} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348149418622"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="brand-icon">💬</span>

                <span>
                  <small>WhatsApp</small>
                  +234 814 941 8622
                </span>

                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">
        <div>
          <strong>Ogum, Samuel</strong>
          <span>Software Developer</span>
        </div>

        <p>
          ©️ {new Date().getFullYear()} Ogum, Samuel. Built with React.
        </p>

        <a
          href="#home"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </footer>
    </div>
  )
}

export default App