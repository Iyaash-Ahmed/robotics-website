# Robotics Technology 🤖

A multi-page, responsive website about robotics — its advantages, real-world uses, types of robots, and history. Built with plain HTML, CSS, and JavaScript.

**🔗 Live site:** https://iyaash-ahmed.github.io/robotics-website/

## About

This is a static informational website exploring the world of robotics. It was built as a front-end project to practice responsive layouts, reusable components, and interactive UI with vanilla JavaScript — no frameworks.

## Features

- **Fully responsive** layout with a shared mobile hamburger navigation
- **Shared navigation** component (`nav.css` / `nav.js`) used across every page for consistency
- **Design tokens** — brand colors centralized as CSS variables in `base.css`
- Image carousel (Swiper), animated stat counters, hover effects, and a card-tilt effect
- Accessible markup — descriptive `alt` text, labelled form fields, and keyboard-operable menu

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — intro, advantages, uses, history and a join form |
| `sub/about.html` | About robotics + featured robots |
| `sub/uses.html` | Uses of robotics across various fields |
| `sub/types.html` | Types and properties of robots |
| `sub/contact.html` | Contact page with a message form |

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, custom properties, media queries)
- Vanilla JavaScript
- [Swiper](https://swiperjs.com/) for the image slider
- [Font Awesome](https://fontawesome.com/) for icons

## Running Locally

No build step required — it's a static site. Just clone and open `index.html`:

```bash
git clone https://github.com/Iyaash-Ahmed/robotics-website.git
cd robotics-website
# then open index.html in your browser
```

## Author

**Iyaash Ahmed** — Amox Dev

---

_This project was originally created as a Dynamic HTML college assignment and has since been refactored for consistency and accessibility._
