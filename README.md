# Vidi Septian Hadiwibowo — Personal Portfolio

A responsive single-page portfolio built from scratch with **HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools.

**Live site:** https://vidiwebdev.github.io/portofolio/

I'm using this project to learn frontend development properly: planning the structure, writing the markup, styling with CSS variables, and adding small interactions with JavaScript.

> **Status:** Phase 1 (MVP) complete and deployed on GitHub Pages. Phase 2 (real projects and certificates) is next.

---

## Features

- **Single-page layout** with smooth scrolling between About, Skills, Projects, and Contact
- **Dark / light mode**
  - saved in `localStorage`, so the choice survives a refresh
  - follows the operating system preference on the first visit
  - applied before the first paint, so there is no flash of the wrong theme
- **Fully responsive** — tested at mobile (390px) and desktop (1440px)
- **Subtle motion** — staggered hero entrance, scroll reveal, hover states
- **Accessibility basics** — semantic landmarks, visible focus outlines, `aria-label` on icon buttons, and support for `prefers-reduced-motion`
- **Working contact links** — Gmail compose button, `mailto:` fallback, GitHub, and Instagram

## Tech stack

| Layer | Tools |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 — custom properties, Flexbox, Grid, `clamp()` |
| Behavior | Vanilla JavaScript — DOM, events, `localStorage`, `matchMedia` |
| Hosting | GitHub Pages |

No npm, no bundler, no framework. Open the file and it runs.

## Project structure

```text
portofolio/
├── index.html          # all page content and structure
├── css/
│   └── style.css       # design tokens, layout, responsive rules
├── js/
│   └── script.js       # theme toggle, scroll reveal, header shadow
├── prd.md              # product requirements and roadmap
└── README.md
```

## Run it locally

```bash
git clone https://github.com/VidiWebDev/portofolio.git
cd portofolio
```

Then choose one:

1. **Recommended:** open the folder in VS Code, right-click `index.html`, and choose **Open with Live Server**. The page reloads automatically when you save.
2. Or simply double-click `index.html` to open it in a browser.

There is nothing to install.

## How it works

- **Theming:** every color is a CSS variable defined in `:root`. Dark mode overrides those variables under `[data-theme="dark"]`, and JavaScript only adds or removes that one attribute on `<html>`.
- **Scroll reveal:** `script.js` checks each element's position with `getBoundingClientRect()` and adds `.is-visible` when it reaches the viewport.
- **No flash on reload:** the script is loaded in `<head>` without `defer`, so the saved theme is applied before the page is painted.

## Deployment

The site is hosted on **GitHub Pages**:

- Repository: https://github.com/VidiWebDev/portofolio
- Live URL: https://vidiwebdev.github.io/portofolio/

Every push to the `main` branch triggers an automatic rebuild. No manual deploy step is needed.

## What I learned

- Structuring a page with semantic HTML instead of a pile of `<div>`s
- Using CSS custom properties to keep a design system consistent
- Building responsive layouts with Grid, Flexbox, and `clamp()`
- How a small amount of JavaScript can control the whole visual theme
- Debugging with browser DevTools and checking layouts at multiple screen widths
- Deploying a static site with Git and GitHub Pages
- That planning first (even a short PRD) saves time later

## Roadmap

- [x] Basic HTML structure — hero, about, skills, projects, contact
- [x] Responsive CSS with a clean light/dark theme
- [x] Dark mode with `localStorage`
- [x] GitHub, email, and Instagram links
- [x] Deploy to GitHub Pages
- [ ] Add 1–2 real practice projects to the showcase
- [ ] Add certificates and achievements
- [ ] Add a LinkedIn profile link
- [ ] Add a contact form (optional)
- [ ] Migrate to React or Next.js (long term)
- [ ] Add a personal blog (long term)

## Contact

- **Email:** [vidi.septian13@gmail.com](mailto:vidi.septian13@gmail.com)
- **GitHub:** [github.com/VidiWebDev](https://github.com/VidiWebDev)
- **Instagram:** [@vditian_](https://www.instagram.com/vditian_/)

## A note on AI assistance

This project is a learning exercise built with guidance from an AI coding assistant. The initial plan started from an AI-assisted PRD template, which I reviewed and adjusted. I made the content and design decisions, tested the result in the browser, and I'm working toward understanding every part of the code. I would rather be transparent about that than pretend otherwise.

## License

Personal project. You are welcome to read the code and learn from it. Please do not reuse the personal content — name, bio, and contact details.
