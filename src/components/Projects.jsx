import { resumeData } from "@/data/resume";
import "../styles/Projects.css";

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">
            <span className="projects-gradient-text">Featured Projects</span>
          </h2>
          <p className="projects-subtitle">Check out some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon-container">
                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`project-tech-tag ${tech.bgColor} ${tech.textColor}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className={`${link.icon} mr-2`}></i>
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
