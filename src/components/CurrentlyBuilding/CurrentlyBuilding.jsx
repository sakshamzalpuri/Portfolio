import { ArrowUpRight } from 'lucide-react';

export default function CurrentlyBuilding() {
  return (
    <section className="currently-building-section container">
      <div className="currently-building-card">
        <div>
          <span className="currently-building-label">CURRENTLY BUILDING</span>
          <h2>DevFlow</h2>
          <p>
            Job application tracker built with React, Node.js, Express,
            Prisma, and PostgreSQL.
          </p>
        </div>
        <a href="#work" className="currently-building-button">
          VIEW PROJECT <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
