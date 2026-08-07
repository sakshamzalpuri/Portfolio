export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a className="logo" href="#top">SZ<span className="dot">.</span></a>
        <small>Â© 2024 Saksham Zalpuri.</small>
        <nav aria-label="Footer navigation">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="mailto:email@sakshamzalpuri.com">EMAIL</a>
          <a href="https://docs.google.com/document/d/1YjW_GTyVRB6c9gOVwKBMus0aGISPk6FGzzg7xHsUg_0/export?format=pdf" download="saksham-zalpuri-resume.pdf">RESUME</a>
        </nav>
      </div>
    </footer>
  );
}

