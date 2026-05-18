# The Light Years CDC — Claude Code Context

## Project Overview
Website for **The Light Years CDC**, a child development center in Jakarta offering therapy, counselling, and psychological assessments for children, teens, and adults. Two locations: Tebet (Jakarta) and Pagedangan (Tangerang).

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: JavaScript (no TypeScript)
- **Styling**: Tailwind CSS
- **Fonts**: Montserrat (400, 500, 600, 700, 800) + Inter (400, 500) via Google Fonts

## Project Structure
```
src/
  app/
    page.js          ← Main landing page (single scroll)
    layout.js        ← Root layout, fonts loaded here
    globals.css      ← Global styles
  components/
    Navbar.jsx
    Hero.jsx
    WhyChooseUs.jsx
    ServicesCarousel.jsx   ← Reusable for both Children + Teens & Adults
    Facilities.jsx
    MeetTheTeam.jsx
    WhatWeDo.jsx
    Testimonials.jsx
    Footer.jsx
```

## Brand Tokens
```js
colors: {
  purple:     '#604f94',
  purpleDark: '#3a2e69',
  orange:     '#e86500',
  brown:      '#734424',
  gold:       '#ffd972',
  bgLight:    '#f5f5f5',
  bgFooter:   '#e2e1ef',
}
```

## Key Behaviors
- **Book Now buttons** → open WhatsApp in new tab with pre-filled message per service
  - Base URL: `https://wa.me/6285186055162?text=`
  - Each service has a unique encoded message (see DESIGN_BRIEF.md)
- **Client Login** → removed from design, do not implement
- **Carousels** → show 3 cards at a time, navigate 1 card per arrow click, loop back to start
- **Navbar** → sticky after scrolling past hero, white + backdrop-blur, pill shape
- **Nav links** → smooth scroll to section anchors

## Image Assets
> ⚠️ All image URLs are from Figma MCP API and expire in 7 days from project creation.
> Replace with permanently hosted images before going live.
> Store final images in `/public/images/`.

## Design Reference
Full design spec, all image URLs, service card data, and team member details are in `DESIGN_BRIEF.md`.

## Commands
```bash
npm run dev      # local dev at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

## Do Not
- Do not add TypeScript
- Do not add a backend or database (static site for now)
- Do not use `<img>` raw tags — use `next/image` with `unoptimized` prop for external Figma URLs
- Do not add authentication or client portal (future scope)
- Do not change the brand colors without being asked
