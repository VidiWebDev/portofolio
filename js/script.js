/* ============================================================
   script.js — behavior for the portfolio

   1. Dark / light mode (saved in localStorage)
   2. Header shadow after scrolling
   3. Fade-in animation when sections enter the screen
   4. Footer year
   ============================================================ */

const THEME_KEY = "portfolio-theme";
const root = document.documentElement;

/* Tell CSS that JavaScript is available.
   The fade-in animation only hides elements when this class exists,
   so if the script ever fails, all content stays visible. */
root.classList.add("js");

/* ------------------------------------------------------------
   DARK / LIGHT MODE
   CSS already has two palettes. This script only adds or removes
   data-theme="dark" on <html>.
   ------------------------------------------------------------ */
function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);

  if (saved === "dark" || saved === "light") {
    return saved;
  }

  // No saved choice: follow the operating system setting.
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
}

function updateToggleButton(theme) {
  const button = document.querySelector("#theme-toggle");
  if (!button) return;

  const isDark = theme === "dark";
  button.textContent = isDark ? "☀️" : "🌙";
  button.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

/* Runs immediately, before the page is painted.
   That is why the script is loaded in the <head> without "defer":
   no flash of the wrong theme on reload. */
const startingTheme = getPreferredTheme();
applyTheme(startingTheme);

/* ------------------------------------------------------------
   SCROLL REVEAL
   When an element's top edge is inside the viewport, we add
   .is-visible. This also covers the case where a visitor jumps
   straight to #contact: everything above is revealed too.
   ------------------------------------------------------------ */
function initReveal() {
  const items = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!items.length) return;

  function revealVisibleItems() {
    // 0.88 instead of 1.0 reveals items slightly before the very bottom
    const triggerLine = window.innerHeight * 0.88;

    items.forEach((item) => {
      if (item.classList.contains("is-visible")) return;

      // top < triggerLine means the element has reached the screen
      if (item.getBoundingClientRect().top < triggerLine) {
        item.classList.add("is-visible");
      }
    });
  }

  revealVisibleItems(); // items already on screen at page load
  window.addEventListener("scroll", revealVisibleItems, { passive: true });
  window.addEventListener("resize", revealVisibleItems);
}

/* ------------------------------------------------------------
   HEADER SHADOW
   ------------------------------------------------------------ */
function initHeaderShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  update(); // correct state on reload
  window.addEventListener("scroll", update, { passive: true });
}

/* ------------------------------------------------------------
   RUN AFTER THE HTML IS READY
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  updateToggleButton(startingTheme);

  const button = document.querySelector("#theme-toggle");

  button.addEventListener("click", () => {
    const isDarkNow = root.hasAttribute("data-theme");
    const nextTheme = isDarkNow ? "light" : "dark";

    applyTheme(nextTheme);
    updateToggleButton(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
  });

  // Footer year: always current, no manual editing needed.
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  initReveal();
  initHeaderShadow();
});
