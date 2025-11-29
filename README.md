# PartsHub — Landing (local dev)

This is a small Vite + React + TypeScript demo of a PartsHub landing page (light theme).

Quick start

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
