import { resumeData } from "@/data/resume";
import "../styles/Experience.css"; // Import the CSS file

export default function Experience() {
  const { experience, education, certifications } = resumeData;

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">
            <span className="highlighted-text">Experience & Education</span>
          </h2>
          <p className="experience-subtitle">My professional journey and educational background</p>
        </div>

        <div className="experience-timeline-section">
          <h3 className="timeline-heading border-primary">Professional Experience</h3>

          <div className="timeline-container">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-flex">
                  <div className={`timeline-content ${index % 2 === 0 ? "text-right" : ""}`}>
                    <div className="timeline-card">
                      <h4 className="card-title text-primary">{job.title}</h4>
                      <p className="card-subtitle">{job.company}</p>
                      <p className="card-period">{job.period}</p>
                      <div className="card-details">
                        {job.responsibilities.map((responsibility, idx) => (
                          <p key={idx}>• {responsibility}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="timeline-line-container">
                    <div className="timeline-line bg-blue"></div>
                  </div>
                </div>
                <div className="timeline-dot bg-blue"></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="timeline-heading border-green">Education</h3>

          <div className="timeline-container">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className={`timeline-flex ${index % 2 !== 0 ? "reverse" : ""}`}>
                  <div className={`timeline-content ${index % 2 === 0 ? "text-right" : ""}`}>
                    <div className="timeline-card">
                      <h4 className="card-title text-green">{edu.degree}</h4>
                      <p className="card-subtitle">{edu.institution}</p>
                      <p className="card-period">{edu.period}</p>
                      <p className="card-percent">PERCENT: {edu.percentage}%</p>
                    </div>
                  </div>
                  <div className="timeline-line-container">
                    <div className="timeline-line bg-green"></div>
                  </div>
                </div>
                <div className="timeline-dot bg-green"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3 className="timeline-heading border-indigo">Certifications</h3>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-subtitle">{cert.issuedBy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
