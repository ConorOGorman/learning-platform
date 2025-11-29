# learning-platform

This repository contains two related things used during early development:

- PartsHub landing page (a small Vite + React + TypeScript demo). See the `src/` folder for the landing page implementation.
- Learning platform notes and educational content for the startup.

PartsHub — Landing (local dev)
--------------------------------

This project includes a Vite + React + TypeScript demo of a PartsHub landing page (light theme).

Quick start (run the landing page locally)

```bash
cd "/Users/conorogorman/Downloads/Landing Page Test"
npm install
npm run dev

# In another terminal (optional):
# npx -y lighthouse http://localhost:5173 --only-categories=accessibility,performance,seo
```

Helpful scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npx tsc --noEmit` — run TypeScript typecheck

Notes

- The demo emphasizes accessible HTML structure, responsive layout, and a light visual theme. The `FinalCtaSection` contains a simple client-side validation and accessible status messages.
- For full automated Lighthouse reporting you must run the Lighthouse command locally (requires Chrome/Chromium).
