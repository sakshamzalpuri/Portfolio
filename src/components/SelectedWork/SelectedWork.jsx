import { ArrowUpRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import './SelectedWork.css';

const projects = [
  {
    id: '01',
    title: 'DevLens',
    category: 'GitHub Developer Analytics',
    description:
      'Explore GitHub profiles and repositories with API-powered search, recent search history, loading feedback, and error handling.',
    status: 'Live',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub REST API'],
    extraTech: null,
    previewTone: 'blue',
    links: {
      live: 'https://sakshamzalpuri.github.io/DevLens/',
      source: 'https://github.com/sakshamzalpuri/DevLens',
    },
  },
];

export default function SelectedWork() {
  return (
    <section className="selected-work-section container" id="work">
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
          More on GitHub <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
