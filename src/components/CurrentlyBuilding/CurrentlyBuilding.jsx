import { ArrowUpRight } from 'lucide-react';

export default function CurrentlyBuilding() {
  return (
    <section className="currently-building-section container">
      <div className="currently-building-card">
        <div>
          <span className="currently-building-label">CURRENTLY BUILDING</span>
          <h2>Currently Building Projects</h2>
          <p>
            Building responsive web projects that focus on clean interfaces,
            reusable components, and practical user experiences.
          </p>
        </div>
        <a href="#work" className="currently-building-button">
          VIEW WORK <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
