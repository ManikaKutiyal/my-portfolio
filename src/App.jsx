import React from "react";
import "./styles.css"; // renamed for clarity

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce Website: AuraZone",
      image:
        "AuraZone.png",
      description:
        "A stylish, interactive quiz web app that reveals the user’s aura based on their responses. Blending personality insight with sleek design, AuraZone uses DOM manipulation and smooth transitions to deliver an engaging, self-reflective experience.",
      techStack: ["HTML5", "CSS3"],
      github: "https://github.com/ManikaKutiyal/Ecommerce",
      demo: "https://aurazone.netlify.app/",
    },
    {
      title: "Room Escape Game",
      image:
        "escape.png",
      description:
        "An interactive puzzle-based web game where users solve clues to uncover the secret password and escape the virtual room. Built with vanilla JS and CSS, it combines game logic, event handling, and immersive UI design to deliver a mini escape room experience.",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      github: "https://github.com/ManikaKutiyal/Escape-Room",
      demo: "https://roomescapegame.netlify.app/",
    },
    {
      title: "Digital Dog ",
      image:
        "digitalDog.png",
      description:
        "A fun and responsive dog-themed web app where users can fetch random dog images via API and even rename the site title. A lighthearted project showcasing DOM manipulation, API handling, and dynamic UI updates.",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Fetch API"],
      github: "https://github.com/ManikaKutiyal/DigitalDog",
      demo: "https://digitaldog.netlify.app/",
    },
    {
      title: "World Countries Data Visualization",
      image:
        "worldCountry.png",
      description:
        "An interactive, responsive web app to explore country data with real-time search, sorting, and dynamic graphs — built entirely with vanilla JS and custom CSS",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Fetch API", "Font Awesome"],
      github: "https://github.com/ManikaKutiyal/countries",
      demo: "https://webpagecountries.netlify.app/",
    },
  ];

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Netlify", level: 80 },
    { name: "Git/GitHub", level: 85 },
  ];

  const certifications = [
  {
    title: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
    issuer: "Deep Teaching Solutions",
    grade: 94.4,
    link: "https://www.coursera.org/account/accomplishments/records/ZFQA9H8BJRWH",
    icon: "fas fa-brain",
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    grade: 91.25,
    link: "https://www.coursera.org/account/accomplishments/records/70OFHZCVGUOS",
    icon: "fab fa-github",
  },
  {
    title: "Version Control",
    issuer: "Meta",
    grade: 100,
    link: "https://www.coursera.org/account/accomplishments/records/XEVN6BDE25MS",
    icon: "fas fa-code-branch",
  },
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    grade: 100,
    link: "https://www.coursera.org/account/accomplishments/records/H3DTQJEGNLJ9",
    icon: "fas fa-robot",
  },
];


  return (
    <div className="font-poppins">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <h1 className="logo">Manika Kutiyal</h1>

            {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {["Home", "About", "Projects", "Certifications", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? "active" : ""}`}
              >
                {item}
              </button>
            ))}
          </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button"
            >
              <div className="menu-icon">
                <span className={`bar1 ${isMenuOpen ? "open" : ""}`}></span>
                <span className={`bar2 ${isMenuOpen ? "open" : ""}`}></span>
                <span className={`bar3 ${isMenuOpen ? "open" : ""}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="nav-mobile">
              {["Home", "About", "Projects", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-mobile-link"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h2 className="hero-title">
                Hi, I'm <span className="highlight">Manika Kutiyal</span>
              </h2>
              <p className="hero-subtitle">
                Aspiring Web Developer | Creative Thinker | Learner
              </p>
              <div className="hero-buttons">
                <a href="resume.pdf" download className="btn-primary">
                <button className="btn-primary">Download Resume</button></a>
                <button className="btn-secondary" onClick={() => scrollToSection("contact")}>
                  Let's Connect
                </button>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-circle">
                <img
                  src="image.png"
                  alt="Manika Kutiyal"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="section-underline"></div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a passionate web development Learner with a love for creating beautiful, functional, and user-friendly websites. With a strong
                foundation in modern web technologies, I enjoy turning complex problems into simple, beautiful designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community. I believe in continuous learning
                and staying up-to-date with the latest industry trends.
              </p>
            </div>

            <div className="skills-section">
              <h3>Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-background">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-title">
            <h2>My Projects</h2>
            <div className="section-underline"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href={project.demo} className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Certifications Section */}
<section id="certifications" className="certifications-section">
  <div className="container">
    <div className="section-title">
      <h2>Certifications</h2>
      <div className="section-underline"></div>
    </div>

    <div className="certifications-grid">
      {certifications.map((cert, index) => (
        <a
          key={index}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-card"
          title={`${cert.title} - ${cert.issuer}`}
        >
          <div className="cert-icon">
            <i className={cert.icon}></i>
          </div>
          <div className="cert-details">
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <div className="cert-grade-bar">
              <div
                className="cert-grade-fill"
                style={{ width: `${cert.grade}%` }}
              ></div>
            </div>
            <p className="cert-grade-text">Grade Achieved: {cert.grade}%</p>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <div className="section-underline"></div>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="mailto:manika@example.com" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2025 Manika Kutiyal. All rights reserved.</p>
        </div>
      </footer>

      {/* Font Awesome CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
    </div>
  );
}

export default MainComponent;
