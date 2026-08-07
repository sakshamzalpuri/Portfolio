import { Code, SquareArrowOutUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'DevFlow',
    status: 'Status: \u{1F6A7} Work in Progress',
    minimal: true,
    image: null,
    links: { live: '#', source: '#' },
  },
  {
    id: '02',
    title: 'GitHub Profile Finder',
    category: 'GITHUB PROFILE SEARCH APPLICATION',
    challenge: 'Make GitHub profile data easy to search, scan, and understand in one place.',
    outcome: 'GitHub API integration with LocalStorage search history, loading and error states, input validation, and responsive design.',
    techStack: ['HTML', 'CSS', 'JAVASCRIPT', 'GITHUB API', 'LOCALSTORAGE'],
    image: null,
    links: {
      live: 'https://sakshamzalpuri.github.io/github-user-finder/',
      source: 'https://github.com/sakshamzalpuri/github-user-finder',
    },
  },
];

export default function SelectedWork() {
  return (
    <section className="selected-work-section container" id="work">
      <div className="selected-work-heading"><span className="selected-work-number">02</span><div className="selected-work-eyebrow eyebrow">SELECTED WORK</div></div>
      {projects.map((project) => (
        <article className="project-card" key={project.id}>
          <div className="project-content">
            <small>PROJECT // {project.id}</small>
            <h2>{project.title}</h2>
            {project.minimal ? <span className="project-status">{project.status}</span> : <p>{project.category}</p>}
          </div>
          {!project.minimal && <div className="project-icons" aria-label={`${project.title} links`}><a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live`}><SquareArrowOutUpRight size={22} strokeWidth={1.5} /></a><a href={project.links.source} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`}><Code size={22} strokeWidth={1.5} /></a></div>}
          {!project.minimal && <div className="project-details"><div className="project-detail-columns"><div><strong>THE CHALLENGE</strong><p>{project.challenge}</p></div><div><strong>OUTCOME</strong><p>{project.outcome}</p></div></div><div className="project-tags">{project.techStack.map((technology) => <span key={technology}>{technology}</span>)}</div></div>}
        </article>
      ))}
    </section>
  );
}
