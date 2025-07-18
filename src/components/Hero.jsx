import React from "react";
import { resumeData } from "../data/resume";
import "../styles/Hero.css";

export default function Hero() {
  const { contact, profile } = resumeData;

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div>
          <h1>
            <span className="block">Hi, I'm</span>
            <span className="text-primary">Abhishek Gupta</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p>{profile}</p>
          <div className="flex flex-wrap gap-4">
            {/* <a
              style={{ marginRight: "10px" }}
              href="#contact"
              className="btn btn-primary"
            >
              <i
                className="fas fa-envelope"
                style={{ marginRight: "10px" }}
              ></i>
              Contact Me
            </a> */}
            <a href="#projects" className="btn btn-outline">
              <i className="fas fa-code" style={{ marginRight: "0.5rem" }}></i>
              View Projects
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/abhi1228"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-gupta-164468153"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="flex items-center mb-6">
            <div className="avatar">AG</div>
            <div>
              <h3>Abhishek Gupta</h3>
              <p style={{ color: "#9ca3af" }}>Web Developer</p>
            </div>
          </div>
          <div>
            <div className="contact-info">
              <i className="fas fa-map-marker-alt"></i>
              <span>{contact.location}</span>
            </div>
            <div className="contact-info">
              <i className="fas fa-envelope"></i>
              <span>{contact.email}</span>
            </div>
            <div className="contact-info">
              <i className="fas fa-phone"></i>
              <span>{contact.phone}</span>
            </div>
          </div>
          <div className="tech-stack">
            <h4>Tech Stack</h4>
            <div className="tech-item">
              <span>React</span>
              <span>NextJs</span>
              <span>JavaScript</span>
              <span>Html</span>
              <span>CSS</span>
              <span>Tailwind</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Firebase</span>
              <span>PostgreSQL</span>
              <span>SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
