document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const scrollProgress = document.getElementById("scroll-progress");
  scrollProgress.style.width = scrollPercent + "%";
})

const menuToggle = document.getElementById("menu-toggle")
const sideMenu = document.getElementById("side-menu")
const menuOverlay = document.getElementById("menu-overlay")

function closeMenu() {
  document.body.classList.remove("menu-open")
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "false")
  if (sideMenu) sideMenu.setAttribute("aria-hidden", "true")
}

function openMenu() {
  document.body.classList.add("menu-open")
  if (menuToggle) menuToggle.setAttribute("aria-expanded", "true")
  if (sideMenu) sideMenu.setAttribute("aria-hidden", "false")
}

if (menuToggle && sideMenu && menuOverlay) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("menu-open")
    if (isOpen) {
      closeMenu()
      return
    }

    openMenu()
  })

  menuOverlay.addEventListener("click", closeMenu)

  sideMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu()
  })
}

const projectCards = [
  {
    number: "01",
    title: "GitHub Profile Finder",
    role: "Frontend Developer",
    description:
      "A web application that interacts with the GitHub REST API to search for users and display their profile details, repositories, and statistics in a clean and responsive interface.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub API"],
    notes: ["API Integration", "Responsive UI"],
    link: "https://sakshamzalpuri.github.io/github-user-finder/",
  }
]

function renderProjects(mountEl, projects) {
  mountEl.innerHTML = projects
    .map(
      (project) => {
        const isExternal = project.link.startsWith("http")

        return `
      <article class="project-card">
        <div class="project-main">
          <span class="project-index">${project.number} —</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-role">${project.role}</p>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags
            .map((tag) => `<span class="project-tag">${tag}</span>`)
            .join("")}
          </div>
        </div>
        <div class="project-aside">
          <a class="project-action" href="${project.link}"${isExternal ? ' target="_blank" rel="noreferrer"' : ""} aria-label="Open ${project.title}">
            <i class="fas fa-arrow-right" aria-hidden="true"></i>
          </a>
          <div class="project-notes">
            ${project.notes
            .map((note) => `<span>${note}</span>`)
            .join("")}
          </div>
        </div>
      </article>`
      }
    )
    .join("")
}

const projectsMount = document.getElementById("projects-grid")
if (projectsMount) renderProjects(projectsMount, projectCards)
