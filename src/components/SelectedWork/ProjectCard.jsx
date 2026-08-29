import { Globe, Code2 } from 'lucide-react';

function getTechIcon(name) {
  const lower = name.toLowerCase();
  if (lower.includes('html')) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#E34F26">
        <path d="M3 2l1.65 18.52L12 23l7.35-2.48L21 2H3zm14.8 6.45h-8.9l.2 2.1h8.5l-.75 8.15L12 20.08l-4.85-1.38-.33-3.75h2.15l.17 1.95 2.86.78 2.86-.78.36-4.05H6.9l-.65-7.35h11.9l-.35 2.75z" />
      </svg>
    );
  }
  if (lower.includes('css') && !lower.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#1572B6">
        <path d="M3 2l1.65 18.52L12 23l7.35-2.48L21 2H3zm14.9 6.45H7.1l.2 2.1h9.35l-.75 8.15L12 20.08l-3.8-1.05-.25-2.85h2.15l.12 1.35 1.78.48 1.78-.48.25-2.75H7.7l-.65-7.35h11.2l-.35 2.42z" />
      </svg>
    );
  }
  if (lower.includes('javascript') || lower === 'js') {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 16.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.6 1.9-1.8v-6H9.2v5.9c0 .7-.3 1-1 1-.5 0-.9-.3-1.2-.6l-1 1.2zm8.3-4.5c-1.3-.4-2-.8-2-1.6 0-.8.7-1.4 1.7-1.4.9 0 1.5.4 1.9 1.1l1.5-1c-.7-1.2-1.8-1.7-3.4-1.7-2.1 0-3.6 1.3-3.6 3.1 0 1.5.9 2.4 2.6 2.8 1.4.4 2.1.8 2.1 1.7 0 .9-.8 1.5-2 1.5-1.2 0-2.1-.6-2.6-1.5l-1.5 1c.8 1.6 2.2 2.2 4.1 2.2 2.4 0 3.9-1.3 3.9-3.3 0-1.8-1.1-2.6-2.7-3.2z" fill="#000000" />
      </svg>
    );
  }
  if (lower.includes('react')) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#61DAFB" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }
  if (lower.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    );
  }
  if (lower.includes('github') || lower.includes('git')) {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="#ffffff">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  if (lower.includes('typescript') || lower === 'ts') {
    return (
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M6 10.5h5.5M8.75 10.5v8M13.5 17c.6.9 1.6 1.5 2.8 1.5 1.5 0 2.4-.8 2.4-2 0-1.2-.7-1.7-2.1-2.2-1.8-.6-2.8-1.2-2.8-2.6 0-1.4 1.2-2.4 2.8-2.4 1.3 0 2.3.6 2.9 1.6l-1.3 1c-.4-.7-1-1-1.6-1-.8 0-1.3.4-1.3 1 0 .6.5 1 1.7 1.4 2 .7 3.2 1.3 3.2 2.8 0 1.7-1.4 2.7-3.2 2.7-1.8 0-2.9-.8-3.6-2l1.3-1.2z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return null;
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" key={project.id}>
      {/* Top Preview Card */}
      <div className={`project-preview project-preview-${project.previewTone || 'blue'}`}>
        <div className="project-preview-top-bar">
          <div className="preview-window-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="preview-browser-url">github-finder.app</span>
        </div>

        <div className="project-preview-inner">
          <div className="preview-badge-pill">
            <span>Live Project</span>
          </div>
          <h4 className="preview-headline">{project.title}</h4>
          <p className="preview-tagline">{project.category}</p>
        </div>
      </div>

      {/* Card Info & Meta */}
      <div className="project-info-section">
        <div className="project-title-row">
          <h3 className="project-name">{project.title}</h3>
          <span className="project-live-badge">
            <span className="live-status-dot"></span>
            {project.status || 'Live'}
          </span>
        </div>

        <p className="project-category">{project.category}</p>

        <p className="project-description">{project.description}</p>

        {/* Card Footer: Tech Stack + Links */}
        <div className="project-footer">
          <div className="project-tech-badges">
            {project.techStack.map((tech) => {
              const icon = getTechIcon(tech);
              return (
                <span key={tech} className="tech-badge-item">
                  {icon && <span className="tech-badge-icon">{icon}</span>}
                  <span>{tech}</span>
                </span>
              );
            })}
            {project.extraTech && (
              <span className="tech-badge-extra">{project.extraTech}</span>
            )}
          </div>

          <div className="project-action-icons" aria-label={`${project.title} links`}>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="action-icon-link"
                title="Live Demo"
              >
                <Globe size={18} />
              </a>
            )}
            {project.links.source && (
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code`}
                className="action-icon-link"
                title="Source Code"
              >
                <Code2 size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}