const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git', 'GitHub', 'Responsive Design'];

export default function Expertise() {
  return (
    <section className="expertise-section" id="skills">
      <div className="container">
        <div className="expertise-heading">
          <h2>EXPERTISE<span>.</span></h2>
          <p>CORE PROFICIENCIES</p>
        </div>

        <div className="expertise-grid">
          {skills.map((skill, index) => (
            <div className="expertise-card" key={skill}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

