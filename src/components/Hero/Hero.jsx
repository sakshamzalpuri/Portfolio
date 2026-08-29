import { FileText, Send, Mail } from 'lucide-react';
import heroBanner from "../../../assets/hero.jpg";
import './Hero.css';

function LinkedInIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
        </svg>
    );
}

function GithubIcon({ size = 20 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
    );
}

export default function Hero() {
    return (
        <section className="hero-section container">
            {/* Top Banner Card & Avatar */}
            <div className="hero-banner-wrapper">
                <div className="hero-banner-card">
                    <img
                        src={heroBanner}
                        alt="Saksham Zalpuri Banner"
                        className="hero-banner-img"
                    />
                </div>
                <div className="hero-avatar-container">
                    <div className="hero-avatar">
                        <img
                            src="https://github.com/sakshamzalpuri.png"
                            alt="Saksham Zalpuri"
                            className="hero-avatar-img"
                        />
                    </div>
                    <span className="hero-status-dot" title="Available for work"></span>
                </div>
            </div>

            {/* Content Section */}
            <div className="hero-content">
                <h1 className="hero-intro-title">
                    Hi, I'm <span className="hero-highlight-name">Saksham</span>
                </h1>

                <h2 className="hero-subheadline">
                    A frontend web developer.
                </h2>

                <p className="hero-sub-subheadline">
                    I build modern, interactive web applications using{' '}
                    <span className="hero-tech-badge">
                        <span className="badge-ts">TS</span> TypeScript
                    </span>
                    ,{' '}
                    <span className="hero-tech-badge">
                        <span className="badge-react">{'\u269B'}</span> React
                    </span>
                    ,{' '}
                    <span className="hero-tech-badge">
                        <span className="badge-js">JS</span> JavaScript
                    </span>
                    , and{' '}
                    <span className="hero-tech-badge">
                        <span className="badge-tailwind">{'\u2248'}</span> Tailwind CSS
                    </span>
                    , with a strong emphasis on clean UI, <strong>Performance</strong>, and{' '}
                    <strong>User Experience</strong>.
                </p>

                {/* Call to Actions */}
                <div className="hero-btn-group">
                    <a
                        href="https://docs.google.com/document/d/1CIhU7zXEM-Kl9UB-M_kYhtqjY1wKsGlov2NVCRe97h4/export?format=pdf"
                        className="btn-clean-resume"
                        download="saksham-zalpuri-resume.pdf"
                    >
                        <FileText size={16} />
                        Resume / CV
                    </a>

                    <a href="#contact" className="btn-get-in-touch">
                        <Send size={15} />
                        Get in touch
                    </a>
                </div>

                {/* Social / Contact Icons */}
                <div className="hero-social-row" aria-label="Social and contact links">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hero-social-icon"
                    >
                        <LinkedInIcon size={20} />
                    </a>
                    <a
                        href="https://github.com/sakshamzalpuri"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hero-social-icon"
                    >
                        <GithubIcon size={20} />
                    </a>
                    <a
                        href="mailto:email@sakshamzalpuri.com"
                        aria-label="Email"
                        className="hero-social-icon"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
