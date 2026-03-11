# Xander Portfolio

Personal portfolio site built with Next.js 15, React 19, and Tailwind CSS.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run check
```

The local dev server defaults to `http://localhost:3000`. Pass `-- --port 3001` if you want it on `3001`.

## Contact Form Setup

The contact form now submits through the server route at `/api/contact`. It requires EmailJS credentials in environment variables instead of shipping provider identifiers in the browser bundle.

1. Copy `.env.example` to `.env.local`.
2. Fill in your EmailJS service ID, template ID, public key, private key, and destination email.
3. Restart the dev server.

If the variables are missing, the form will return a clear configuration error instead of silently failing.

## Quality Gates

- `npm run lint` must pass.
- `npm run build` must pass.
- `npm run check` runs both commands together.

## Notes

- Remote images are allowlisted in [next.config.ts](/Users/xander/Documents/Projects/Experiment/xander-portfolio/next.config.ts).
- Portfolio content is centralized in [app/lib/site-content.ts](/Users/xander/Documents/Projects/Experiment/xander-portfolio/app/lib/site-content.ts) to keep navigation and section data in sync.
