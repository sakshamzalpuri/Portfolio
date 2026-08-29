import { useState } from 'react';
import { Mail, Check, Copy } from 'lucide-react';
import './contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'email@sakshamzalpuri.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-section container" id="contact">
      <div className="section-heading-wrapper">
        <span className="section-overline">Contact</span>
        <h2 className="section-heading-title">Get In Touch</h2>
      </div>

      <div className="contact-card">
        <div className="contact-card-main">
          <h3 className="contact-prompt">Let's build something together.</h3>
          <p className="contact-subtext">
            Whether you have a project in mind, opportunities to discuss, or just
            want to connect, feel free to reach out. I'm always open to new ideas
            and conversations.
          </p>

          <div className="contact-actions-row">
            <a href={`mailto:${email}`} className="btn-contact-primary">
              <Mail size={16} />
              Send Email
            </a>

            <button
              type="button"
              className="btn-contact-copy"
              onClick={handleCopy}
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green" />
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  {email}
                </>
              )}
            </button>
          </div>
        </div>

        <div className="contact-status-bar">
          <span className="status-live-dot"></span>
          <span className="status-text">Available for frontend roles &amp; freelance projects</span>
        </div>
      </div>
    </section>
  );
}