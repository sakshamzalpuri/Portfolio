import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <a className="footer-logo" href="#top">
            SZ<span className="dot">.</span>
          </a>
          <span className="footer-tagline">Crafted with React &amp; Tailwind</span>
        </div>

        <div className="footer-right">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Saksham Zalpuri. All rights reserved.
          </span>
          <span className="footer-location">Pune, India</span>
        </div>
      </div>
    </footer>
  );
}
