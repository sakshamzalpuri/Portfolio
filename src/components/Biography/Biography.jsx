import { useState } from 'react';
import './Biography.css';

const ABOUT_SKILLS = [
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#61DAFB" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 16.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.6 1.9-1.8v-6H9.2v5.9c0 .7-.3 1-1 1-.5 0-.9-.3-1.2-.6l-1 1.2zm8.3-4.5c-1.3-.4-2-.8-2-1.6 0-.8.7-1.4 1.7-1.4.9 0 1.5.4 1.9 1.1l1.5-1c-.7-1.2-1.8-1.7-3.4-1.7-2.1 0-3.6 1.3-3.6 3.1 0 1.5.9 2.4 2.6 2.8 1.4.4 2.1.8 2.1 1.7 0 .9-.8 1.5-2 1.5-1.2 0-2.1-.6-2.6-1.5l-1.5 1c.8 1.6 2.2 2.2 4.1 2.2 2.4 0 3.9-1.3 3.9-3.3 0-1.8-1.1-2.6-2.7-3.2z" fill="#000000" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#F05032">
        <path d="M21.62 10.43L13.57 2.38a2.3 2.3 0 00-3.25 0L8.43 4.27l3.1 3.1a2.15 2.15 0 012.72 2.75l2.98 2.98a2.16 2.16 0 11-1.53 1.51l-2.78-2.79v4.22a2.16 2.16 0 11-2.16-2.14v-4.3a2.16 2.16 0 01-1.16-2.83L6.5 5.67 2.38 9.79a2.3 2.3 0 000 3.25l8.05 8.05a2.3 2.3 0 003.25 0l7.94-7.94a2.3 2.3 0 000-3.25z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M6 10.5h5.5M8.75 10.5v8M13.5 17c.6.9 1.6 1.5 2.8 1.5 1.5 0 2.4-.8 2.4-2 0-1.2-.7-1.7-2.1-2.2-1.8-.6-2.8-1.2-2.8-2.6 0-1.4 1.2-2.4 2.8-2.4 1.3 0 2.3.6 2.9 1.6l-1.3 1c-.4-.7-1-1-1.6-1-.8 0-1.3.4-1.3 1 0 .6.5 1 1.7 1.4 2 .7 3.2 1.3 3.2 2.8 0 1.7-1.4 2.7-3.2 2.7-1.8 0-2.9-.8-3.6-2l1.3-1.2z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Biography() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="about-me-section container" id="about">
      {/* Section Header */}
      <div className="section-heading-wrapper">
        <span className="section-overline">About</span>
        <h2 className="section-heading-title">Me</h2>
      </div>

      {/* Profile Card Layout matching Reference */}
      <div className="about-profile-card">
        {/* Left Profile Avatar Image */}
        <div className="about-avatar-wrapper">
          {!avatarError ? (
            <img
              src="https://github.com/sakshamzalpuri.png"
              alt="Saksham Zalpuri"
              className="about-avatar-img"
              onError={() => setAvatarError(true)}
            />
          ) : (
            <div className="about-avatar-fallback">
              <span>SZ</span>
            </div>
          )}
        </div>

        {/* Right Info Content */}
        <div className="about-info-wrapper">
          <h3 className="about-name">Saksham Zalpuri</h3>

          <p className="about-description">
            I'm a frontend developer focused on responsive, accessible, performant
            web apps — turning ideas into production-ready products while
            sharpening my React and full-stack skills.
          </p>

          {/* Skills Row */}
          <div className="about-skills-block">
            <span className="about-skills-label">Skills</span>
            <div className="about-skills-icons" role="list">
              {ABOUT_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="about-skill-tile"
                  title={skill.name}
                  role="listitem"
                  aria-label={skill.name}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
