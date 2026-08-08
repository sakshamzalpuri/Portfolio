const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git', 'GitHub', 'Responsive Design'];

export default function Expertise() {
  return (
    <section className="expertise-section" id="skills">
      <div className="container">
        <div className="section-heading-wrapper">
          <span className="section-overline">
            Expertise
          </span>
          <h2 className="section-heading-title">
            Tech Stack &amp; Tools
          </h2>
        </div>

        <div className="expertise-grid">
          {skills.map((skill) => (
            <div className="expertise-card" key={skill}>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

