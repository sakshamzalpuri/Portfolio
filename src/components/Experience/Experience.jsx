import { useState } from 'react';
import { ChevronDown, ChevronUp, Code2, ArrowUpRight } from 'lucide-react';
import './Experience.css';

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

const EXPERIENCES = [
  {
    id: 'frontend-dev',
    title: 'Front-End AI Engineering Intern',
    subtitle: 'FlyRank AI',
    period: 'Jul 2026 - Present',
    type: 'INTERNSHIP',
    icon: <Code2 size={20} className="exp-icon-svg" />,
    iconBg: '#f0a060',
    bullets: [
      'Audited 12 recurring development workflows to identify where AI tooling helps versus hurts, then built a decision framework now applied across every project.',
      'Shipped a full React app using AI as a build partner, manually reviewing, correcting, and refactoring every AI-generated piece before merge.',
      'Built three accessible React + TypeScript components from scratch - modal, tabs, and disclosure - following W3C ARIA Authoring Practices with keyboard support and correct focus management.',
    ],
    actionLink: {
      text: 'VIEW PROJECTS',
      href: '#work',
    },
  },
  {
    id: 'open-source',
    title: 'Working',
    subtitle: 'Currently updating this experience',
    period: 'On working',
    type: 'COMING SOON',
    icon: <GithubIcon size={20} />,
    iconBg: '#27272a',
    bullets: [
      'Details will be added soon.',
    ],
    actionLink: {
      text: 'VIEW PROJECTS',
      href: '#work',
    },
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState('frontend-dev');

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="experience-section container" id="experience">
      <div className="section-heading-wrapper">
        <span className="section-overline">Career Path</span>
        <h2 className="section-heading-title">Experience &amp; Impact</h2>
      </div>

      <div className="experience-card-container">
        {EXPERIENCES.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div
              key={exp.id}
              className={`experience-item ${isExpanded ? 'is-expanded' : ''}`}
            >
              {/* Experience Header */}
              <button
                type="button"
                className="experience-header"
                onClick={() => toggleExpand(exp.id)}
                aria-expanded={isExpanded}
              >
                <div className="exp-left">
                  <div
                    className="exp-icon-badge"
                    style={{ backgroundColor: exp.iconBg }}
                  >
                    {exp.icon}
                  </div>
                  <div className="exp-info">
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-subtitle">{exp.subtitle}</p>
                  </div>
                </div>

                <div className="exp-right">
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                  <span className="exp-chevron">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </div>
              </button>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="experience-body">
                  <ul className="exp-bullet-list">
                    {exp.bullets.map((bullet, index) => (
                      <li key={index} className="exp-bullet-item">
                        <span className="bullet-caret">&gt;</span>
                        <span className="bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.actionLink && (
                    <div className="exp-action-row">
                      <a
                        href={exp.actionLink.href}
                        target={exp.actionLink.external ? '_blank' : undefined}
                        rel={exp.actionLink.external ? 'noopener noreferrer' : undefined}
                        className="exp-action-link"
                      >
                        {exp.actionLink.text} <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
