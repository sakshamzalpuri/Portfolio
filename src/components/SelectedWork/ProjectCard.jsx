import { Code, Globe } from 'lucide-react';

export default function ProjectCard({ project }){
    return(
        <article className="project-card" key={project.id}>
            <div className={`project-preview project-preview-${project.previewTone}`}>
              <div className="project-preview-top">
                <span />
                <span />
                <span />
              </div>

              <div className="project-preview-window">
                <strong>{project.title}</strong>
                <p>{project.category}</p>
              </div>
            </div>

            <div className="project-meta">
              <div>
                <span className="project-label">Project {project.id}</span>
                <h3>{project.title}</h3>
              </div>

              <span className="project-status">{project.status}</span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-footer">
              <div className="project-tags">
                {project.techStack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
                <small>{project.extraTech}</small>
              </div>

              <div className="project-icons" aria-label={`${project.title} links`}>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live`}>
                  <Globe size={22} strokeWidth={1.5} />
                </a>
                <a href={project.links.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`}>
                  <Code size={22} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </article>
    )
}