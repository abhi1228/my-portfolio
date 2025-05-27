import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-initial">AG</span>
              <span>Abhishek Gupta</span>
            </a>
            <p className="footer-subtitle">Web Developer</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/abhi1228"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-gupta-164468153"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:ag199680.ag@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Abhishek Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
