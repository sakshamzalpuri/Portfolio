export default function Biography() {
  return (
    <section className="biography-section container" id="about">
      <div className="biography-heading">
        <span className="biography-number">01</span>
        <div className="eyebrow biography-eyebrow">BIOGRAPHY</div>
      </div>

      <div className="biography-grid">
        <div className="biography-main">
          <h2>â€œI build interfaces<br />that are fast, <em>intuitive</em><br />and accessible.â€</h2>
          <p>I'm a frontend developer focused on building responsive, accessible, and performant web applications. I enjoy turning ideas into production-ready products while continuously improving my skills in React and full-stack development.</p>
        </div>

        <div className="biography-details">
          <div>
            <strong>LOCATION</strong>
            <span>Jammu, India</span>
          </div>
          <div>
            <strong>CURRENT FOCUS</strong>
            <span>React Applications<br />Full Stack Development<br />Performance Optimization</span>
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

