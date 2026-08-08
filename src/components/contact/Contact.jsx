import { ArrowUpRight } from 'lucide-react';

const contactLinks = [
  { label: 'EMAIL', href: 'mailto:email@sakshamzalpuri.com' },
  { label: 'GITHUB', href: 'https://github.com/sakshamzalpuri' },
  { label: 'LINKEDIN', href: 'https://linkedin.com' },
  {
    label: 'RESUME',
    href: 'https://docs.google.com/document/d/1YjW_GTyVRB6c9gOVwKBMus0aGISPk6FGzzg7xHsUg_0/export?format=pdf',
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div className="contact-heading">
          <h2>Let's work<br />together<span>.</span></h2>
        </div>

        <div className="contact-content">
          <p>
            Open to frontend developer roles, internships, and project
            collaborations.
          </p>

          <div className="contact-links" aria-label="Contact links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                download={link.label === 'RESUME' ? 'saksham-zalpuri-resume.pdf' : undefined}>{link.label} <ArrowUpRight size={16} /></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}