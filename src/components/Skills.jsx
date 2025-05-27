import { resumeData } from "@/data/resume";
import "../styles/Skills.css"; // Make sure this file is created

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="section-subtitle">
            My professional skillset and technologies I've been working with
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card frontend">
            <div className="skill-header">
              <div className="skill-icon frontend-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Frontend Development</h3>
            </div>
            <div className="skill-bars">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-bar">
                  <div className="bar-bg">
                    <div
                      className="bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card backend">
            <div className="skill-header">
              <div className="skill-icon backend-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Backend Development</h3>
            </div>
            <div className="skill-bars">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-bar">
                  <div className="bar-bg">
                    <div
                      className="bar-fill green"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tools-section">
          <h3 className="subsection-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {skills.tools.map((tool, index) => (
              <div key={index} className="tool-item">
                <i className={tool.icon}></i>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="soft-skills-section">
          <h3 className="subsection-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {skills.soft.map((skill, index) => (
              <div key={index} className="soft-skill-card">
                <div className="soft-skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
