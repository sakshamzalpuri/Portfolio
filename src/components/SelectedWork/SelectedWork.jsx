import ProjectCard from '../SelectedWork/ProjectCard';

const projects = [
  {
    id: '01',
    title: 'GitHub Profile Finder',
    category: 'GitHub Profile Search App',
    description: 'Search GitHub users, view profile details, repositories, developer insights, and search history.',
    status: 'Live',
    techStack: ['HTML', 'CSS'],
    extraTech: '+3',
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
      <div className="section-heading-wrapper">
        <span className="section-overline">
          Featured work
        </span>
        <h2 className="section-heading-title">
          Projects
        </h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
