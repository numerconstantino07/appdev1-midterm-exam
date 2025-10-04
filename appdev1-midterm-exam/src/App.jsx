function App() {
  return (
    <>
      {/* Navigation */}
      <nav id="navbar">
        <div className="nav-container">
          <div className="logo">Personal Shape</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="mobile-menu-toggle" id="mobileMenuToggle">
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobileMenu">
        <ul className="mobile-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
        <div className="hero-content">
          <div className="hero-subtitle">Creative Designer</div>
          <h1>Transforming Ideas Into Beautiful Experiences</h1>
          <p className="subtitle">
            I craft digital experiences that captivate, engage, and inspire through thoughtful design and innovative solutions.
          </p>
          <a href="#portfolio" className="cta-button">Explore My Work</a>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => document.getElementById('about').scrollIntoView()}
        ></div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content">
            <div className="about-image slide-in-left"></div>
            <div className="about-text slide-in-right">
              <h3>Passionate about creating meaningful digital experiences</h3>
              <p>
                With over 5 years of experience in digital design, I specialize in creating user-centered solutions that bridge the gap between functionality and aesthetics.
              </p>
              <p>
                I believe that great design is not just about how it looks, but how it works and how it makes people feel. Every project is an opportunity to solve problems and create connections that matter.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new technologies, sketching ideas, or seeking inspiration in nature and architecture.
              </p>
              <div className="skills">
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">Brand Identity</span>
                <span className="skill-tag">Motion Graphics</span>
                <span className="skill-tag">Prototyping</span>
                <span className="skill-tag">Design Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title fade-in">Featured Work</h2>
          <div className="portfolio-grid">
            {[
              {
                title: "E-commerce Platform",
                desc: "A modern, responsive e-commerce solution focusing on user experience and conversion optimization.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
              },
              {
                title: "Brand Identity System",
                desc: "Complete visual identity redesign for a tech startup, including logo, guidelines, and digital assets.",
                tech: ["Illustrator", "Photoshop", "Figma", "After Effects"],
              },
              {
                title: "Mobile App Design",
                desc: "Intuitive mobile app interface for a fitness tracking application with gamification elements.",
                tech: ["Figma", "Principle", "React Native", "Lottie"],
              },
              {
                title: "Dashboard Interface",
                desc: "Clean and functional dashboard design for data analytics with real-time visualization.",
                tech: ["Vue.js", "D3.js", "SCSS", "Chart.js"],
              },
              {
                title: "Marketing Website",
                desc: "Modern marketing website with animations and optimized conversion funnels.",
                tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
              },
              {
                title: "Creative Portfolio",
                desc: "Artistic portfolio website featuring immersive galleries and smooth transitions.",
                tech: ["React", "Three.js", "GSAP", "WebGL"],
              },
            ].map((item, index) => (
              <div className="portfolio-item" key={index}>
                <div className="portfolio-image"></div>
                <div className="portfolio-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className="portfolio-tech">
                    {item.tech.map((tech, i) => (
                      <span className="tech-tag" key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-floating-shapes">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`contact-shape contact-shape-${i}`}></div>
          ))}
        </div>
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title fade-in">Let's Work Together</h2>
            <p className="fade-in">
              Ready to bring your vision to life? Let's discuss how we can create something amazing together.
            </p>
            <form className="contact-form fade-in">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2025 Personal Shape. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Use</a>
              <a href="#sitemap">Sitemap</a>
              <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer">
                Provided by TemplateMo
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default App 