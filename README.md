# Saksham Zalpuri — Portfolio

My personal portfolio site. Dark theme, clean layout, built to actually show off my work instead of just listing it.

Live-ish stack: React + Vite, nothing fancy, just fast to build and fast to load.

## What's in it

- Header that collapses into a mobile menu on smaller screens
- Hero section intro-ing me as a frontend dev
- Layout that doesn't break between desktop, tablet, and phone
- Resume download (pulls straight from a Google Docs export as PDF)
- "View Work" CTA that jumps to my projects
- A workspace photo with a grayscale-to-color hover effect
- Design system built around a lime accent color + CSS variables, so theming isn't a pain
- Tried to keep the HTML semantic and accessible — labeled inputs, proper tags, etc.

## Stack

- React
- Vite
- JavaScript
- CSS3
- Lucide React (icons)
- Fonts: Geist + Plus Jakarta Sans

## Structure

```text
my-portfolio/
├── assets/
│   ├── banner.svg
│   └── hero.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Hero.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Running it locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## License

MIT — see [LICENSE](LICENSE).

---

Built by **Saksham Zalpuri**