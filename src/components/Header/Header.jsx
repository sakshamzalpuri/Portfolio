import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'WORK', href: '#work' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-content">
        {/* Brand Logo */}
        <a href="#" className="logo">
          SZ<span className="dot">.</span>
        </a>

        {/* Navigation Links */}
        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>
        {isOpen && (
          <nav className="mobile-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

    </header>
  );
}

