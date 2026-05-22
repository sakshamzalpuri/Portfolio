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
    title: "Full-Stack E-Commerce Platform",
    role: "AI-powered customer support",
    description:
      "E-commerce platform with AI chatbot for product, stock, and policy queries. REST APIs for products, auth, and cart. Responsive frontend with dynamic LLM workflows.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    notes: ["AI chatbot · REST APIs", "Dynamic LLM prompts"],
    link: "#projects",
  },
  {
    number: "02",
    title: "AI-Powered Interview Prep Platform",
    role: "Mock interview & feedback",
    description:
      "Interview prep platform with AI-generated questions, mock interviews, and automated feedback. Backend APIs for sessions and progress tracking. Responsive UI.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    notes: ["LLM feedback · Scoring workflows"],
    link: "#projects",
  },
  {
    number: "03",
    title: "SmartForm – Multi-Step Registration UI",
    role: "Multi-step form UI",
    description:
      "4-step registration flow with real-time validation, live error feedback, dynamic topic selection, and auto-progress logic. Mobile-first design with smooth transitions.",
    tags: ["HTML", "CSS", "JavaScript"],
    notes: ["Step validation · Modular JS", "Mobile-first · Smooth UX"],
    link: "#projects",
  },
  {
    number: "04",
    title: "Expense Tracker",
    role: "Client-side finance tool",
    description:
      "Browser-based expense manager with full CRUD, localStorage persistence, and dynamic balance calculation using array methods.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    notes: ["CRUD · reduce()", "Form validation"],
    link: "#projects",
  },
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
            <i class="fas fa-arrow-up-right-long" aria-hidden="true"></i>
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
