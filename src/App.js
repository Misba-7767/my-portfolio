import './App.css';
import profile from './profile.jpeg';

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <h2 className="logo">Misba Kounain</h2>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-flex">
          <div className="hero-text">
            <h1>Hi, I'm Misba Kounain 👋</h1>
            <p>Full Stack Developer | AI/ML Enthusiast</p>
          </div>

          <img src={profile} alt="profile" className="hero-img" />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>

        <div className="projects-grid">

          <div className="card">
            <h3>Air Quality Checker</h3>
            <p>ML based air quality validation system.</p>
            <a href="https://github.com/Misba-7767/Air_quality" target="_blank" rel="noopener noreferrer">
              View →
            </a>
          </div>

          <div className="card">
            <h3>Charity Jet</h3>
            <p>Donation website for social causes.</p>
            <a href="https://github.com/Misba-7767/WEB-PROJECT" target="_blank" rel="noopener noreferrer">
              View →
            </a>
          </div>

          <div className="card">
            <h3>Dev Tribe</h3>
            <p>Community learning platform.</p>
            <a href="https://github.com/Misba-7767/dev-tribe" target="_blank" rel="noopener noreferrer">
              View →
            </a>
          </div>

          <div className="card">
            <h3>Python Jupyter Template</h3>
            <p>Template for ML & Data Science projects.</p>
            <a href="https://github.com/Misba-7767/python-jupyter-template" target="_blank" rel="noopener noreferrer">
              View →
            </a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Let's Connect 🚀</h2>
        <p>Feel free to reach out to me</p>

        <div className="social-links">
          <a href="https://github.com/Misba-7767" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/misba-kounain-0858222b9/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href="mailto:kounain.7767@gmail.com">
            Email
          </a>

          <a href="https://x.com/kounain7767" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Misba Kounain. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
