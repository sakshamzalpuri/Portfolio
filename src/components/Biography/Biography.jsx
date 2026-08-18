export default function Biography() {
  return (
    <section className="biography-section container" id="about">
      <div className="section-heading-wrapper">
        <span className="section-overline">
          About
        </span>
        <h2 className="section-heading-title">
          About me
        </h2>
      </div>

      <div className="biography-grid">
        <div className="biography-main">
          <h2>"I build interfaces<br />that are fast, <em>intuitive</em><br />and accessible."</h2>
          <p>I'm a frontend developer focused on building responsive, accessible, and performant web applications. I enjoy turning ideas into production-ready products while continuously improving my skills in React and full-stack development.</p>
        </div>

        <div className="biography-details">
          <div>
            <strong>LOCATION</strong>
            <span>Jammu, India</span>
          </div>
          <div>
            <strong>CURRENT FOCUS</strong>
            <span>React Applications<br />API Integration & State Management<br />Performance Optimization</span>
          </div>
          <div>
            <strong>INTERESTS</strong>
            <span>Accessibility, UI systems,<br />and developer tools.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

