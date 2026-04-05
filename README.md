# DigiTools Platform

A single-page marketing and shop-style UI for digital tools: hero, stats, product catalog, cart, pricing, and footer. Built with **React**, **Vite**, **Tailwind CSS**, **DaisyUI**, **Font Awesome**, and **react-toastify** for feedback.

## Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

## Setup

```bash
npm install
```

## Scripts

| Command           | Description                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Project structure

- `src/App.jsx` — App state: products vs cart view, cart items, checkout, and navigation helpers.
- `src/components/layout/` — Navbar, Banner, Stats, Steps, Pricing, Footer.
- `src/components/shop/` — Product grid, cards, cart panel, section toggle.
- `src/data/products.json` — Product catalog data.
- `src/utils/scrollToSection.js` — Smooth scroll to in-page section IDs.

## Features

- **Products / Cart** — Toggle between catalog and cart; add and remove items; checkout clears the cart and shows a success toast.
- **Navigation** — Header links and logo scroll to sections (`#products`, `#features`, `#pricing`, `#testimonials`, `#faq`, `#top`). The cart control opens the cart view and scrolls to the shop block.
- **CTAs** — Hero and footer actions can jump to products or pricing; pricing plan buttons show demo toasts (enterprise shows a contact-style message).
- **Footer** — Links that map to on-page sections scroll; other links show informational toasts; social icons open external sites in a new tab.

## Tech stack

- React 19, Vite 8
- Tailwind CSS 4, DaisyUI
- Font Awesome (React)
- react-toastify

## License

Private project — adjust as needed for your course or organization.
