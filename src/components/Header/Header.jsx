import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'WORK', href: '#work' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionElements = NAV_LINKS.map((link) => ({
        id: link.href,
        el: document.querySelector(link.href),
      })).filter((item) => item.el !== null);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        const rect = el.getBoundingClientRect();
        const topOffset = rect.top + window.scrollY - 140;
        if (scrollY >= topOffset) {
          setActiveSection(id);
          return;
        }
      }
      if (scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-content">
        {/* Brand Logo */}
        <a href="#top" className="logo">
          SZ<span className="dot">.</span>
        </a>

        {/* Navigation Links with active indicator */}
        <nav className="nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {isOpen && (
          <nav className="mobile-nav">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
