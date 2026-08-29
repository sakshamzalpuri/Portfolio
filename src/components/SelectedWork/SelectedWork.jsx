import { ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import './SelectedWork.css';

const projects = [
  {
    id: '01',
    title: 'GitHub Profile Finder',
    category: 'GitHub Profile Search App',
    description:
      'Search GitHub users, view real-time profile analytics, repositories, developer insights, followers, and search history.',
    status: 'Live',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub API'],
    extraTech: null,
    previewTone: 'blue',
    links: {
      live: 'https://sakshamzalpuri.github.io/github-user-finder/',
      source: 'https://github.com/sakshamzalpuri/github-user-finder',
    },
  },
];

export default function SelectedWork() {
  return (
    <section className="selected-work-section container" id="work">
      {/* Header Row matching Reference */}
      <div className="projects-header-row">
        <div className="section-heading-wrapper">
          <span className="section-overline">Featured</span>
          <h2 className="section-heading-title">Projects</h2>
        </div>

        <a
          href="https://github.com/sakshamzalpuri?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-github-link"
        >
          View All on GitHub <ArrowUpRight size={15} />
        </a>
      </div>

      {/* Grid of Projects (Only Saksham's actual projects) */}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* View All Button at bottom */}
      <div className="projects-footer-cta">
        <a
          href="https://github.com/sakshamzalpuri?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-view-all-projects"
        >
          View All <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
