import { ArrowUpRight } from 'lucide-react';
import heroBanner from "../../../assets/hero.jpg";

export default function Hero() {
    return (
        <main>
            <section className="hero-section container">
                <div className="hero-top-grid">
                    <div className="hero-main">
                        <div className="eyebrow">
                            <span className="eyebrow-line"></span>
                            FRONTEND DEVELOPER
                        </div>
                        <h1 className="hero-title">
                            SAKSHAM <span className="text-lime">ZALPURI</span>
                        </h1>
                        <p className="hero-subtitle">
                            Building fast, responsive web applications with React, JavaScript, and modern frontend technologies.
                        </p>
                        <div className="hero-cta-group">
                            <div className="hero-actions">
                                <a href="https://docs.google.com/document/d/1YjW_GTyVRB6c9gOVwKBMus0aGISPk6FGzzg7xHsUg_0/export?format=pdf" className="btn-primary" download="saksham-zalpuri-resume.pdf">
                                    RESUME <ArrowUpRight size={18} />
                                </a>
                                <a href="#work" className="btn-secondary">
                                    VIEW WORK <ArrowUpRight size={18} />
                                </a>
                            </div>
                            <p className="availability-text">
                                <span className="availability-status"><span className="availability-dot"></span>Available for Full-time</span>
                                <span>Pune, India</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero-banner-card">
                    <img src={heroBanner} alt="Saksham Zalpuri Workspace Showcase" className="hero-banner-img" />
                </div>
            </section>
        </main>
    );
}
