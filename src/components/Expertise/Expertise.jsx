import { useState } from 'react';
import './Expertise.css';

const TECH_STACK = [
  {
    name: 'JavaScript',
    category: 'Core',
    color: '#F7DF1E',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 16.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.6 1.9-1.8v-6H9.2v5.9c0 .7-.3 1-1 1-.5 0-.9-.3-1.2-.6l-1 1.2zm8.3-4.5c-1.3-.4-2-.8-2-1.6 0-.8.7-1.4 1.7-1.4.9 0 1.5.4 1.9 1.1l1.5-1c-.7-1.2-1.8-1.7-3.4-1.7-2.1 0-3.6 1.3-3.6 3.1 0 1.5.9 2.4 2.6 2.8 1.4.4 2.1.8 2.1 1.7 0 .9-.8 1.5-2 1.5-1.2 0-2.1-.6-2.6-1.5l-1.5 1c.8 1.6 2.2 2.2 4.1 2.2 2.4 0 3.9-1.3 3.9-3.3 0-1.8-1.1-2.6-2.7-3.2z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'Frontend',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    color: '#06B6D4',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Core',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M6 10.5h5.5M8.75 10.5v8M13.5 17c.6.9 1.6 1.5 2.8 1.5 1.5 0 2.4-.8 2.4-2 0-1.2-.7-1.7-2.1-2.2-1.8-.6-2.8-1.2-2.8-2.6 0-1.4 1.2-2.4 2.8-2.4 1.3 0 2.3.6 2.9 1.6l-1.3 1c-.4-.7-1-1-1.6-1-.8 0-1.3.4-1.3 1 0 .6.5 1 1.7 1.4 2 .7 3.2 1.3 3.2 2.8 0 1.7-1.4 2.7-3.2 2.7-1.8 0-2.9-.8-3.6-2l1.3-1.2z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    color: '#E34F26',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#E34F26">
        <path d="M3 2l1.65 18.52L12 23l7.35-2.48L21 2H3zm14.8 6.45h-8.9l.2 2.1h8.5l-.75 8.15L12 20.08l-4.85-1.38-.33-3.75h2.15l.17 1.95 2.86.78 2.86-.78.36-4.05H6.9l-.65-7.35h11.9l-.35 2.75z" />
      </svg>
    ),
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    color: '#1572B6',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#1572B6">
        <path d="M3 2l1.65 18.52L12 23l7.35-2.48L21 2H3zm14.9 6.45H7.1l.2 2.1h9.35l-.75 8.15L12 20.08l-3.8-1.05-.25-2.85h2.15l.12 1.35 1.78.48 1.78-.48.25-2.75H7.7l-.65-7.35h11.2l-.35 2.42z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    category: 'Tools',
    color: '#F05032',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#F05032">
        <path d="M21.62 10.43L13.57 2.38a2.3 2.3 0 00-3.25 0L8.43 4.27l3.1 3.1a2.15 2.15 0 012.72 2.75l2.98 2.98a2.16 2.16 0 11-1.53 1.51l-2.78-2.79v4.22a2.16 2.16 0 11-2.16-2.14v-4.3a2.16 2.16 0 01-1.16-2.83L6.5 5.67 2.38 9.79a2.3 2.3 0 000 3.25l8.05 8.05a2.3 2.3 0 003.25 0l7.94-7.94a2.3 2.3 0 000-3.25z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'Tools',
    color: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    category: 'Tools',
    color: '#646CFF',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M20.2 4.1L12.7 18.2c-.3.6-1.1.6-1.4 0L3.8 4.1c-.4-.7.2-1.5 1-1.3l7.2 1.6 7.2-1.6c.8-.2 1.4.6 1 1.3z" fill="#646CFF" />
        <path d="M12.9 3.2L7.3 14.5l5.2-1.8 1.8 5.7 4.2-12.8-5.6-2.4z" fill="#FFD62E" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    category: 'Design',
    color: '#F24E1E',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M8 12a4 4 0 110-8h4v8H8z" fill="#F24E1E" />
        <path d="M12 4h4a4 4 0 010 8h-4V4z" fill="#FF7262" />
        <path d="M12 12h4a4 4 0 010 8h-4v-8z" fill="#1ABCFE" />
        <path d="M8 20a4 4 0 010-8h4v4a4 4 0 01-4 4z" fill="#0ACF83" />
        <circle cx="8" cy="12" r="4" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#5FA04E',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#5FA04E">
        <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.9L12 19.6l-6.7-3.8V8.1L12 4.3l6.7 3.8v7.8z" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    name: 'VS Code',
    category: 'Tools',
    color: '#007ACC',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#007ACC">
        <path d="M17.5 2.2l-9.8 9.1L4.2 8.4 2 9.5l4.2 3.9L2 17.3l2.2 1.1 3.5-2.9 9.8 9.1 4.5-2.2V4.4l-4.5-2.2zm0 4.6v13.2l-7.2-6.6 7.2-6.6z" />
      </svg>
    ),
  },
];

export default function Expertise() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section className="expertise-section" id="skills">
      <div className="container">
        {/* Section Heading matching reference */}
        <div className="section-heading-wrapper">
          <span className="section-overline">Expertise</span>
          <h2 className="section-heading-title">Tech Stack &amp; Tools</h2>
        </div>

        {/* Tech Icon Tiles */}
        <div className="tech-stack-container">
          <div className="tech-stack-grid" role="list">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="tech-tile"
                role="listitem"
                onMouseEnter={() => setActiveTooltip(tech.name)}
                onMouseLeave={() => setActiveTooltip(null)}
                aria-label={tech.name}
              >
                <div className="tech-tile-icon">
                  {tech.icon}
                </div>
                {activeTooltip === tech.name && (
                  <div className="tech-tooltip">
                    <span className="tooltip-name">{tech.name}</span>
                    <span className="tooltip-cat">{tech.category}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
